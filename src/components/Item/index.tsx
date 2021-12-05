import React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import {icons} from '../../../constants'
import {iItems} from '../../types'

import Coins from '../Coins'
import Divider from '../Divider'
import {Text} from '../theme'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
    flexShrink: 1,
  },
  icon: {
    height: 100,
    width: 100,
  },
})

const Index: React.FC<iItems> = props => {
  const {name, sprite, cost, effect} = props
  return (
    <>
      <View style={styles.container}>
        <Image
          source={sprite ? {uri: sprite} : icons.fire}
          style={styles.icon}
        />
        <View style={{flexShrink: 1, width: '100%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text variant="body" type="Bold">
              {name}
            </Text>
            <Coins numberOfCoins={cost} />
          </View>
          <Text variant="body" flexShrink={1} UIColor="disabledLight">
            {effect}
          </Text>
        </View>
      </View>
      <Divider />
    </>
  )
}

export default Index
