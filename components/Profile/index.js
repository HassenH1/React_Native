import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
// import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'


const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ height: "50%" }}
        source={{ uri: `https://images.unsplash.com/photo-1548179504-07be08162fc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80` }}
      />

      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            width: 140, height: 140, borderRadius: 140 / 2, marginTop: -60, borderWidth: 4, borderColor: "#efefef"
          }}
          source={{ uri: `https://images.unsplash.com/photo-1577975882846-431adc8c2009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80` }}
        />
      </View>

      <View style={{ alignItems: "center", margin: 15 }}>
        <Text style={{ fontSize:30}}>Hassen Hassen</Text>
      </View>

      <View style={{ marginLeft: 30, marginRight: 30, padding: 10, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 15 }}>
          Dream it, Do it.
          Like Nike. 
        </Text>
      </View>

      <View style={{ alignItems: "center", justifyContent: "space-evenly", flexDirection: "row", marginLeft:40, marginRight:40 }}>
        <View>
          <Text><Ionicons name="logo-facebook" size={25} color="#ffegef" /></Text>
        </View>
        
        <View>
          <Text><Ionicons name="logo-github" size={25} color="#ffegef" /></Text>
        </View>

        <View>
          <Text><Ionicons name="logo-linkedin" size={25} color="#ffegef" /></Text>
        </View>
      </View>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})
