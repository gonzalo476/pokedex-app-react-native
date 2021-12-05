import {Navigation} from 'react-native-navigation'

import {ProviderWrapper} from './ProviderWrapper'

import Home from '../src/screens/Home'
import Abilities from '../src/screens/Home/Root/Abilities'
import Items from '../src/screens/Home/Root/Items'
import Pokemon from '../src/screens/Home/Root/Pokemon'
import PokemonList from '../src/screens/Home/Root/PokemonList'
import Welcome from '../src/screens/Onboarding/Welcome'
import SignUp from '../src/screens/Onboarding/Auth/SignUp'
import SignIn from '../src/screens/Onboarding/Auth/SignIn'
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
    'Abilities',
    () => ProviderWrapper(Abilities),
    () => Abilities,
  )
  Navigation.registerComponent(
    'Items',
    () => ProviderWrapper(Items),
    () => Items,
  )
  Navigation.registerComponent(
    'Pokemon',
    () => ProviderWrapper(Pokemon),
    () => Pokemon,
  )
  Navigation.registerComponent(
    'PokemonList',
    () => ProviderWrapper(PokemonList),
    () => PokemonList,
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
  Navigation.registerComponent(
    'SignIn',
    () => ProviderWrapper(SignIn),
    () => SignIn,
  )
}
