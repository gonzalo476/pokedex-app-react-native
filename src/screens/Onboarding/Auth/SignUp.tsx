import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Navigation} from 'react-native-navigation'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

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
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  rowterms: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  termsconditions: {
    marginVertical: 15,
  },
})

const SignUp: React.FC<iScreen> = props => {
  const {componentId} = props
  return (
    <KeyboardAwareScrollView style={styles.container}>
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
        <View style={styles.termsconditions}>
          <Text UIColor="disabledLight">
            Al crear una cuenta en Pokedex estás de acuerdo
          </Text>
          <View style={styles.rowterms}>
            <Text UIColor="disabledLight">con nuestros</Text>
            <Button variant="text" marginH="xs">
              Términos y Condiciones
            </Button>
          </View>
        </View>
        <Button marginV="m">Crear Cuenta</Button>
        <View style={styles.row}>
          <Text>¿Ya tienes cuenta?</Text>
          <Button variant="text" marginH="xs">
            Inicia Sesión
          </Button>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignUp
