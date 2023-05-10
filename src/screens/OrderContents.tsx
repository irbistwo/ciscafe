import React, {useContext, useEffect} from 'react';
import {Dimensions, FlatList, Text, View,StyleSheet} from 'react-native';
import Container from "../components/Container/Container";
import {scale} from "../utils/scale";
import {BLUE_GREEN, LINE_COLOR, WHITE} from "../utils/colorsConstant";
import {CafeDataMainProviderContext} from "../ContentsProvider/CafeDataMainProvider";
import OrderItem from "../components/Container/OrderContainer/OrderItem";
import {ListHeader} from "../components/Container/OrderContainer/ListHeader";
import {ListFooter} from "../components/Container/OrderContainer/ListFooter";
import Button from "../components/ButtonControl/Button";
import {useNavigation} from "@react-navigation/native";



const buttonWidth = Dimensions.get('screen').width * 0.55;
const OrderContents:React.FC=()=>{
    const {order,setOrder}=useContext<any>(CafeDataMainProviderContext);
    const navigation = useNavigation();
/*
    useEffect(() => {
        if (order.length === 0) {
            navigation.goBack();
        }
    }, [navigation, order.length]);
    */
    const gotoPayment = () => {
        // @ts-ignore
        navigation.navigate('OrderPayment');
    };
    return (
        // @ts-ignore
        <Container>
            <View style={styles.content}>
                <FlatList
                    style={styles.list}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContentContainerStyle}
                    data={order}
                    renderItem={({item}) => <OrderItem item={item} />}
                    keyExtractor={(item, index) =>  index.toString()}
                    ListFooterComponent={<ListFooter />}
                    ListHeaderComponent={<ListHeader />}
                />
            </View>
            {/* PROCEED */}
            {
                // @ts-ignore
            <Button
               // disabled={!tableNumber && isDineIn}
                buttonSize="regular"
                style={styles.buttonProceed}
                onPress={gotoPayment}>
                <Text style={[styles.sm_hermes_regular, {color: WHITE}]}>
                    {/*locale.t('goto_payment')*/'goto_payment'}
                </Text>
            </Button>
            }
        </Container>
    )

}

const styles = StyleSheet.create({

    content: {
        paddingHorizontal: 20,
        // width: '100%',
        // alignItems: 'center',
        // paddingHorizontal: 20,
    },

    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
    },
    buttonProceed: {
        backgroundColor: BLUE_GREEN,
        alignSelf: 'center',
        position: 'absolute',
        width: buttonWidth,
        bottom: 50,

    },





    /*

    buttonProceed: {
        backgroundColor: BLUE_GREEN,
        alignSelf: 'center',
        position: 'absolute',
        width: buttonWidth,
        bottom: 50,
    },
    */

    // LIST
    list: {
        width: '100%',
    },
    listContentContainerStyle: {
        paddingBottom: 150,
    },
});


export default OrderContents;