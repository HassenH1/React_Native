import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home'
import Signup from '../Signup'
import Profile from '../Profile'

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
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