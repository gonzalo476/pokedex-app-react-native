import React from 'react'
import {View, StyleSheet, Image} from 'react-native'

import {icons} from '../../../constants'
import {Text} from '../theme'

interface iProps {
  numberOfCoins?: number
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(76, 152, 232, 0.18)',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(151, 151, 151, 0.13)',
  },
  icon: {
    width: 20,
    height: 20,
  },
})

const Index: React.FC<iProps> = props => {
  const {numberOfCoins = 0} = props
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icons.coin} resizeMode="contain" />
      <Text variant="headline">{numberOfCoins.toString()}</Text>
    </View>
  )
}

export default Index
