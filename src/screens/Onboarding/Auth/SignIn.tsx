import React from 'react'
import {View, StyleSheet} from 'react-native'

import {Navigation} from 'react-native-navigation'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {Formik} from 'formik'

import {SignupSchema} from '../../../utils'
import {iScreen} from '../../../types'
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

const SignIn: React.FC<iScreen> = props => {
  const {componentId} = props
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{email: '', username: '', password: ''}}
        onSubmit={values => console.log(values)}
      >
        {({handleChange, handleBlur, handleSubmit, errors, touched}) => (
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
              title="Contraseña:"
              secureTextEntry
              placeholder="*************"
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              error={errors.password}
              touched={touched.password}
            />
            <View style={styles.button}>
              <Button onPress={handleSubmit}>Crear Cuenta</Button>
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  )
}

export default SignIn
