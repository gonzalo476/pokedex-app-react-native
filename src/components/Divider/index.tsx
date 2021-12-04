import React from 'react'
import {StyleSheet, View} from 'react-native'

interface iProps {
  marginVertical?: number | string
  marginHorizontal?: number | string
}

const styles = StyleSheet.create({
  line: {
    borderColor: '#566daf',
    borderStyle: 'solid',
    borderWidth: 0.3,
    width: '100%',
    height: 1,
  },
})

const Index: React.FC<iProps> = props => {
  const {marginHorizontal, marginVertical} = props
  return <View style={[styles.line, {marginHorizontal, marginVertical}]} />
}

export default Index
