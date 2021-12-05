/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {View, FlatList} from 'react-native'

import {PokemonCard} from '../../../components'

const PokemonList = (props: any) => {
  const [numberOfItems, setNumberOfItems] = React.useState(10)
  const {data} = props

  const renderItem = ({item}: any) => {
    return <PokemonCard {...item} />
  }

  return (
    <View>
      <FlatList
        style={{paddingHorizontal: 16}}
        data={data.slice(0, numberOfItems)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={() => setNumberOfItems(numberOfItems + 10)}
      />
    </View>
  )
}

export default PokemonList
