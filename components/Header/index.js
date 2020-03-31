import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Constant from 'expo-constants'

const Header = () => {
  return (
    <View style={{
      height: 45,
      backgroundColor: "fff",
      flexDirection: "row",
      justifyContent: "space-between",
      elevation: 4, //shadowing only works for andriod
      shadowOffset: { //shadowing for ios 
        width: 1,
        height: 1
      },
      shadowColor: "black",
      shadowOpacity: 1.0,
      marginTop: Constant.statusBarHeight
    }}>

      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
        width: 150,
        margin: 5
      }}>
        <Ionicons name="md-search" size={32} color="black" />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
// onPress={() => navigation.navigate("search")}