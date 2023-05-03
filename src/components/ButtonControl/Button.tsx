import React from 'react';
import {StyleProp, ViewStyle, TouchableOpacity,StyleSheet} from 'react-native';
import {scale} from "../../utils/scale";
import {BLUE_GREEN, DISABLED, ORANGE} from "../../utils/colorsConstant";





type ButtonProps = {
    style?: StyleProp<ViewStyle>;
    onPress: () => void;
    variant?: 'outlined' | 'filled';
    disabled?: boolean;
    buttonSize?: 'large' | 'regular' | 'small';
};



const Button: React.FC<ButtonProps> = ({
                                           disabled,
                                           style,
                                             variant,
                                           onPress,
                                           buttonSize = 'small',
                                           // @ts-ignore
                                           children,
                                       }) => {
    const variantStyle = React.useMemo(
        () => (variant === 'outlined' ? styles.btnOutlined : styles.btnFilled),
        [variant],
    );

    const sizeStyle = React.useMemo((): StyleProp<ViewStyle> => {
        switch (buttonSize) {
            case 'regular':
                return {height: scale(42)};

            default:
                return {};
        }
    }, [buttonSize]);

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[
                styles.button,
                variantStyle,
                sizeStyle,
                style,
                disabled ? {backgroundColor: DISABLED} : {},
            ]}>
            {children}
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 10,
        zIndex: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    btnFilled: {
        backgroundColor: ORANGE,
    },
    btnOutlined: {
        borderColor: BLUE_GREEN,
        borderWidth: 1,
    },
});
export default Button;
