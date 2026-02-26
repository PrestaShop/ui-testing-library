import type DiscountCreator from '@data/types/discount';

import {faker} from '@faker-js/faker';

/**
 * Create new discount to use on creation discount form on BO
 * @class
 */
export default class FakerDiscount {
  public readonly discountType: string | null;

  public readonly name: string;

  public readonly description: string;

  public readonly dateFrom: string | null;

  public readonly dateTo: string | null;

  public readonly allCustomers: boolean;

  public readonly customerGroups: boolean;

  public readonly singleCustomer: boolean;

  public readonly noProductCondition: boolean;

  public readonly singleProduct: boolean;

  public readonly productSegment: boolean;

  public readonly noCartCondition: boolean;

  public readonly minimumPurchaseAmount: boolean;

  public readonly minimumAmountValue: number | string;

  public readonly minimumAmountCurrency: string | null;

  public readonly minimumAmountTax: string | null;

  public readonly minimumProductQuantity: boolean;

  public readonly productQuantity: number;

  public readonly discountValue: number | string;

  public readonly discountReductionType: string;

  public readonly discountCurrency: string | null;

  public readonly discountTax: string | null;

  public readonly createAutomaticDiscount: boolean;

  public readonly generateDiscountCode: boolean;

  public readonly discountCode: string;

  /**
   * Constructor for class DiscountData
   * @param discountToCreate {Object} Could be used to force the value of some members
   */
  constructor(discountToCreate: DiscountCreator = {}) {
    /** @type {string} Type of the discount */
    this.discountType = discountToCreate.discountType || null;

    // Discount information
    /** @type {string} Name of the discount */
    this.name = discountToCreate.name || faker.commerce.department();

    /** @type {string} Name of the discount */
    this.description = faker.lorem.sentence();

    // Discount periode
    /** @type {string|null} Starting date for the discount or null to disable it */
    this.dateFrom = discountToCreate.dateFrom || null;

    /** @type {string|null} Ending date for the discount or null to disable it */
    this.dateTo = discountToCreate.dateTo || null;

    // Customer eligibility
    /** @type {string} All customers eligibility of the discount */
    this.allCustomers = discountToCreate.allCustomers || false;

    /** @type {string} Customer groups eligibility of the discount */
    this.customerGroups = discountToCreate.customerGroups || false;

    /** @type {string} Single customer eligibility of the discount */
    this.singleCustomer = discountToCreate.singleCustomer || false;

    // Product conditions
    /** @type {string} Product condition of the discount */
    this.noProductCondition = discountToCreate.noProductCondition || false;

    /** @type {string} Product condition of the discount */
    this.singleProduct = discountToCreate.singleProduct || false;

    /** @type {string} Product condition of the discount */
    this.productSegment = discountToCreate.productSegment || false;

    // Cart conditions
    /** @type {string} Cart condition of the discount */
    this.noCartCondition = discountToCreate.noCartCondition || false;

    /** @type {string} The minimum purchase amount */
    this.minimumPurchaseAmount = discountToCreate.minimumPurchaseAmount || false;

    this.minimumAmountValue = discountToCreate.minimumAmountValue || 50;

    this.minimumAmountCurrency = discountToCreate.minimumAmountCurrency || 'Euro (EUR)';

    this.minimumAmountTax = discountToCreate.minimumAmountTax || null;

    /** @type {string} Minimum product quantity */
    this.minimumProductQuantity = discountToCreate.minimumProductQuantity || false;

    /** @type {string} Minimum product quantity */
    this.productQuantity = discountToCreate.productQuantity || 1;

    // Discount value
    /** @type {string} The value of the discount */
    this.discountValue = discountToCreate.discountValue || 10;

    /** @type {string} The type of the discount */
    this.discountReductionType = discountToCreate.discountReductionType || '€';

    /** @type {string} The currency of the discount */
    this.discountCurrency = discountToCreate.discountCurrency || 'Euro (EUR)';

    /** @type {string} The TAX of the discount */
    this.discountTax = discountToCreate.discountTax || 'Tax included';

    /** @type {string} The mode of the discount */
    this.createAutomaticDiscount = discountToCreate.createAutomaticDiscount || false;

    /** @type {string} The mode of the discount */
    this.generateDiscountCode = discountToCreate.generateDiscountCode || false;

    /** @type {string} The code of the discount */
    this.discountCode = discountToCreate.discountCode || '';
  }
}
