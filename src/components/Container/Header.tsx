import React, {useEffect} from 'react';
import {View, Image, StyleProp, ViewStyle, ImageStyle, StyleSheet} from 'react-native';

type HeaderProps = {
    style?: StyleProp<ViewStyle>;
    logoStyle?: StyleProp<ImageStyle>;
};

const Header: React.FC<HeaderProps> = ({style, logoStyle}) => {
    useEffect(() => {}, []);

    return (
        <View style={[styles.container, style]}>
            <Image
                resizeMode="contain"
                style={[styles.logo, logoStyle]}
                source={require('../../assets/images/logo.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
    },
    logo: {
        width: 100,
        height: 67,
    },
});
export default Header;