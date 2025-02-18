// Import pages
import type {FoModalBlockCartPageInterface} from '@interfaces/FO/modal/blockCart';
import {FoModalBlockCartPage as FoModalBlockCartPageVersion} from '@versions/develop/pages/FO/classic/modal/blockCart';

/**
 * FO block cart modal, contains functions that can be used on the page
 * @class
 * @extends foProductPage
 */
class FoModalBlockCartPage extends FoModalBlockCartPageVersion implements FoModalBlockCartPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on block cart modal
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.cartModalCheckoutLink = `${this.blockCartModalDiv} div.cart-content a`;
  }
}

const foModalBlockCartPage = new FoModalBlockCartPage();
export {foModalBlockCartPage, FoModalBlockCartPage};
