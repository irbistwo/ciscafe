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

const WellcomeScreen:React.FC = () => {
    const[currentIndex,setCurrentIndex]=useState(0);
    const navigation = useNavigation();
    const [is_Loaded,setisLoaded]=useState(false);
    const [data,setData]=useState([]);
    const { token } = useContext(CafeDataMainProviderContext);
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
            const data1 = data0.data.map((item, index) => ({...item, data: item.Restaurants, index}));
            /*data1.forEach((item,index)=>{
                item.data=item.data.map((item2,index2)=>({...item2,index:index2}));
            })
            */
            //const datatemp= data0.map((item,index) => ({...item, index}));
               console.log(data1);
            setData(data1);
            setisLoaded(true);
        }catch(e){
            console.log("Hone39 catch");

          //  setToastErrorMessage("error:"+e);

            // setisLoaded(true);


        }
    }


    return (
       <RestoranListControl data={data} onPress={(index)=>{}}/>
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
    /*
    return (
        <Container notshowBackButton={true}
                   containerStyle={ {backgroundColor: SUPER_LIGHT_BROWN}}>

        <FlatList
           // ref={flatlistRef}
           // horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={styles.tabsContainer}
            contentContainerStyle={{paddingRight: 10}}
            data={data}
            renderItem={({item}:any) => {
                //  console.log("TabMenuControl39 ",item.name,item.index,selectedCategory)
                return (
                    <TabMenuCategotyItem
                        // onSelectCatrgory={onSelectCategory}
                        tabItem={item}
                        isSelected={item.index === currentIndex}
                        onPress={onTabPress}

                    />)
            }}

        />

        </Container>
    )
    */
}

const styles = StyleSheet.create({
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