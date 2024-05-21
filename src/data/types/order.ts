import FakerCustomer from '@data/faker/customer';
import FakerPaymentMethod from '@data/faker/paymentMethod';
import FakerOrderStatus from '@data/faker/orderStatus';

export type OrderCreator = {
    id?: number
    reference?: string
    newClient?: boolean
    delivery?: string
    customer?: FakerCustomer
    totalPaid?: number
    paymentMethod?: FakerPaymentMethod
    status?: FakerOrderStatus
}
