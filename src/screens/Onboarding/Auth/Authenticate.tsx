/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {View, Text} from 'react-native'

import {setRoot, getUser, goToHome} from '../../../utils'

const authenticateUser = async () => {
  try {
    const user = await getUser()
    if (user) {
      goToHome()
    } else {
      setRoot({name: 'Welcome'})
    }
  } catch (error) {
    console.log('error: ', error)
    setRoot({name: 'Welcome'})
  }
}

const Authenticate = () => {
  React.useEffect(() => {
    authenticateUser()
  })

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Loading..</Text>
    </View>
  )
}

export default Authenticate
