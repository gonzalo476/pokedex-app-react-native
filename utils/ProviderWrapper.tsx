import React from 'react'
import {StatusBar} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://dex-server.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})

const ProviderWrapper = (Component: any) => {
  return (props: any) => (
    <ApolloProvider client={client}>
      <StatusBar barStyle="light-content" backgroundColor="#121E41" />
      <SafeAreaProvider>
        <Component {...props} />
      </SafeAreaProvider>
    </ApolloProvider>
  )
}

export {ProviderWrapper}
