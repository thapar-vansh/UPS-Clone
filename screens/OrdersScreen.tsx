import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigator/RootNavigator'
import { TabStackParamList } from '../navigator/TabNavigator'
import { useTailwind } from 'tailwind-rn/dist'
import useOrders from '../hooks/useOrders'
import { Button, Image } from '@rneui/base'

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Orders'>,
  NativeStackNavigationProp<RootStackParamList>
>

const OrdersScreen = () => {
  const tw = useTailwind()

  const navigation = useNavigation<OrdersScreenNavigationProp>()
  const { loading, error, orders } = useOrders()
  const [ascending, setAscending] = useState<Boolean>(false)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({ focused, color }) => (
        <Text style={{ color: focused ? '#EB6A7C' : color, fontSize: 10 }}>
          {' '}
          Orders
        </Text>
      ),
    })
  }, [])

  return (
    <ScrollView style={{ backgroundColor: '#EB6A7C' }}>
      <Image
        source={{
          uri: 'https://links.papareact.com/m51',
        }}
        containerStyle={tw('w-full h-64')}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Button onPress={() => setAscending(!ascending)}>
        {ascending ? 'Showing:Oldest First' : 'Showing : Most Recent First'}
      </Button>
    </ScrollView>
  )
}

export default OrdersScreen
