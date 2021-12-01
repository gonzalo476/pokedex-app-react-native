import {ValueOf} from './utils'

export const uiColors = {
  // Sistem Color Palette
  systemDark: 'systemDark',
  systemWhite: 'systemWhite',
  systemPearl: 'systemPearl',
  disabledDark: 'disabledDark',
  disabledLight: 'disabledLight',
  systemBlue: 'systemBlue',
  systemGreen: 'systemGreen',
  systemIndigo: 'systemIndigo',
  systemOrange: 'systemOrange',
  systemPink: 'systemPink',
  systemPurple: 'systemPurple',
  systemRed: 'systemRed',
  systemYellow: 'systemYellow',
  systemTeal: 'systemTeal',
  primaryFillColor: 'primaryFillColor',
  secondaryFillColor: 'secondaryFillColor',
  tertiaryFillColor: 'tertiaryFillColor',
  quaternaryFillColor: 'quaternaryFillColor',
  // App Color Palette
  primary: 'primary',
  secondary: 'secondary',
  blueDark: 'blueDark',
  neutralBlue: 'neutralBlue',
  aqua: 'aqua',
} as const

export const UIColors = {
  ...uiColors,
} as const

export type UIColorsType = ValueOf<typeof UIColors>
export const uiColorsObject = Object.keys(uiColors)
