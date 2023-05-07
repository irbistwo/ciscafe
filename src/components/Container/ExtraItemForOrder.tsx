import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BLUE_GREEN, GREEN, LIGHT_BROWN, LINE_COLOR} from "../../utils/colorsConstant";
import {scale} from "../../utils/scale";

interface MenuExtra{
    _id: string;
    name: string;
    price: number;
    qty:number;
}
interface ExtraItemProps {
    extra: MenuExtra;
};
const ExtraItemForOrder = ({extra}: ExtraItemProps) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Text style={[styles.sm_hermes_regular,{flex:1}]}>{`- x${extra.qty} ${extra.name}`}</Text>
            <Text style={[styles.sm_hermes_regular]}>{`${extra.price*extra.qty}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({


    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',

    },

    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        //color: ,
    },

})
export default React.memo(ExtraItemForOrder);
