import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Modal, TouchableHighlight, Alert } from 'react-native'
import Constant from 'expo-constants'

const Settings = () => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      {/* <Modal
        animationType="fade"
        visible={modalVisible}
      >
        <View style={styles.modalContent}>
          <Text>Hello from modal</Text>
        </View>
      </Modal> */}

      <View>
        <Button
          title="Edit Profile"
          onPress={() => console.log("edit profile")}
        />
      </View>

      <View>
        <Button
          title="Delete Profile"
          onPress={() => console.log("delete")}
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
  },
})
