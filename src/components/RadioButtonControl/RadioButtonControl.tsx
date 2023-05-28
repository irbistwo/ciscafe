import React, {useRef, useState} from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import {BLUE_GREEN} from "../../utils/colorsConstant";
import CreditCardItem from "../Container/OrderContainer/CreditCardItem";
import {scale} from "../../utils/scale";
import RadioButtonItem from "./RadioButtonItem";


interface IRadioButton {
    id: string;
  name:string;
}
type RadioButtonListProps = {
    RadioButtons: IRadioButton[];
    onSelectedButton: (item:IRadioButton) => void;
    selecgtedID?:string;


};

 const RadioButtonControl = ({
                                   RadioButtons,
                                   onSelectedButton,
selecgtedID
                               }: RadioButtonListProps) => {

const [selectedButton,setSelectedButton]=useState(selecgtedID);

const onSelectItem=(item)=>{

    setSelectedButton(item.id);
    onSelectedButton(item);

     }
    return (
        <View
            style={{flexDirection:'row',width:"50%"}}>
            <Text
                style={[
                    styles.xs_hermes_regular,
                    {color: BLUE_GREEN, alignSelf: 'flex-start', marginTop: 2},
                ]}>
                {/*locale.t('choose_payment_method')*/}
            </Text>

            {RadioButtons.map((item) => (
                <RadioButtonItem
                   selectedID={selectedButton}
                    key={item.id}
                    item={item}
                    onSelectedButton={onSelectItem}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({

    xs_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(11),
        color: BLUE_GREEN,
    },
})

export default RadioButtonControl;