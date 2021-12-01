import {ValueOf, normalize} from './utils'

export const fontFamily = {
  CoFoSans: 'Gellix',
} as const

export const FontFamily = {
  ...fontFamily,
} as const

export const Variant = {
  largeTitle: 'largeTitle',
  title1: 'title1',
  title2: 'title2',
  title3: 'title3',
  headline: 'headline',
  body: 'body',
  callout: 'callout',
  subhead: 'subhead',
  footnote: 'footnote',
  caption1: 'caption1',
  caption2: 'caption2',
} as const

export const FontSize: any = {
  largeTitle: normalize(34),
  title1: normalize(28),
  title2: normalize(22),
  title3: normalize(20),
  headline: normalize(17),
  body: normalize(17),
  callout: normalize(16),
  subhead: normalize(15),
  footnote: normalize(13),
  caption1: normalize(12),
  caption2: normalize(11),
} as const

export const LineHeight: any = {
  largeTitle: normalize(41),
  title1: normalize(34),
  title2: normalize(28),
  title3: normalize(25),
  headline: normalize(22),
  body: normalize(22),
  callout: normalize(21),
  subhead: normalize(20),
  footnote: normalize(18),
  caption1: normalize(16),
  caption2: normalize(13),
} as const

export const FontType = {
  Bold: 'Bold',
  Medium: 'Medium',
  Regular: 'Regular',
  SemiBold: 'SemiBold',
} as const

export const TextAlign = {
  auto: 'auto',
  center: 'center',
  left: 'left',
  right: 'right',
  justify: 'justify',
} as const

export type FontFamilyType = ValueOf<typeof FontFamily>
export const fontFamilyObject = Object.keys(fontFamily)

export type TextAlignType = ValueOf<typeof TextAlign>
export const TextAlignObject = Object.keys(TextAlign)

export type VariantType = ValueOf<typeof Variant>
export const VariantsObject = Object.keys(Variant)

export type FontSizeType = ValueOf<typeof FontSize>
export const FontSizesObject = Object.keys(FontSize)

export type LineHeightType = ValueOf<typeof LineHeight>
export const LineHeightsObject = Object.keys(LineHeight)

export type FontType = ValueOf<typeof FontType>
export const FontTypesObject = Object.keys(FontType)
