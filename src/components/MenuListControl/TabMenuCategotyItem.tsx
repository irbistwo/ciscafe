import React, { useEffect, useState } from 'react';
import {
    Dimensions, RegisteredStyle, SafeAreaView, SectionList, StyleSheet, Text,
    SectionListData, View, ViewStyle, Image, TouchableOpacity
} from "react-native";
import {StatusBar} from 'react-native';
import {scale} from "../../utils/scale";
import {BLUE_GREEN, DISABLED, ORANGE, WHITE} from "../../utils/colorsConstant";
interface ITabContentsItem {
    _id:string;
    name:string;
   start:number;
    end :number;
    index:number;
    isPromo:boolean;
    isAvailable:boolean;
}
interface IProps {
    // data:any[],
    tabItem: ITabContentsItem;
isSelected:boolean;
onPress: (index: number) => void;
}
const TabMenuCategotyItem:React.FC<IProps>=({tabItem,isSelected,onPress}:IProps)=>{
    //const[isSelected]=useState(false);
    return (
        <TouchableOpacity style={{position: 'relative'}} onPress={()=>onPress(tabItem.index)}  >
            <Text
                style={[
                    styles.xs_hermes_regular,
                    styles.tabsItem,
                    isSelected ? styles.select : null,
                ]}>
                {tabItem.name}
            </Text>
            {tabItem.isPromo && (
                <Text
                    style={[
                        styles.promo,
                        styles.xxs_sm_hermes_bold,
                        {opacity: isSelected ? 1 : 0.3},
                    ]}>
                    {/*locale.t('promo')*/}
                    promo
                </Text>
            )}

            {/* !tabItem.isAvailable && (
                <Text style={[styles.unavailable, styles.xxs_sm_hermes_bold]}>

                    unavailable
                </Text>
            ) */}
        </TouchableOpacity>
    );

}
const styles = StyleSheet.create({
    xs_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(11),
        color: BLUE_GREEN,
    },
    xxs_sm_hermes_bold: {
        fontFamily: 'Hermes-Bold',
        fontSize: scale(8),
        color: WHITE,
    },
    promo: {
        backgroundColor: ORANGE,
        position: 'absolute',
        top: 0,
        right: 20,
        borderRadius: 5,
        opacity: 0.6,
        overflow: 'hidden',
        padding: 3,
    },
    unavailable: {
        backgroundColor: ORANGE,
        position: 'absolute',
        top: 0,
        right: 0,
        borderRadius: 5,
        opacity: 1,
        overflow: 'hidden',
        padding: 3,
    },
    tabsItem: {
        paddingVertical: 7,
        paddingHorizontal: 10,
        margin: 10,
        color: DISABLED,
    },
    select: {
        borderWidth: 1,
        borderColor: BLUE_GREEN,
        borderRadius: 8,
        color: BLUE_GREEN,
    },
})
export default TabMenuCategotyItem;