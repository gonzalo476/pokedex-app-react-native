import React from 'react'
import Animated, {
  useAnimatedRef,
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated'

import Root from './Root'
import Camera from './Camera'
import User from './User'
import {width} from '../../components'

const Home = (componentId: any) => {
  const scrollRef = useAnimatedRef<any>()
  const scrollXValue = useSharedValue(0)

  const handleScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset: {x}}) => {
      scrollXValue.value = x
    },
  })

  function handleScrollTo(index: number) {
    if (index === 0) {
      scrollRef.current.scrollTo({x: 0})
    }
    scrollRef.current.scrollTo({x: width * index})
  }

  return (
    <Animated.ScrollView
      ref={scrollRef}
      horizontal
      pagingEnabled
      scrollEnabled
      bounces={false}
      contentOffset={{x: width, y: 0}} // <== sets the initial scroll value
      onScroll={handleScroll}
      decelerationRate={10}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
    >
      <Camera onPressBack={() => handleScrollTo(1)} componentId={componentId} />
      <Root
        onPressCamera={() => handleScrollTo(0)}
        onPressUser={() => handleScrollTo(2)}
        componentId={componentId}
      />
      <User onPressBack={() => handleScrollTo(1)} />
    </Animated.ScrollView>
  )
}

export default Home
