import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {CafeDataMainProviderContext} from "../ContentsProvider/CafeDataMainProvider";
//import WelcomeScreen from "../screens/WelcomeScreen'";
import Tabs from "./Tabs";
import {CafeAuthProviderContext} from "../ContentsProvider/CafeAuthProvider";

export default function Routes() {
    const {user, setUser,emiterauth} = useContext<any>(CafeAuthProviderContext);
    const [initializing, setInitializing] = useState(true);
    console.log("routers8");

    const onAuthStateChanged = (user:string) => {
        console.log("Router22 mewuser",user);
         setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        emiterauth.on("user",(user)=>onAuthStateChanged(user) );

    }, []);


    //if (initializing) return null;

    /*return (
        <NavigationContainer>
            {user} ? {<TabNav /> null}: <AuthStack />
        </NavigationContainer>

    );
    */
    console.log("user-router",user);
    return (
        <NavigationContainer>
            {
                <Tabs/>
            }


        </NavigationContainer>

    );
}
