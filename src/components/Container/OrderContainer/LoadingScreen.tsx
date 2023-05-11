import React, {useRef} from 'react';
import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';


const LoadingScreen = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.loop(
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                easing: Easing.bounce,
                useNativeDriver: true,
            }),
        ).start();
    }, []);

    const fade = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0.8, 1],
    });

    return (
        <Animated.View style={[styles.container, {opacity: fade}]}>
            <Image
                style={{width: 150, resizeMode: 'contain', opacity: 1}}
                source={require('../../../assets/images/logo.png')}
            />
        </Animated.View>
    );
};
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: '#d9cfb9e6',
    },
})
export default LoadingScreen;
