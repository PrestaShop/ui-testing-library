// Import pages
import type {FoProductPageInterface} from '@interfaces/FO/product';
import {ProductPage} from '@versions/1.7.7/pages/FO/classic/product/index';

import {type Page} from '@playwright/test';

/**
 * FO product page, contains functions that can be used on the page
 * @class
 * @extends foProductPage
 */
class FoProductPageVersion extends ProductPage implements FoProductPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on product page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.proceedToCheckoutButton = `${this.blockCartModal} a.btn-primary`;
  }
}

const productPage = new FoProductPageVersion();
export {productPage, FoProductPageVersion as ProductPage};
