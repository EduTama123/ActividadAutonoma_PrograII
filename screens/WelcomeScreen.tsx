import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <Button title='Ingresar' onPress={() => navigation.navigate("Drawer")} ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center'
  }
})