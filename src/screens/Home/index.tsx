import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

import {removeUser} from '../../utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="remove user" onPress={() => removeUser()} />
    </View>
  )
}

export default Home
