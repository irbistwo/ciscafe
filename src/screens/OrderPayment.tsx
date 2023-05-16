import React, {useContext, useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {BLUE_GREEN, LIGHT_BROWN, LINE_COLOR, WHITE} from "../utils/colorsConstant";
import Button from "../components/ButtonControl/Button";
import {inspect} from "util";
import {TotalBreakdown} from "../components/Container/OrderContainer/TotalBreakdown";
import {scale} from "../utils/scale";
import Container from "../components/Container/Container";
import PaymentOption from '../components/Container/OrderContainer/PaymentOption';
import LoadingScreen from '../components/Container/OrderContainer/LoadingScreen';
import { CreditCardList } from '../components/Container/OrderContainer/CreditCardList';
import {sendGetData} from "../service/service";
import {CafeDataMainProviderContext} from "../ContentsProvider/CafeDataMainProvider";
type PaymentMethod = 'mobilepay' | 'card';
const buttonWidth = Dimensions.get('screen').width * 0.55;
const OrderPayment :React.FC= () => {
    const {token} = useContext<any>(CafeDataMainProviderContext);
    const navigation = useNavigation();
    const appliedPoints =0;
    //const orders = useSelector(selectOrders);
    const isDineIn = false;
    const tableNumber = 5;
    const branch = "777";
    const advanceOrderDateTime = 0;
    const isAdvanceOrderSelected = false;

    const [selectedCard, setSelectedCard] = useState<string>('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] =
        useState<PaymentMethod>('mobilepay');
    const[isLoading]=useState(false);

    const onSelectPaymentMethod = (paymentMethod: PaymentMethod) => {
        setSelectedPaymentMethod(paymentMethod);
    };
    const addNewCard=()=>{

    }

    const onPay = async () => {
const url="orders/v2/pmlists?restaurant=62623eb0f00d46f174763fe4";
try {
    console.log("orderpayment43", token);
    const result = await sendGetData(url, token);
    console.log("orderpayment45", result);
} catch (e) {
    console.log("orderpayment46", e);
}
    }

    const cards=[{id:"1111", exp_date: "01.01.2012",
        masked_card: "444 55567 788777 23344",
        card_country: "UA"},{id:"111", exp_date: "02.01.2012",
        masked_card: "9999 55567 788777 23344",
        card_country: "UA"}];
    // @ts-ignore
    return (
        <>
            {// @ts-ignore
            <Container showBackButton title={/*locale.t('payment')*/'payment'}>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={styles.container}
                        contentContainerStyle={{paddingBottom: 100}}>
                        <View style={styles.content}>
                            {/* <PageTitle title={locale.t('payment')} /> */}
                            {/* <ButtonBack /> */}

                            {/* PAYMENT OPTIONS */}
                            <Text
                                style={[
                                    styles.sm_hermes_regular,
                                    {

                                    },
                                ]}>
                                {/*locale.t('choose_payment_method')*/ 'choose_payment_method'}
                            </Text>

                            <PaymentOption
                                onSelect={onSelectPaymentMethod}
                                selectedPaymentMethod={selectedPaymentMethod}
                                title={/*locale.t('mobilepay')*/ 'mobilepay'}
                                paymentMethod="mobilepay"
                            />

                            <PaymentOption
                                onSelect={onSelectPaymentMethod}
                                selectedPaymentMethod={selectedPaymentMethod}
                                title={/*locale.t('credit_card')*/'credit_card'}
                                paymentMethod="card"
                            />

                            {/* CREDIT CARDS LIST */}
                            {
                                <CreditCardList
                                isOpen={selectedPaymentMethod === 'card'}
                                    // @ts-ignore
                                creditCards={cards ?? []}
                                selectedCard={selectedCard}
                                setSelectedCard={setSelectedCard}
                            />
                            }

                            {/* ADD NEW CARD */}
                            { // @ts-ignore
                            <Button
                                style={styles.buttonnewcard}
                                onPress={addNewCard/*() => addCardMutation.mutate()*/}
                                variant="outlined">
                                <Text style={[styles.xs_hermes_regular]}>
                                    {/*locale.t('add_new_card')*/'add_new_card'}
                                </Text>
                            </Button>
                            }
                            {/* TABLE NUMBER */}

                            {/* TOTAL PRICE */}
                            <TotalBreakdown
                                forPaymentPage={true}
                                totalLabel={/*locale.t('amount_to_pay_total')*/'amount_to_pay_total'}
                            />


                        </View>
                    </ScrollView>

                    {/* PROCEED */}
                    { // @ts-ignore
                    <Button
                        buttonSize="regular"
                        style={styles.btnProceed}
                        onPress={onPay}>
                        <Text style={[styles.sm_hermes_regular, {color: WHITE}]}>
                            {/*locale.t('pay')*/ 'pay'}
                        </Text>
                    </Button>
                    }

            </Container>
            }

            {(isLoading) && (
                <LoadingScreen />
            )}

        </>
    );
}

const styles = StyleSheet.create({

buttonnewcard:{
    width: 100,
    borderRadius: 5,
    marginVertical: 20,
    paddingVertical: 5,
    marginLeft: 'auto',
    backgroundColor: LIGHT_BROWN,
},
    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
       // color: BLUE_GREEN,
        //marginBottom: 30,
        textAlign: 'center',
    },

    xs_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(11),
        color: BLUE_GREEN,
    },



    container: {
        // width: '100%',
    },
    content: {
        // width: '100%',
        // alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },

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

    creditCardItemImg: {
        width: scale(15),
        height: scale(15),
        resizeMode: 'contain',
        marginRight: scale(5),
        marginBottom: scale(5),
    },

    btnProceed: {
        backgroundColor: BLUE_GREEN,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 50,
        width: buttonWidth,
    },


});
export default OrderPayment;