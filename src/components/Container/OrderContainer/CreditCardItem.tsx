import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {BLUE_GREEN, LINE_COLOR} from "../../../utils/colorsConstant";
import {scale} from "../../../utils/scale";

interface CreditCard {
    id: string;
    state: string;
    customer: string;
    reference: string;
    created: Date;
    fingerprint: string;
    gw_ref: string;
    card_type: string;
    exp_date: string;
    masked_card: string;
    card_country: string;
}

type CreditCardItemProps = {
    card: CreditCard;
    selectedCard: string;
    onSelect: (cardId: string) => void;
};

const CreditCardItem: React.FC<CreditCardItemProps> = ({
                                                           card,
                                                           selectedCard,
                                                           onSelect,
                                                       }) => {
    const isSelected = selectedCard === card.id;

    const img = React.useMemo(() => {
        if (isSelected) {
            return require('../../../assets/images/selected.png');
        } else {
            return require('../../../assets/images/unselect.png');
        }
    }, [isSelected]);

    const onSelectCard = () => {
        onSelect(card.id);
    };

    return (
        <TouchableOpacity
            onPress={onSelectCard}
            style={[
                styles.row,
                styles.itemContainer,
                {justifyContent: 'space-between'},
            ]}>
            <Text style={[styles.sm_hermes_regular, {color: BLUE_GREEN}]}>
                {card.masked_card}
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
        borderBottomWidth: 1,
        marginBottom: 2,
        alignItems: 'flex-end',
    },

    md_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(22),
        color: BLUE_GREEN,
    },
    creditCardItemImg: {
        width: scale(15),
        height: scale(15),
        resizeMode: 'contain',
        marginRight: scale(5),
        marginBottom: scale(5),
    },
    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
    },

})
export default CreditCardItem;
