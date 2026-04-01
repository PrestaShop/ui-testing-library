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

    // Selectors
    this.minimumAmountValueInput = '#discount_conditions_cart_minimum_amount_value';
    this.minimumAmountCurrencySelect = '#select2-discount_conditions_cart_minimum_amount_currency-container';
    this.discountValueInput = '#discount_value_reduction_value';
  }
}

const boDiscountsCreatePage = new BODiscountsCreatePage();
export {boDiscountsCreatePage, BODiscountsCreatePage};
