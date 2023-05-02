import React, {useEffect, useRef, useState} from 'react';
import {
    Animated, Image,
    SectionList,
    SectionListScrollParams, StyleSheet, View,
    ViewToken,
} from 'react-native';
import {Placeholder, PlaceholderLine, Fade} from 'rn-placeholder';
import {BROWN, LIGHT_BROWN} from "../../utils/colorsConstant";

const LoadingWait = () => {
    return (
        <>

            <Placeholder
                style={{padding: 20}}
                Animation={(props) => (
                    <Fade {...props} style={{backgroundColor: LIGHT_BROWN}} />
                )}>
                <PlaceholderLine style={{backgroundColor: BROWN, height: 35}} />

                <PlaceholderLine
                    style={styles.placeholder}
                />

                <PlaceholderLine
                    style={styles.placeholder}
                />

                <PlaceholderLine
                    style={styles.placeholder}
                />

            </Placeholder>
            <View style={styles.container}>
                <Image
                    resizeMode="contain"
                    style={styles.logo}
                    source={require('../../assets/images/loading.png')}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    placeholder:{
        backgroundColor: BROWN,
        height: 70,
        borderRadius: 15,
        marginTop: 10,
    },
    container: {
        alignSelf: 'center',
    },
    logo: {
        width: 100,
        height: 67,
    }
});
export default LoadingWait;