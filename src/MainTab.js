import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import CustomTabBar from "./component/CustomTabBar";
import Home from './pages/Home';
import Search from './pages/Search';
import Appointments from './pages/Appointments';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator screenOptions={{tabBarStyle:{
        position: 'absolute',
    }}}>
        <Tab.Screen 
            name='Home' 
            component={Home} 
            options={{ 
                headerShown: false, 
                tabBarShowLabel: false,
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name="home" size={size} color={'#FA8072'}/>
                    }else{
                        return <Ionicons name="home-outline" size={size} color={color}/>
                    }
                }
            }}
        />
        <Tab.Screen 
            name='Search'
            component={Search} 
            options={{ 
                headerShown: false, 
                tabBarShowLabel: false,
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name="search" size={size} color={'#FA8072'}/>
                    }else{
                        return <Ionicons name="search-outline" size={size} color={color}/>
                    }
                }
            }}
        />
        <Tab.Screen 
            name='Chat' 
            component={Chat}
            options={{ 
                headerShown: false, 
                tabBarShowLabel: false,
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name="chatbox" size={size} color={'#FA8072'}/>
                    }else{
                        return <Ionicons name="chatbox-outline" size={size} color={color}/>
                    }
                }
            }}/>
        <Tab.Screen 
            name='Appointments' 
            component={Appointments}
            options={{ 
                headerShown: false, 
                tabBarShowLabel: false,
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name="chatbox" size={size} color={'#FA8072'}/>
                    }else{
                        return <Ionicons name="chatbox-outline" size={size} color={color}/>
                    }
                }
            }}/>
        <Tab.Screen 
            name='Profile' 
            component={Profile}
            options={{ 
                headerShown: false,
                tabBarShowLabel: false, 
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name="person" size={size} color={'#FA8072'}/>
                    }else{
                        return <Ionicons name="person-outline" size={size} color={color}/>
                    }
                }
            }}/>
    </Tab.Navigator>
);