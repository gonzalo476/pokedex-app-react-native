import React from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'

import {width, height, Text, Searchbar} from '../../../components'

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
    paddingHorizontal: 16,
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
    paddingHorizontal: 16,
    alignSelf: 'center',
  },
})

const Index: React.FC<iProps> = props => {
  const {onPressCamera, onPressUser} = props
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
      <ScrollView>
        <Text variant="largeTitle" type="Bold" marginV="m" marginH="m">
          Buscar
        </Text>
        <View style={styles.searchbar}>
          <Searchbar />
        </View>
      </ScrollView>
    </View>
  )
}

export default Index
