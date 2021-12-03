import React from 'react'
import {StyleSheet, View} from 'react-native'

import {Colors, Header, Text} from '../../../components'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blueDark,
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
  },
})

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Header arrowLeft onPressArrowLeft={() => console.log('goBack')} />
      <View style={styles.content}>
        <Text variant="largeTitle" type="Bold" marginV="l">
          Crear Cuenta
        </Text>
      </View>
    </View>
  )
}

export default SignUp
