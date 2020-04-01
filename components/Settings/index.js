import React from 'react'
import { StyleSheet, Text, View, Button, Modal } from 'react-native'
import Constant from 'expo-constants'

const Settings = () => {

  const openModal = () => {
    console.log("modal should open")
  }

  return (
    <View style={styles.container}>

      <View>
        <Button
          title="Edit Profile"
          onPress={() => console.log("edit profile")}
        />
      </View>

      <View>
        <Button
          title="Delete Profile"
          onPress={() => console.log("Delete profile")}
        />
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: Constant.statusBarHeight,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
})
