import React, {useContext, useEffect, useState} from 'react';
import {scale} from "../../utils/scale";
import {SafeAreaView, StyleProp, StyleSheet, View, ViewStyle} from "react-native";
import {LIGHT_BROWN} from "../../utils/colorsConstant";
import Header from "./Header";
import BackButton from "./BackButton";

type ContainerProps ={
    children:any;
    containerStyle?: StyleProp<ViewStyle>;
    notshowBackButton?: boolean|undefined;
}
// @ts-ignore
const Container:React.FC<ContainerProps>=({children,notshowBackButton,containerStyle})=>{
    const logoStyle=()  => {

            return {
                width: scale(120),
                height: scale(50),
                marginVertical: 20,
            };
        };
    return (
        <SafeAreaView  style={[styles.container, containerStyle]}>
            {/* HEADER */}
            <View style={styles.headerContainer}>
                {!notshowBackButton && <BackButton /> }
                {/*  !!showCarButton && <CartButton style={styles.cartButton} />  */}

                {/*
                    !!rightButton && (
                    <View style={styles.rightButtonContainerStyle}>{rightButton}</View>
                )
                */}

                <Header /*logoStyle={logoStyle}   style={headerStyle} */  />
            </View>
            {children}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: LIGHT_BROWN,
        display: 'flex',
        flex: 1,
    },
    headerContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

})
export default Container;