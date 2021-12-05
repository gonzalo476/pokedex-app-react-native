import React from 'react'
import {StyleSheet, ScrollView, View} from 'react-native'

import getPokemonDataQuery from '../../../graphql/pokemon/getPokemonData.query'
import {
  ImageHeader,
  Loader,
  PokemonFrameInfo,
  SectionComponent,
  Progressbar,
  Colors,
  width,
} from '../../../components'
import {useQuery} from '@apollo/client'
import {iPokemon} from '../../../types'
import {icons} from '../../../../constants'
import {Navigation} from 'react-native-navigation'

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
  const {componentId} = props
  const id = props.data

  const {data, loading} = useQuery(getPokemonDataQuery, {
    variables: {pokemonId: id},
  })

  const RenderPokemonInfo: React.FC<iPokemon> = renderPokemonProps => {
    const {
      name,
      height,
      weight,
      base_stats,
      abilities,
      games,
      generation,
      types,
    } = renderPokemonProps

    return (
      <ScrollView style={styles.container}>
        <ImageHeader
          title={name}
          showBackButton
          onPressBack={() => Navigation.popToRoot(componentId)}
        />
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
          <PokemonFrameInfo
            value="Generation"
            title={generation}
            width="100%"
          />
        </View>
        <SectionComponent
          title="Base Stats"
          marginH={16}
          img={icons.categories}
        >
          <Progressbar
            title="HP"
            value={base_stats.hp}
            maxValue={120}
            color={Colors.secondary}
            big
            animationDelay={1.15}
          />
          <Progressbar
            title="Attack"
            value={base_stats.attack}
            maxValue={150}
            color={Colors.secondary}
            big
            animationDelay={1.25}
          />
          <Progressbar
            title="Defense"
            value={base_stats.defense}
            maxValue={250}
            color={Colors.secondary}
            big
            animationDelay={1.35}
          />
          <Progressbar
            title="Spe. Attack"
            value={base_stats.special_attack}
            maxValue={200}
            color={Colors.secondary}
            big
            animationDelay={1.45}
          />
          <Progressbar
            title="Spe. Defense"
            value={base_stats.special_defense}
            maxValue={250}
            color={Colors.secondary}
            big
            animationDelay={1.55}
          />
          <Progressbar
            title="Speed"
            value={base_stats.speed}
            maxValue={200}
            color={Colors.secondary}
            animationDelay={1.65}
            big
          />
        </SectionComponent>
        <SectionComponent
          title="Types"
          marginH={16}
          img={icons.categories}
          wrap
          row
        >
          {types.map((item: any, index: any) => (
            <PokemonFrameInfo
              key={index}
              title={item.name}
              width={width / 2 - 24}
            />
          ))}
        </SectionComponent>
        <SectionComponent title="Abilities" marginH={16} img={icons.categories}>
          {abilities.map((item: any, index: any) => (
            <PokemonFrameInfo key={index} title={item.name} width="100%" />
          ))}
        </SectionComponent>
        <SectionComponent
          title="Games"
          marginH={16}
          img={icons.categories}
          wrap
          row
        >
          {games.map((item: any, index: any) => (
            <PokemonFrameInfo
              key={index}
              title={item.name}
              value={item.generation}
              width={width / 2 - 24}
            />
          ))}
        </SectionComponent>
      </ScrollView>
    )
  }

  return loading ? <Loader /> : <RenderPokemonInfo {...data.pokemon} />
}

export default Pokemon
