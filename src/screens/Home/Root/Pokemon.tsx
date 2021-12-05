import React from 'react'
import {StyleSheet, ScrollView, View} from 'react-native'

import getPokemonDataQuery from '../../../graphql/pokemon/getPokemonData.query'
import {ImageHeader, Loader, PokemonFrameInfo} from '../../../components'
import {useQuery} from '@apollo/client'
import {iPokemon} from '../../../types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pokemonSpects: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 16,
  },
})

const Pokemon = (props: any) => {
  const id = props.data

  const {data, loading} = useQuery(getPokemonDataQuery, {
    variables: {pokemonId: id},
  })

  const RenderPokemonInfo: React.FC<iPokemon> = renderPokemonProps => {
    const {name, height, weight} = renderPokemonProps
    return (
      <ScrollView style={styles.container}>
        <ImageHeader title={name} />
        <View style={styles.pokemonSpects}>
          <PokemonFrameInfo
            value="Weight"
            title={`${weight} gr`}
            width="100%"
          />
          <PokemonFrameInfo
            value="Height"
            title={`${height} cm`}
            width="100%"
          />
        </View>
      </ScrollView>
    )
  }

  return loading ? <Loader /> : <RenderPokemonInfo {...data.pokemon} />
}

export default Pokemon
