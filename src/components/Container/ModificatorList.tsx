import React, {useState} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View,Image} from 'react-native';
//import {IModificatorArray, IModificatorItem} from "./ModificatorContainter";
import {BLUE_GREEN, SUPER_LIGHT_BROWN} from "../../utils/colorsConstant";
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
 interface IAttributeItemOptionProp  {
    option: IModificatorItem;
    attributeId: string;
     id: number;
    isMultiple: boolean;
    selectecindex:number;
     onSelect:(IModificatorItem,number)=>void;
};

const ModificatorItemOption = ({
                                 option,
                                 attributeId,
                                 isMultiple,
    selectecindex,onSelect
                             }: IAttributeItemOptionProp) => {

    const [qtty,setQtty]=useState(0);
    const onPress = () => {
       // dispatch(modifyAttrbute({attributeId, attributeOptionId: option._id}));
        option.is_selected=!option.is_selected;
    setQtty(qtty+1);
    if(!isMultiple) if(option.is_selected) onSelect(option,selectecindex)
    };

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.row, styles.attributeItemOptionContainer]}>
                <View
                    style={[
                        styles.selectorContainer,
                        {borderRadius: isMultiple ? 0 : 36},
                    ]}>
                    {option.is_selected && (
                        <Image
                            style={styles.selected}
                            source={require('../../assets/images/check.png')}
                        />
                    )}
                </View>
                <Text style={styles.sm_hermes_regular}>
                    {option.name}
                </Text>
                {option.additionalPrice > 0 && (
                    <Text style={[styles.xs_hermes_regular, {color: BLUE_GREEN}]}>
                        {`+ ${option.additionalPrice.toLocaleString()},-`}
                    </Text>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

const ModificatorList:React.FC<IProps>=({modificator}:IProps)=>{
    const [selectIndex,setSelectedIbdex]=useState(-1);
    const onSelect=(item:IModificatorItem,index:number)=>{
        /*set select on notMultiselected*/
        modificator.options.forEach((item0)=>item0.is_selected=(item._id===item0._id))
        setSelectedIbdex(index);
    }
    return (
        <View style={[styles.attributeItemContainer]}>
            {modificator.options.map((opt,index) => (
                <ModificatorItemOption
                    isMultiple={modificator.isMultiple}
                    attributeId={modificator._id}
                    key={opt._id}
                    option={opt}
                 id={opt.id} onSelect={onSelect} selectecindex={index}/>
            ))}
        </View>)
}

const styles = StyleSheet.create({
    attributeItemContainer: {
        backgroundColor: SUPER_LIGHT_BROWN,
        marginVertical: 4,
        padding: 10,
        borderRadius: 15,
    },
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


    attributeItemOptionContainer: {
        marginVertical: 4,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 15,
        paddingLeft:15
    },
    selectorContainer: {
        width: 14,
        marginRight: 10,
        height: 14,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: BLUE_GREEN,
    },

    selected: {height: 8, width: 8, resizeMode: 'contain'},

    price: {
        marginLeft: 10,
        flex: 1,
        fontWeight: 'bold',
        color: BLUE_GREEN,
        fontSize: scale(11),
    },
    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
        flex: 1,
    },
    xs_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(11),
        color: BLUE_GREEN,
    },
})
export default ModificatorList;