import FakerCustomer from '@data/faker/customer';
import FakerPaymentMethod from '@data/faker/paymentMethod';
import FakerOrderStatus from '@data/faker/orderStatus';
import FakerAddress from '@data/faker/address';
import FakerFakerProduct from '@data/faker/product';

type OrderCreator = {
    id?: number
    reference?: string
    newClient?: boolean
    delivery?: string
    customer?: FakerCustomer
    totalPaid?: number
    paymentMethod?: FakerPaymentMethod
    status?: FakerOrderStatus
    deliveryAddress?: FakerAddress
    invoiceAddress?: FakerAddress
    products?: OrderProduct[]
    discountPercentValue?: number
    discountGiftValue?: number
    totalPrice?: number
    deliveryOption?: OrderDeliveryOption
}

type OrderDeliveryOption = {
    name: string
    freeShipping: boolean
}

type OrderProduct = {
    product: FakerFakerProduct
    quantity: number
}

type OrderHistory = {
    reference: string
    date: string
    price: string
    paymentType: string
    status: string
    invoice: string
}

type OrderHistoryMessage = {
    product: string
    message : string
}

type OrderMessage = {
    orderMessage: string
    displayToCustomer: boolean
    message : string
}

type OrderPayment = {
    date: string
    paymentMethod: string
    transactionID : number
    amount : number
    currency : string
}

type OrderMerchandiseReturns = {
    orderReference: string
    fileName: string
    status: string
    dateIssued: string
}

type OrderMerchandiseProductReturn = {
    quantity: number
}

export type{
  OrderMerchandiseProductReturn,
  OrderMerchandiseReturns,
  OrderCreator,
  OrderDeliveryOption,
  OrderHistory,
  OrderHistoryMessage,
  OrderMessage,
  OrderPayment,
  OrderProduct,
};
