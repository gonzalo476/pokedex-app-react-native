import React from 'react'
import {StyleSheet, View, Image} from 'react-native'

import {Text} from '../theme'
import {images} from '../../../constants'

interface iProps {
  title?: string
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111d3d',
    flexShrink: 1,
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
})

const index: React.FC<iProps> = props => {
  const {title = 'Title'} = props
  return (
    <View style={styles.container}>
      <Image source={images.header_image} style={styles.headerImage} />
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
