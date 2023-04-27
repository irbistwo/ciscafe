import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../auth/AuthProvider';
import {sendGetData} from "../service/service";
import MenuListControl from "../components/MenuListControl/MenuListControl";

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH  = Dimensions.get('window').width;

const Home = () => {
    const navigation = useNavigation();
    const { user } = useContext(AuthContext);
    const [data,setData]=useState([]);
    const [is_Loaded,setisLoaded]=useState(false);
    useEffect(()=>{
        if(is_Loaded) return;
       get_data();
       setisLoaded(true);
    },[is_Loaded])

    const get_data=async()=>{
        const url:string="v2/menu/category/fetch?restaurant=618d1fdcf8d838050546f221&mode=dinein";
        const result=await sendGetData(url);

      //  const result = await response.json();
        const data0=JSON.parse(result);
        const data1= data0.map((item,index) => ({...item, data: item.menus,index}));
        /*data1.forEach((item,index)=>{
            item.data=item.data.map((item2,index2)=>({...item2,index:index2}));
        })
        */
       //const datatemp= data0.map((item,index) => ({...item, index}));
        console.log(data1);
        setData(data1);
    }

    return (

<MenuListControl data={data} currentIndex={null} onPress={null} tabBarStyle={null}  renderTab={null}/>

    )
}

export default Home;

const styles = StyleSheet.create({
    upper: {
        height: SCREENHEIGHT/3.5,
        backgroundColor: 'black',
    },

    middle: {
        height: SCREENHEIGHT/1.8,
        flexDirection: 'row',
        width: SCREENWIDTH * 4.1,
        backgroundColor: 'black',
    },

    bottom: {
        height: (SCREENHEIGHT - (SCREENHEIGHT/3.5) - (SCREENHEIGHT/1.8)),
        backgroundColor: "black",
    },

    top: {
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    text: {
        fontFamily: 'AlongSansSemiBold',
        fontSize: 15,
        color: 'white',
        top: 10
    },

    cats: {
        width: SCREENWIDTH * 1.4,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        left: 50,
        bottom: 10
    },

    img: {
        padding: 20,
        backgroundColor: "black",
        width: 300,
        height: 420,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        top: 10
    },
})