import React from 'react'
import {StyleSheet, ScrollView} from 'react-native'

import {Text, ImageHeader} from '../../../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const Pokemon = (props: any) => {
  const {data} = props

  return (
    <ScrollView style={styles.container}>
      <ImageHeader />
      <Text variant="largeTitle">id:{data}</Text>
    </ScrollView>
  )
}

export default Pokemon
