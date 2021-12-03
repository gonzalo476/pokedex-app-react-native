import React from 'react'
import {View, Pressable, Image, StyleSheet} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {icons} from '../../../constants'
import {Colors, Text} from '../theme'

interface iHeader {
  onPressArrowLeft?: () => void
  arrowLeft?: boolean
  title?: string
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blueDark,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  icon: {
    height: 25,
    width: 25,
  },
  iconContainer: {
    justifyContent: 'center',
    height: 35,
    width: 35,
  },
})

const Index: React.FC<iHeader> = props => {
  const {arrowLeft, onPressArrowLeft, title} = props
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.container, {top: insets.top}]}>
      {arrowLeft ? (
        <Pressable onPress={onPressArrowLeft} style={styles.iconContainer}>
          <Image
            source={icons.arrowLeft}
            style={styles.icon}
            resizeMode="contain"
          />
        </Pressable>
      ) : null}
      <Text>{title}</Text>
    </View>
  )
}
export default Index
