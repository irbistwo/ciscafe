import {StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, FlatList, SafeAreaView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { CafeDataMainProviderContext } from '../ContentsProvider/CafeDataMainProvider';
import Button from "../components/ButtonControl/Button";
import Container from "../components/Container/Container";
import {sendGetData, sendPostData} from "../service/service";
import TabMenuCategotyItem from "../components/MenuListControl/TabMenuCategotyItem";
import {BLUE_GREEN, BROWN, LIGHT_BROWN, SUPER_LIGHT_BROWN} from "../utils/colorsConstant";
import {scale} from "../utils/scale";
import RestoranListControl from "../components/RestoranListControl/RestoranListControl";
import {TakeAwayHeader} from "../components/RestoranListControl/TakeAway";
import RadioButtonControl from "../components/RadioButtonControl/RadioButtonControl";
import Header from "../components/Container/Header";
import {typearray} from "../ContentsProvider/ITypeForProvider";

const WellcomeScreen:React.FC = () => {
    const[currentIndex,setCurrentIndex]=useState(0);
    const navigation = useNavigation();
    const [is_Loaded,setisLoaded]=useState(false);
    const [data,setData]=useState([]);
    const { beedtype,setBeedType,setRestoranList } = useContext(CafeDataMainProviderContext);

    const navigateToTab=()=> {
        // @ts-ignore
        navigation.navigate('Menu',{ screen: 'HomePage' });

    }

    useEffect(()=>{
        if(is_Loaded) return;
        get_data();
        //setisLoaded(true);
    },[is_Loaded])

    const get_data=async()=>{
       // const url:string="/mobile/restaurant/fetch";
        const url:string="/places/fetch";
        try {
            // @ts-ignore
         //   const result = await sendPostData(url,{});
          //  console.log("WelcomeScreen36",token);
            const token0='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbmlkIjoiNjQwZWNmZTZjMzZkMjAwMjI3NTVmMzY5IiwiZW1haWwiOiJnZWRlb24xQG1haWwucnUiLCJ0eXBlIjoiQWRtaW4iLCJpYXQiOjE2ODA4ODIxMTN9.kpdU0cPVgCWeOOLg4ccF9_ANlOwgEaRlrfjQM4lohrA';
            const result = await sendGetData(url,token0);

            //  const result = await response.json();
            const data0 = JSON.parse(result);
            const data1 = data0.data.map((item, index) => ({...item, data: item.Restaurants,name:item.Name, index}));
            /*data1.forEach((item,index)=>{
                item.data=item.data.map((item2,index2)=>({...item2,index:index2}));
            })
            */
            //const datatemp= data0.map((item,index) => ({...item, index}));
              // console.log(data1);
            setData(data1);
            setRestoranList(data1);//SaveGlobal For component ChoseRestoran
            setisLoaded(true);
        }catch(e){
            console.log("Hone39 catch");

          //  setToastErrorMessage("error:"+e);

            // setisLoaded(true);


        }
    }

    const setDineType=(item)=>{
     beedtype.beedtype=item.id;
        setBeedType(beedtype);
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header /*logoStyle={logoStyle}   style={headerStyle} */  />
            <RadioButtonControl RadioButtons={typearray} selecgtedID={"Dine"}
                                onSelectedButton={setDineType} />
       <RestoranListControl data={data} is_horisontal={true} onPress={(index)=>{}}/>
        </SafeAreaView>
    )


    const onTabPress=(index:number)=> {
        // console.log("menulistcontrol30",index);
        // blockUpdateIndex=true;
        setCurrentIndex(index);
        // setIsScrolling(true);
        setTimeout(() => {
                //       sectionlistRef.current.scrollToLocation({viewOffset: -20,animated:true,itemIndex: 1, sectionIndex:index});
                // setCurrentIndex(index);
                //     blockUpdateIndex=false;
            }, 50
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //  paddingTop: StatusBar.currentHeight,
        // marginHorizontal: 16,
    },
    welcomeview1: {

        //flexDirection: 'row',
        justifyContent: 'center',
       // alignItems: 'center',
      //  backgroundColor: LIGHT_BROWN,
       // flex: 2,
        paddingHorizontal: 15,
    },

    tabsContainer: {
        marginHorizontal: 10,
        // backgroundColor: LIGHT_BROWN,
    }
});
export default WellcomeScreen