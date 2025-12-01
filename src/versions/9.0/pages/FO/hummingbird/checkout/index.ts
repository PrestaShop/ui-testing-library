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
  }
}

const foCheckoutPage = new FoCheckoutPage();
export {foCheckoutPage, FoCheckoutPage};
