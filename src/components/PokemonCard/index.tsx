import React from 'react'
import {StyleSheet, View, Image} from 'react-native'

import Progressbar from '../Progressbar'
import Divider from '../Divider'
import {icons} from '../../../constants'
import {iPokemon} from '../../types'
import {Text, Colors} from '../theme'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  image: {
    height: 51,
    width: 51,
    marginEnd: 10,
  },
  grid: {
    flexWrap: 'wrap',
    width: '100%',
    height: 60,
  },
  pokemonSpects: {
    width: '100%',
    flexShrink: 1,
  },
})

const Index: React.FC<iPokemon> = props => {
  const {name} = props
  const [gridItemWidth, setGridItemWidth] = React.useState<number>(0)
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={icons.pokeball} />
        <View style={styles.pokemonSpects}>
          <Text variant="headline" type="SemiBold" numberOfLines={1}>
            {name}
          </Text>
          <View
            style={styles.grid}
            onLayout={e => {
              const newWidth = e.nativeEvent.layout.width
              setGridItemWidth(newWidth)
            }}
          >
            <Progressbar
              icon={icons.thunder}
              title="Exp."
              value={200}
              maxValue={400}
              color={Colors.primary}
              size="xxs"
              mainWidth={gridItemWidth / 2}
            />
            <Progressbar
              icon={icons.potion}
              title="Regeneración"
              value={200}
              maxValue={400}
              color={Colors.systemGreen}
              size="xxs"
              mainWidth={gridItemWidth / 2}
            />
            <Progressbar
              icon={icons.pokeball_small}
              title="Captura"
              value={200}
              maxValue={400}
              color={Colors.systemRed}
              size="xxs"
              mainWidth={gridItemWidth / 2}
            />
            <Progressbar
              icon={icons.ballons}
              title="Felicidad"
              value={200}
              maxValue={400}
              color={Colors.aqua}
              size="xxs"
              mainWidth={gridItemWidth / 2}
            />
          </View>
        </View>
      </View>
      <Divider />
    </>
  )
}

export default Index
