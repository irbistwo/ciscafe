import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/AuthScreens/Login";
import WellcomeScreen from "../screens/WelcomeScreen";
import Home from "../screens/Home";
const Stack = createStackNavigator();
const WelcomeStack=()=>{
    return (
    <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="WelcomeScreen" component={WellcomeScreen} />
        {/* <Stack.Screen name='HomePage' component={Home} />
        {/*   <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SetPhotoName" component={SetPhotoName} />
        */}
    </Stack.Navigator>
    )
}
export default WelcomeStack;