import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Map from '../pages/Map';
import Profile from '../pages/Profile';
import Weather from '../pages/Weather';
import Account from '../pages/Account';

import Feather from 'react-native-vector-icons/Feather'; 

const Tab = createBottomTabNavigator();

function AppRoutes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: "#FFCA01",
                tabBarStyle:{
                    backgroundColor: '#16202A',
                    borderTopWidth: 0,
                }
            }}
        >
            <Tab.Screen 
                name="Map" 
                component={Map} 
                options={{  
                    tabBarLabel: 'Mapa',
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="map" color={color} size={size} />
                    }
                }}
            />

            <Tab.Screen 
                name="Weather" 
                component={Weather} 
                options={{  
                    tabBarLabel: 'Clima',
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="sun" color={color} size={size} />
                    }
                }}
            />

            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{  
                    tabBarLabel: 'Conta',
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="user" color={color} size={size} />
                    }
                }} 
            />

        </Tab.Navigator>
    )
}


export default AppRoutes;