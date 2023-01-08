type Customer = {
  email: string
  name: string
}
type CustomerList = {
  name: ID
  value: Customer
}
type OrderResponse = {
  value: Order
}
type CustomerResponse = {
  name:string
  value: Customer
}

type Order = {
  carrier: string
  createdAt: date
  shippingCost: int
  trackingId: string
  trackingItems: TrackingItems
  Lat: float
  Lng: float
  Address: string
  City: string
}
