import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Navigation} from 'react-native-navigation'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {useFormik} from 'formik'

import {SignupSchema, showModal, setUser, setRoot} from '../../../utils'
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

  const handleSignUp = async ({user}: any) => {
    try {
      await setUser({user})
      setRoot({name: 'Home'})
    } catch (error) {
      console.log(error)
    }
  }

  const {handleChange, handleBlur, handleSubmit, errors, touched} = useFormik({
    validationSchema: SignupSchema,
    initialValues: {username: '', password: '', email: ''},
    onSubmit: values =>
      handleSignUp({
        user: values.username,
      }),
  })

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
        <View>
          <TextInput
            title="Nombre de usuario:"
            placeholder="username"
            onBlur={handleBlur('username')}
            onChangeText={handleChange('username')}
            error={errors.username}
            touched={touched.username}
          />
          <TextInput
            title="Correo:"
            placeholder="email@mail.com"
            onBlur={handleBlur('email')}
            onChangeText={handleChange('email')}
            error={errors.email}
            touched={touched.email}
          />
          <TextInput
            title="Contraseña:"
            secureTextEntry
            placeholder="*************"
            onBlur={handleBlur('password')}
            onChangeText={handleChange('password')}
            error={errors.password}
            touched={touched.password}
          />
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
          <Button marginV="m" onPress={handleSubmit}>
            Crear Cuenta
          </Button>
        </View>
        <View style={styles.row}>
          <Text>¿Ya tienes cuenta?</Text>
          <Button
            variant="text"
            marginH="xs"
            onPress={() => showModal({name: 'SignIn', title: 'Iniciar Sesión'})}
          >
            Inicia Sesión
          </Button>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignUp
