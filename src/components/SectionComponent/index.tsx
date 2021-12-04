import React from 'react'
import {View, Image, StyleSheet} from 'react-native'

import {Text} from '../theme'

interface iProps {
  title?: string
  img?: any
  children?: any
}

const styles = StyleSheet.create({
  categoryIcon: {
    width: 15,
    height: 15,
  },
  categories: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
})

const index: React.FC<iProps> = props => {
  const {children, img, title = 'Title'} = props
  return (
    <View>
      <View style={styles.categories}>
        <Image style={styles.categoryIcon} source={img} />
        <Text variant="headline" marginH="s" type="SemiBold">
          {title}
        </Text>
      </View>
      {children}
    </View>
  )
}

export default index
