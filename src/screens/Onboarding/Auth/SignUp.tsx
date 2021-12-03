import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Navigation} from 'react-native-navigation'

import {iScreen} from '../../../types'
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

const SignUp: React.FC<iScreen> = props => {
  const {componentId} = props
  return (
    <View style={styles.container}>
      <Header
        arrowLeft
        onPressArrowLeft={() => Navigation.popToRoot(componentId)}
      />
      <View style={styles.content}>
        <Text variant="largeTitle" type="Bold" marginV="l">
          Crear Cuenta
        </Text>
      </View>
    </View>
  )
}

export default SignUp
