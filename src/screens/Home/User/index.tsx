import React from 'react'
import {View, StyleSheet} from 'react-native'

import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {width, height, ImageHeader, ListItem, Colors} from '../../../components'
import {getUser, removeUser} from '../../../utils'

interface iProps {
  onPressBack(): void
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#111d3d',
  },
  list: {
    paddingHorizontal: 16,
  },
})

const Index: React.FC<iProps> = props => {
  const {onPressBack} = props
  const [user, setUser] = React.useState<any>()
  const insets = useSafeAreaInsets()

  React.useEffect(() => {
    async function fetchUser() {
      const result = await getUser()
      setUser(result)
    }
    fetchUser()
  }, [])

  return (
    <View style={{width, height}}>
      <View style={[{paddingTop: insets.top}, styles.header]}>
        <ImageHeader title="Cuenta" showBackButton onPressBack={onPressBack} />
      </View>
      <View style={styles.list}>
        <ListItem title={user} color={Colors.systemBlue} onPress={() => {}} />
        <ListItem
          title="Cerrar Sesión"
          color={Colors.systemRed}
          onPress={() => removeUser()}
        />
      </View>
    </View>
  )
}

export default Index
