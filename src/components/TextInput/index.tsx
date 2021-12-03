import React from 'react'
import {View, TextInput, StyleSheet, Image} from 'react-native'
import {icons} from '../../../constants'
import {Colors, Text} from '../theme'

interface iProps {
  title?: string
  placeholder?: string
  onChangeText?: any
  secureTextEntry?: boolean
  error?: string
  onBlur?: any
  value?: any
  touched?: any
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
  const {
    placeholder,
    onChangeText,
    title,
    secureTextEntry,
    error,
    onBlur,
    value,
    touched,
  } = props

  console.log(touched)

  function borderColor() {
    if (!error && touched) {
      return Colors.systemGreen
    }
    if (error && touched) {
      return Colors.systemRed
    }
    return Colors.systemWhite
  }

  function renderIcon() {
    if (!error && touched) {
      return <Image source={icons.checkmarkCircle} style={styles.icon} />
    }
    if (error && touched) {
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
          placeholderTextColor={Colors.disabledDark}
          onChangeText={onChangeText}
          style={styles.textInput}
          secureTextEntry={secureTextEntry}
          onBlur={onBlur}
          value={value}
        />
        {renderIcon()}
      </View>
      {error && touched ? (
        <Text variant="footnote" UIColor="systemRed">
          {error}
        </Text>
      ) : null}
    </View>
  )
}

export default Index
