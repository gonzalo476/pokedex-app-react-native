import React from 'react'
import {Text, View} from 'react-native'

// Types
import {
  VariantType,
  Size,
  FontSize,
  LineHeight,
  FontType,
  scale,
  TextAlignType,
  FontFamilyType,
  UIColorsType,
} from '../types'

import Colors from '../AppColors'

interface iProps {
  children?: string
  variant?: VariantType
  paddingV?: Size
  paddingH?: Size
  marginH?: Size
  marginV?: Size
  marginLeft?: Size
  marginRight?: Size
  UIColor?: UIColorsType
  color?: string
  letterSpacing?: number
  marginBottom?: Size
  marginTop?: Size
  numberOfLines?: number
  fontFamilyName?: FontFamilyType
  textAlign?: TextAlignType
  type?: FontType
  width?: any
  flexShrink?: number
}

const spacing: any = {
  l: 24 * scale,
  m: 16 * scale,
  s: 8 * scale,
  xs: 4 * scale,
  xxs: 2 * scale,
  null: 0,
}

const Index: React.FC<iProps> = props => {
  const {
    children,
    width,
    marginH = spacing.null,
    marginV = spacing.null,
    paddingH = spacing.null,
    paddingV = spacing.null,
    marginLeft = spacing.null,
    marginRight = spacing.null,
    variant = FontSize.body,
    letterSpacing = 0,
    marginBottom = spacing.null,
    marginTop = spacing.null,
    fontFamilyName = 'Gellix',
    type = 'none',
    numberOfLines,
    flexShrink,
    textAlign,
    color,
    UIColor = 'systemDark',
  } = props

  const fontFamily: any = {
    Bold: `${fontFamilyName}-Bold`,
    SemiBold: `${fontFamilyName}-SemiBold`,
    Medium: `${fontFamilyName}-Medium`,
    Regular: `${fontFamilyName}-Regular`,
    none: fontFamilyName,
  }

  return (
    <View
      style={{
        marginHorizontal: spacing[marginH],
        marginVertical: spacing[marginV],
        paddingHorizontal: spacing[paddingH],
        paddingVertical: spacing[paddingV],
        marginBottom: spacing[marginBottom],
        marginTop: spacing[marginTop],
        marginLeft: spacing[marginLeft],
        marginRight: spacing[marginRight],
      }}
    >
      <Text
        numberOfLines={numberOfLines}
        style={{
          flexShrink,
          letterSpacing,
          lineHeight: LineHeight[variant],
          fontSize: FontSize[variant],
          width,
          textAlign,
          color: color ? color : Colors[UIColor],
          fontFamily: fontFamily[type],
        }}
      >
        {children}
      </Text>
    </View>
  )
}

export default Index
