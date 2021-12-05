import React from 'react'
import {View, StyleSheet} from 'react-native'

import {Text} from '../theme'

interface iProps {
  title?: string | number
  value?: string | number
  width?: number | string
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 58,
    borderRadius: 5,
    backgroundColor: '#111d3d',
    flexShrink: 1,
    margin: 4,
  },
})

const index: React.FC<iProps> = props => {
  const {title = 'Title', value = 'Value', width} = props
  return (
    <View style={[styles.container, {width}]}>
      <Text variant="body">{title}</Text>
      <Text>{value}</Text>
    </View>
  )
}

export default index
