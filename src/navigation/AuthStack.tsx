import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from "../screens/Home";
import Login from "../screens/AuthScreens/Login";

const Stack = createStackNavigator();

export const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(null);
    let routeName;
    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        })



},[]);
/*
    if (isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch == true) {
        routeName = 'Welcome';
    } else {
        routeName = 'Login';
    }
*/
    console.log("auth34");
return (
    <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Login" component={Login} />
        {/*   <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SetPhotoName" component={SetPhotoName} />
        */}
    </Stack.Navigator>
)
}