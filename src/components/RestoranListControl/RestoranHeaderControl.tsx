import React, { useEffect, useState } from 'react';
import {
    Dimensions, RegisteredStyle, SafeAreaView, SectionList, StyleSheet, Text,
    SectionListData, View, ViewStyle, Image
} from "react-native";
import {StatusBar} from 'react-native';
import {scale} from "../../utils/scale";
import {BLUE_GREEN} from "../../utils/colorsConstant";

interface IRestoranHeader {
    Name:string;
    start?:number;
    isAvailable?:boolean;
}
interface IProps {
    // data:any[],
    sectionItem: IRestoranHeader;

}
const RestoranHeaderControl:React.FC<IProps>=({sectionItem}:IProps)=>{
    const [isAvailable,setIsavailable]=useState(sectionItem.isAvailable);
    const menuheaderstyle=  {...styles.lg_bornready_regular,

        opacity: isAvailable ? 1 : 0.5,
       // transform: [{ rotate: '90deg'}]
      //  overflow:true
//flex:100
width:240
    }
    return(
        <View style={[styles.container,styles.row]}>
            <Line/>
            {
                <Text  numberOfLines={1} style={menuheaderstyle}>{sectionItem.Name}</Text>
            }
            <Line/>
        </View>
    )
}





const Line = () => {
    return (
        //  <View >
        <Image
            style={styles.imageLine}
            source={require('../../assets/images/menu_line.png')}
        />
        // </View>
    );
};
const styles = StyleSheet.create({

    imageLine:{
       // flex: 1,
        resizeMode: 'contain',
        //width: undefined,
        // height: undefined,
        tintColor: '#a7b3b5',
      //  transform: [{ rotate: '90deg'}]
        width:40
    },


    container: {
      //  position:"absolute",
        flex:2,
        paddingVertical: 20,
        //paddingHorizontal: 15,
        transform: [{ rotate: '90deg'}],
        width:100,
       // height:100
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    lg_bornready_regular: {
        fontFamily: 'BornReady-Regular',
        fontSize: scale(28),
        color: BLUE_GREEN,
        marginHorizontal: 10,
        // backgroundColor: '#fff',
    },


});



export default React.memo(RestoranHeaderControl);