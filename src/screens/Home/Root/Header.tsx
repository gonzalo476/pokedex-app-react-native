import React from 'react'
import {View, StyleSheet, Image, Pressable} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {icons, images} from '../../../../constants'

import {width, Coins} from '../../../components'

interface iProps {
  onPressUser?: () => void
}

const PADDING_V = 10

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#121E41',
    paddingHorizontal: 16,
    paddingBottom: PADDING_V,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centerContainer: {
    height: 50,
    width: width / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    height: 50,
    width: width / 3 - 26,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  leftContainer: {
    height: 50,
    width: width / 3 - 26,
    justifyContent: 'center',
  },
  logo: {
    height: 25,
    width: 90,
  },
  avatar: {
    height: 30,
    width: 30,
  },
})

const Header: React.FC<iProps> = props => {
  const {onPressUser} = props
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.container, {paddingTop: insets.top + PADDING_V}]}>
      <View style={styles.content}>
        <View style={styles.leftContainer}>
          <Coins numberOfCoins={1500} />
        </View>
        <View style={styles.centerContainer}>
          <Image style={styles.logo} source={icons.logo} />
        </View>
        <Pressable style={styles.rightContainer} onPress={onPressUser}>
          <Image style={styles.avatar} source={images.avatar} />
        </Pressable>
      </View>
    </View>
  )
}

export default Header
