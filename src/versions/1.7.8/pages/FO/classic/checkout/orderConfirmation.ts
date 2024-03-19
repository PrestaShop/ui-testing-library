// Import pages
import type {FoCheckoutOrderConfirmationPageInterface} from '@interfaces/FO/checkout/orderConfirmation';
import {OrderConfirmationPage} from '@versions/develop/pages/FO/classic/checkout/orderConfirmation';

/**
 * Order confirmation page, contains functions that can be used on the page
 * @class
 * @extends OrderConfirmationPage
 */
class OrderConfirmation extends OrderConfirmationPage implements FoCheckoutOrderConfirmationPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on order confirmation page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    // Selectors
    this.orderReferenceValue = `${this.orderDetailsTable} ul li:nth-child(1)`;
  }
}

module.exports = new OrderConfirmation();
