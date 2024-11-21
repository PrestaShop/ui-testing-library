// Import pages
import type {FoProductPageInterface} from '@interfaces/FO/product';
import {ProductPage} from '@versions/develop/pages/FO/classic/product/index';

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
  }

  /**
   * Get product attributes from a Ul selector
   * @param page {Page} Browser tab
   * @param ulSelector {string} Selector to locate the element
   * @returns {Promise<Array<string>>}
   */
  async getProductsAttributesFromUl(page: Page, ulSelector: string): Promise<Array<string | null>> {
    return page.locator(`${ulSelector} li span.sr-only`).allTextContents();
  }
}

const productPage = new FoProductPageVersion();
export {productPage, FoProductPageVersion as ProductPage};
