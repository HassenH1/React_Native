import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


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
        <Text style={{ fontSize:30}}>NameGoesHere</Text>
      </View>

      <View style={{ alignItems: "center", justifyContent: "space-evenly", flexDirection: "row", marginLeft:"40px", marginRight:"40px" }}>
        <View>
          <Text>One</Text>
        </View>
        
        <View>
          <Text>Two</Text>
        </View>

        <View>
          <Text>Three</Text>
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
