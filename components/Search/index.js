import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native'


const Search = (props) => {

  const [value, SetValue] = useState("")

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        height: 40,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        elevation: 1, //shadowing only works for andriod
        shadowOffset: { //shadowing for ios 
          width: 1,
          height: 1
        },
        shadowColor: "black",
        shadowOpacity: 0.5,
        // marginTop: Constant.statusBarHeight
        marginTop: 30
      }}>

        <TextInput
          style={{
            width: "90%",
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
          onPress={() => console.log("clicked")}
        />

      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})
// onPress={() => navigation.navigate("search")}