/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {Animated, Text, TouchableOpacity, View, Platform, ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Container from '../../components/Container/Container';
import {scale} from "../../utils/scale";
import SignupInfo from "../AuthScreens/SignupInfo";
import {BLUE_GREEN, BROWN, LIGHT_BROWN, LINE_COLOR} from "../../utils/colorsConstant";
import Button from "../../components/ButtonControl/Button";

interface FavCafe {
    name: string;
    restaurantId: string;
    id:string;
}
type EditButtonProps = {
    onPressEdit: () => void;
    isEditing: boolean;
};
interface Points {
    pointsBalance: number;
    pointsEarned: number;
    pointsUsed: number;
};
interface Profile {
    avatar: string;
    email: string;
    mobilenumber: string;
    name: string;
    birthday?: Date;
    favCafe?: FavCafe;
    zipcode: string;
    points: Points;
    howManyAgeUnder13: string;
    userID: string;
}
type ProfileForm = Omit<Profile, 'points' | 'userID'>;

const locale={
    t:(item:string)=>item
}
const MyProfile = () => {

    const animatedValue = React.useRef<Animated.Value>(new Animated.Value(0));



    const navigation = useNavigation();

    const [isEditing, setIsEditing] = useState(false);

    const [inputForm, setInputForm] = useState<ProfileForm>({
        avatar: '',
        name: '',
        mobilenumber: '',
        email: '',
        birthday: undefined,
        zipcode: '',
        favCafe: undefined,
        howManyAgeUnder13: '0',
    });

    const showValidationError = (message: string) => {
        /*showErrorModal({
            title: locale.t('user_edit_error'),
            message,
        });
        */
    };


    const onPressEdit = () => {
        if (!isEditing) {
            setIsEditing(true);
            return;
        }

        if (!validateEmail(inputForm?.email ?? '')) {
            showValidationError(locale.t('email_invalid'));
            return;
        }



    };

    const updateInfo = (key: keyof ProfileForm, value: string | Date) => {
        let updateForm: ProfileForm = {...inputForm};

        if (key === 'birthday') {
            updateForm[key] = value as Date;
        } else if (key !== 'favCafe') {
            updateForm[key] = value as string;
        }
        setInputForm(updateForm);
    };

    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );
    };

    const onSelectFavCafe = (favCafe: FavCafe) => {
        let updateForm: ProfileForm = {...inputForm};

        updateForm['favCafe'] = {name: favCafe.name, restaurantId: favCafe.id,id:favCafe.id};
        setInputForm(updateForm);
    };
const onSave=()=>{

}

    return (
        <Container>

            <ScrollView style={{width: '100%'}}>
                <View style={styles.container}>
                    {/*   <PageTitle
                        style={{marginTop: 15}}
                        title={locale.t('my_information')}
                    />
                    */}
                    <View style={{marginBottom: scale(20)}} />
                    {/* Navn */}
                    <SignupInfo
                        infoTitle={locale.t('name')}
                        placeholder={'Anders Andersen'}
                        value={inputForm?.name}
                        onChangeText={(text) => updateInfo('name', text)}
                        autoComplete={undefined}             />
                    {/* Telefon */}
                    <SignupInfo
                       // editable={isEditing}
                        infoTitle={locale.t('telephone')}
                        placeholder={'+45 XX XX XX'}
                        value={inputForm?.mobilenumber}
                        autoComplete={undefined}
                        onChangeText={(text) => updateInfo('mobilenumber', text)}
                    />
                    {/* Email */}
                    <SignupInfo
                        infoTitle={locale.t('email')}
                        placeholder={'Anders@Vivaldi.dk'}
                        value={inputForm?.email}
                        autoComplete={undefined}
                        onChangeText={(text) => updateInfo('email', text)}
                    />
                    {/* Fødseldag */}
                    {/* <AppDatePicker
                        editable={isEditing}
                        value={inputForm.birthday}
                        label={locale.t('birthday')}
                        onSelectDate={(d) => updateInfo('birthday', d)}
                    />
                    */}
                    {/* Din fortrukende café */}

                    {/*   <FavCafeSelector
                        editable={isEditing}
                        label={locale.t('favorite_cafe')}
                        branchId={inputForm.favCafe?.restaurantId ?? ''}
                        onSelectFavCafe={onSelectFavCafe}
                    />
                    */}
                    {/* Hvor mange børn under 13ør */}
                    <SignupInfo
                        editable={isEditing}
                        infoTitle={locale.t('how_many_age_under_13')}
                        placeholder={'2'}
                        value={inputForm?.howManyAgeUnder13}
                        onChangeText={(text) => updateInfo('howManyAgeUnder13', text)}
                        autoComplete={undefined}
                    />
                    {
                        // @ts-ignore
                    <Button onPress={onSave} variant="outlined" style={styles.button}>
                        <Text style={[styles.sm_hermes_regular]}>
                            {locale.t('save')}
                        </Text>
                    </Button>
                    }
                </View>
                <View
                    style={{
                        marginTop: 40,
                        marginBottom: 40,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={[styles.sm_hermes_regular, {marginBottom: 10}]}>
                        {locale.t('would_you_like_to_delete')}
                    </Text>
                    <Text
                        onPress={() => {
                          //  swipablePanelRef.current?.show();
                        }}
                        style={[
                            styles.sm_hermes_regular,
                            {textDecorationLine: 'underline'},
                        ]}>
                        {locale.t('delete_profile')}
                    </Text>
                </View>
            </ScrollView>

        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        paddingBottom: 3,
        paddingTop: 17,
        borderBottomColor: LINE_COLOR,
        marginBottom: 15,
    },

    editButton: {
        paddingVertical: scale(4),
        paddingHorizontal: scale(20),
        borderColor: BLUE_GREEN,
        borderWidth: 1,
        borderRadius: 5,
        border: 1,
    },

    footerContent: {
        marginTop: 0,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
    },
    button:{
        width: scale(160),
        borderRadius: 5,
      //  marginVertical: 10,
       // paddingVertical: 5,
      //  marginLeft: 'auto',
        backgroundColor: BROWN,

    },
});
export default MyProfile;
