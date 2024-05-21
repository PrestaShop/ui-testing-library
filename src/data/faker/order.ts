import FakerCustomer from '@data/faker/customer';
import FakerPaymentMethod from '@data/faker/paymentMethod';
import FakerOrderStatus from '@data/faker/orderStatus';
import dataCustomers from '@data/demo/customers';
import dataPaymentMethods from '@data/demo/paymentMethods';
import dataOrderStatuses from '@data/demo/orderStatuses';

import type {OrderCreator} from '@data/types/order';

import {faker} from '@faker-js/faker';

/**
 * Create new order to use on creation form order page on BO
 * @class
 */
export default class OrderData {
    public readonly id: number;

    public readonly reference: string;

    public readonly newClient: boolean;

    public readonly delivery: string;

    public readonly customer: FakerCustomer;

    public readonly totalPaid: number;

    public readonly paymentMethod: FakerPaymentMethod;

    public readonly status: FakerOrderStatus;

    /**
     * Constructor for class Order
     * @param orderToCreate {OrderCreator} Could be used to force the value of some members
     */
    constructor(orderToCreate: OrderCreator = {}) {
        /** @type {number} */
        this.id = orderToCreate.id || 0;
        /** @type {string} */
        this.reference = orderToCreate.reference || faker.string.alpha({
            casing: 'upper',
            length: 9,
        });

        /** @type {boolean} */
        this.newClient = orderToCreate.newClient === undefined ? true : orderToCreate.newClient;

        /** @type {string} */
        this.delivery = orderToCreate.delivery || 'France';

        /** @type {FakerCustomer} */
        this.customer = orderToCreate.customer || dataCustomers.johnDoe;

        /** @type {number} */
        this.totalPaid = orderToCreate.totalPaid || 0;

        /** @type {FakerPaymentMethod} */
        this.paymentMethod = orderToCreate.paymentMethod || dataPaymentMethods.checkPayment;

        /** @type {FakerOrderStatus|null} */
        this.status = orderToCreate.status || dataOrderStatuses.paymentAccepted;
    }
}