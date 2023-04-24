import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthContext} from "../auth/AuthProvider";
import {AuthStack} from "./AuthStack";
//import WelcomeScreen from "../screens/WelcomeScreen'";
import Tabs from "./Tabs";

export default function Routes() {
    const {user, setUser,emiterauth} = useContext<any>(AuthContext);
    const [initializing, setInitializing] = useState(true);
    console.log("routers8");
    const onAuthStateChanged = (user:string) => {
        console.log("Router22 mewuser",user);
        // setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        emiterauth.on("user",(user)=>onAuthStateChanged(user) );
        /*  const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
          return subscriber;
          */
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
                (user===null)?<Tabs/>:<AuthStack/>
            }


        </NavigationContainer>

    );
}