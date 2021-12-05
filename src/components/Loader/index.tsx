import React from 'react'
import {ActivityIndicator} from 'react-native'

interface iLoader {
  color?: string
}

const Loader: React.FC<iLoader> = props => {
  const {color} = props
  return <ActivityIndicator color={color} />
}

export default Loader
