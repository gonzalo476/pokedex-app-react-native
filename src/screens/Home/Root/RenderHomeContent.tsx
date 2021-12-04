import React from 'react'
import {View, Image} from 'react-native'
import {icons} from '../../../../constants'
import {styles} from './styles'

import {width, Text, CategoryCard} from '../../../components'

interface iProps {
  onPressCamera(): void
  onPressUser(): void
}

const RenderHomeContent = () => {
  return (
    <View>
      <View style={styles.categories}>
        <Image style={styles.categoryIcon} source={icons.categories} />
        <Text variant="headline" marginH="s" type="SemiBold">
          Categorías
        </Text>
      </View>
      <View style={styles.grid}>
        <CategoryCard
          title="Pokedex"
          width={width / 2 - 16}
          image={icons.pokedex}
        />
        <CategoryCard title="Moves" width={width / 2 - 16} image={icons.atom} />
        <CategoryCard
          title="Abilities"
          width={width / 2 - 16}
          image={icons.thunder}
        />
        <CategoryCard title="Items" width={width / 2 - 16} image={icons.fire} />
        <CategoryCard
          title="Locations"
          width={width / 2 - 16}
          image={icons.mountain}
        />
      </View>
    </View>
  )
}

export default RenderHomeContent
