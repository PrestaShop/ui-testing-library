// Import pages
import type {FoModalBlockCartPageInterface} from '@interfaces/FO/modal/blockCart';
import {BlockCartModal} from '@versions/develop/pages/FO/classic/modal/blockCart';

import {type Page} from '@playwright/test';

/**
 * FO block cart modal, contains functions that can be used on the page
 * @class
 * @extends foProductPage
 */
class FoBlockCartModalVersion extends BlockCartModal implements FoModalBlockCartPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on block cart modal
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.cartModalCheckoutLink = `${this.blockCartModalDiv} div.cart-content a`;
  }
}

const blockCartModal = new FoBlockCartModalVersion();
export {blockCartModal, FoBlockCartModalVersion as BlockCartModal};
