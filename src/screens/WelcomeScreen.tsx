import {StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { CafeDataMainProviderContext } from '../ContentsProvider/CafeDataMainProvider';
import Button from "../components/ButtonControl/Button";
import Container from "../components/Container/Container";
import {sendPostData} from "../service/service";
import TabMenuCategotyItem from "../components/MenuListControl/TabMenuCategotyItem";
import {BLUE_GREEN, LIGHT_BROWN} from "../utils/colorsConstant";
import {scale} from "../utils/scale";

const WellcomeScreen:React.FC = () => {
    const[currentIndex,setCurrentIndex]=useState(0);
    const navigation = useNavigation();
    const [is_Loaded,setisLoaded]=useState(false);
    const [data,setData]=useState([]);
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
        const url:string="/mobile/restaurant/fetch";
        try {
            // @ts-ignore
            const result = await sendPostData(url,{});

            //  const result = await response.json();
            const data0 = JSON.parse(result);
            const data1 = data0.map((item, index) => ({...item, data: item.menus, index}));
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

/*
    return (
        <Container>
            <Button onPress={navigateToTab}>

            </Button>
        </Container>
    )
    */

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
    return (
        <FlatList
           // ref={flatlistRef}
           // horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
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
    )
}

const styles = StyleSheet.create({
    tabscontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: LIGHT_BROWN,
        flex: 1,
        paddingHorizontal: 15,
    },

    tabsContainer: {
        marginHorizontal: 10,
        // backgroundColor: LIGHT_BROWN,
    }
});
export default WellcomeScreen