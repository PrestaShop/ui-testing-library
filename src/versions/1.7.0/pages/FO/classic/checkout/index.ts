// Import pages
import type {FoCheckoutPageInterface} from '@interfaces/FO/checkout';
import {CheckoutPage} from '@versions/develop/pages/FO/classic/checkout';

/**
 * FO checkout page, contains functions that can be used on the page
 * @class
 * @extends foProductPage
 */
class FoCheckoutPageVersion extends CheckoutPage implements FoCheckoutPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on checkout page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.paymentOptionInput = (row: string) => `${this.paymentStepSection} input#payment-option-${row}`;
    this.conditionToApproveLabel = `${this.paymentStepSection} [id*='conditions_to_approve']`;
  }
}

const checkoutPage = new FoCheckoutPageVersion();
export {checkoutPage, FoCheckoutPageVersion as CheckoutPage};
