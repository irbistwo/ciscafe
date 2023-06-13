import React, {useCallback, useContext, useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileMain from "../screens/ProfileMain";
import {AuthStack} from "./AuthStack";
import {CafeDataMainProviderContext} from "../ContentsProvider/CafeDataMainProvider";
import Login from "../screens/AuthScreens/Login";
import MyProfile from "../screens/ProfileScreens/MyProfile";
import OrderReestr from "../screens/ProfileScreens/OrderReestr";
import OrderUserContents from "../screens/ProfileScreens/OrderUserContents";
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
//
//const user="user";
const ProfileMainAuth:React.FC=()=>{
    const {user, setUser,emiterauth} = useContext<any>(CafeDataMainProviderContext);
    //const [userlocal,setUserlocal]=useState(user);
    //const[auth,setAuth]=useState(false);
   // const [crender,setcrender]=useState(0)
    /*
    useEffect(() => {
        emiterauth.on("user",(user)=>onAuthStateChanged(user) );

    }, []);

    const onAuthStateChanged = (user:string) => {
        console.log("ProfileStrack40 user",user);
        setUserlocal(user);
       // setcrender(crender+1);
        setUser(user);

    };
    */
    console.log("ProfileStrack42 user",user);
    return (
      user!==null?<ProfileMain/>:<AuthStack/>


    )
}

const ProfileStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='ProfilePage'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name='ProfilePage' component={ProfileMainAuth} />
         <Stack.Screen name='MyProfile' component={MyProfile} />
           <Stack.Screen name='OrderReestr' component={OrderReestr} />
            <Stack.Screen name='OrderUserContents' component={OrderUserContents} />
            {/*<Stack.Screen name='OrderPayment' component={OrderPayment} />
            {/* <Stack.Screen name='Rajasthan' component={Rajasthan} />
            <Stack.Screen name='TianTan' component={TianTan} />
            <Stack.Screen name='SierraNevada' component={SierraNevada} />
            <Stack.Screen name='Osaka' component={Osaka} />
           */}
        </Stack.Navigator>
    )
}

export default ProfileStack