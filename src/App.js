import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router'

function App () {
  return (
    <NavigationContainer>
      <Router></Router>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
