import React from 'react'
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native'

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
  const {
    name,
    base_experience = 0,
    gender_rate = 0,
    capture_rate = 0,
    base_happiness = 0,
  } = props
  const [layoutWidth, setLayoutWidth] = React.useState<number>(0)
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {}}
        activeOpacity={0.5}
      >
        <Image style={styles.image} source={icons.pokeball} />
        <View style={styles.pokemonSpects}>
          <Text variant="headline" type="SemiBold" numberOfLines={1}>
            {name.toUpperCase()}
          </Text>
          <View
            style={styles.grid}
            onLayout={e => {
              const newWidth = e.nativeEvent.layout.width
              setLayoutWidth(newWidth)
            }}
          >
            <Progressbar
              icon={icons.thunder}
              title="Exp."
              value={base_experience}
              maxValue={400}
              color={Colors.primary}
              size="xxs"
              mainWidth={layoutWidth / 2}
              animationDelay={1.1}
            />
            <Progressbar
              icon={icons.potion}
              title="Regeneración"
              value={gender_rate}
              maxValue={100}
              color={Colors.systemGreen}
              size="xxs"
              mainWidth={layoutWidth / 2}
              animationDelay={1.2}
            />
            <Progressbar
              icon={icons.pokeball_small}
              title="Captura"
              value={capture_rate}
              maxValue={256}
              color={Colors.systemRed}
              size="xxs"
              mainWidth={layoutWidth / 2}
              animationDelay={1.5}
            />
            <Progressbar
              icon={icons.ballons}
              title="Felicidad"
              value={base_happiness}
              maxValue={140}
              color={Colors.aqua}
              size="xxs"
              mainWidth={layoutWidth / 2}
              animationDelay={1.8}
            />
          </View>
        </View>
      </TouchableOpacity>
      <Divider />
    </>
  )
}

export default Index
