import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useContext} from 'react';
import {useNavigation} from "@react-navigation/native";
import {CafeDataMainProviderContext} from "../../ContentsProvider/CafeDataMainProvider";
import Icon from "react-native-vector-icons/Feather";
import SignupInfo from "./SignupInfo";

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Login = () => {
    const {user, setUser,emiterauth} = useContext<any>(CafeDataMainProviderContext);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigation = useNavigation();

    return (
        <View>

            <View style={styles.upper}>
                {/*
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <IconContainer iconName='arrow-left' />
                    </TouchableOpacity>

                    <Text style={styles.titleText}> Login </Text>
                </View>
                */}
                {/*
                <View>
                    <Text style={styles.infoText}> Log in with the following option.</Text>
                    <View>
                        <TouchableOpacity style={styles.IconContainer} onPress={googleLogin}>
                            <Icon name='logo-google' size={30} color='white' />
                        </TouchableOpacity>
                    </View>
                </View>
                */}
            </View>


            <View style={styles.middle}>
                <SignupInfo
                    infoTitle='Email'
                    placeholder='Enter your email address'
                    autoComplete='email'
                    value={email}
                    onChangeText={userEmail => setEmail(userEmail)}
                />

                <SignupInfo
                    infoTitle='Password'
                    placeholder='Enter your password'
                    autoComplete='password'
                    value={password}
                    onChangeText={userPassword => setPassword(userPassword)}
                />
            </View>

            <View style={styles.lower}>
                <TouchableOpacity style={styles.button} onPress={() => {
setUser("username");
                  //  emiterauth.emit("user","username");
                    /*login(email, password)*/}}>
                    <Text style={styles.buttonText}> Log in </Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Text style={styles.loginText}> No account yet? </Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={[styles.loginText,  {
                           // fontFamily: 'AlongSansExtraBold',
                        }]}> Sign up </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    upper: {
        backgroundColor: 'black',
        height: SCREENHEIGHT / 3.5,
        width: SCREENWIDTH,
        padding: 20
    },

    middle: {
        backgroundColor: 'black',
        height: SCREENHEIGHT - (SCREENHEIGHT / 3.5) - (SCREENHEIGHT / 2.5),
        width: SCREENWIDTH,
        padding: 20,
    },

    lower: {
        backgroundColor: 'black',
        height: SCREENHEIGHT / 2.5,
        width: SCREENWIDTH,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    titleText: {
       // fontFamily: 'AlongSansExtraBold',
        marginLeft: 10,
        fontSize: 30,
        color: 'white'
    },

    infoText: {
       // fontFamily: 'AlongSansMedium',
        fontSize: 14,
        color: 'white',
        marginTop: 50,
    },

    IconContainer: {
        backgroundColor: 'black',
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginTop: 20,
        borderRadius: 200,
        borderWidth: 1,
        borderColor: 'gray',
    },

    button: {
        backgroundColor: 'white',
        width: 0.7 * SCREENWIDTH,
        height: 0.07 * SCREENHEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 15,
    },

    buttonText: {
       // fontFamily: 'AlongSansExtraBold',
        fontSize: 18,
        color: 'black',
        alignSelf: 'center'
    },

    loginText: {
       // fontFamily: 'AlongSansMedium',
        fontSize: 15,
        color: 'white',
        marginTop: 20,
    },
})