import React, {createContext, useEffect, useState} from 'react';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';
//import ContentsProvider from '@react-native-firebase/ContentsProvider';

import AsyncStorage from "@react-native-async-storage/async-storage";
import {IBeedType, IGlobalRestoranItem} from "./ITypeForProvider";
/* in This contenxt saved main items-values such as
* choosen restoran ,order, auth user paycontents and speading this values on all app
*  */

export const CafeDataMainProviderContext:React.Context<any> = createContext({});
export const CafeDataMainProvider = ({children}) => {
   // const [user, setUser] = useState<string>(null);
    const [order, setOrder] = useState<any>([]);
    const [restoranList, setRestoranList] = useState<any>([]);
   // const [token, setToken] = useState<string>(null);
const [restoranGlobalContext,setRestoranGlobalContext]=useState<IGlobalRestoranItem>(null)
const[beedtype,setBeedType]=useState<IBeedType>({beedtype:"Dine"});
   /* useEffect(()=>{
        if(user) return;
        const profile= AsyncStorage.getItem("user");
        profile.then((value) => {
            if (value == null) {

            } else {
                const  resuser=JSON.parse(value);
               setUser(resuser.profile.name);
                setToken(resuser.token);
            }
        })
    },[user])
    */
    return (
        <CafeDataMainProviderContext.Provider value={{order,setOrder,beedtype,setBeedType,
            restoranGlobalContext,setRestoranGlobalContext,restoranList,setRestoranList,
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



        }}>
            {children}
        </CafeDataMainProviderContext.Provider>
    );
}
