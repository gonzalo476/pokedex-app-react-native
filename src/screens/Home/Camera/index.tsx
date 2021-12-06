import React from 'react'
import {View} from 'react-native'

import QRCodeScanner from 'react-native-qrcode-scanner'
import {RNCamera} from 'react-native-camera'

import {navigate} from '../../../utils'
import {width, height} from '../../../components'

interface iProps {
  onPressBack(): void
  componentId?: any
}

const Index: React.FC<iProps> = props => {
  const {componentId} = props

  const onSuccess = (e: any) => {
    const name = e.data
    const splited = name.split(':')
    const parsed = parseInt(splited[1])

    navigate({
      componentId: componentId.componentId,
      id: 'Pokemon',
      data: parsed,
    })
  }

  return (
    <View
      style={{
        height,
        width,
      }}
    >
      <QRCodeScanner
        onRead={onSuccess}
        reactivate={true}
        reactivateTimeout={2000}
        cameraTimeout={6000}
        flashMode={RNCamera.Constants.FlashMode.off}
      />
    </View>
  )
}

export default Index
