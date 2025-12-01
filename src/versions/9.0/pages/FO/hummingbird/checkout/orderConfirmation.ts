import {type FoCheckoutOrderConfirmationPageInterface} from '@interfaces/FO/checkout/orderConfirmation';
import {
  FoCheckoutOrderConfirmationPage as FoCheckoutOrderConfirmationPageVersion,
} from '@versions/develop/pages/FO/hummingbird/checkout/orderConfirmation';

/**
 * @class
 * @extends FoCheckoutOrderConfirmationPageVersion
 */
class FoCheckoutOrderConfirmationPage extends FoCheckoutOrderConfirmationPageVersion
  implements FoCheckoutOrderConfirmationPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super();

    // Selectors
    this.orderConfirmationCardSection = '#content-wrapper .alert';
    this.orderConfirmationCardTitleH3 = `${this.orderConfirmationCardSection} h1.alert-heading`;
  }
}

const foCheckoutOrderConfirmationPage = new FoCheckoutOrderConfirmationPage();
export {foCheckoutOrderConfirmationPage, FoCheckoutOrderConfirmationPage};
