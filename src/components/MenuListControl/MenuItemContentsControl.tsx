import React, {useContext, useEffect, useState} from 'react';
import {
    Dimensions, RegisteredStyle, SafeAreaView, SectionList, StyleSheet, Text,
    SectionListData, View, ViewStyle, Image, TouchableOpacity
} from "react-native";
import {StatusBar} from 'react-native';
import {scale} from "../../utils/scale";
import {BLUE_GREEN, WHITE} from "../../utils/colorsConstant";
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
}
interface IProps {
    // data:any[],
    menuItem: IMenuContentsItem;

}

const MenuItemContentsControl:React.FC<IProps>=({menuItem}:IProps)=>{
    const navigation = useNavigation();
    const[orderQty]=useState(0);
    const is_aval=is_between(menuItem.start,menuItem.end);
    const[is_available]=useState(is_aval);
    const {setToastMessage,setToastErrorMessage}=useContext<any>(ToastContext);
    //console.log("menuitemcontents39",menuItem.name,menuItem.start,menuItem.end,is_available);

    const onPress=()=>{
        if(!is_aval) {setToastErrorMessage(`sorry ${menuItem.name} not available at this time`);
        return;
        }
        const tonavigate='MenuDetail';
        // @ts-ignore
        navigation.navigate(tonavigate, {
            menuItem,
            isNew: true,
           // onOrderCallBack: onOrderAddedCallback,
        });
    }
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.item}>
            <View style={styles.row}>
                {orderQty > 0 && ( <Text style={styles.sm_hermes_regular}>{`${orderQty}x `}</Text>)}
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
})
export default MenuItemContentsControl;