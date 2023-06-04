import React, {useContext, useEffect, useMemo, useState} from 'react';
import {
    Dimensions, RegisteredStyle, SafeAreaView, SectionList, StyleSheet, Text,
    SectionListData, View, ViewStyle, Image, TouchableOpacity, StyleProp, ImageBackground
} from "react-native";

import {useNavigation} from "@react-navigation/native";
import {scale} from "../../../utils/scale";
import {BLUE_GREEN, BROWN, ORANGE, WHITE} from "../../../utils/colorsConstant";


interface IMenuContentsItem {
    _id:string,
    name:string;
  databook:string;
    description:string;

    summa?:number;
}
interface IProps {
    // data:any[],
    orderItem: IMenuContentsItem;

}

const OrderReestrLisyItem:React.FC<IProps>=({orderItem}:IProps)=>{
    const navigation = useNavigation();
    //  const[orderQty]=useState(0);


   // const {setToastMessage,setToastErrorMessage}=useContext<any>(ToastContext);

    //const orderQty=menuItem.qty||0;


    const onPress=()=>{


        const tonavigate='OrderDetail';
        // @ts-ignore
        navigation.navigate(tonavigate, {
            OrderItem: orderItem,
            isNew: true,
          //  onOrderCallBack: onOrderAddedCallback,
        });
    }

   return (
        <TouchableOpacity onPress={onPress} style={[styles.menuContainer]}>
            <View style={styles.item}>
                <View style={styles.row}>

                    <Text style={styles.md_hermes_regular}>{orderItem.name}</Text>
                    <Text style={styles.md_hermes_regular}> {orderItem.databook} </Text>

                </View>
                <View style={[styles.row, {marginTop: 2}]}>
                    {/* DESCRIPTION */}
                    <Text
                        numberOfLines={2}
                        style={[styles.sm_hermes_regular, {flex: 10}]}>
                        {orderItem.description}
                    </Text>
                    <Text
                        style={[
                            styles.sm_hermes_regular,{flex: 3, textAlign: 'right', fontSize: 20},
                        ]}>
                        {`${orderItem.summa},-`}
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
const OrderReestrLisyItemMemo= React.memo(OrderReestrLisyItem)
export default OrderReestrLisyItemMemo;