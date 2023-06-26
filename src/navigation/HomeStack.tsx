import React, {useContext} from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import {ToastProvider} from "../components/Toast/Toast";
import MenuDetail from "../components/MenuListControl/MenuDetail";
import OrderContents from "../screens/OrderContents";
import OrderPayment from "../screens/OrderPayment";
import { CafeDataMainProviderContext} from "../ContentsProvider/CafeDataMainProvider";
import {AuthStack} from "./AuthStack";
import ChooseRestoran from "../components/RestoranListControl/ChooseRestoran";
//import MenuListController from "../components/MenuListControl/MenuListControl";
//import WellcomeScreen from "../screens/WelcomeScreen";
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

//const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();
const HomePr=()=>{
    const { restoranGlobalContext } = useContext(CafeDataMainProviderContext);
    console.log("HomeStack29",restoranGlobalContext)
    return (
        restoranGlobalContext===null? <ChooseRestoran/>:<ToastProvider><Home/></ToastProvider>

    )
}

// @ts-ignore
const MenuDetailAuth:React.FC=({route,navigation})=>{
    const {user, setUser,emiterauth} = useContext<any>(CafeDataMainProviderContext);

    return (
        <>
        {// @ts-ignore
            user!==null?<MenuDetail route={route} navigation={navigation}/>:<AuthStack/>
        }
        </>

    )
}
const HomeStack = () => {

    return (
        <Stack.Navigator
            initialRouteName='HomePage'
            screenOptions={{ headerShown: false }}
        >
             <Stack.Screen name='HomePage' component={HomePr} />
              <Stack.Screen name='MenuDetail' component={MenuDetailAuth} />
              <Stack.Screen name='OrderContents' component={OrderContents} />
              <Stack.Screen name='OrderPayment' component={OrderPayment} />
            {/*  <Stack.Screen name='WellcomeScreen' component={WellcomeScreen} />
            {/*<Stack.Screen name='SierraNevada' component={SierraNevada} />
            <Stack.Screen name='Osaka' component={Osaka} />
           */}
        </Stack.Navigator>
    )
}

export default HomeStack
