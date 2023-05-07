import React, {useMemo, useRef} from 'react';
import {Text, TouchableOpacity, View, Animated, Dimensions, StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {BLUE_GREEN, LIGHT_BROWN, LINE_COLOR} from "../../utils/colorsConstant";
import Button from "../ButtonControl/Button";
import {scale} from "../../utils/scale";

interface IModificatorItem {
    _id:string;
    id:number;
    is_selected:boolean;
    name:string;
    additionalPrice: number;
    isDefault: boolean;
    limit?: number;
    qty: number;
}
interface IModificatorArray{
    _id: string;
    id:number;
    name: string;
    isMultiple: boolean;
    belongsto?: string;
    options:IModificatorItem[]

}
interface MenuExtra{
    _id: string;
    name: string;
    price: number;
    qty:number;
}
interface IMenuContentsItem {
    _id:string,
    name:string;
    price:number;
    isAvailable:boolean;
    description:string;
    start:string;
    end:string;
    qty?:number
    extras: MenuExtra[];
    attributes:  IModificatorArray[];
}

type OrderItemProps = {
    item: IMenuContentsItem;
};

const calculateAttributeTotal = (
    menuQty: number,
    attributes?: IModificatorArray[],
): number => {
    let attributesTotal = 0;

    if (!!attributes) {
        attributesTotal = attributes.reduce((total, attr) => {
            const attributeOptionTotal = attr.options.reduce((attrTotal, element) => {
                if (!element.is_selected) return attrTotal;

                return attrTotal + element.additionalPrice;
            }, 0);
            return total + attributeOptionTotal * menuQty;
        }, 0);
    }

    return attributesTotal;
};

 const calculateExtraTotal = (
    menuQty: number,
    extras?: MenuExtra[],
): number => {
    let extrasTotal = 0;
    if (!!extras) {
        extrasTotal = extras.reduce((total, xtra) => {
            if (!xtra.qty) {
                return total;
            }

            const xtraTotal = xtra.price * xtra.qty;
            return total + xtraTotal * menuQty;
        }, 0);
    }

    return extrasTotal;
};
const OrderItem: React.FC<OrderItemProps> = ({item}) => {
    const removeItemAnimation = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const navigation = useNavigation();
    const onEdit = () => {
        // @ts-ignore
        navigation.navigate('MenuDetail', {menu: item, isNew: false});
    };

    const onRemove = () => {
        Animated.parallel([
            Animated.timing(removeItemAnimation, {
                toValue: Dimensions.get('window').width * -1,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 150,
                useNativeDriver: false,
            }),
        ]).start(() => {
            // dispatch(removeFromCart({cartId: item.cartId}));
        });
    };

    const extras = useMemo(
        () => item.extras?.filter((x) => !!x.qty) ?? [],
        [item.extras],
    )

    const attributes = useMemo(() => {
        if (!item.attributes) return [];

        const selectedAttributes = item.attributes.filter((x) =>
            x.options.some((x) => x.is_selected/*x.isSelected*/),
        );

        const groomedSelectedAttributes = selectedAttributes.map((attr) => {
            const groomedAttr = {...attr};

            // remove options that is not selected
            groomedAttr.options = groomedAttr.options.filter(
                (x) => x.is_selected/*x.isSelected*/,
            );
            return groomedAttr;
        });

        return groomedSelectedAttributes ?? [];
    }, [item.attributes]);

    const total = useMemo(() => {
        const {
            qty,
            price,
            // isDiscounted,
            //type,
            //promoValue,
        } = item;

        // menu total
        let menuTotal = price * qty;

        // attribute total
        let attributesTotal = calculateAttributeTotal(qty, attributes);
        // extra total
        let extrasTotal = calculateExtraTotal(qty, extras);

        return menuTotal + attributesTotal + extrasTotal;
    }, [attributes, extras, item.qty]);


    return (
        <Animated.View
            style={[
                styles.orderItemContainer,
                {transform: [{translateX: removeItemAnimation}], opacity: fadeAnim},
            ]}>
            {/* NAME AND PRICE */}
            <View style={styles.row}>
                <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
                    <Text style={styles.titletext}>
                        {'—'}
                    </Text>
                </TouchableOpacity>
                <Text style={ styles.md_hermes_regular}>
                    { `${item.qty}x${item.name}`}
                </Text>
                {/*
                {item.isPromoMenu === true && item.isDiscounted === true && (
                    <Text style={[styles.promoMenu, textStyles.xxs_sm_hermes_bold]}>
                        {`${item.promoValue}${item.type === 'price' ? ' DKK' : '%'} mindre`}
                    </Text>
                )}
                */}
                <Text style={styles.sm_hermes_regular}>
                    {`${total.toLocaleString()}, -`}
                </Text>
            </View>

            {/* ATTRIBUTES */}
            {/*
            {attributes.length > 0 &&
                attributes.map((attr) => (
                    <OrderItemAttribute key={attr._id} attribute={attr}/>
                ))}
*/}
            {/* EXTRAS */}
            {/*
            {extras.length > 0 && (
                <View
                    style={[
                        styles.row,
                        {alignItems: 'flex-start', marginLeft: 20, marginTop: 20},
                    ]}>
                    <Text style={[styles.sm_hermes_regular, {flex: 1}]}>
                        {'extras'}
                    </Text>
                    <View style={{flex: 5}}>
                        {extras.map((xtra) => (
                            <OrderItemExtra key={xtra._id} extra={xtra}/>
                        ))}
                    </View>
                </View>
            )}
            */}
            {/* NOTES */}


            {/* EDIT BUTTON */}
            {// @ts-ignore
            <Button
                style={styles.button}
                onPress={onEdit}
                variant="outlined">
                <Text style={[styles.xs_hermes_regular]}>
                    {/*locale.t('edit') */ 'edit'}
                </Text>
            </Button>
            }
        </Animated.View>
    );

}
    const styles = StyleSheet.create({
        titletext:{
            fontSize: 11,
            color: BLUE_GREEN,
            fontWeight: 'bold',
            textAlign: 'center',
            textAlignVertical: 'center',
            lineHeight: 12,
},
        orderItemContainer: {
            width: '100%',
            borderBottomColor: LINE_COLOR,
            borderBottomWidth: 1,
            paddingBottom: 0,
            marginTop: scale(20),
        },
        button:{
            width: 60,
            borderRadius: 5,
            marginVertical: 10,
            paddingVertical: 5,
            marginLeft: 'auto',
            backgroundColor: LIGHT_BROWN,
        },

        row: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start'
        },
        xs_hermes_regular: {
            fontFamily: 'Hermes-Regular',
            fontSize: scale(11),
            color: BLUE_GREEN,
        },
        sm_hermes_regular: {
            fontFamily: 'Hermes-Regular',
            fontSize: scale(15),
            color: BLUE_GREEN,
        },
        md_hermes_regular: {
            fontFamily: 'Hermes-Regular',
            fontSize: scale(22),
            color: BLUE_GREEN,
            flex:1
           // alignItems:'stretch'
        },
        removeButton: {
            marginRight: 5,
            width: 20,
            height: 20,
            borderColor: BLUE_GREEN,
            borderWidth: 1,
            borderRadius: 20,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
        }
    })
export default OrderItem;