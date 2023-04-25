import React, { useEffect, useState } from 'react';
import {
    Dimensions, RegisteredStyle, SafeAreaView, SectionList, StyleSheet, Text,
    SectionListData, View, ViewStyle, Image
} from "react-native";
import {StatusBar} from 'react-native';
import {scale} from "../../utils/scale";
import {BLUE_GREEN} from "../../utils/colorsConstant";

interface IMenuHeader {
    name:string;
    start:number;
}
interface IProps {
    // data:any[],
    sectionItem: IMenuHeader;

}
const MenuHeaderControl:React.FC<IProps>=({sectionItem}:IProps)=>{
    const [isAvailable,setIsavailable]=useState(true);
  const menuheaderstyle=  {...styles.lg_bornready_regular,

            opacity: isAvailable ? 1 : 0.5
    }
    return(
        <View style={[styles.container,styles.row]}>
            <Line/>
            {
                <Text style={menuheaderstyle}>{sectionItem.name}</Text>
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
        flex: 1,
        resizeMode: 'contain',
       //width: undefined,
       // height: undefined,
        tintColor: '#a7b3b5',
    },


    container: {
        flex:1,
        paddingVertical: 20,
        paddingHorizontal: 15,
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

    item: {
        backgroundColor: '#eae3d2',
        padding: 20,
        marginVertical: 4,
    },
    header: {
       // fontSize: 32,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
    },
});



export default MenuHeaderControl;