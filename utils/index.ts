import {Navigation} from 'react-native-navigation'

import Home from '../src/screens/Home'
import Welcome from '../src/screens/Onboarding/Welcome'
import SignUp from '../src/screens/Onboarding/Auth/SignUp'
import Authenticate from '../src/screens/Onboarding/Auth/Authenticate'

export function registerScreens() {
  Navigation.registerComponent('Authenticate', () => Authenticate)
  Navigation.registerComponent('Home', () => Home)
  Navigation.registerComponent('Welcome', () => Welcome)
  Navigation.registerComponent('SignUp', () => SignUp)
}
