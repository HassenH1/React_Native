import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native'


const Search = (props) => {

  const [value, SetValue] = useState("")

  return (
      <View style={{
        height: 90,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        elevation: 1, //shadowing only works for andriod
        shadowOffset: { //shadowing for ios 
          width: 1,
          height: 1
        },
        shadowColor: "black",
        shadowOpacity: 0.5,
        // marginTop: Constant.statusBarHeight,
      }}>
        
        <TextInput
          style={{
            width: "70%",
            backgroundColor: "#e6e6e6",
            height: 40,
            margin: Constant.statusBarHeight,
            borderRadius: 30,
            paddingLeft: 10
          }}
          value={value}
          placeholder="Search"
          onChangeText={(text) => SetValue(text)}
        />

        {/* <Ionicons
          style={{
            color: "black",
            marginTop: Constant.statusBarHeight,
          }}
          name="md-send"
          size={32}
          onPress={() => console.log("clicked")}
        /> */}

      </View>
  )
}

export default Search

const styles = StyleSheet.create({})
// onPress={() => navigation.navigate("search")}