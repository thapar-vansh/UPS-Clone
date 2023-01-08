import { StyleSheet } from 'react-native'
import { TailwindProvider } from 'tailwind-rn'
import utilities from './tailwind.json'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigator/RootNavigator'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

export default function App() {
  const client = new ApolloClient({
    uri: 'http://localhost/api/dull-gopher',
    cache: new InMemoryCache(),
  })
  return (
    //@ts-ignore
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator></RootNavigator>
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
