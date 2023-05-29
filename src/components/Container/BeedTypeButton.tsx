import {useNavigation} from '@react-navigation/core';
import React, {useContext, useMemo} from 'react';
import {
    Image,
    StyleProp,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,StyleSheet
} from 'react-native';
import {BLUE_GREEN, ORANGE} from "../../utils/colorsConstant";
import {scale} from "../../utils/scale";
import {CafeDataMainProviderContext} from "../../ContentsProvider/CafeDataMainProvider";

interface BeedButtonProps  {
    style?: StyleProp<ViewStyle>;

};

const BeedTypeButton: React.FC<BeedButtonProps> = ({style}) => {
    const navigation = useNavigation();
    const {beedtype}=useContext<any>(CafeDataMainProviderContext);
    // const count=0;
//console.log("CartButton22",order.length);


    const onPress = () => {
        // @ts-ignore
       // navigation.navigate('OrderContents');
    };

    const source=useMemo(()=>{
        const img=beedtype.beedtype==='Dine'?require('../../assets/images/bottom-nav/book.png'):
            require('../../assets/images/bottom-nav/profil.png')
        return img;
    },[beedtype])

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <Image
                style={styles.img}
                source={source}
            />
            <View style={styles.lblContainer}>
                <Text style={styles.lbl}>{beedtype.beedtype}</Text>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        top: scale(45),
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {width: 40, height: 40, marginTop: -5, resizeMode: 'contain'},
    lbl: {
        color: BLUE_GREEN,
        fontSize: 10,
        lineHeight: 12,
    },
    lblContainer: {
        position: 'absolute',

       // backgroundColor: ORANGE,
        color: BLUE_GREEN,
        top:40,
      // width: 20,
        //height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
     //   opacity:0.5
    },
});

export default React.memo(BeedTypeButton);
