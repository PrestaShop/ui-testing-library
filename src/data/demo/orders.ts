import FakerOrder from '@data/faker/order';

import dataCustomers from '@data/demo/customers';
import dataOrderStatuses from '@data/demo/orderStatuses';
import dataPaymentMethods from '@data/demo/paymentMethods';

export default {
  order_1: new FakerOrder({
    id: 1,
    reference: 'XKBKNABJK',
    newClient: true,
    delivery: 'United States',
    customer: dataCustomers.johnDoe,
    totalPaid: 61.80,
    paymentMethod: dataPaymentMethods.checkPayment,
    status: dataOrderStatuses.canceled,
  }),
  order_2: new FakerOrder({
    id: 2,
    reference: 'OHSATSERP',
    newClient: false,
    delivery: 'United States',
    customer: dataCustomers.johnDoe,
    totalPaid: 69.90,
    paymentMethod: dataPaymentMethods.checkPayment,
    status: dataOrderStatuses.awaitingCheckPayment,
  }),
  order_3: new FakerOrder({
    id: 3,
    reference: 'UOYEVOLI',
    newClient: false,
    delivery: 'United States',
    customer: dataCustomers.johnDoe,
    totalPaid: 14.90,
    paymentMethod: dataPaymentMethods.checkPayment,
    status: dataOrderStatuses.paymentError,
  }),
  order_4: new FakerOrder({
    id: 4,
    reference: 'FFATNOMMJ',
    newClient: false,
    delivery: 'United States',
    customer: dataCustomers.johnDoe,
    totalPaid: 14.90,
    paymentMethod: dataPaymentMethods.checkPayment,
    status: dataOrderStatuses.awaitingCheckPayment,
  }),
  order_5: new FakerOrder({
    id: 5,
    reference: 'KHWLILZLL',
    newClient: false,
    delivery: 'United States',
    customer: dataCustomers.johnDoe,
    totalPaid: 20.90,
    paymentMethod: dataPaymentMethods.wirePayment,
    status: dataOrderStatuses.awaitingCheckPayment,
  }),
};
