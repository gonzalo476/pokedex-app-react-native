import React from 'react'
import {View, TextInput, StyleSheet, Image} from 'react-native'
import {icons} from '../../../constants'
import {Colors} from '../theme'

interface iProps {
  onChangeText?: (text: string) => void
  onBlur?: () => void
  onFocus?: () => void
}

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    width: '100%',
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(22, 37, 79, 0.44)',
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: 'rgba(151, 151, 151, 0.32)',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textinput: {
    flexShrink: 1,
    height: '100%',
    width: '100%',
    fontFamily: 'Gellix-Regular',
    fontSize: 17,
    color: 'white',
  },
  searchicon: {
    height: 18,
    width: 18,
    marginRight: 10,
  },
})

const index: React.FC<iProps> = props => {
  const {onChangeText, onBlur, onFocus} = props
  return (
    <View style={styles.container}>
      <Image
        style={styles.searchicon}
        source={icons.search}
        resizeMode="contain"
      />
      <TextInput
        style={styles.textinput}
        placeholderTextColor={Colors.disabledDark}
        placeholder="Buscar un pokemon"
        onChangeText={onChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </View>
  )
}

export default index
