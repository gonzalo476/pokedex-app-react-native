import React from 'react'
import {StyleSheet, View, Image, SafeAreaView} from 'react-native'

import {images} from '../../../constants'
import {Colors, Button} from '../../components'
import {iScreen} from '../../types'
import {navigate, showModal} from '../../utils'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blueDark,
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 260,
    height: 73,
  },
  image: {
    width: '100%',
    height: 430,
  },
})

const Welcome: React.FC<iScreen> = props => {
  const {componentId} = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Image source={images.logo} style={styles.logo} resizeMode="contain" />
      <Image
        source={images.pokeball}
        style={styles.image}
        resizeMode="contain"
      />
      <Button
        variant="filled"
        textColor="systemWhite"
        onPress={() => navigate({componentId, id: 'SignUp'})}
      >
        Crear Cuenta
      </Button>
      <Button
        variant="text"
        textColor="systemWhite"
        onPress={() => showModal({name: 'SignIn', title: 'Iniciar Sesión'})}
      >
        Iniciar Sesión
      </Button>
    </View>
  )
}

export default Welcome
