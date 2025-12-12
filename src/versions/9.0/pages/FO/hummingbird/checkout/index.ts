import {type FoCheckoutPageInterface} from '@interfaces/FO/checkout';
import {FoCheckoutPage as FoCheckoutPageVersion} from '@versions/develop/pages/FO/hummingbird/checkout';

/**
 * Cart page, contains functions that can be used on the page
 * @class
 * @extends CartPageClassic
 */
class FoCheckoutPage extends FoCheckoutPageVersion implements FoCheckoutPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super();

    // Selectors
    this.stepFormSuccess = '.checkout__steps--success';

    // Checkout summary selectors
    this.cartSummaryLine = (line: number) => `${this.checkoutPromoBlock} li:nth-child(${line}).cart-voucher__item`;
    this.checkoutRemoveDiscountLink = (row: number) => `${this.cartSummaryLine(row)} `
      + ' a[data-link-action="remove-voucher"] i';
  }
}

const foCheckoutPage = new FoCheckoutPage();
export {foCheckoutPage, FoCheckoutPage};
