import {Navigation} from 'react-native-navigation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Yup from 'yup'

import {iNavigation} from '../types'
import {Colors} from '../components'

export const USER_KEY = 'USER_KEY'

export const getUser = async () => {
  const user = await AsyncStorage.getItem(USER_KEY)
  return user
}

export const navigate = (props: any) => {
  const {componentId, id} = props
  Navigation.push<iNavigation>(componentId, {
    component: {
      name: id,
      options: {
        topBar: {
          title: {
            text: id,
          },
        },
        layout: {
          backgroundColor: Colors.blueDark,
        },
      },
    },
  })
}

export const setRoot = ({name}: any) => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name,
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
            height: 0,
          },
          layout: {
            backgroundColor: Colors.blueDark,
          },
        },
      },
    },
  })
}

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, '¡Muy corto!')
    .max(70, '¡Muy largo!')
    .required('Obligatorio'),
  email: Yup.string().email('¡Correo inválido!').required('Obligatorio'),
  password: Yup.string()
    .required('Obligatorio')
    .min(8, 'La contraseña es muy corta - mínimo 8 caracteres.')
    .matches(/[a-zA-Z]/, 'La contraseña solo debe de contener letras.'),
})

export const LogInSchema = Yup.object().shape({
  email: Yup.string().email('¡Correo inválido!').required('Obligatorio'),
  password: Yup.string()
    .required('Obligatorio')
    .min(8, 'La contraseña es muy corta - mínimo 8 caracteres.')
    .matches(/[a-zA-Z]/, 'La contraseña solo debe de contener letras.'),
})
