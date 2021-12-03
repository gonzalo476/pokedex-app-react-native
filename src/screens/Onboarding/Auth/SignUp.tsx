import React from 'react'
import {StyleSheet, View} from 'react-native'

import {Colors, Header} from '../../../components'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blueDark,
    flex: 1,
  },
})

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Header
        arrowLeft
        onPressArrowLeft={() => console.log('goBack')}
        title="Hello World"
      />
    </View>
  )
}

export default SignUp
