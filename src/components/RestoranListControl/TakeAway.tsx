import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {BLUE_GREEN} from "../../utils/colorsConstant";
import {scale} from "../../utils/scale";


export const TakeAwayHeader = () => {
  //  const selectedBranch = useSelector(query.getSelectedBranch);

    return (
        <View
            style={styles.container}>
            <View>
                <Text style={[styles.sm_hermes_regular, {textAlign: 'center'}]}>
                    {/*selectedBranch?.address */ 'adress'}
                </Text>
            </View>
            <View style={styles.takeoutHeaderContainer}>
                <Image
                    style={[styles.icon, {marginRight: 8}]}
                    source={require('../../assets/images/clock.png')}
                />
                <Text
                    style={[
                        styles.sm_hermes_regular,
                        {marginRight: 'auto', fontSize: 13},
                    ]}>
                    20 - 30 min.
                </Text>

                <Text style={[styles.sm_hermes_regular, {fontSize: 13}]}>
                    Afhenting
                </Text>
                <Image
                    style={[styles.icon, {marginLeft: 8}]}
                    source={require('../../assets/images/circle-check.png')}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
container:{
    width: '100%',
    marginBottom: 20,
    marginTop: 10,
    paddingHorizontal: 30,
},
    icon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        tintColor: BLUE_GREEN,
    },
    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
    },
    takeoutHeaderContainer: {
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#3A556040',
        borderTopWidth: 1,
        borderTopColor: '#3A556040',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },

});