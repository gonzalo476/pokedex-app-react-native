import React from 'react'
import {View, Button, StyleSheet} from 'react-native'

import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {width, height, Text} from '../../../components'

interface iProps {
  onPressCamera(): void
  onPressUser(): void
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const Index: React.FC<iProps> = props => {
  const {onPressCamera, onPressUser} = props
  const insets = useSafeAreaInsets()
  return (
    <View
      style={[
        styles.container,
        {
          height,
          width,
          paddingTop: insets.top,
        },
      ]}
    >
      <Text>Camera Screen</Text>
      <Button title="go to user screen" onPress={onPressUser} />
      <Button title="go to camera screen" onPress={onPressCamera} />
    </View>
  )
}

export default Index
