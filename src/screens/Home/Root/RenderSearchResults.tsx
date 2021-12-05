import React from 'react'
import {View} from 'react-native'
import {useQuery} from '@apollo/client'

import {Button, PokemonCard, Text, Loader} from '../../../components'

import getAllPokemonQuery from '../../../graphql/pokemon/getAllPokemon.query'

interface iProps {
  setIsFocused?: any
  searchWord?: string
}

const RenderSearchResults: React.FC<iProps> = props => {
  const {data, loading} = useQuery(getAllPokemonQuery, {
    variables: {limit: 50},
  })
  const {searchWord, setIsFocused} = props

  const RenderPokemons = () => {
    const text = searchWord?.toLowerCase()
    const allpokemon = data.allPokemon
    const filteredName = allpokemon.filter((item: any) => {
      return item.name.toLowerCase().match(text)
    })

    return (
      <View>
        {filteredName.slice(0, 5).map((pokemon: any, index: any) => (
          <PokemonCard key={index} {...pokemon} />
        ))}
      </View>
    )
  }

  return (
    <View>
      <Text>Search results of:</Text>
      <Text>"{searchWord}"</Text>
      <Button variant="text" onPress={() => setIsFocused(false)}>
        Cerrar
      </Button>
      {loading ? <Loader /> : <RenderPokemons />}
    </View>
  )
}

export default RenderSearchResults
