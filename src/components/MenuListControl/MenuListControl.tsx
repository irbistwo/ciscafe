import React, { useEffect, useState } from 'react';
import {Dimensions, RegisteredStyle, SafeAreaView, SectionList, StyleSheet,Text,
    SectionListData, View, ViewStyle} from "react-native";
import {StatusBar} from 'react-native';
import MenuHeaderControl from "./MenuHeaderControl";
import MenuItemContentsControl from "./MenuItemContentsControl";


interface IProps {
   // data:any[],
    data: SectionListData<any>[];
    renderTab: (section: SectionListData<any>) => React.ReactNode;
    tabBarStyle?: ViewStyle | RegisteredStyle<ViewStyle>;
    currentIndex: number;
    onPress: (index: number) => void;
}
const WindowWidth = Dimensions.get('window').width;
const MenuListController:React.FC<IProps>=({data,renderTab}:IProps)=>{
    console.log("datalenght ",data.length);
    const renderSection=({section}) => {
        //console.log("sect",section);
       //return(<Text style={styles.header}>{section.name} {section.start}</Text>
        return (<MenuHeaderControl sectionItem={section} />);
    }

    const renderMenu=({item}) => {
        //  console.log("item menulist 27 ",item)
        return (
           <MenuItemContentsControl menuItem={item}/>
            )
    }

    return (
    <SafeAreaView style={styles.container}>
        <View><Text>header</Text></View>
    <SectionList
        sections={data}
        keyExtractor={(item, index) => {
            //console.log(item,index);
           return item._id+index;
        }}

        renderItem={renderMenu}

        renderSectionHeader={renderSection}
        /*
        renderSectionHeader={({section:{name}}) => {
         //   console.log("item menulist 34 ",name);
          return (  <Text style={styles.header}>{name}</Text>)
        }}
        */
    />
</SafeAreaView>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    item: {
        backgroundColor: '#eae3d2',
        padding: 20,
        marginVertical: 4,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
    },
});

export default MenuListController;