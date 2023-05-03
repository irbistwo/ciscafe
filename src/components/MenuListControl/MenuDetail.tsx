import React, {useContext, useEffect, useState} from 'react';
import {useNavigation, useRoute} from "@react-navigation/native";
import {Dimensions, ScrollView, StyleSheet, View,Text} from "react-native";
import {BLUE_GREEN, LINE_COLOR} from "../../utils/colorsConstant";
import {scale} from "../../utils/scale";
import Container from "../Container/Container";
import Accordion from "../Container/Accordeon";
import ExtraItem from "../Container/ExtraItem";
import ModificatorControl from "../Container/ModificatorContainter";

const footerHeight = Dimensions.get('screen').height * 0.1;
// @ts-ignore
const MenuDetail:React.FC=({route,navigation})=>{
   //const navigation=useNavigation();
  const {menuItem,isNew}=route.params;
  console.log("MenuDetail9",menuItem,isNew);

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
        </Container>
    )
}
const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: footerHeight,
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

})
export default MenuDetail;