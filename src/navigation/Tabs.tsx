import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import DrawerStack from "./DraverStack";
import {Image, View,Text} from "react-native";
import {scale} from '../utils/scale'
import ProfileStack from "./ProfileStack";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeStack from "./HomeStack";
import WelcomeStack from "./WelcomeStack";





const Tab = createBottomTabNavigator();
/*
const DrawerNav = () => {
    return (
        <DrawerStack />
    );
}
*/
const tabBottom=(icon:any,text:string)=>(
    (<View>
            <Image
                style={{
                    width: scale(30),
                    height: scale(30),
                    resizeMode: 'contain',
                }}

                source={icon}
            />
            <Text>{text}</Text>
        </View>
))

const Tabs=()=>{
    //const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {elevation: 0, borderTopWidth: 0, backgroundColor: '#eae3d2'},
                tabBarIcon: ({ focused, color}) => {
                    let iconName:string;
                    if (route.name === 'Welcome'){
                        color = focused ? '#3a86fe' : 'white'
                        iconName = 'home';
                        const icon=focused?require('../assets/images/bottom-nav/hijem-select.png'):
                            require('../assets/images/bottom-nav/hijem.png');
                        return tabBottom(icon,"Welcome");

                    } else if (route.name === 'Profile'){
                        color = focused ? '#3a86fe' : 'white'
                      //  iconName = 'compass'
                        const icon=focused?require('../assets/images/bottom-nav/profil-select.png'):
                            require('../assets/images/bottom-nav/profil.png');
                        return tabBottom(icon,"Profile");
                    } else if (route.name === 'Menu'){
                        color = focused ? '#3a86fe' : 'white'
                      //  iconName =
                        iconName = 'book'
                    } else {
                        color = focused ? '#3a86fe' : 'white'
                        iconName = 'user'
                    }
                    return <Icon name={iconName} size={25} color={color} />;
                },
                tabBarShowLabel: false,
            })}
        >
            <Tab.Screen name='Welcome' component={WelcomeStack} />
            <Tab.Screen name='Menu' component={DrawerStack} />
            <Tab.Screen name='Profile' component={ProfileStack} />

            {/* <Tab.Screen name='Directions' component={HomeMap} />
            <Tab.Screen name='Bookmarks' component={Bookmarks} />
            <Tab.Screen name='User' component={UserProfile} />*/}
        </Tab.Navigator>
    )

}

export default Tabs;