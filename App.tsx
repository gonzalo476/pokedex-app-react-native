import React from 'react'
import {AppRegistry} from 'react-native'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

import Home from './src/screens/Home'

const client = new ApolloClient({
  uri: 'https://dex-server.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  )
}

export default App

AppRegistry.registerComponent('App', () => App)
