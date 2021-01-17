import React from 'react';
import {Text, View} from 'react-native'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import GlobalScreen from '../Screens/GlobalScreen';
import HomeScreen from '../Screens/HomeScreen';
import MexicoScreen from '../Screens/MexicoScreen';
import PaisScreen from '../Screens/PaisScreen';
import PrevencionScreen from '../Screens/PrevencionScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator1(){
    return(
        <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{
                backgroundColor:'#ffff',
                width:'80%'
            }}
            drawerContentOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606"
            }}
        
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerLabel:"Inicio",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />

            <Drawer.Screen
                name="Global"
                component={GlobalScreen}
                options={{
                    drawerLabel:"Global",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-globe-outline"} size={20} color={color}/>
                    )
                }}
            />

            <Drawer.Screen
                name="Mexico"
                component={MexicoScreen}
                options={{
                    drawerLabel:"Mexico",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-locale-outline"} size={20} color={color}/>
                    )
                }}
            />

            <Drawer.Screen
                name="Pais"
                component={PaisScreen}
                options={{
                    drawerLabel:"Pais",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-search-outline"} size={20} color={color}/>
                    )
                }}
            />

                <Drawer.Screen
                name="Prevencion"
                component={PrevencionScreen}
                options={{
                    drawerLabel:"Prevencion",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-shield-outline"} size={20} color={color}/>
                    )
                }}
            />

        </Drawer.Navigator>
    )
}