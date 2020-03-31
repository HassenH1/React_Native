import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home'
import Signup from '../Signup'
import Profile from '../Profile'
import { Ionicons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName
        if (route.name == 'Home') {
          iconName = 'ios-home'
        } else if (route.name == 'Profile') {
          iconName = 'ios-person'
        }
        return <Ionicons name={iconName} size={size} color={color} />
      }
    })}>

      <Tab.Screen
        name="Home"
        component={Home}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})