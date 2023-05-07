import React, { createContext, useState } from 'react';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';
//import ContentsProvider from '@react-native-firebase/ContentsProvider';

import eventEmitAuth from "./EventEmitAuth";
/* in This contenxt saved main items-values such as
* choosen restoran ,order, auth user paycontents and speading this values on all app
*  */

export const CafeDataMainProviderContext:React.Context<any> = createContext({});
export const CafeDataMainProvider = ({children}) => {
    const [user, setUser] = useState<string>(null);
    const [order, setOrder] = useState<any>([]);
    console.log("auth6");
    return (
        <CafeDataMainProviderContext.Provider value={{user,setUser,order,setOrder,
            googleLogin: async () => {
                try {
                   // const { idToken } = await GoogleSignin.signIn();
                    //console.log(idToken);
                    //const googleCredential = ContentsProvider.GoogleAuthProvider.credential(idToken);
                    //const usercred=  await ContentsProvider().signInWithCredential(googleCredential);
                    //console.log("google",usercred.user.displayName);
                    //setUser(usercred.user.displayName);
                    //eventEmitAuth.emit("user",usercred.user.displayName);
                } catch(e) {
                    alert(e);
                }
            },
            login: async (email, password) => {
                try {
                  //  const userbase=    await ContentsProvider().signInWithEmailAndPassword(email, password);
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
                    //await ContentsProvider().createUserWithEmailAndPassword(email, password);
                    eventEmitAuth.emit("user",email);
                } catch (e) {
                    alert(e);
                }
            },

            logout: async () => {
                try {
                   // await ContentsProvider().signOut()
                    eventEmitAuth.emit("user",null);
                } catch (e) {
                    console.error(e);
                }
            },
            emiterauth:eventEmitAuth


        }}>
            {children}
        </CafeDataMainProviderContext.Provider>
    );
}