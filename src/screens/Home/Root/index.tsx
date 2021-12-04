import React from 'react'
import {View, Button} from 'react-native'

import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {width, height, Text} from '../../../components'

interface iProps {
  onPressCamera(): void
  onPressUser(): void
}

const Index: React.FC<iProps> = props => {
  const {onPressCamera, onPressUser} = props
  const insets = useSafeAreaInsets()
  return (
    <View
      style={{
        height,
        width,
        paddingTop: insets.top,
        flex: 1,
      }}
    >
      <Text>Camera Screen</Text>
      <Button title="go to user screen" onPress={onPressUser} />
      <Button title="go to camera screen" onPress={onPressCamera} />
    </View>
  )
}

export default Index
