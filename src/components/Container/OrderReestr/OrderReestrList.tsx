import React, {useEffect, useRef, useState} from 'react';
import {
    Dimensions, RegisteredStyle, SafeAreaView, SectionList, StyleSheet, Text,
    SectionListData, View, ViewStyle, Image, FlatList
} from "react-native";
import {BoxShadow} from 'react-native-shadow';
import {BLUE_GREEN, LIGHT_BROWN} from "../../../utils/colorsConstant";
import {scale} from "../../../utils/scale";
import OrderReestrListItem from "./OrderReestrListItem";
import Container from "../Container";



interface IProps {
    // data:any[],
    data: SectionListData<any>[];
    currentIndex: number;
    onPress: (index: number) => void;
}
const height = Dimensions.get('screen').height * 0.8;



const OrderReestrList:React.FC<IProps>=({data, currentIndex,onPress}: IProps) =>{
    // const[selectedCategory,setselectedCaytegory]=useState(currentIndex);
    //console.log("TabMenuControl23 selectedCategory",selectedCategory,currentIndex);
    const flatlistRef = useRef<FlatList>();
    useEffect(()=>{
        if(data.length===0) return;
        flatlistRef.current.scrollToIndex({ animated: true, index: currentIndex ,viewPosition:0.5})
    })


    return(
        <Container>
            <BoxShadow setting={styles.shadowOpt}>
                <View>

                    <FlatList
                        ref={flatlistRef}
                        horizontal={false}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        style={styles.tabsContainer}
                        contentContainerStyle={{paddingRight: 10}}
                        data={data}
                        renderItem={({item}:any) => {
                            //  console.log("TabMenuControl39 ",item.name,item.index,selectedCategory)
                            return (
                                <OrderReestrListItem
                                    // onSelectCatrgory={onSelectCategory}
                                    orderItem={item}
                                  //  isSelected={item.index === currentIndex}
                                    //onPress={onPress}

                                />)
                        }}

                    />


                </View>
            </BoxShadow>
        </Container>
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
    shadowOpt :{
        width: Dimensions.get('screen').width,
        height: height,
        color: '#000',
        border: 5,
        opacity: 0.03,
        x: -1,
        y: 3,
        style: {
            width: '100%',
            // overflow: 'hidden',
        },
    },
    arrow: {
        tintColor: BLUE_GREEN,
        width: scale(14),
        height: scale(14),
        resizeMode: 'contain',
        marginLeft: 10,
        transform: [
            {
                rotate: '90deg',
            }]
    },

    arrowright: {
        tintColor: BLUE_GREEN,
        width: scale(14),
        height: scale(14),
        resizeMode: 'contain',
        marginLeft: 10,
        transform: [
            {
                rotate: '270deg',
            }]
    },
    tabsContainer: {
        marginHorizontal: 10,
        // backgroundColor: LIGHT_BROWN,
    }
});
export default React.memo(OrderReestrList);