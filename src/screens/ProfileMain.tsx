import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {ProfileMenuItem} from "../components/Container/ProfileContainer/ProfileMenuItem";
import Container from "../components/Container/Container";

const ProfileMain=()=>{
    const navigation = useNavigation();
    const navigateToPage = (screen: keyof ReactNavigation.RootParamList) => {
        navigation.navigate(screen);
    };
    return (
        <Container>
            <ProfileMenuItem
                navigationKey="MyPoint"
              //  userPoints={userPoint}
                onPressNavigation={navigateToPage}
                title={('my_point')}
               // title={locale.t('my_point')}
                extraContainerStyle={{marginBottom: 20}}
            />
            <ProfileMenuItem
                title={('club_vivaldi')}
                onPressNavigation={navigateToPage}
                navigationKey={'ClubVivaldi'}
            />
            <ProfileMenuItem
                title={('my_information')}
                onPressNavigation={navigateToPage}
                navigationKey={'MyProfile'}
            />
            <ProfileMenuItem
                title={('orderhistory')}
                onPressNavigation={navigateToPage}
                navigationKey={'OrderReestr'}
            />
            <ProfileMenuItem
                onPressNavigation={navigateToPage}
                title={('terms_and_conditions')}
                navigationKey={'TermsandConditions'}
            />
            <ProfileMenuItem
                onPressNavigation={navigateToPage}
                title={('privacy_policy')}
                navigationKey={'PrivacyPolicy'}
            />
            <ProfileMenuItem
                title={('contact_us')}
                onPressNavigation={navigateToPage}
                navigationKey={'ContactUs'}
            />


        </Container>
    )
}
export default React.memo(ProfileMain);
