import React, {useContext, useEffect, useMemo, useState} from 'react';
import {
    Dimensions, RegisteredStyle, SafeAreaView, SectionList, StyleSheet, Text,
    SectionListData, View, ViewStyle, Image, TouchableOpacity, StyleProp, ImageBackground
} from "react-native";
import {StatusBar} from 'react-native';
import {scale} from "../../utils/scale";
import {BLUE_GREEN, BROWN, LIGHT_BROWN, ORANGE, WHITE, YELLOW} from "../../utils/colorsConstant";
import {is_between} from "../../utils/utilsdate";
import {ToastContext} from "../Toast/Toast";
import {useNavigation} from "@react-navigation/native";
import {CafeDataMainProviderContext} from "../../ContentsProvider/CafeDataMainProvider";
import {constants} from "zlib";

interface IRestoranContentsItem {
    _id:string,
    Name:string;
    isAvailable:boolean;

    start:string;
    Address:string;

}
interface IProps {
    // data:any[],
    restoranItem: IRestoranContentsItem;

}

const RestoranItemContentsControl:React.FC<IProps>=({restoranItem}:IProps)=>{
    const navigation = useNavigation();
    //  const[orderQty]=useState(0);
    //const is_aval=is_between(menuItem.start,menuItem.end);
    //const[is_available]=useState(is_aval);
    const {setToastMessage,setToastErrorMessage}=useContext<any>(ToastContext);
    const { order } = useContext(CafeDataMainProviderContext);
    //const orderQty=menuItem.qty||0;
    /*
    const orderQty=useMemo(()=>{
        const beedmenu=order.filter((item)=>item._id===restoranItem._id,[]);

        if(beedmenu.length===0) return 0;
        const result:number=beedmenu.reduce((total,item)=>total+item.qty,0);
        //  console.log("MenuItemContemts43",result,beedmenu.length);
        return result;
    },[order])
    */
    /* containerBackground: StyleProp<ViewStyle> = React.useMemo(
        () => ({backgroundColor: orderQty > 0 ? ORANGE : BROWN}),
        [orderQty],
    );
    */
    const containerBackground: StyleProp<ViewStyle>={backgroundColor:  BROWN};
    const onOrderAddedCallback=(message:string)=>{
        setToastMessage(message);
    }
    const onPress=()=>{

        const tonavigate='MenuDetail0';
        // @ts-ignore
        navigation.navigate(tonavigate, {
            restoranItem: restoranItem,
            isNew: true,
            onOrderCallBack: onOrderAddedCallback,
        });
    }
       return (
        <TouchableOpacity onPress={onPress} style={[styles.Container,/*containerBackground*/]}>
            <View style={styles.item}>
                <View style={styles.row}>

                    <Text style={styles.md_hermes_regular}>{restoranItem.Name}</Text>


                </View>
                <View style={[styles.row, {marginTop: 2}]}>
                    {/* Adress */}
                    <Text
                        numberOfLines={2}
                        style={[styles.sm_hermes_regular, {flex: 10}]}>
                        {restoranItem.Address}
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
        justifyContent: 'center',
        //marginTop: 40,
        width:220,
        alignItems:"center",
        transform: [{ rotate: '55deg'}],
        //width:200
    },
    item1:{
       // transform: [{ rotate: '90deg'}],
        backgroundColor: '#eae3d2',
    },
    row: {
        flexDirection: 'row',
       // alignItems: 'center',
        //paddingLeft: scale(15),
        marginLeft:40
    },
    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(13),
        color: BLUE_GREEN,
        //marginRight: scale(3),
    },
    md_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(20),
        color: BLUE_GREEN,
        //width:240


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

    Container: {
        backgroundColor: BROWN,
        //padding: 10,
        marginRight: 10,
        borderRadius: 10,
        shadowColor: '#000',
        justifyContent: 'center',
        verticalAlign:'center',
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        width:180
        //width:140

    },
})
const RestoranItemContentsControlMemo= React.memo(RestoranItemContentsControl)
export default RestoranItemContentsControlMemo;