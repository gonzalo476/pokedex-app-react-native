import React from 'react'
import {StyleSheet, Image, TouchableOpacity} from 'react-native'
import {icons} from '../../../constants'

import Divider from '../Divider'
import {Text} from '../theme'

interface iProps {
  title?: string
  showIcon?: boolean
  onPress?: () => void
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
  },
  icon: {
    width: 16,
    height: 16,
  },
})

const Index: React.FC<iProps> = props => {
  const {title, showIcon, onPress} = props
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text variant="body">{title}</Text>
        {showIcon ? (
          <Image
            source={icons.arrowRight}
            style={styles.icon}
            resizeMode="contain"
          />
        ) : null}
      </TouchableOpacity>
      <Divider />
    </>
  )
}

export default Index
