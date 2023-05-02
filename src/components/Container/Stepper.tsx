import React, {useEffect, useRef} from 'react';
import {
    Animated,
    Image,
    StyleProp, StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import {scale} from "../../utils/scale";
import {BLUE_GREEN} from "../../utils/colorsConstant";




type StepperStyle = {
    containerStyle?: StyleProp<ViewStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    buttonTextStyle?: StyleProp<TextStyle>;
    qtyStyle?: StyleProp<TextStyle>;
};

type StepperProps = {
    onIncrease: () => void;
    onDecrease: () => void;
    qty: number;
    style?: StepperStyle;
};

const Stepper = ({onIncrease, onDecrease, qty, style}: StepperProps) => {
    const textAnimatedValue = new Animated.Value(0);

    const animate = Animated.sequence([
        Animated.timing(textAnimatedValue, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
        }),
        Animated.timing(textAnimatedValue, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
        }),
    ]);

    useEffect(() => {
        animate.start();
    }, [qty]);

    return (
        <View style={[styles.container, style?.containerStyle]}>
            <TouchableOpacity
                style={[styles.buttonContainer, styles.button, style?.buttonStyle]}
                onPress={onDecrease}>
                <Image
                    style={styles.icon}
                    source={require('../../assets/images/minus.png')}
                />
            </TouchableOpacity>
            <Animated.Text
                style={[
                    styles.sm_hermes_regular,
                    {
                        marginHorizontal: 5,
                        width: 30,
                        textAlign: 'center',
                        transform: [
                            {
                                scale: textAnimatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 1.25],
                                }),
                            },
                        ],
                    },
                    styles.qty,
                    style?.qtyStyle,
                ]}>
                {qty}
            </Animated.Text>
            <TouchableOpacity
                style={[styles.buttonContainer, styles.button, style?.buttonStyle]}
                onPress={onIncrease}>
                <Image
                    style={styles.icon}
                    source={require('../../assets/images/add.png')}
                />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: scale(10),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c9c9c9',
    },
    button: {
        width: scale(20),
        height: scale(20),
        borderColor: BLUE_GREEN,
        borderWidth: 1,
        borderRadius: scale(20),
    },
    buttonContainer: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    qty: {textAlign: 'center', color: BLUE_GREEN},
    icon: {
        width: scale(14),
        height: scale(14),
        resizeMode: 'contain',
        tintColor: BLUE_GREEN,
    },
    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
    }

});
export default Stepper;