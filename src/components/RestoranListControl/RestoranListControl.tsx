import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    Dimensions, RegisteredStyle, SafeAreaView, SectionList, StyleSheet, Text,
    SectionListData, View, ViewStyle, FlatList, SectionListScrollParams, StatusBar
} from "react-native";
import Header from "../Container/Header";
import CartButton from "../Container/CartButton";
import TabMenuControl from "../MenuListControl/TabMenuControl";
import RestoranHeaderControl from "./RestoranHeaderControl";
import RestoranItemContentsControl from "./RestoranItemContentsControl";
import {scale} from "../../utils/scale";
import {TakeAwayHeader} from "./TakeAway";
import RadioButtonControl from "../RadioButtonControl/RadioButtonControl";
interface IProps {
    // data:any[],
    data: SectionListData<any>[];
    onPress: (index: number) => void;
}

const RestoranListControl:React.FC<IProps>=({data}:IProps)=>{
    const[currentIndex,setCurrentIndex]=useState(0);
    const[currentIndexonTab,setCurrentIndexOnTab]=useState(0);
    const sectionlistRef = useRef<SectionList>();
    const [isScrolling, setIsScrolling] = useState(false);
    let blockUpdateIndex=false;

    const renderSection=({section}) => {
        //console.log("sect",section);
        //return(<Text style={styles.header}>{section.name} {section.start}</Text>
        return (<RestoranHeaderControl sectionItem={section} />);
    }

    const onTabPress=(index:number)=>{
        // console.log("menulistcontrol30",index);
        // blockUpdateIndex=true;
        setCurrentIndex(index);
        setIsScrolling(true);
        setTimeout(()=>{
                sectionlistRef.current.scrollToLocation({viewOffset: -20,animated:true,itemIndex: 1, sectionIndex:index});
                // setCurrentIndex(index);
                blockUpdateIndex=false;
            },50
        );

        //sectionlistRef.current.scrollToLocation({viewOffset: 0,animated:true,itemIndex: -1, sectionIndex:index});
        // blockUpdateIndex=false;

        //sectionlistRef.current.scrollToLocation({animated: true, itemIndex: 0, sectionIndex: index})


    }
    const ScrollFailed=(e) => {
        const params: SectionListScrollParams = {
            itemIndex: e.highestMeasuredFrameIndex,
            sectionIndex: 0,
            viewOffset: -20,
            viewPosition:1
        };
        console.log("ResyorabListControl56 scroll index failed",currentIndex,e.index,e.highestMeasuredFrameIndex);
        // setIsScrolling(true);
        sectionlistRef.current.scrollToLocation(params);

        // wait 50 ms before scrolling again to the correct section
        setTimeout(() => {
            sectionlistRef.current.scrollToLocation({
                itemIndex: 1,
                sectionIndex: currentIndex,
                viewOffset: -20,
                viewPosition:0
            });
        }, 50);
    }
    const renderMenu=({item}) => {
        //  console.log("item menulist 27 ",item)
        return (
            <RestoranItemContentsControl restoranItem={item}/>
        )
    }


    return (
       <View>


            { /*<TakeAwayHeader/> */}
              <TabMenuControl data={data} currentIndex={currentIndex} onTabPress={onTabPress} />
          <View style={styles.list} >
            <SectionList
                horizontal={true}
                ref={sectionlistRef}
                onMomentumScrollEnd={() => (blockUpdateIndex = false)}
                onScrollEndDrag={()=>{if (isScrolling) setIsScrolling(false);}}
                viewabilityConfig={{
                    minimumViewTime: 10,
                    itemVisiblePercentThreshold: 10
                }}
                // onMomentumScrollBegin={() => (blockUpdateIndex = true)}
                onScrollToIndexFailed={ScrollFailed}
                stickySectionHeadersEnabled={true}
                sections={data}
                keyExtractor={(item, index) => {
                    //console.log(item,index);
                    return /*item.*/index.toString();
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
                    //console.log("menulist onview",viewableItems[0].section.index);
                    const currentIndex0 = viewableItems[0].section.index;
                    if(currentIndex0 !==currentIndex) setCurrentIndex(currentIndex0);
                }}
            />
          </View>
       </View>
    )
}

const styles = StyleSheet.create({
    list:{
       height:scale(200)
    },
    container: {
        flex: 1,
      //  paddingTop: StatusBar.currentHeight,
       // marginHorizontal: 16,
    },
    item: {
        backgroundColor: '#eae3d2',
        //padding: 20,
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

export default RestoranListControl;