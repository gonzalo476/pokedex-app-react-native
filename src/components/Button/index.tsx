import React from 'react'
import {StyleSheet, Pressable} from 'react-native'
import Loader from '../Loader'

import {
  Colors,
  Text,
  ButtonVariantTye,
  UIColorsType,
  Size,
  scale,
} from '../theme'

export interface iButton {
  onPress?: () => void
  children?: string
  isLoading?: boolean
  variant?: ButtonVariantTye
  disabled?: boolean
  textColor?: UIColorsType
  color?: UIColorsType
  marginH?: Size
  marginV?: Size
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    maxWidth: 400,
    width: '100%',
    height: 52,
  },
})

const spacing: any = {
  l: 24 * scale,
  m: 16 * scale,
  s: 8 * scale,
  xs: 4 * scale,
  xxs: 2 * scale,
  null: 0,
}

const Index: React.FC<iButton> = props => {
  const {
    onPress,
    children = 'Button',
    isLoading,
    variant = 'filled',
    textColor = 'secondary',
    disabled = false,
    color = variant === 'filled' ? 'primary' : 'transparent',
    marginH = spacing.null,
    marginV = spacing.null,
  } = props

  return (
    <Pressable
      disabled={disabled}
      style={[
        variant === 'filled' ? styles.container : null,
        {
          backgroundColor:
            variant === 'filled'
              ? disabled
                ? Colors.disabledDark
                : Colors[color]
              : Colors.transparent,
          marginHorizontal: spacing[marginH],
          marginVertical: spacing[marginV],
        },
      ]}
      onPress={onPress}
    >
      {isLoading ? (
        <Loader color={Colors.blueDark} />
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
