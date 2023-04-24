import React, { createContext, useState } from 'react';
import {ReactNode} from "react";
//import { GoogleSignin } from '@react-native-google-signin/google-signin';
//import auth from '@react-native-firebase/auth';
import eventEmitAuth from "./EventEmitAuth";
export const AuthContext:React.Context<any> = createContext({});
export const AuthProvider = ( {children}) => {
    const [user, setUser] = useState<string>(null);
    console.log("auth6");
    return (
        <AuthContext.Provider value={{user,setUser,
            googleLogin: async () => {
                try {
                   // const { idToken } = await GoogleSignin.signIn();
                    //console.log(idToken);
                    //const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                    //const usercred=  await auth().signInWithCredential(googleCredential);
                    //console.log("google",usercred.user.displayName);
                    //setUser(usercred.user.displayName);
                    //eventEmitAuth.emit("user",usercred.user.displayName);
                } catch(e) {
                    alert(e);
                }
            },
            login: async (email, password) => {
                try {
                  //  const userbase=    await auth().signInWithEmailAndPassword(email, password);
                    // console.log("userlogin",userbase);
                    console.log("userlogin",email);
                    setUser(email) ;
                    // Оповещаю подписчиков что юзер сменился
                    eventEmitAuth.emit("user",email);
                } catch(e) {
                    alert(e);
                }
            },
            signup: async (email, password) => {
                try {
                    //await auth().createUserWithEmailAndPassword(email, password);
                    eventEmitAuth.emit("user",email);
                } catch (e) {
                    alert(e);
                }
            },

            logout: async () => {
                try {
                   // await auth().signOut()
                    eventEmitAuth.emit("user",null);
                } catch (e) {
                    console.error(e);
                }
            },
            emiterauth:eventEmitAuth


        }}>
            {children}
        </AuthContext.Provider>
    );
}