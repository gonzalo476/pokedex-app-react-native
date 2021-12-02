import {Navigation} from 'react-native-navigation'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {iNavigation} from '../types'

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
        },
      },
    },
  })
}
