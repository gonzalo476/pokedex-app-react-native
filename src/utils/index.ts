import {Navigation} from 'react-native-navigation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Yup from 'yup'

import {iNavigation} from '../types'
import {Colors} from '../components'

// User AsyncStorage
export const USER_KEY = 'user'

export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem(USER_KEY)
    setRoot({name: 'Welcome'})
  } catch (error) {
    throw error
  }
}

export function filterData(text: any, data: any) {
  const lowerCasedText = text?.toLowerCase()
  const filteredData = data.filter((item: any) =>
    item.name.toLowerCase().match(lowerCasedText),
  )
  return filteredData
}

export const getUser = async () => {
  const user = await AsyncStorage.getItem(USER_KEY)
  return user
}

export const setUser = async ({user}: any) => {
  try {
    const res = await AsyncStorage.setItem(USER_KEY, user)
    return res
  } catch (error) {
    throw error
  }
}

// Navigation
export const navigate = (props: any) => {
  const {componentId, id, data, title} = props
  Navigation.push<iNavigation>(componentId, {
    component: {
      name: id,
      passProps: {
        name: 'data',
        data,
      },
      options: {
        topBar: {
          title: {
            text: title,
            color: Colors.systemWhite,
            fontFamily: 'Gellix-SemiBold',
          },
          background: {
            color: Colors.blueDark,
          },
        },
        layout: {
          componentBackgroundColor: Colors.blueDark,
          backgroundColor: Colors.blueDark,
        },
      },
    },
  })
}

export const goToHome = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
        options: {
          topBar: {
            barStyle: 'black',
            title: {
              text: 'Pokedex',
              color: Colors.systemWhite,
              fontFamily: 'Gellix-SemiBold',
            },
            subtitle: {
              text: '',
            },
            background: {
              color: '#121E41',
            },
          },
          layout: {
            componentBackgroundColor: Colors.blueDark,
            backgroundColor: Colors.blueDark,
          },
        },
      },
    },
  })
}

export const setRoot = (props: any) => {
  const {name, title = 'Title'} = props
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
          statusBar: {
            style: 'dark',
            backgroundColor: Colors.blueDark,
          },
          topBar: {
            title: {
              text: title,
              color: Colors.systemWhite,
              fontFamily: 'Gellix-SemiBold',
            },
            background: {
              color: Colors.blueDark,
            },
            visible: false,
            height: 0,
          },
          layout: {
            componentBackgroundColor: Colors.blueDark,
            backgroundColor: Colors.blueDark,
          },
        },
      },
    },
  })
}

export const showModal = ({name, title}: any) => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: name,
            options: {
              topBar: {
                title: {
                  text: title,
                  color: Colors.systemWhite,
                  fontFamily: 'Gellix-SemiBold',
                },
                background: {
                  color: Colors.blueDark,
                },
              },
              layout: {componentBackgroundColor: Colors.blueDark},
            },
          },
        },
      ],
    },
  })
}

// Yup Validation
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
  username: Yup.string()
    .min(4, '¡Muy corto!')
    .max(70, '¡Muy largo!')
    .required('Obligatorio'),
  password: Yup.string()
    .required('Obligatorio')
    .min(8, 'La contraseña es muy corta - mínimo 8 caracteres.')
    .matches(/[a-zA-Z]/, 'La contraseña solo debe de contener letras.'),
})
