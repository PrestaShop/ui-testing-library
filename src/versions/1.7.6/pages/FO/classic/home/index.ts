// Import pages
import type {FoHomePageInterface} from '@interfaces/FO/home';
import {FoHomePage} from '@versions/8.1/pages/FO/classic/home/index';

/**
 * Home page, contains functions that can be used on the page
 * @class
 */
class FoHomePageVersion extends FoHomePage implements FoHomePageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on order confirmation page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.productArticle = (number: number) => `${this.productsBlockNth(2)} .products `
      + `article.product-miniature:nth-child(${number}) div`;
  }
}

module.exports = new FoHomePageVersion();
