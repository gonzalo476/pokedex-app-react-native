import React from 'react'
import {StyleSheet, Pressable, ActivityIndicator} from 'react-native'

import {Colors, Text, ButtonVariantTye, UIColorsType} from '../theme'

export interface iButton {
  onPress(): void
  children?: string
  isLoading?: boolean
  variant?: ButtonVariantTye
  disabled?: boolean
  textColor?: UIColorsType
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    maxWidth: 400,
    width: '100%',
    height: 52,
  },
})

const Index: React.FC<iButton> = props => {
  const {
    onPress,
    children = 'Button',
    isLoading,
    variant = 'filled',
    textColor = 'secondary',
  } = props
  return (
    <Pressable
      style={variant === 'filled' ? styles.container : null}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator color={Colors.blueDark} />
      ) : (
        <Text
          UIColor={variant === 'filled' ? 'systemDark' : textColor}
          type="SemiBold"
          variant="headline"
          numberOfLines={1}
        >
          {children}
        </Text>
      )}
    </Pressable>
  )
}

export default Index
