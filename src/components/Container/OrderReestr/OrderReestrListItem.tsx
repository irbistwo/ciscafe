import React, {useContext, useEffect, useMemo, useState} from 'react';
import {
    Dimensions, RegisteredStyle, SafeAreaView, SectionList, StyleSheet, Text,
    SectionListData, View, ViewStyle, Image, TouchableOpacity, StyleProp, ImageBackground
} from "react-native";

import {useNavigation} from "@react-navigation/native";
import {scale} from "../../../utils/scale";
import {ARROW_COLOR, BLUE_GREEN, BROWN, LINE_COLOR, ORANGE, WHITE} from "../../../utils/colorsConstant";
import {formatterR} from "../../../utils/utilsdate";


interface IMenuContentsItem {
    _id:string;
    name:string;
    restaurant:string,
  databook:string;
    description:string;
    date:string;
    summa?:number;
    totalAmount:number;
}
interface IProps {
    // data:any[],
    orderItem: IMenuContentsItem;

}

const OrderReestrLisyItem:React.FC<IProps>=({orderItem}:IProps)=>{
    const navigation = useNavigation();
    //  const[orderQty]=useState(0);
// @ts-ignore
    const date=new Date(orderItem.date);

   // const {setToastMessage,setToastErrorMessage}=useContext<any>(ToastContext);

    //const orderQty=menuItem.qty||0;


    const onPress=()=>{


        const tonavigate='OrderUserContents';
        // @ts-ignore
        navigation.navigate(tonavigate, {
            orderItem: orderItem,

          //  onOrderCallBack: onOrderAddedCallback,
        });
    }

   return (
       <TouchableOpacity
           onPress={onPress}
           style={[styles.row, styles.itemContainer]}>
           <Text style={[styles.xs_hermes_regular, {flex: 1}]}>
               {/*format(new Date(orderItem.date), 'MM.dd.yyyy') */}
               {/*formatterR(orderItem.date)*/}
               {formatterR(date)}
           </Text>

           <Text style={[styles.sm_hermes_regular, {flex: 2}]}>
               {orderItem.restaurant}
           </Text>

           <Text style={[styles.xs_hermes_regular, {marginLeft: 'auto'}]}>
               {/*`${order.pointsEarned ?? 0} ${locale.t('point')}` */}
               {orderItem.totalAmount}
           </Text>

           <Image
               source={require('../../../assets/images/down-arrow.png')}
               style={styles.rightArrow}
           />
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
    xs_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
    },
    xxs_sm_hermes_bold: {
        fontFamily: 'Hermes-Bold',
        fontSize: scale(8),
        color: WHITE,
    },
    content: {
        display: 'flex',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    itemContainer: {
        paddingVertical: 5,
        marginBottom: 25,
        borderBottomColor: LINE_COLOR,
        borderBottomWidth: 1,
    },
    rightArrow: {
        tintColor: ARROW_COLOR,
        width: scale(12),
        height: scale(12),
        marginLeft: 10,
        transform: [
            {
                rotate: '270deg',
            },
        ],
    },
})
const OrderReestrLisyItemMemo= React.memo(OrderReestrLisyItem)
export default OrderReestrLisyItemMemo;