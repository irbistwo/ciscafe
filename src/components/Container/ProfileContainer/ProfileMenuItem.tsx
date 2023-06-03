import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {BLUE_GREEN, LINE_COLOR} from "../../../utils/colorsConstant";
import {scale} from "../../../utils/scale";


interface ProfileMenuItemProps {
    title: string;
    navigationKey?: keyof ReactNavigation.RootParamList|string;
    userPoints?: number;
    onPressNavigation?: (screen: string) => void;
    onPressAction?: () => void;
    extraContainerStyle?: ViewStyle;
};

export const ProfileMenuItem = ({
                                    title,
                                    onPressNavigation,
                                    userPoints,
                                    onPressAction,
                                    navigationKey,
                                    extraContainerStyle,
                                }: ProfileMenuItemProps) => {
    const onClick = () => {
        if (onPressAction) {
            onPressAction();
        } else if (onPressNavigation && navigationKey) {

            onPressNavigation(navigationKey);
        }
    };

    const pointsView =
        userPoints !== undefined ? (
            <Text
                style={[
                    styles.sm_hermes_regular,
                    {fontSize: 17, marginLeft: '30%'},
                ]}>
                {`${userPoints} point`}
            </Text>
        ) : null;

    return (
        <TouchableOpacity
            onPress={onClick}
            style={[styles.row, extraContainerStyle]}>
            <Text style={[styles.sm_hermes_regular, {fontSize: 17}]}>
                {title}
            </Text>
            {pointsView}
            <Image
                style={{
                    tintColor: '#918D80',
                    marginLeft: 'auto',
                    width: 15,
                    height: 15,
                    transform: [{rotate: '270deg'}],
                    resizeMode: 'contain',
                }}
                source={require('../../../assets/images/down-arrow.png')}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
    },

    container: {
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        paddingBottom: 3,
        paddingTop: 17,
        borderBottomColor: LINE_COLOR,
        marginBottom: 15,
    },

    editButton: {
        paddingVertical: scale(4),
        paddingHorizontal: scale(20),
        borderColor: BLUE_GREEN,
        borderWidth: 1,
        borderRadius: 5,
        border: 1,
    },

    footerContent: {
        marginTop: 0,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
})