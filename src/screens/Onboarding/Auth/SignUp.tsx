import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Navigation} from 'react-native-navigation'

import {iScreen} from '../../../types'
import {Colors, Header, Text, TextInput, Button} from '../../../components'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blueDark,
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
  },
  login: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
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
        <TextInput title="Username:" />
        <TextInput title="Correo:" />
        <TextInput title="Contraseña:" secureTextEntry />
        <Text marginV="m">
          Al crear una cuenta en Pokedex estás de acuerdo con nuestros Términos
          y Condiciones.
        </Text>
        <Button marginV="m">Crear Cuenta</Button>
        <View style={styles.login}>
          <Text>¿Ya tienes cuenta?</Text>
          <Button variant="text" marginH="xs">
            Inicia Sesión
          </Button>
        </View>
      </View>
    </View>
  )
}

export default SignUp
