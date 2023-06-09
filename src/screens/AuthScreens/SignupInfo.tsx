import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import React from 'react';
import {scale} from "../../utils/scale";
import {BLUE_GREEN} from "../../utils/colorsConstant";

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const SignupInfo = ({ infoTitle, placeholder, autoComplete, value, ...rest }) => {
    return (
        <View style={{ marginTop: 10, marginVertical: 30 }}>
            <Text style={styles.text}> {infoTitle} </Text>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                autoComplete={autoComplete}
                value={value}
                secureTextEntry={infoTitle === 'Password'}
                autoCapitalize='none'
                {...rest}
            />
        </View>
    )
}

export default SignupInfo

const styles = StyleSheet.create({
    text: {
        //fontFamily: 'AlongSansSemiBold',
       // fontSize: 16,
        //color: 'white',
        fontFamily: 'Hermes-Regular',
        fontSize: scale(16),
        color: BLUE_GREEN,
    },

    input: {
       // borderColor: 'white',
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
        borderWidth: 1.5,
        width: 0.9 * SCREENWIDTH,
        height: 0.08 * SCREENHEIGHT,
        padding: 10,
       // color: 'white',
        //fontFamily: 'AlongSansSemiBold',
      //  fontSize: 15,
       // backgroundColor: 'black',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius:scale(15)
    }
})