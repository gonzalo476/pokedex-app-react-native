/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {FlatList, View} from 'react-native'
import {useQuery} from '@apollo/client'

import {Loader, Item, Colors} from '../../../components'
import getAllItems from '../../../graphql/items/getAllItems'

const Items = () => {
  const {data, loading} = useQuery(getAllItems)

  const renderItem = ({item}: any) => {
    return <Item {...item} showIcon onPress={() => {}} />
  }

  const List = () => {
    const [numberOfItems, setNumberOfItems] = React.useState(15)
    const DATA = data.allItems

    return (
      <View>
        <FlatList
          style={{paddingHorizontal: 16}}
          data={DATA.slice(0, numberOfItems)}
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
