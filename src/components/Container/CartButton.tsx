import {useNavigation} from '@react-navigation/core';
import React, {useContext} from 'react';
import {
    Image,
    StyleProp,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,StyleSheet
} from 'react-native';
import {BLUE_GREEN, ORANGE} from "../../utils/colorsConstant";
import {scale} from "../../utils/scale";
import {CafeDataMainProviderContext} from "../../ContentsProvider/CafeDataMainProvider";

interface CartButtonProps  {
    style?: StyleProp<ViewStyle>;

};

const CartButton: React.FC<CartButtonProps> = ({style}) => {
    const navigation = useNavigation();
    const {order,setOrder}=useContext<any>(CafeDataMainProviderContext);
   // const count=0;
//console.log("CartButton22",order.length);
    if (order.length === 0) {
        return null;
    }

    const onPress = () => {
       // navigation.navigate('OrderConfirm');
    };

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <Image
                style={styles.img}
                source={require('../../assets/images/button-cart.png')}
            />
            <View style={styles.lblContainer}>
                <Text style={styles.lbl}>{order.length}</Text>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 0,
        top: scale(45),
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {width: 40, height: 40, marginTop: -5, resizeMode: 'contain'},
    lbl: {
        color: BLUE_GREEN,
        fontSize: 10,
        lineHeight: 12,
    },
    lblContainer: {
        position: 'absolute',
        backgroundColor: ORANGE,
        color: BLUE_GREEN,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
});

export default React.memo(CartButton);
