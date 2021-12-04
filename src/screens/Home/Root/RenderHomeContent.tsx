import React from 'react'
import {View} from 'react-native'
import {icons} from '../../../../constants'
import {styles} from './styles'

import {width, CategoryCard, SectionComponent} from '../../../components'

const RenderHomeContent = () => {
  return (
    <View>
      <SectionComponent title="Categorías" img={icons.categories}>
        <View style={styles.grid}>
          <CategoryCard
            title="Pokedex"
            width={width / 2 - 16}
            image={icons.pokedex}
          />
          <CategoryCard
            title="Moves"
            width={width / 2 - 16}
            image={icons.atom}
          />
          <CategoryCard
            title="Abilities"
            width={width / 2 - 16}
            image={icons.thunder}
          />
          <CategoryCard
            title="Items"
            width={width / 2 - 16}
            image={icons.fire}
          />
          <CategoryCard
            title="Locations"
            width={width / 2 - 16}
            image={icons.mountain}
          />
        </View>
      </SectionComponent>
      <SectionComponent title="Pokemones" img={icons.cup}></SectionComponent>
    </View>
  )
}

export default RenderHomeContent
