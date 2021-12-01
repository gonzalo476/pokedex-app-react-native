import {ValueOf} from './utils'

export const Size = {
  small: 's',
  medium: 'm',
  large: 'l',
  xSmall: 'xs',
  xxSmall: 'xxs',
} as const

export const ImageSize = {
  ...Size,
} as const

export type Size = ValueOf<typeof Size>
export const Sizes = Object.keys(Size)

export type ImageSize = ValueOf<typeof ImageSize>
export const ImageSizes = Object.keys(Size)
