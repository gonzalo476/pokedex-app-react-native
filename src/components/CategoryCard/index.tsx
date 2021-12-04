import React from 'react'
import {View, StyleSheet, Image, Pressable} from 'react-native'
import {Colors} from '../theme'

import {Text} from '../theme'

interface iProps {
  title?: string
  image?: any
  width?: number | string
  onPress?: () => void
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 2,
  },
  content: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.systemWhite,
    borderRadius: 8,
    padding: 5,
  },
  image: {
    height: 30,
    width: 30,
    marginEnd: 5,
  },
})

const index: React.FC<iProps> = props => {
  const {title = 'Category', image, width = '40%', onPress} = props
  return (
    <Pressable style={[styles.container, {width}]} onPress={onPress}>
      <View style={styles.content}>
        <Image style={styles.image} resizeMode="contain" source={image} />
        <Text UIColor="systemDark" variant="title3" type="SemiBold">
          {title}
        </Text>
      </View>
    </Pressable>
  )
}

export default index
