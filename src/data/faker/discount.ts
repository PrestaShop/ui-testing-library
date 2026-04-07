import type FakerCountry from '@data/faker/country';
import type FakerProduct from '@data/faker/product';
import type {DiscountCreator, DiscountType} from '@data/types/discount';

import {faker} from '@faker-js/faker';

/**
 * Create new discount to use on creation discount form on BO
 * @class
 */
export default class FakerDiscount {
  public readonly discountType: DiscountType | null;

  public readonly name: string;

  public readonly description: string;

  public readonly dateFrom: string | null;

  public readonly dateTo: string | null;

  public readonly neverExpires: boolean;

  public readonly allCustomers: boolean;

  public readonly customerGroups: boolean;

  public readonly singleCustomer: boolean;

  public readonly noProductCondition: boolean;

  public readonly singleProduct: boolean;

  public readonly specificProduct: FakerProduct | null;

  public readonly productSegment: boolean;

  public readonly noCartCondition: boolean;

  public readonly minimumPurchaseAmount: boolean;

  public readonly minimumAmountValue: number | string;

  public readonly minimumAmountCurrency: string | null;

  public readonly minimumAmountTax: string | null;

  public readonly minimumProductQuantity: boolean;

  public readonly productQuantity: number | string;

  public readonly discountValue: number | string;

  public readonly discountReductionType: string;

  public readonly discountCurrency: string | null;

  public readonly discountTax: string | null;

  public readonly deliveryConditionsCountries: FakerCountry[];

  public readonly createAutomaticDiscount: boolean;

  public readonly generateRandomCode: boolean;

  public readonly discountCode: string;

  public readonly discountCompatibilityTypes: number[];

  public readonly priority: number;

  public readonly freeGift: FakerProduct | null;

  /**
   * Constructor for class DiscountData
   * @param discountToCreate {Object} Could be used to force the value of some members
   */
  constructor(discountToCreate: DiscountCreator = {}) {
    /** @type {DiscountType|null} Type of the discount */
    this.discountType = discountToCreate.discountType || null;

    // Discount information
    /** @type {string} Name of the discount */
    this.name = discountToCreate.name || faker.commerce.department();

    /** @type {string} Description of the discount */
    this.description = discountToCreate.description || faker.lorem.sentence();

    // Discount periode
    /** @type {string|null} Starting date for the discount or null to disable it */
    this.dateFrom = discountToCreate.dateFrom || null;

    /** @type {string|null} Ending date for the discount or null to disable it */
    this.dateTo = discountToCreate.dateTo || null;

    /** @type {boolean} True if the discount never expires */
    this.neverExpires = discountToCreate.neverExpires || false;

    // Customer eligibility
    /** @type {boolean} True to enable all customers on the discount */
    this.allCustomers = discountToCreate.allCustomers || false;

    /** @type {boolean} True to enable customer groups on the discount*/
    this.customerGroups = discountToCreate.customerGroups || false;

    /** @type {boolean} True to enable single customer on the discount */
    this.singleCustomer = discountToCreate.singleCustomer || false;

    // Product conditions
    /** @type {boolean} True to enable product condition on the discount */
    this.noProductCondition = discountToCreate.noProductCondition || false;

    /** @type {boolean} True to enable single product on the discount */
    this.singleProduct = discountToCreate.singleProduct || false;

    /**  /** @type {FakerProduct|null} The specific product to add on the discount */
    this.specificProduct = discountToCreate.specificProduct || null;

    /** @type {boolean} True to enable product segment on the discount */
    this.productSegment = discountToCreate.productSegment || false;

    // Cart conditions
    /** @type {boolean} True to enable cart condition on the discount */
    this.noCartCondition = discountToCreate.noCartCondition || false;

    /** @type {boolean} True to enable minimum purchase on the discount */
    this.minimumPurchaseAmount = discountToCreate.minimumPurchaseAmount || false;

    /** @type {string|number} Minimum amount value of the discount */
    this.minimumAmountValue = discountToCreate.minimumAmountValue === undefined
      ? 50
      : discountToCreate.minimumAmountValue;

    /** @type {string} Minimum amount currency of the discount */
    this.minimumAmountCurrency = discountToCreate.minimumAmountCurrency || 'Euro (EUR)';

    /** @type {string} Minimum amout tax of the discount */
    this.minimumAmountTax = discountToCreate.minimumAmountTax || 'Tax included';

    /** @type {boolean} True to enable minimum product quantity on the discount*/
    this.minimumProductQuantity = discountToCreate.minimumProductQuantity || false;

    /** @type {number|string} Minimum product quantity of the discount*/
    this.productQuantity = discountToCreate.productQuantity || 1;

    // Discount value
    /** @type {number} The value of the discount */
    this.discountValue = discountToCreate.discountValue || 10;

    /** @type {string} The type of the discount */
    this.discountReductionType = discountToCreate.discountReductionType || '€';

    /** @type {string} The currency of the discount */
    this.discountCurrency = discountToCreate.discountCurrency || 'Euro (EUR)';

    /** @type {string} The TAX of the discount */
    this.discountTax = discountToCreate.discountTax || 'Tax included';

    /** @type {boolean} True to enable create automatic discount */
    this.createAutomaticDiscount = discountToCreate.createAutomaticDiscount || false;

    /** @type {FakerCountry[]} */
    this.deliveryConditionsCountries = discountToCreate.deliveryConditionsCountries || [];

    /** @type {string} The code of the discount */
    this.discountCode = discountToCreate.discountCode || '';

    /** @type {boolean} True to enable to generate random discount code */
    this.generateRandomCode = discountToCreate.generateRandomCode || false;

    /** @type {number[]} Compatible with discounts */
    this.discountCompatibilityTypes = discountToCreate.discountCompatibilityTypes || [];

    /** @type {number} Priority */
    this.priority = discountToCreate.priority || 1;

    // Free gift
    /** @type {FakerProduct|null} The free gift to add on the discount */
    this.freeGift = discountToCreate.freeGift || null;
  }
}
