import {Navigation} from 'react-native-navigation'

import {ProviderWrapper} from './ProviderWrapper'

import Home from '../src/screens/Home'
import Welcome from '../src/screens/Onboarding/Welcome'
import SignUp from '../src/screens/Onboarding/Auth/SignUp'
import Authenticate from '../src/screens/Onboarding/Auth/Authenticate'

export function registerScreens() {
  Navigation.registerComponent(
    'Authenticate',
    () => ProviderWrapper(Authenticate),
    () => Authenticate,
  )
  Navigation.registerComponent(
    'Home',
    () => ProviderWrapper(Home),
    () => Home,
  )
  Navigation.registerComponent(
    'Welcome',
    () => ProviderWrapper(Welcome),
    () => Welcome,
  )
  Navigation.registerComponent(
    'SignUp',
    () => ProviderWrapper(SignUp),
    () => SignUp,
  )
}
