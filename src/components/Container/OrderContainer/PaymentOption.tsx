import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BLUE_GREEN, LINE_COLOR} from "../../../utils/colorsConstant";
import {scale} from "../../../utils/scale";


export type PaymentMethod = 'mobilepay' | 'card';

type PaymentOptionProps = {
    onSelect: (paymentMethod: PaymentMethod) => void;
    paymentMethod: PaymentMethod;
    selectedPaymentMethod: PaymentMethod;
    title: string;
};

const PaymentOption: React.FC<PaymentOptionProps> = ({
                                                         onSelect,
                                                         paymentMethod,
                                                         selectedPaymentMethod,
                                                         title,
                                                     }) => {
    const isSelected = paymentMethod === selectedPaymentMethod;

    const onSelectPaymentMethod = () => {
        onSelect(paymentMethod);
    };

    const img = React.useMemo(() => {
        if (isSelected) {

            return require('../../../assets/images/selected.png');
        } else {
            return require('../../../assets/images/unselect.png');
        }
    }, [isSelected]);

    return (
        <TouchableOpacity
            onPress={onSelectPaymentMethod}
            style={[styles.row, styles.itemContainer]}>
            <Image style={styles.paymentMethodImg} source={img}></Image>
            <Text style={[styles.md_hermes_regular, {color: BLUE_GREEN}]}>
                {title}
            </Text>
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
        borderBottomWidth: 1,
        marginBottom: 2,
        alignItems: 'flex-end',
    },
    paymentMethodImg: {
        width: scale(22),
        height: scale(22),
        resizeMode: 'contain',
        marginBottom: scale(3),
        marginRight: scale(8),
    },
    md_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(22),
        color: BLUE_GREEN,
    },

})
export default React.memo(PaymentOption);