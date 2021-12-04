import React from 'react'
import {View, StyleSheet} from 'react-native'

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {useFormik} from 'formik'

import {LogInSchema, setUser, goToHome} from '../../../utils'
import {TextInput, Button} from '../../../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  button: {
    marginVertical: 50,
  },
})

const SignIn = () => {
  const handleSignIn = async ({user}: any) => {
    try {
      await setUser({user})
      goToHome()
    } catch (error) {
      throw error
    }
  }

  const {handleChange, handleBlur, handleSubmit, errors, touched} = useFormik({
    validationSchema: LogInSchema,
    initialValues: {username: '', password: ''},
    onSubmit: values =>
      handleSignIn({
        user: values.username,
      }),
  })

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TextInput
        title="Nombre de usuario:"
        placeholder="username"
        onBlur={handleBlur('username')}
        onChangeText={handleChange('username')}
        error={errors.username}
        touched={touched.username}
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
      <View style={styles.button}>
        <Button onPress={handleSubmit}>Iniciar Sesión</Button>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignIn
