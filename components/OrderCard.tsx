import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/themed'
import { useTailwind } from 'tailwind-rn/dist'

import { useNavigation } from '@react-navigation/native'

import { OrdersScreenNavigationProp } from '../screens/OrdersScreen'



type Props = {
    item: Order
}

const OrderCard = ({ item }: Props) => {
    const tw = useTailwind()
    const navigation = useNavigation<OrdersScreenNavigationProp>()

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Order', { order: item })}>
            <Card containerStyle={tw("px-5 rounded-lg")}>
                <View style={tw("flex-row justify-between items-center")}>
                    <View>
                        <Icon name="truck-delivery"
                            color={"#EB6A7C"}
                            type="material-community"
                        />
                        <Text style={{ fontSize: 10 }}>
                            {new Date(item.createdAt).toLocaleString()}
                        </Text>
                    </View>
                    <View>
                        <Text style={[
                            tw('text-gray-400'),
                            {
                                fontSize: 10
                            },
                        ]}>{item.carrier}-{item.trackingId}</Text>
                        <Text style={tw("text-gray-500 text-xl")} >{item.trackingItems.customer.name}</Text>
                    </View>
                    <View style={tw("flex-row items-center")} >
                        <Text style={[
                            tw('text-sm items-center'),
                            {
                                color: "#EB6A7C"
                            },
                        ]}>{item.trackingItems.items.length}</Text>
                        <Icon name="box"
                            type="feather"
                            style={tw("ml-2")}
                        />
                    </View>
                </View>

            </Card>
        </TouchableOpacity>
    )
}

export default OrderCard