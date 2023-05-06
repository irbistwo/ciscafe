import React, {useContext, useEffect, useState} from 'react';
import {
    Dimensions, RegisteredStyle, SafeAreaView, SectionList, StyleSheet, Text,
    SectionListData, View, ViewStyle, Image, TouchableOpacity, StyleProp, ImageBackground
} from "react-native";
import {StatusBar} from 'react-native';
import {scale} from "../../utils/scale";
import {BLUE_GREEN, BROWN, ORANGE, WHITE, YELLOW} from "../../utils/colorsConstant";
import {is_between} from "../../utils/utilsdate";
import {ToastContext} from "../Toast/Toast";
import {useNavigation} from "@react-navigation/native";

interface IMenuContentsItem {
    _id:string,
    name:string;
    price:number;
    isAvailable:boolean;
    description:string;
    start:string;
    end:string;
    qty?:number;
}
interface IProps {
    // data:any[],
    menuItem: IMenuContentsItem;

}

const MenuItemContentsControl:React.FC<IProps>=({menuItem}:IProps)=>{
    const navigation = useNavigation();
  //  const[orderQty]=useState(0);
    const is_aval=is_between(menuItem.start,menuItem.end);
    const[is_available]=useState(is_aval);
    const {setToastMessage,setToastErrorMessage}=useContext<any>(ToastContext);
    const orderQty=menuItem.qty||0;
    /* containerBackground: StyleProp<ViewStyle> = React.useMemo(
        () => ({backgroundColor: orderQty > 0 ? ORANGE : BROWN}),
        [orderQty],
    );
    */
    const containerBackground: StyleProp<ViewStyle>={backgroundColor: orderQty > 0 ? YELLOW : BROWN};
    const onOrderAddedCallback=(message:string)=>{
        setToastMessage(message);
    }
    const onPress=()=>{
        if(!is_aval) {setToastErrorMessage(`sorry ${menuItem.name} not available at this time`);
        return;
        }
        const tonavigate='MenuDetail';
        // @ts-ignore
        navigation.navigate(tonavigate, {
            menuItem,
            isNew: true,
            onOrderCallBack: onOrderAddedCallback,
        });
    }
    const quaantityViewItem=
        (
                <ImageBackground
                style={styles.icon}
                    source={require('../../assets/images/unselect.png')}
                >

            <Text style={[styles.sm_hermes_regular,{textAlign:"center"}]}>{`${orderQty} `}</Text>

                </ImageBackground>

            )



    return (
        <TouchableOpacity onPress={onPress} style={[styles.menuContainer,containerBackground]}>
        <View style={styles.item}>
            <View style={styles.row}>
                {orderQty > 0 && (quaantityViewItem) }
                <Text style={styles.md_hermes_regular}>{menuItem.name}</Text>

                {!is_available && (
                    <Text style={[styles.promoMenu, styles.xxs_sm_hermes_bold]}>
                        {/*locale.t('unavailable')*/}
                        {"unavailable"}
                    </Text>
                )}
            </View>
            <View style={[styles.row, {marginTop: 2}]}>
                {/* DESCRIPTION */}
                <Text
                    numberOfLines={2}
                    style={[styles.sm_hermes_regular, {flex: 10}]}>
                    {menuItem.description}
                </Text>
                <Text
                    style={[
                        styles.sm_hermes_regular,{flex: 3, textAlign: 'right', fontSize: 20},
                    ]}>
                    {`${menuItem.price},-`}
                </Text>
            </View>
        </View>
        </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    icon: {
        width: scale(34),
        height: scale(34),
        resizeMode: 'cover',
        //
        justifyContent: 'center',
        marginRight:3,
        backgroundColor:ORANGE
    },
    item: {
        backgroundColor: '#eae3d2',
        padding: 20,
        marginVertical: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: scale(5)
    },
    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(13),
        color: BLUE_GREEN,
        marginRight: scale(3),
    },
    md_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(22),
        color: BLUE_GREEN,



    },
    xxs_sm_hermes_bold: {
        fontFamily: 'Hermes-Bold',
        fontSize: scale(8),
        color: WHITE,
    },
    promoMenu: {
        backgroundColor: BLUE_GREEN,
        position: 'absolute',
        top: 0,
        right: 0,
        borderRadius: 5,
        opacity: 0.6,
        overflow: 'hidden',
        padding: 3,
    },

    menuContainer: {
        backgroundColor: BROWN,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,


    },
})
const MenuItemContentsControlMemo= React.memo(MenuItemContentsControl)
export default MenuItemContentsControlMemo;