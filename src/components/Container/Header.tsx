import React, {useContext, useEffect} from 'react';
import {View, Image, StyleProp, ViewStyle, ImageStyle, StyleSheet, Text} from 'react-native';
import {CafeDataMainProviderContext} from "../../ContentsProvider/CafeDataMainProvider";
import {IGlobalRestoranItem} from "../../ContentsProvider/ITypeForProvider";
import {scale} from "../../utils/scale";
import {BLUE_GREEN} from "../../utils/colorsConstant";

type HeaderProps = {
    style?: StyleProp<ViewStyle>;
    logoStyle?: StyleProp<ImageStyle>;

};

const Header: React.FC<HeaderProps> = ({style, logoStyle}) => {
    const { restoranGlobalContext } = useContext(CafeDataMainProviderContext);
    useEffect(() => {}, []);

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.restoranname}>{restoranGlobalContext?.name.substring(0, 17)}</Text>
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
alignItems:'center',
        alignSelf: 'center',
        flexDirection:'row'
    },
    logo: {
        width: 100,
        height: 67,
    },
    restoranname:{
        marginRight:7,
        fontFamily: 'Hermes-Bold',
        fontSize: scale(16),
        color: BLUE_GREEN,
 //width: scale(120)
    }
});
export default Header;