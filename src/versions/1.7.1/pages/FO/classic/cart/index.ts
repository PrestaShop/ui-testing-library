// Import pages
import type {FoCartPageInterface} from '@interfaces/FO/cart';
import {CartPage} from '@versions/1.7.5/pages/FO/classic/cart';

/**
 * FO cart page, contains functions that can be used on the page
 * @class
 * @extends ProductsPage
 */
class FoCartVersion extends CartPage implements FoCartPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on cart page
   */
  constructor() {
    super();

    this.productPrice = (number: number) => `${this.productItem(number)} div.product-line-grid-body div:nth-child(2)`;
  }
}

const cartPage = new FoCartVersion();
export {cartPage, FoCartVersion as CartPage};