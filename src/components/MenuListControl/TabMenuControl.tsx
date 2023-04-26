import React, { useEffect, useState } from 'react';
import {Dimensions, RegisteredStyle, SafeAreaView, SectionList, StyleSheet,Text,
    SectionListData, View, ViewStyle} from "react-native";
import {BoxShadow} from 'react-native-shadow';

interface IProps {
    // data:any[],
    data: SectionListData<any>[];
    currentIndex: number;
    onPress: (index: number) => void;
}
const height = Dimensions.get('screen').height * 0.08;
const TabMenuControl:React.FC<IProps>=({data, currentIndex}: IProps) =>{
    return(
        <View>
            <BoxShadow setting={shadowOpt}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: LIGHT_BROWN,
                        flex: 1,
                        paddingHorizontal: 15,
                    }}>
                    <Image
                        style={[
                            styles.arrow,
                            {
                                marginLeft: 10,
                                transform: [
                                    {
                                        rotate: '90deg',
                                    },
                                ],
                            },
                        ]}
                        source={require('../../assets/images/down-arrow.png')}
                    />

        </View>
    )
}

const styles = StyleSheet.create({
    shadowOpt : {
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
    }
});
export default TabMenuControl;