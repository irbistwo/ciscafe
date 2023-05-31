import React, {useContext} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {CafeDataMainProviderContext} from "../../ContentsProvider/CafeDataMainProvider";
import Header from "../Container/Header";
import RadioButtonControl from "../RadioButtonControl/RadioButtonControl";
import RestoranListControl from "./RestoranListControl";
import {typearray} from "../../ContentsProvider/ITypeForProvider";

const ChooseRestoran=()=>{
    const { beedtype,setBeedType,restoranList } = useContext(CafeDataMainProviderContext);
    const setDineType=(item)=>{
        beedtype.beedtype=item.id;
        setBeedType(beedtype);
    }
    return (
        <SafeAreaView style={styles.container}>

            <RadioButtonControl RadioButtons={typearray} selecgtedID={"Dine"}
                                onSelectedButton={setDineType} />
            <RestoranListControl data={restoranList} onPress={(index)=>{}} is_horisontal={false}/>
        </SafeAreaView>
    )
}
export default ChooseRestoran;

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