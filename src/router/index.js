import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Splash, Order, Profile } from '../pages'
import { BottomNavigator } from '../components'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home}></Tab.Screen>
            <Tab.Screen name="Order" component={Order}></Tab.Screen>
            <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
