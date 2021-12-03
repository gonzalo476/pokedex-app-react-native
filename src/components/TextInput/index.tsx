import React from 'react'
import {View, TextInput, StyleSheet, Image} from 'react-native'
import {icons} from '../../../constants'
import {Colors, Text} from '../theme'

interface iProps {
  title?: string
  placeholder?: string
  onChangeText?: () => void
  secureTextEntry?: boolean
  success?: boolean
  error?: string
}

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    borderStyle: 'solid',
    alignItems: 'center',
    borderWidth: 0.5,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  textInput: {
    flexShrink: 1,
    color: Colors.systemWhite,
    fontFamily: 'Gellix-Regular',
    fontSize: 16,
    height: 50,
    width: '100%',
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 6,
  },
})

const Index: React.FC<iProps> = props => {
  const {placeholder, onChangeText, title, secureTextEntry, success, error} =
    props

  function borderColor() {
    if (success) {
      return Colors.systemGreen
    }
    if (error) {
      return Colors.systemRed
    }
    return Colors.systemWhite
  }

  function renderIcon() {
    if (success) {
      return <Image source={icons.checkmarkCircle} style={styles.icon} />
    }
    if (error) {
      return <Image source={icons.X_Circle} style={styles.icon} />
    }
    return
  }

  return (
    <View>
      {title ? (
        <Text marginV="s" variant="headline">
          {title}
        </Text>
      ) : null}
      <View style={[styles.box, {borderColor: borderColor()}]}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={styles.textInput}
          secureTextEntry={secureTextEntry}
        />
        {renderIcon()}
      </View>
      {error ? (
        <Text variant="footnote" UIColor="systemRed">
          {error}
        </Text>
      ) : null}
    </View>
  )
}

export default Index
