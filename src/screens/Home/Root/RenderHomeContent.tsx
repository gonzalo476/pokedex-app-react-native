import React from 'react'
import {View} from 'react-native'
import {icons} from '../../../../constants'
import {styles} from './styles'
import {useQuery} from '@apollo/client'

import {
  width,
  CategoryCard,
  SectionComponent,
  PokemonCard,
} from '../../../components'

import getAllPokemonQuery from '../../../graphql/pokemon/getAllPokemon.query'

const RenderHomeContent = () => {
  const {data, loading} = useQuery(getAllPokemonQuery, {variables: {limit: 20}})

  const RenderPokemons = () => {
    const allpokemons = data.allPokemon
    return (
      <View>
        {allpokemons.map((pokemon: any, index: any) => (
          <PokemonCard key={index} {...pokemon} />
        ))}
      </View>
    )
  }

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
      <SectionComponent
        title="Pokemones"
        img={icons.cup}
        contentLoading={loading}
      >
        {loading ? null : <RenderPokemons />}
      </SectionComponent>
    </View>
  )
}

export default RenderHomeContent
