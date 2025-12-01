import {type FoModalBlockCartPageInterface} from '@interfaces/FO/modal/blockCart';
import {FoModalBlockCartPage as FoModalBlockCartPageVersion} from '@versions/develop/pages/FO/hummingbird/modal/blockCart';

/**
 * Quick view modal, contains functions that can be used on the page
 * @class
 * @extends FoModalQuickViewPageClassic
 */
class FoModalBlockCartPage extends FoModalBlockCartPageVersion implements FoModalBlockCartPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on home page
   */
  constructor() {
    super();

    // Block Cart Modal
    this.cartModalCheckoutLink = `${this.blockCartModalDiv} div.cart-footer-actions a`;
    this.continueShoppingButton = `${this.blockCartModalDiv} div.cart-footer-actions button`;
  }
}

const foModalBlockCartPage = new FoModalBlockCartPage();
export {foModalBlockCartPage, FoModalBlockCartPage};
