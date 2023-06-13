import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {ToastContext} from "../../components/Toast/Toast";
import LoadingWait from "../../components/Loading/LoadinngWait";
import OrderReestrList from "../../components/Container/OrderReestr/OrderReestrList";
import {sendGetData} from "../../service/service";
import {CafeDataMainProviderContext} from "../../ContentsProvider/CafeDataMainProvider";
//import Toast from "../components/Toast/Toast";

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH  = Dimensions.get('window').width;


const OrderReestr = () => {
   // const navigation = useNavigation();
    const { token } = useContext(CafeDataMainProviderContext);
    const [data,setData]=useState([]);

    const [is_Loaded,setisLoaded]=useState(false);
    const {setToastMessage,setToastErrorMessage}=useContext<any>(ToastContext);

    useEffect(()=>{
        // if()
         if(is_Loaded) return;
        setisLoaded(false);
        get_data();
       // setisLoaded(true);
    },[is_Loaded])

    const get_data=async()=>{
        //  console.log("Home52",beedtype);

        const url:string="orders/fetch/recent";
       // const url:string=`v2/menu/category/fetch?restaurant=${restoranGlobalContext._id}&mode=${mode}`;
        try {
            // @ts-ignore
            const result = await sendGetData(url,token);

            //  const result = await response.json();
            const data0 = JSON.parse(result);

            setData(data0);
            setisLoaded(true);
        }catch(e){
            console.log("OrderReestr45 catch",e);

            setToastErrorMessage("error:"+e);
           // setisLoaded(true);


        }
    }



    return (
        <>
            {
                (is_Loaded)?
                    <OrderReestrList data={data} currentIndex={null} onPress={null}  /> :
                    <LoadingWait/>

            }

        </>
    )
}

export default OrderReestr;

const styles = StyleSheet.create({

})