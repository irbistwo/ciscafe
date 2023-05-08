import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useNavigation, useRoute} from "@react-navigation/native";
import {Dimensions, ScrollView, StyleSheet, View,Text} from "react-native";
import {BLUE_GREEN, LIGHT_BROWN, LINE_COLOR, WHITE} from "../../utils/colorsConstant";
import {scale} from "../../utils/scale";
import Container from "../Container/Container";
import Accordion from "../Container/Accordeon";
import ExtraItem from "../Container/ExtraItem";
import ModificatorControl from "../Container/ModificatorContainter";
import Stepper from "../Container/Stepper";
import Button from "../ButtonControl/Button";
import { CafeDataMainProviderContext} from "../../ContentsProvider/CafeDataMainProvider"
import structuredClone from '@ungap/structured-clone';

const footerHeight = Dimensions.get('screen').height * 0.1;
// @ts-ignore
const MenuDetail:React.FC=({route,navigation})=>{
  const {order,setOrder}=useContext<any>(CafeDataMainProviderContext);
  const {menuItem,isNew,onOrderCallBack}=route.params;
  const[qty,setQty]=useState(menuItem.qty??1);
  const [caption,setCaption]=useState("add_to_order");
  console.log("MenuDetail9",menuItem,isNew);
  useEffect(()=>{
      if(!isNew) setCaption("update_opred");
  },[isNew])

 const addToOrder=() =>{
     if(qty===0) return; if(qty<0) return;
     if(!menuItem.qty) menuItem.qty=0;
     menuItem.qty=menuItem.qty+qty;
let message:string=`${menuItem.name} + ${menuItem.qty} added to order`;
if(!isNew) {message=`${menuItem.name} = ${menuItem.qty} updated to order`;
    menuItem.qty=qty;
   // const neworder=structuredClone(order);
    const neworder=[...order];
    setOrder(neworder);
    navigation.goBack();
    onOrderCallBack?.();
return;
}

//const neworder=structuredClone(order);
     const neworder=order.map(item=>({...item}));

     let pushedmenu=structuredClone(menuItem);
     pushedmenu.qty=qty;
    // console.log("Menudetail37",pushedmenu,pushedmenu.options)
   //if(pushedmenu.attributes.options)  pushedmenu.attributes.options=[...pushedmenu.attributes.options];
neworder.push(pushedmenu);
setOrder(neworder);
     navigation.goBack();
     onOrderCallBack?.(message);

 }

    const onIncrease=()=>{
        setQty(qty+1)
    }

    const onDecrease=()=>{
      if(qty-1<0) return;
        setQty(qty-1)
    }
    // @ts-ignore
    return(
      // @ts-ignore
        <Container >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.content}>
            <View  style={styles.row}>
              <Text
                  style={[
                    styles.md_hermes_regular,
                    { fontSize: 22},
                  ]}>
                {menuItem?.name}
              </Text>

              {/* PRICE */}
              <Text  style={styles.md_hermes_regular}>
                {`${menuItem?.price},-`}
              </Text>
            </View>
            {/* DESCRIPTION */}
            {menuItem?.description && (
                <Text
                    style={styles.sm_hermes_regular}>
                  {`${menuItem?.description}`}
                </Text>
            )}
          </View>
          {/* EXTRAS */}
          {!!menuItem?.extras && menuItem.extras.length > 0 && (
              // @ts-ignore
              <Accordion title={/*locale.t*/('extras')}>
                {menuItem.extras.map((extra) => {
                  return <ExtraItem key={extra._id} extra={extra} />;
                })}
              </Accordion>
          )}

          {/* MODIFICATORs */}
          {!!menuItem.attributes  && menuItem.attributes.length > 0 && (

              <ModificatorControl modificators={menuItem.attributes}/>

          )}
          </ScrollView>
          {/* FOOTER */}
          <View style={[styles.row, styles.footerContainer]}>
            {/* ADD TO CART BUTTON */}

            <Stepper
                qty={qty ?? 1}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
                style={{
                  qtyStyle: {marginHorizontal: 10, fontSize: 16},
                  containerStyle: {height: scale(42)},
                }}
            />
              {// @ts-ignore

               <Button
                style={styles.button}
                buttonSize="regular"
                onPress={addToOrder}>
              <Text
                  style={[
                    styles.xs_hermes_regular
                  ]}>
               {caption}
              </Text>
            </Button>
              }

          </View>
        </Container>
    )
}
const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: footerHeight,
  },
    button:{
        width: '45%',
        marginLeft: 12,
        backgroundColor: BLUE_GREEN,
    },
  content: {
    display: 'flex',
    paddingTop: 20,
    marginHorizontal: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
    borderBottomColor: LINE_COLOR,
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  md_hermes_regular: {
    fontFamily: 'Hermes-Regular',
    fontSize: scale(20),
    color: BLUE_GREEN,
  },
  sm_hermes_regular: {
    fontFamily: 'Hermes-Regular',
    fontSize: scale(15),
    color: BLUE_GREEN,
  },
    footerContainer: {
        backgroundColor: LIGHT_BROWN,
        position: 'absolute',
        bottom: 0,
        left: 10,
        right: 10,
        height: footerHeight,
        justifyContent: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        paddingHorizontal: 10,
        // shadowColor: '#000',
        // shadowOffset: {width: 1, height: 1},
        // shadowOpacity: 0.4,
        // shadowRadius: 3,
        // elevation: 1,
    },
    xs_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(12),
        color: WHITE,
    },

})
export default MenuDetail;