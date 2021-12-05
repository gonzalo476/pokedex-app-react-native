import React from 'react'
import {StyleSheet, View, Image, Pressable} from 'react-native'

import {Text} from '../theme'
import {icons, images} from '../../../constants'

interface iProps {
  title?: string
  onPressBack?: () => void
  showBackButton?: boolean
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111d3d',
  },
  headerImage: {
    width: '100%',
    height: 233,
  },
  title: {
    position: 'absolute',
    bottom: 0,
    flexShrink: 1,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  backButton: {
    position: 'absolute',
    zIndex: 10,
    top: 15,
    left: 15,
  },
})

const index: React.FC<iProps> = props => {
  const {title = 'Title', showBackButton, onPressBack} = props
  return (
    <View style={styles.container}>
      <Image source={images.header_image} style={styles.headerImage} />
      {showBackButton ? (
        <Pressable onPress={onPressBack} style={styles.backButton}>
          <Image
            style={styles.backIcon}
            resizeMode="contain"
            source={icons.arrowLeft}
          />
        </Pressable>
      ) : null}
      <View style={styles.title}>
        <Text
          variant="largeTitle"
          numberOfLines={1}
          type="Bold"
          marginV="m"
          marginH="m"
          width={250}
        >
          {title?.toUpperCase()}
        </Text>
      </View>
    </View>
  )
}

export default index
