import React, {useContext, useEffect} from 'react';
import {Dimensions, FlatList, Text, View,StyleSheet} from 'react-native';
import Container from "../components/Container/Container";
import {scale} from "../utils/scale";
import {LINE_COLOR} from "../utils/colorsConstant";
import {CafeDataMainProviderContext} from "../ContentsProvider/CafeDataMainProvider";
import OrderItem from "../components/Container/OrderItem";



const buttonWidth = Dimensions.get('screen').width * 0.55;
const OrderContents:React.FC=()=>{
    const {order,setOrder}=useContext<any>(CafeDataMainProviderContext);

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
                   // ListFooterComponent={<ListFooter />}
                    //ListHeaderComponent={<ListHeader />}
                />
            </View>
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