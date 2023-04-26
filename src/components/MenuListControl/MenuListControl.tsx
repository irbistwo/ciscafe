import React, {useEffect, useRef, useState} from 'react';
import {
    Dimensions, RegisteredStyle, SafeAreaView, SectionList, StyleSheet, Text,
    SectionListData, View, ViewStyle, FlatList
} from "react-native";
import {StatusBar} from 'react-native';
import MenuHeaderControl from "./MenuHeaderControl";
import MenuItemContentsControl from "./MenuItemContentsControl";
import TabMenuControl from "./TabMenuControl";
import {scale} from "../../utils/scale";


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
   const[currentIndex,setCurrentIndex]=useState(0);
   const[currentIndexonTab,setCurrentIndexOnTab]=useState(0);
    const sectionlistRef = useRef<SectionList>();
    const [isScrolling, setIsScrolling] = useState(false);
    let blockUpdateIndex=false;
    const renderSection=({section}) => {
        //console.log("sect",section);
       //return(<Text style={styles.header}>{section.name} {section.start}</Text>
        return (<MenuHeaderControl sectionItem={section} />);
    }
/*
   useEffect(()=>{

        if(data.length===0) return;
       // console.log("menulistcontrol30",currentIndex,currentIndexonTab)
       blockUpdateIndex=true;
        sectionlistRef.current.scrollToLocation({viewOffset: scale(-30),animated: true, itemIndex: 1, sectionIndex: currentIndex})
       blockUpdateIndex=false;
   },[currentIndex])
*/
    const onTabPress=(index:number)=>{
        console.log("menulistcontrol30",index);
        //blockUpdateIndex=true;
        setCurrentIndex(index);
        setIsScrolling(true);
        setTimeout(()=>{
        sectionlistRef.current.scrollToLocation({viewOffset: -20,animated:true,itemIndex: 1, sectionIndex:index});
           // setCurrentIndex(index);
        blockUpdateIndex=false;
        },300
    );

        //sectionlistRef.current.scrollToLocation({viewOffset: 0,animated:true,itemIndex: -1, sectionIndex:index});
       // blockUpdateIndex=false;

  //sectionlistRef.current.scrollToLocation({animated: true, itemIndex: 0, sectionIndex: index})


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
        <TabMenuControl data={data} currentIndex={currentIndex} onTabPress={onTabPress} />
    <SectionList
        ref={sectionlistRef}
        onMomentumScrollEnd={() => (blockUpdateIndex = false)}
        onScrollEndDrag={()=>{if (isScrolling) setIsScrolling(false);}}
       // onMomentumScrollBegin={() => (blockUpdateIndex = true)}
onScrollToIndexFailed={()=>{}}
        stickySectionHeadersEnabled={true}
        sections={data}
        keyExtractor={(item, index) => {
            //console.log(item,index);
            return item.index.toString();
           //return item._id+index;
        }}

        renderItem={renderMenu}

        renderSectionHeader={renderSection}
        /*
        renderSectionHeader={({section:{name}}) => {
         //   console.log("item menulist 34 ",name);
          return (  <Text style={styles.header}>{name}</Text>)
        }}
        */
        onViewableItemsChanged={({ viewableItems }) => {
          //  return;
            if(!(viewableItems[0])) return;
            if(blockUpdateIndex) return;
            if (isScrolling) return;
            console.log("menulist onview",viewableItems[0].section.index);
            const currentIndex0 = viewableItems[0].section.index;
            if(currentIndex0 !==currentIndex) setCurrentIndex(currentIndex0);
        }}
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