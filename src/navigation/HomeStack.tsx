import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import {ToastProvider} from "../components/Toast/Toast";
/*
import Boseman from "../screens/Home/Boseman";
import Search from '../screens/Home/Search';
import HomeMap from "../components/Map";
import Boseman from '../screens/Home/Boseman';
import Rajasthan from '../screens/Home/Rajasthan';
import TianTan from '../screens/Home/TianTan';
import SierraNevada from '../screens/Home/SierraNevada';
import Osaka from '../screens/Home/Osaka';

*/

const Stack = createStackNavigator();
const HomePr=()=>{
    return (
        <ToastProvider><Home/></ToastProvider>

    )
}
const HomeStack = () => {

    return (
        <Stack.Navigator
            initialRouteName='HomePage'
            screenOptions={{ headerShown: false }}
        >
             <Stack.Screen name='HomePage' component={HomePr} />
         {/*  <Stack.Screen name='Boseman' component={Boseman} />
            <Stack.Screen name='SearchPage' component={Search} />
            <Stack.Screen name='Map' component={HomeMap} />
            <Stack.Screen name='Rajasthan' component={Rajasthan} />
            <Stack.Screen name='TianTan' component={TianTan} />
            <Stack.Screen name='SierraNevada' component={SierraNevada} />
            <Stack.Screen name='Osaka' component={Osaka} />
           */}
        </Stack.Navigator>
    )
}

export default HomeStack