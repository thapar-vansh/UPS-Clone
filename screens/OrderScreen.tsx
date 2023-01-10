import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { OrdersScreenNavigationProp } from './OrdersScreen'
import { RootStackParamList } from '../navigator/RootNavigator'
import DeliveryCard from '../components/DeliveryCard'

type OrderScreenRouteProp = RouteProp<RootStackParamList, 'Order'>


const OrderScreen = () => {
    const tw = useTailwind()
    const navigation = useNavigation<OrdersScreenNavigationProp>()
    const { params: { order } } = useRoute<OrderScreenRouteProp>()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: order.trackingItems.customer.name,
            headerTintColor: "#EB6A7C",
            headerTitleStyle: { color: "black" },
        })
    }, [order])

    return (
        <View style={tw("-mt-2")}>
            <DeliveryCard order={order} fullWidth />
        </View>
    )
}

export default OrderScreen

