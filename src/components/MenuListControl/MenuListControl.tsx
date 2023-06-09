import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    Dimensions, RegisteredStyle, SafeAreaView, SectionList, StyleSheet, Text,
    SectionListData, View, ViewStyle, FlatList, SectionListScrollParams
} from "react-native";
import {StatusBar} from 'react-native';
import MenuHeaderControl from "./MenuHeaderControl";
import MenuItemContentsControl from "./MenuItemContentsControl";
import TabMenuControl from "./TabMenuControl";
import {scale} from "../../utils/scale";
import Header from "../Container/Header";
import CartButton from "../Container/CartButton";
import BeedTypeButton from "../Container/BeedTypeButton";
import {CafeDataMainProviderContext} from "../../ContentsProvider/CafeDataMainProvider";


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
    const { order } = useContext(CafeDataMainProviderContext);
    const renderSection=({section}) => {
        return (<MenuHeaderControl sectionItem={section} />);
    }

    const onTabPress=(index:number)=>{
        //console.log("menulistcontrol30",index);
       // blockUpdateIndex=true;
        setCurrentIndex(index);
        setIsScrolling(true);
        setTimeout(()=>{
        sectionlistRef.current.scrollToLocation({viewOffset: 70,animated:true,itemIndex: 1, sectionIndex:index});
           // setCurrentIndex(index);
        blockUpdateIndex=false;
        },50
    );




    }
    const ScrollFailed=(e) => {
        const params: SectionListScrollParams = {
            itemIndex: e.highestMeasuredFrameIndex,
            sectionIndex: 0,
           // viewOffset: -20,
          //  viewPosition:1
        };
        console.log("MenuListControl68 scroll index failed",currentIndex,e.index,e.highestMeasuredFrameIndex);
       // setIsScrolling(true);
        sectionlistRef.current.scrollToLocation(params);

        // wait 50 ms before scrolling again to the correct section
        setTimeout(() => {
            sectionlistRef.current.scrollToLocation({
                itemIndex: 1,
                sectionIndex: currentIndex,
                viewOffset: 70,
              //  viewPosition:0
            });
        }, 50);
    }
    const renderMenu=({item}) => {
        //  console.log("item menulist 27 ",item)
        const beedmenu=order.filter((itemiter)=>itemiter._id===item._id,[]);
       let q:number=0;
         if(beedmenu.length>=0)
        q=beedmenu.reduce((total,item)=>total+item.qty,0);
        //  console.log("MenuItemContemts43",result,beedmenu.length);

        return (
           <MenuItemContentsControl menuItem={item} orderQty={q}/>
            )
    }


    return (
    <SafeAreaView style={styles.container}>
        <Header/*logoStyle={logoStyle}   style={headerStyle} */  />
       <CartButton  countOrder={order.length}/>
        <BeedTypeButton/>
        <TabMenuControl data={data} currentIndex={currentIndex} onTabPress={onTabPress} />
    <SectionList
        ref={sectionlistRef}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={()=>(blockUpdateIndex = false)}
        onScrollEndDrag={()=>{if (isScrolling) setIsScrolling(false);}}
        viewabilityConfig={{
            minimumViewTime: 10,
            itemVisiblePercentThreshold: 10,
            waitForInteraction:true,
           // viewAreaCoveragePercentThreshold:50
        }}


        //onMomentumScrollBegin={() => (blockUpdateIndex = true)}
onScrollToIndexFailed={ScrollFailed}
        stickySectionHeadersEnabled={false}
        sections={data}
        keyExtractor={(item, index) => {
            //console.log(item,index);
           // return /*item.*/index.toString();
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
        onViewableItemsChanged={({ viewableItems,changed }) => {
           // return;
            if(!(viewableItems[0])) return;
            if(blockUpdateIndex) return;
            if (isScrolling) return;

            const currentIndex0 = viewableItems[0].section.index;
           //if (viewableItems[0].index<=1) return;
            if(currentIndex0 !==currentIndex) {
                // if(Math.abs(currentIndex0-currentIndex)>1)
              //  console.log("menulist onview",viewableItems[0].section.index,currentIndex);
              setCurrentIndex(currentIndex0);
            }


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

const MenuListControllerMemo=React.memo(MenuListController);
export default MenuListControllerMemo;
