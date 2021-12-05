import React from 'react'
import {View, Button} from 'react-native'

import {width, height, Text} from '../../../components'

interface iProps {
  onPressBack(): void
}

const Index: React.FC<iProps> = props => {
  const {onPressBack} = props
  return (
    <View
      style={{
        height,
        width,
        flex: 1,
      }}
    >
      <Text>Camera Screen</Text>
      <Button title="go to root screen" onPress={onPressBack} />
    </View>
  )
}

export default Index
