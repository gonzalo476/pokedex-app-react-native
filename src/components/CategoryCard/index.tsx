import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import {Colors} from '../theme'

import {Text} from '../theme'

interface iProps {
  title?: string
  image?: any
  width?: number | string
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
  const {title = 'Category', image, width = '40%'} = props
  return (
    <View style={[styles.container, {width}]}>
      <View style={styles.content}>
        <Image style={styles.image} resizeMode="contain" source={image} />
        <Text UIColor="systemDark" variant="title3" type="SemiBold">
          {title}
        </Text>
      </View>
    </View>
  )
}

export default index
