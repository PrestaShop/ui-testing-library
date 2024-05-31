import dataCarriers from '@data/demo/carriers';
import dataCustomers from '@data/demo/customers';
import type FakerCarrier from '@data/faker/carrier';
import type FakerCustomer from '@data/faker/customer';
import type {ShoppingCartCreator} from '@data/types/shoppingCart';

/**
 * Create new tax rule to use on tax rule form on BO
 * @class
 */
export default class FakerShoppingCart {
  public readonly id: number;

  public readonly orderID: number;

  public readonly customer: FakerCustomer;

  public readonly carrier: FakerCarrier;

  public readonly online: boolean;

  /**
   * Constructor for class FakerShoppingCart
   * @param valueToCreate {ShoppingCartCreator} Could be used to force the value of some members
   */
  constructor(valueToCreate: ShoppingCartCreator = {}) {
    /** @type {number} ID */
    this.id = valueToCreate.id || 0;

    /** @type {number} Order ID */
    this.orderID = valueToCreate.orderID || 0;

    /** @type {FakerCustomer} Customer */
    this.customer = valueToCreate.customer || dataCustomers.johnDoe;

    /** @type {FakerCarrier} Carrier */
    this.carrier = valueToCreate.carrier || dataCarriers.myCarrier;

    /** @type {boolean} */
    this.online = valueToCreate.online || true;
  }
}
