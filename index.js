import {Navigation} from 'react-native-navigation'
import {registerScreens} from './utils'

import {setRoot} from './src/utils'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  setRoot({name: 'Authenticate'})
})
