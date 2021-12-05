/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {FlatList, View} from 'react-native'
import {useQuery} from '@apollo/client'

import {Loader, ListItem, Colors} from '../../../components'
import getAllAbilitiesQuery from '../../../graphql/abilities/getAllAbilities.query'

const Abilities = () => {
  const {data, loading} = useQuery(getAllAbilitiesQuery)

  const renderItem = ({item}: any) => {
    return <ListItem title={item.name} showIcon />
  }

  const List = () => {
    const [numberOfItems, setNumberOfItems] = React.useState(15)
    const DATA = data.allAbilities

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

export default Abilities
