import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BLUE_GREEN, LIGHT_BROWN, LINE_COLOR} from "../../utils/colorsConstant";
import {scale} from "../../utils/scale";

interface IModificatorItem {
    _id:string;
    id:number;
    is_selected:boolean;
    name:string;
    additionalPrice: number;
    isDefault: boolean;
    limit?: number;
    qty: number;
}
interface IModificatorArray{
    _id: string;
    id:number;
    name: string;
    isMultiple: boolean;
    belongsto?: string;
    options:IModificatorItem[]

}
interface IProps {
    modificator: IModificatorArray;
};

export const ModificatorListForOrder:React.FC<IProps> = ({modificator}: IProps) => {
    const selectedOptions = React.useMemo(() => {
        return modificator.options.map((x) => x.name);
    }, []);

    return (
        <View style={[styles.row]}>
            <View style={[{flexDirection: 'row', flex: 2}]}>
                <Text
                    style={[
                        styles.sm_hermes_regular,
                        {fontSize: 13, flex: 1},
                    ]}>{`${modificator.name}`}</Text>
                <Text style={[styles.sm_hermes_regular, {marginRight: 5}]}>-</Text>
            </View>
            <View style={{flex: 4}}>
                {selectedOptions.map((opt, ind) => {
                    return (
                        <Text
                            key={ind}
                            style={[styles.sm_hermes_regular, {fontSize: 13}]}>
                            {`${opt}`}
                        </Text>
                    );
                })}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({

    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 30,
        marginTop: 5,
    },
    xs_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(11),
        color: BLUE_GREEN,
    },
    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
    },
    md_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(22),
        color: BLUE_GREEN,
        flex:1
        // alignItems:'stretch'
    },

})