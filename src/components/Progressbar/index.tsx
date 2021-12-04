/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated'

import {Text, Size} from '../theme'

const PROGRESS_H = 8

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexShrink: 1,
  },
  container: {
    height: PROGRESS_H,
    borderRadius: PROGRESS_H,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  indicator: {
    height: PROGRESS_H,
    borderRadius: PROGRESS_H,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  text: {
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: 15,
    width: 15,
    marginStart: 4,
    marginEnd: 2,
  },
})

interface iProps {
  title?: string
  icon?: any
  value?: number
  maxValue?: number
  color?: string
  size?: Size
  animationDelay?: number
  mainWidth?: string | number
}

const Index: React.FC<iProps> = props => {
  const {
    title,
    color,
    value = 0,
    maxValue = 0,
    animationDelay = 1,
    icon,
    mainWidth,
  } = props
  const [width, setWidth] = React.useState(0)
  const animatedValue = useSharedValue(-100)

  // Getting the Container View inner layout width
  const layoutHandler = (event: any) => {
    const newWidth = event.nativeEvent.layout.width
    setWidth(newWidth)
  }

  // Animating the indicator bar width
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(animatedValue.value, {
        duration: 800 * animationDelay,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    }
  })

  // Start the animation when the component has mounted
  React.useEffect(() => {
    animatedValue.value = (width * value) / maxValue
  }, [value, width]) // <== whenever value or width changes run again the animation

  return (
    <View style={[styles.root, {width: mainWidth}]}>
      {icon ? (
        <Image style={styles.icon} source={icon} resizeMode="contain" />
      ) : null}
      <View style={{width: '100%', flexShrink: 1}}>
        <View style={styles.text}>
          <Text numberOfLines={1} type="Medium" variant="caption1">
            {title}
          </Text>
          <Text numberOfLines={1} type="Medium" variant="caption1">
            {value}/{maxValue}
          </Text>
        </View>
        <Animated.View onLayout={layoutHandler} style={styles.container}>
          <Animated.View
            style={[styles.indicator, {backgroundColor: color}, animatedStyle]}
          />
        </Animated.View>
      </View>
    </View>
  )
}

export default Index
