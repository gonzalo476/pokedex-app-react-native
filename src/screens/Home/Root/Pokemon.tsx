import React from 'react'
import {StyleSheet, View, SafeAreaView} from 'react-native'

import {Text} from '../../../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const Pokemon = (props: any) => {
  const {data} = props
  console.log(data)
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text variant="largeTitle">id:{data}</Text>
    </View>
  )
}

export default Pokemon
