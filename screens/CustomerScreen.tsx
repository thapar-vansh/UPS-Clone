import { ScrollView, ActivityIndicator, View, Text } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import React, { useLayoutEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamList } from '../navigator/TabNavigator'
import { RootStackParamList } from '../navigator/RootNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Image } from '@rneui/base'
import { Input } from '@rneui/themed'
import { GET_CUSTOMERS } from '../graphql/queries'
import CustomerCard from '../components/CustomerCard'

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>

const CustomerScreen = () => {
  const tw = useTailwind()
  const navigation = useNavigation<CustomerScreenNavigationProp>()
  const [input, setInput] = useState<string>('')
  const { error, loading, data } = useQuery(GET_CUSTOMERS)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <ScrollView style={{ backgroundColor: '#59C1CC' }}>
      <Image
        source={{
          uri: 'https://links.papareact.com/3jc',
        }}
        containerStyle={tw('w-full h-64')}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input
        placeholder="Search by Customer"
        value={input}
        onChangeText={setInput}
        containerStyle={tw('bg-white pt-5 pb-0 px-10')}
      />
      {data?.getCustomers.map(
        ({ name: ID, value: { email, name } }: CustomerResponse) => (
          <CustomerCard key={ID} email={email} name={name} userId={ID} />
        )
      )}
      <CustomerCard userId={''} name={''} email={''}></CustomerCard>
      <CustomerCard userId={''} name={''} email={''}></CustomerCard>
      <CustomerCard userId={''} name={''} email={''}></CustomerCard>
    </ScrollView>
  )
}

export default CustomerScreen
