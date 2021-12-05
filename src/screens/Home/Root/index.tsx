/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {View, ScrollView, Image, Pressable} from 'react-native'
import {icons} from '../../../../constants'

import {styles} from './styles'
import Header from './Header'
import RenderSearchResults from './RenderSearchResults'
import RenderHomeContent from './RenderHomeContent'

import {width, height, Text, Searchbar} from '../../../components'

interface iProps {
  onPressCamera(): void
  onPressUser(): void
  componentId?: any
}

const Index: React.FC<iProps> = props => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false)
  const [searchWord, setSearchWord] = React.useState<string>()
  const {onPressCamera, onPressUser, componentId} = props

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
      <Header onPressUser={onPressUser} />
      <ScrollView style={{paddingHorizontal: 16}}>
        <Text variant="largeTitle" type="Bold" marginV="m">
          Buscar
        </Text>
        <View style={styles.searchbar}>
          <Searchbar
            onFocus={() => setIsFocused(true)}
            onChangeText={(text: string) => setSearchWord(text)}
          />
          <Pressable style={styles.qrButton} onPress={onPressCamera}>
            <Image
              style={styles.qrIcon}
              source={icons.qrCamera}
              resizeMode="contain"
            />
          </Pressable>
        </View>
        {isFocused ? (
          <RenderSearchResults
            searchWord={searchWord}
            setIsFocused={setIsFocused}
          />
        ) : (
          <RenderHomeContent componentId={componentId.componentId} />
        )}
      </ScrollView>
    </View>
  )
}

export default Index
