import {ValueOf} from './utils'

export const ButtonVariant = {
  filled: 'filled',
  text: 'text',
} as const

export type ButtonVariantTye = ValueOf<typeof ButtonVariant>
export const ButtonVariantsObject = Object.keys(ButtonVariant)
