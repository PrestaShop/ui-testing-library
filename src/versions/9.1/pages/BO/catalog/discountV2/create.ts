import {type BODiscountsCreatePageInterface} from '@interfaces/BO/catalog/discountsV2/create';
import {BODiscountsCreatePage as BODiscountsCreatePageVersion} from '@versions/develop/pages/BO/catalog/discountsV2/create';

/**
 * @class
 * @extends BODiscountCreatePageVersion
 */
class BODiscountsCreatePage extends BODiscountsCreatePageVersion implements BODiscountsCreatePageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on create discount page
   */
  constructor() {
    super();

    this.errorMessageNameRequired = 'The field names is required at least in your default language.';
    this.errorMessageMinPurchaseAmount = 'This value should be greater than 0.';
    this.errorMessageMinPurchaseAmountNotnumber = 'Please enter a valid money amount.';
    this.errorMessageDiscountValue = (discountValue: string) => `Reduction value "${discountValue}" is invalid. `
      + 'It must be greater than 0.';
    
    // Selectors
    this.minimumAmountValueInput = '#discount_conditions_cart_minimum_amount_value';
    this.minimumAmountCurrencySelect = '#select2-discount_conditions_cart_minimum_amount_currency-container';
    this.discountValueInput = '#discount_usability_mode_code';
  }
}

const boDiscountsCreatePage = new BODiscountsCreatePage();
export {boDiscountsCreatePage, BODiscountsCreatePage};
