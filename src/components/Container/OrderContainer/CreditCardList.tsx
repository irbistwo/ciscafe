import React, {useRef} from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import {BLUE_GREEN} from "../../../utils/colorsConstant";
import CreditCardItem from "./CreditCardItem";
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
type CreditCardListProps = {
    creditCards: CreditCard[];
    setSelectedCard: (cardId: string) => void;
    selectedCard: string;
    isOpen: boolean;
};

export const CreditCardList = ({
                                   selectedCard,
                                   creditCards,
                                   setSelectedCard,
                                   isOpen,
                               }: CreditCardListProps) => {
    const animationHeight = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        if (isOpen) {
            expandView();
        } else {
            collapseView();
        }
    }, [isOpen]);

    const collapseView = () => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(animationHeight, {
                duration: 300,
                toValue: 5,
                easing: Easing.ease,
                useNativeDriver: false,
            }),
        ]).start();
    };

    const expandView = () => {
        Animated.parallel([
            Animated.timing(animationHeight, {
                duration: 600,
                toValue: 1000,
                easing: Easing.ease,
                useNativeDriver: false,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
            }),
        ]).start();
    };

    return (
        <Animated.View
            style={{maxHeight: animationHeight, opacity: fadeAnim, width: '100%'}}>
            <Text
                style={[
                    styles.xs_hermes_regular,
                    {color: BLUE_GREEN, alignSelf: 'flex-start', marginTop: 20},
                ]}>
                {/*locale.t('choose_payment_method')*/}
            </Text>

            {creditCards.map((card) => (
                <CreditCardItem
                    selectedCard={selectedCard}
                    key={card.id}
                    card={card}
                    onSelect={setSelectedCard}
                />
            ))}
        </Animated.View>
    );
};

const styles = StyleSheet.create({

    xs_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(11),
        color: BLUE_GREEN,
    },
})