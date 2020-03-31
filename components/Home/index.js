import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../Header'

const Home = () => {
  const dispatch = useDispatch()
  const { auth, user, loading } = useSelector((state) => { /////////////////////< accesses the redux state
    return state
  })

  return (
    <View style={styles.container}>
      <Header />
      <Text>Hello world</Text> 
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})