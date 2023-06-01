import React, {useContext} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {CafeDataMainProviderContext} from "../../ContentsProvider/CafeDataMainProvider";
import Header from "../Container/Header";
import RadioButtonControl from "../RadioButtonControl/RadioButtonControl";
import RestoranListControl from "./RestoranListControl";
import {typearray} from "../../ContentsProvider/ITypeForProvider";
import {scale} from "../../utils/scale";
import {BLUE_GREEN} from "../../utils/colorsConstant";

const ChooseRestoran=()=>{
    const { beedtype,setBeedType,restoranList } = useContext(CafeDataMainProviderContext);
    const setDineType=(item)=>{
        beedtype.beedtype=item.id;
        setBeedType(beedtype);
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.sm_hermes_regular}>Choose Restoran</Text>
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
    },
    sm_hermes_regular: {
        fontFamily: 'BornReady-Regular',
       // fontFamily: 'Hermes-Regular',
        fontSize: scale(26),
        color: BLUE_GREEN,
        //marginRight: scale(3),
        textAlign: 'center',
        width:'90%'
    },
});