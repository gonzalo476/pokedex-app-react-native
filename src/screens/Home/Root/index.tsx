/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {View, ScrollView, StyleSheet, Image, Pressable} from 'react-native'
import {icons} from '../../../../constants'

import {
  width,
  height,
  Text,
  Searchbar,
  Colors,
  Button,
} from '../../../components'

interface iProps {
  onPressCamera(): void
  onPressUser(): void
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 20,
    backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  logo: {
    height: 30,
    width: 90,
  },
  avatar: {
    height: 27,
    width: 27,
  },
  searchbar: {
    flexShrink: 1,
    flexDirection: 'row',
    marginBottom: 15,
  },
  qrButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: '#979797',
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 10,
  },
  qrIcon: {
    width: 20,
    height: 20,
  },
  categoryIcon: {
    width: 15,
    height: 15,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})

const Index: React.FC<iProps> = props => {
  const [isFocused, setIsFocused] = React.useState(false)
  const {onPressCamera} = props

  const RenderHomeContent = () => {
    return (
      <View>
        <View style={styles.row}>
          <Image style={styles.categoryIcon} source={icons.categories} />
          <Text variant="headline" marginH="s" type="SemiBold">
            Categorías
          </Text>
        </View>
      </View>
    )
  }

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
