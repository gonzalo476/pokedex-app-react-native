/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {FlatList, View} from 'react-native'
import {useQuery} from '@apollo/client'

import {filterData} from '../../../utils'
import {Loader, Item, Colors, Searchbar} from '../../../components'
import getAllItems from '../../../graphql/items/getAllItems'

const Items = () => {
  const {data, loading} = useQuery(getAllItems)

  const renderItem = ({item}: any) => {
    return <Item {...item} showIcon onPress={() => {}} />
  }

  const List = () => {
    const [filterText, setFilterText] = React.useState('')
    const [numberOfItems, setNumberOfItems] = React.useState(15)
    const DATA = data.allItems
    const filteredData = filterData(filterText, DATA)

    return (
      <View style={{paddingHorizontal: 16}}>
        <Searchbar
          placeholder="Buscar un Item"
          onChangeText={text => setFilterText(text)}
          marginV={20}
        />
        <FlatList
          data={filteredData.slice(0, numberOfItems)}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onEndReached={() => setNumberOfItems(numberOfItems + 15)}
        />
      </View>
    )
  }

  return <View>{loading ? <Loader color={Colors.secondary} /> : <List />}</View>
}

export default Items
