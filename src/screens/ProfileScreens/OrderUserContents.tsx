import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    SectionListData,
    FlatList
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {ToastContext} from "../../components/Toast/Toast";
import LoadingWait from "../../components/Loading/LoadinngWait";
import OrderReestrList from "../../components/Container/OrderReestr/OrderReestrList";
import {sendGetData} from "../../service/service";
import {CafeDataMainProviderContext} from "../../ContentsProvider/CafeDataMainProvider";
import Container from "../../components/Container/Container";
import OrderItem from "../../components/Container/OrderContainer/OrderItem";
import {ListFooter} from "../../components/Container/OrderContainer/ListFooter";
import {ListHeader} from "../../components/Container/OrderContainer/ListHeader";
import Button from "../../components/ButtonControl/Button";
import {BLUE_GREEN, WHITE} from "../../utils/colorsConstant";
import {scale} from "../../utils/scale";
import {inspect} from "util";
//import Toast from "../components/Toast/Toast";

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH  = Dimensions.get('window').width;

interface IProps {
  id:string
}
const OrderUserContents=({route,navigation}) =>{
    const {orderItem}=route.params;
const id:string=orderItem._id;
    const { token } = useContext(CafeDataMainProviderContext);
    const [data,setData]=useState([]);

    const [is_Loaded,setisLoaded]=useState(false);
    const {setToastMessage,setToastErrorMessage}=useContext<any>(ToastContext);
    /*const routes = navigation.getState()?.routes;
    const prevRoute = routes[routes.length - 2];
    console.log("OrderUserContenys44",prevRoute);
    */
    useEffect(()=>{
        // if()
        if(is_Loaded) return;
        setisLoaded(false);
        get_data();
        // setisLoaded(true);
    },[is_Loaded])

    const get_data=async()=>{
        //  console.log("Home52",beedtype);

        const url:string="order/contents?id="+id;
        // const url:string=`v2/menu/category/fetch?restaurant=${restoranGlobalContext._id}&mode=${mode}`;
        try {
            // @ts-ignore
            const result = await sendGetData(url,token);

            //  const result = await response.json();
            let data0 = JSON.parse(result);
            data0=data0.map((item)=>({...item,price:item.pricebase}))
            console.log("OrderUserContents45 ",data0);
            setData(data0);
            setisLoaded(true);
        }catch(e){
            console.log("OrderUserContents45 catch",e);

            //setToastErrorMessage("error:"+e);
            // setisLoaded(true);


        }
    }


    const removeItem=(item)=>{

    }
 const OrderUserContentsList:React.FC<any>=({data:SectionListData,onPress})=> {
     const [totalPrice,setTotalPrice]=useState(0)
     useEffect(()=>{
         const sum=data.reduce((total:number,item)=>total+item.total||0,0);
         setTotalPrice(sum);
     },[data])
    return (
     // @ts-ignore
     <Container>
         <View style={styles.content}>
             <FlatList
                 style={styles.list}
                 showsVerticalScrollIndicator={false}
                 contentContainerStyle={styles.listContentContainerStyle}
                 data={data}
                 renderItem={({item}) => <OrderItem item={item} removeItem={removeItem} is_payedorder={true}/>}
                 keyExtractor={(item, index) => index.toString()/*item._id+index.toString()*/}
                 ListFooterComponent={<ListFooter totalPrice={totalPrice}/>}
                 ListHeaderComponent={<ListHeader/>}
             />
         </View>
         {/* PROCEED */}

     </Container>)

 }

    return (
        <>
            {
                (is_Loaded)?
                    <OrderUserContentsList data={data}  onPress={null}  /> :
                    <LoadingWait/>

            }

        </>
    )

}
const styles = StyleSheet.create({

    content: {
        paddingHorizontal: 20,
        // width: '100%',
        // alignItems: 'center',
        // paddingHorizontal: 20,
    },

    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
    },






    list: {
        width: '100%',
    },
    listContentContainerStyle: {
        paddingBottom: 150,
    },
});
export default OrderUserContents;