import {Navigation} from 'react-native-navigation'
import {registerScreens} from './utils'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Authenticate',
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
})
