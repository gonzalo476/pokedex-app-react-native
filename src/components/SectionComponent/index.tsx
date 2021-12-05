/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {View, Image, StyleSheet} from 'react-native'

import Loader from '../Loader'
import Divider from '../Divider'
import {Text, Colors} from '../theme'

interface iProps {
  title?: string
  img?: any
  children?: any
  contentLoading?: boolean
  marginV?: number
  marginH?: number
  wrap?: boolean
  row?: boolean
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
  const {
    children,
    img,
    title = 'Title',
    contentLoading,
    marginH,
    marginV,
    wrap,
    row,
  } = props
  return (
    <View
      style={{
        marginHorizontal: marginH,
        marginVertical: marginV,
      }}
    >
      <View style={styles.categories}>
        {img ? <Image style={styles.categoryIcon} source={img} /> : null}
        <Text variant="headline" marginH="s" type="SemiBold">
          {title}
        </Text>
      </View>
      <View
        style={{
          flexWrap: wrap ? 'wrap' : 'nowrap',
          flexDirection: row ? 'row' : 'column',
        }}
      >
        {contentLoading ? <Loader color={Colors.secondary} /> : children}
      </View>
      <Divider marginVertical={20} />
    </View>
  )
}

export default index
