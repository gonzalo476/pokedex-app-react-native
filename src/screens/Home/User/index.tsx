import React from 'react'
import {View, Button} from 'react-native'

import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {width, height, Text} from '../../../components'

interface iProps {
  onPressBack(): void
}

const Index: React.FC<iProps> = props => {
  const {onPressBack} = props
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
      <Text>Users Screen</Text>
      <Button title="go to root screen" onPress={onPressBack} />
    </View>
  )
}

export default Index
