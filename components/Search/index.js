import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native'


const Search = (props) => {

  const [value, SetValue] = useState("")

  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <View style={{
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        elevation: 5,
        backgroundColor: "#fff",
        shadowOffset: { //shadowing for ios 
          width: 1,
          height: 1
        },
        shadowColor: "black",
        shadowOpacity: 1.0,
        borderTopWidth: 0
      }}>

        <TextInput
          style={{
            width: "80%",
            backgroundColor: "#e6e6e6",
          }}
          value={value}
          onChangeText={(text) => SetValue(text)}
        />
        <Ionicons
          style={{
            color: "black"
          }}
          name="md-send"
          size={32}
          onPress={() => console.log("hello world")}
        />
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})
// onPress={() => navigation.navigate("search")}