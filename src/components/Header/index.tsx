/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {View, Pressable, Image, StyleSheet} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {icons} from '../../../constants'
import {Colors, Text, VariantType, FontType} from '../theme'

interface iHeader {
  onPressArrowLeft?: () => void
  onPressClose?: () => void
  textVariant?: VariantType
  textWeight?: FontType
  closeShown?: boolean
  arrowLeft?: boolean
  title?: string
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blueDark,
    paddingHorizontal: 16,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
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
  closeIcon: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    height: 35,
    width: 35,
  },
})

const Index: React.FC<iHeader> = props => {
  const {
    arrowLeft,
    onPressArrowLeft,
    title,
    textVariant = 'headline',
    textWeight = 'Regular',
    closeShown,
    onPressClose,
  } = props
  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 10

  return (
    <View style={[styles.container, {paddingTop}]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {arrowLeft ? (
          <Pressable onPress={onPressArrowLeft} style={styles.iconContainer}>
            <Image
              source={icons.arrowLeft}
              style={styles.icon}
              resizeMode="contain"
            />
          </Pressable>
        ) : null}
        <Text variant={textVariant} type={textWeight}>
          {title}
        </Text>
      </View>
      {closeShown ? (
        <Pressable onPress={onPressClose} style={styles.closeIcon}>
          <Image source={icons.X} style={styles.icon} resizeMode="contain" />
        </Pressable>
      ) : null}
    </View>
  )
}
export default Index
