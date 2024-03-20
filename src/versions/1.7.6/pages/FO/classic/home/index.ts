// Import pages
import type {FoHomePageInterface} from '@interfaces/FO/home';
import {HomePage} from '@versions/develop/pages/FO/classic/home/index';

/**
 * Order confirmation page, contains functions that can be used on the page
 * @class
 * @extends OrderConfirmationPage
 */
class HomePageVersion extends HomePage implements FoHomePageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on order confirmation page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.productArticle = (number: number) => `${this.productsBlock(2)} .products article:nth-child(${number}) div`;
  }
}

module.exports = new HomePageVersion();
