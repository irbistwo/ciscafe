import React, {useEffect, useRef, useState} from 'react';
import {
    Animated,
    SectionList,
    SectionListScrollParams, StyleSheet,
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
        </>
    );
};

const styles = StyleSheet.create({
    placeholder:{
        backgroundColor: BROWN,
        height: 70,
        borderRadius: 15,
        marginTop: 10,
    }
});
export default LoadingWait;