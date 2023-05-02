import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet, Platform} from 'react-native';
import {scale} from "../../utils/scale";
import {BLUE_GREEN} from "../../utils/colorsConstant";
type HeaderBackButtonProps = {
    onBack?: () => void;
};

export const BackButton = ({onBack}: HeaderBackButtonProps) => {
    const navigation = useNavigation();

    const onClick = () => {
        if (!!onBack) {
            onBack();
        } else {
            navigation.goBack();
        }
    };

    return (
        <TouchableOpacity style={styles.backbuttonStyle} onPress={onClick}>
            <Image
                source={require('../../assets/images/down-arrow.png')}
                style={styles.backArrow}
            />
            <Text style={styles.xs_hermes_regular}>{/*locale.t('back')*/ 'Back'}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    backbuttonStyle: {
        position: 'absolute',
        left: scale(Platform.OS === 'ios' ? 20 : 30),
        top: scale(Platform.OS === 'ios' ? 18 : 22),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    backArrow: {
        tintColor: BLUE_GREEN,
        height: 16,
        width: 16,
        resizeMode: 'contain',
        transform: [
            {
                rotate: '90deg',
            },
        ],
        marginRight: 5,
    },
    xs_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(11),
        color: BLUE_GREEN,
    },
});
export default BackButton;