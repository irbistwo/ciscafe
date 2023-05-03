import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BLUE_GREEN, SUPER_LIGHT_BROWN} from "../../utils/colorsConstant";
import {scale} from "../../utils/scale";
import Stepper from "./Stepper";

interface MenuExtra{
    _id: string;
    name: string;
    price: number;
    qty:number;
}
interface ExtraItemProps {
    extra: MenuExtra;
};

const ExtraItem:React.FC<ExtraItemProps> = ({extra}: ExtraItemProps) => {
const [qtty,setQtty]=useState(0);
   console.log("ExtraItem 19",extra);
    const onDecrease = () => {
       // dispatch(modifyExtra({extraId: extra._id, isIncrement: false}));

       // extra.qty=  extra?.qty-1;
        if(!extra.qty) extra.qty=0;
        extra.qty=  extra.qty-1;
        if(extra.qty<0) extra.qty=0;
        setQtty(extra.qty);
    };
    const onIncrease = () => {
       // dispatch(modifyExtra({extraId: extra._id, isIncrement: false}));
        if(!extra.qty) extra.qty=0;
        extra.qty= extra.qty+1;
        setQtty(extra.qty);
    };

    return (
        <View style={[styles.row, styles.extraItemContainer]}>
            <Text
                style={[
                    styles.sm_hermes_regular,
                    {fontSize: scale(11), color: BLUE_GREEN},
                ]}>
                {extra.name}
            </Text>
            <Text style={[styles.xs_hermes_regular, styles.price]}>
                {`+ ${extra.price.toLocaleString()} DKK`}
            </Text>
            <Stepper
                qty={extra?.qty ?? 0}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    extraItemContainer: {
        backgroundColor: SUPER_LIGHT_BROWN,
        marginVertical: 4,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 15,
    },
    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
    },
    xs_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(11),
        color: BLUE_GREEN,
    },
    price: {
        marginLeft: 10,
        flex: 1,
        fontWeight: 'bold',
        color: BLUE_GREEN,
        fontSize: scale(11),
    },

});
export default ExtraItem;