import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Map from '../pages/Map';

const Stack = createNativeStackNavigator();

function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
    )
}


export default AppRoutes;