import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { Card, Icon } from '@rneui/themed'
import { Divider } from '@rneui/base'
import MapView, { Marker } from 'react-native-maps'

type Props = {
  order: Order
}

const DeliveryCard = ({ order }: Props) => {
  const tw = useTailwind()

  return (
    <Card
      containerStyle={[
        tw('rounded-lg my-5'),
        {
          backgroundColor: '#59C1CC',
          padding: 0,
          paddingTop: 16,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
      ]}
    >
      <View>
        <Icon name="box" type="entypo" color={'white'} size={50}></Icon>
      </View>
      <View>
        <Text style={tw('text-xs text-center uppercase text-white font-bold')}>
          {order.carrier} - {order.trackingId}
        </Text>
        <Text style={tw('text-lg text-center text-white font-bold')}>
          Expected delivery :{order.createdAt}
        </Text>
        <Divider color="white" />
      </View>
      <View style={tw("max-auto pb-5")}>
        <Text style={tw('text-base text-center text-white font-bold mt-5')}>
          Address:
        </Text>
        <Text style={tw('text-center text-white text-sm')}>
          {order.Address} , {order.City}
        </Text>
        <Text style={tw('text-center text-white text-sm italic')}>
          Shipping Cost : ${order.shippingCost}
        </Text>
      </View>
      <View style={tw('p-5')}>
        <Divider color="white" />
        {order.trackingItems.items.map((item: Item) => (
          <View style={tw('flex-row items-center justify-between')}>
            <Text style={tw('text-sm text-white italic')}>{item.name}</Text>
            <Text style={tw('text-xl text-white')}>{item.quantity}</Text>
          </View>
        ))}
      </View>
      <View>
        <MapView
          initialRegion={{
            latitude: order.Lat,
            longitude: order.Lng,
            longitudeDelta: 0.005,
            latitudeDelta: 0.005,
          }}
          style={[
            tw('w-full'),
            {
              height: 200,
            },
          ]}
        >
          {order.Lat && order.Lng && (
            <Marker
              coordinate={{
                latitude: order.Lat,
                longitude: order.Lng,
              }}
              title="Delivery Location"
              description={order.Address}
              identifier="destination"
            />
          )}
        </MapView>
      </View>
    </Card>
  )
}

export default DeliveryCard
