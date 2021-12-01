import {Dimensions, PixelRatio, Platform} from 'react-native'

export type ValueOf<T> = T[keyof T]
export const width = Dimensions.get('window').width
export const height = Dimensions.get('window').height
export const scale = width < 650 ? width / 400 : width / 550

export function normalize(size: any) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
