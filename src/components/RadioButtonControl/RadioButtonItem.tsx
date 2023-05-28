import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {BLUE_GREEN, LINE_COLOR} from "../../utils/colorsConstant";
import {scale} from "../../utils/scale";


interface IRadioButton {
    id: string;
    name:string;
}
type RadioButtonListProps = {
    item: IRadioButton;
    onSelectedButton: (item:IRadioButton) => void;
     selectedID: string;

};

const RadiuoButtonItem: React.FC<RadioButtonListProps> = ({
                                                           item,
                                                              onSelectedButton,
                                                           selectedID,
                                                       }) => {
    const isSelected = selectedID === item.id;

    const img = React.useMemo(() => {
        if (isSelected) {
            return require('../../assets/images/selected.png');
        } else {
            return require('../../assets/images/unselect.png');
        }
    }, [isSelected]);

    const onSelectCard = () => {
        onSelectedButton(item);
    };

    return (
        <TouchableOpacity
            onPress={onSelectCard}
            style={[
                styles.row,
                styles.itemContainer,
                {justifyContent: 'center'},
            ]}>
            <Text style={[styles.sm_hermes_regular, {color: BLUE_GREEN}]}>
                {item.name}
            </Text>
            <Image style={styles.creditCardItemImg} source={img}></Image>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    itemContainer: {
        width: '100%',
        marginTop: 20,
        borderBottomColor: LINE_COLOR,
        borderTopColor: LINE_COLOR,
        borderBottomWidth: 1,
        borderTopWidthWidth: 1,
       // marginRight: 20,
        alignItems: 'flex-start',
    },

    md_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(22),
        color: BLUE_GREEN,
    },
    creditCardItemImg: {
        width: scale(25),
        height: scale(25),
        resizeMode: 'contain',
        marginRight: scale(5),
        marginBottom: scale(5),
    },
    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
        marginRight:5
    },

})
export default  RadiuoButtonItem;
