import dataCarriers from '@data/demo/carriers';
import dataCustomers from '@data/demo/customers';
import FakerShoppingCart from '@data/faker/shoppingCart';

export default [
  new FakerShoppingCart({
    id: 1,
    orderID: 1,
    customer: dataCustomers.johnDoe,
    carrier: dataCarriers.myCarrier,
    online: false,
    status: 'Ordered',
  }),
  new FakerShoppingCart({
    id: 2,
    orderID: 2,
    customer: dataCustomers.johnDoe,
    carrier: dataCarriers.myCarrier,
    online: false,
    status: 'Ordered',
  }),
  new FakerShoppingCart({
    id: 3,
    orderID: 3,
    customer: dataCustomers.johnDoe,
    carrier: dataCarriers.myCarrier,
    online: false,
    status: 'Ordered',
  }),
  new FakerShoppingCart({
    id: 4,
    orderID: 4,
    customer: dataCustomers.johnDoe,
    carrier: dataCarriers.myCarrier,
    online: false,
    status: 'Ordered',
  }),
  new FakerShoppingCart({
    id: 5,
    orderID: 5,
    customer: dataCustomers.johnDoe,
    carrier: dataCarriers.myCarrier,
    online: false,
    status: 'Ordered',
  }),
];
