import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BLUE_GREEN, GREEN, LIGHT_BROWN, LINE_COLOR} from "../../../utils/colorsConstant";
import {scale} from "../../../utils/scale";
import ExtraItemForOrder from "./ExtraItemForOrder";

interface IMenuExtra{
    _id: string;
    name: string;
    price: number;
    qty:number;
}
interface IExtraOrderProps {
    extraarray: IMenuExtra[];
};

const ExtraOrderContainer:React.FC<IExtraOrderProps>= ({extraarray}: IExtraOrderProps) => {
/*
    const extras = useMemo(
        () => extraarray?.filter((x) => !!x.qty) ?? [],
        [extraarray],
    )
    */
    const  extraFN= () => (extraarray?.filter((x) => !!x.qty) ?? []);
const extras=extraFN();
    return (
        extras.length > 0 && (
                <View
                    style={[
                        styles.row,
                        {alignItems: 'flex-start', marginLeft: 20, marginTop: 20},
                    ]}>
                    <Text style={[styles.sm_hermes_regular, {flex: 1}]}>
                        {'extras'}
                    </Text>
                    <View style={{flex: 5}}>
                        {extras.map((xtra) => (
                            <ExtraItemForOrder key={xtra._id} extra={xtra}/>
                        ))}
                    </View>
                </View>
            )
    )

}

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },

    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
    },

})
export default ExtraOrderContainer;