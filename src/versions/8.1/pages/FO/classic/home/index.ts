// Import pages
import type {FoHomePageInterface} from '@interfaces/FO/home';
import {FoHomePage} from '@versions/develop/pages/FO/classic/home';

/**
 * Order confirmation page, contains functions that can be used on the page
 * @class
 * @extends OrderConfirmationPage
 */
class FoHomePageVersion extends FoHomePage implements FoHomePageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on order confirmation page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.productArticle = (number: number) => `${this.productsBlockNth(2)} .products div.product:nth-child(${number}) div`;
  }
}

const foHomePage = new FoHomePageVersion();
export {foHomePage, FoHomePageVersion as FoHomePage};
