import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feather } from '@expo/vector-icons';

import Bebidas from './pages/Bebidas';
import Preload from './pages/Preload';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Chat from './pages/Chat';
import MainTab from './MainTab';

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Preload'>
                <Stack.Screen
                name="Preload"
                component={Preload}
                options={{ headerShown: false}}
                />
                <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false}}
                />
                <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false}}
                />
                <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false}}
                />
                <Stack.Screen
                name="Detail"
                component={Detail}
                options={{
                    headerRight: () =>(
                        <TouchableOpacity style={{ marginRight: 15}}>
                            <Feather
                            name='shopping-cart'
                            size={24}
                            color='#000'
                            />
                        </TouchableOpacity>
                    )
                }}
                />
                <Stack.Screen
                name="Bebidas"
                component={Bebidas}
                options={{ headerShown: false}}
                />
                <Stack.Screen
                name="Chat"
                component={Chat}
                options={{ headerShown: false}}
                />
                <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default Routes;