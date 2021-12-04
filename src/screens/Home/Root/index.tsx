/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {View, ScrollView, Image, Pressable} from 'react-native'
import {icons} from '../../../../constants'

import {styles} from './styles'
import RenderHomeContent from './RenderHomeContent'

import {width, height, Text, Searchbar, Button} from '../../../components'

interface iProps {
  onPressCamera(): void
  onPressUser(): void
}

const Index: React.FC<iProps> = props => {
  const [isFocused, setIsFocused] = React.useState(false)
  const {onPressCamera} = props

  const RenderSearchResults = () => {
    return (
      <View>
        <Text>Search results</Text>
        <Button variant="text" onPress={() => setIsFocused(!isFocused)}>
          Cerrar
        </Button>
      </View>
    )
  }

  return (
    <View
      style={[
        styles.container,
        {
          height,
          width,
        },
      ]}
    >
      <ScrollView style={{paddingHorizontal: 16}}>
        <Text variant="largeTitle" type="Bold" marginV="m">
          Buscar
        </Text>
        <View style={styles.searchbar}>
          <Searchbar onFocus={() => setIsFocused(!isFocused)} />
          <Pressable style={styles.qrButton} onPress={onPressCamera}>
            <Image
              style={styles.qrIcon}
              source={icons.qrCamera}
              resizeMode="contain"
            />
          </Pressable>
        </View>
        {isFocused ? <RenderSearchResults /> : <RenderHomeContent />}
      </ScrollView>
    </View>
  )
}

export default Index
