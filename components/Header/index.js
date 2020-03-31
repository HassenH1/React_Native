import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native'


const Header = () => {
  return (
    <View style={{
      height: 45,
      backgroundColor: "white",
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
        margin: 5
      }}>
        <AntDesign name="youtube" size={32} color="red" style={{
          marginLeft: 20
        }} />
        <Text style={{
          fontSize: 22,
          marginLeft: 5,
          fontWeight: "bold",
          color: "red"
        }}>Youtube</Text>
      </View>

      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
        width: 150,
        margin: 5
      }}>
        <Ionicons name="md-videocam" size={32} color="red" />
        <Ionicons name="md-search" size={32} color="red" onPress={() => navigation.navigate("search")} />
        <MaterialIcons name="account-circle" size={32} color="black" />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
// onPress={() => navigation.navigate("search")}