// Import pages
import type {FoHomePageInterface} from '@interfaces/FO/home';
import {FoHomePage} from '@versions/develop/pages/FO/classic/home/index';

/**
 * FO home page, contains functions that can be used on the page
 * @class
 * @extends FoHomePage
 */
class FoHomePageVersion extends FoHomePage implements FoHomePageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use in home page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.productArticle = (number: number) => `#content .products div:nth-child(${number}) article`;
  }
}

const foHomePage = new FoHomePageVersion();
export {foHomePage, FoHomePageVersion as FoHomePage};
