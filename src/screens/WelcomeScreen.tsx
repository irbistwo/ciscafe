import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { CafeDataMainProviderContext } from '../ContentsProvider/CafeDataMainProvider';
import Button from "../components/ButtonControl/Button";
import Container from "../components/Container/Container";

const WellcomeScreen:React.FC = () => {
    const navigation = useNavigation();
    const navigateToTab=()=>{
        // @ts-ignore
        navigation.navigate("HomePage");
    }
    return (
        <Container>
            <Button onPress={navigateToTab}>

            </Button>
        </Container>
    )
}
export default WellcomeScreen