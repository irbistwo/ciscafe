import React, {useContext, useEffect, useState} from 'react';
import {scale} from "../../utils/scale";
import {Animated, Easing, StyleSheet, TouchableWithoutFeedback, View,Text} from "react-native";
import {BLUE_GREEN, LINE_COLOR} from "../../utils/colorsConstant";

type AccordionProps = {
    title: string;
};

type accordionState = 'open' | 'closed' | 'untouched';

// @ts-ignore
export const Accordion: React.FC<AccordionProps> = ({children, title}) => {
    const [accordionState, setAccordionState] =
        useState<accordionState>('closed');
    //const animationHeight = useRef(new Animated.Value(5)).current;
   // const fadeAnim = useRef(new Animated.Value(0)).current;
  //  const rotateAnimation = useRef(new Animated.Value(0)).current;
    //   const an
    const fadeAnim=new Animated.Value(0);
    const rotateAnimation = new Animated.Value(0);
    const animationHeight =new Animated.Value(5);
    const collapseView = () => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(animationHeight, {
                duration: 300,
                toValue: 5,
                easing: Easing.ease,
                useNativeDriver: false,
            }),

            Animated.timing(rotateAnimation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }),
        ]).start();
    };

    const expandView = () => {
        Animated.parallel([
            Animated.timing(animationHeight, {
                duration: 600,
                toValue: 1000,
                easing: Easing.ease,
                useNativeDriver: false,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
            }),
            Animated.timing(rotateAnimation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            }),
        ]).start();
    };

    const interpolateRotating = rotateAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    const toggle = () => {
        setAccordionState((state) => (state === 'open' ? 'closed' : 'open'));
    };

    useEffect(() => {
        if (accordionState === 'open') {
            expandView();
        } else if (accordionState === 'closed') {
            collapseView();
        }
    }, [accordionState]);

    return (
        <TouchableWithoutFeedback onPress={toggle}>
        <View style={styles.container}>

                <View style={styles.titleContainer}>
                    <Text style={[styles.title, styles.sm_hermes_regular]}>
                        {title}
                    </Text>
                    <Animated.Image
                        style={[
                            styles.downArrow,
                            {
                                transform: [
                                    {
                                        rotate: interpolateRotating,
                                    },
                                ],
                            },
                        ]}
                        source={require('../../assets/images/down-arrow.png')}
                    />
                </View>

            <Animated.View style={{maxHeight: animationHeight, opacity: fadeAnim}}>
                <View style={{paddingTop: 5, marginBottom: 20}}>{children}</View>
            </Animated.View>
        </View>
        </TouchableWithoutFeedback>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        overflow: 'hidden',
        borderBottomWidth: 1,
        borderBottomColor: LINE_COLOR,
        // width: width - 40,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        justifyContent: 'space-between',
    },
    title: {
        textAlignVertical: 'bottom',
        color: BLUE_GREEN,
    },
    downArrow: {
        tintColor: BLUE_GREEN,
        height: 10,
        resizeMode: 'contain',
    },
    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
    },
});
export default Accordion;
