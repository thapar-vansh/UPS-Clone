import { TailwindProvider } from 'tailwind-rn'
import utilities from './tailwind.json'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigator/RootNavigator'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

const client = new ApolloClient({
  uri: 'http://192.168.1.7:5001/api/dull-gopher',
  cache: new InMemoryCache(),
})

export default function App() {
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


