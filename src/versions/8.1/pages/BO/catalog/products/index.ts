// Import pages
import type {BOProductsPageInterface} from '@interfaces/BO/catalog/products';
import {type Page} from '@playwright/test';
import {ProductsPage} from '@versions/develop/pages/BO/catalog/products';

/**
 * Bo products page, contains functions that can be used on the page
 * @class
 * @extends ProductsPage
 */
class BOProductsVersion extends ProductsPage implements BOProductsPageInterface {
  /**
     * @constructs
     * Setting up texts and selectors to use on products page
     */
  constructor() {
    super();

    this.newProductIframeURL = /sell\/catalog\/products-v2\/create/gmi;
  }

  /**
   * Reset input filters
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async resetFilter(page: Page): Promise<void> {
    if (!(await this.elementNotVisible(page, this.filterResetButton, 2000))) {
      await page.locator(this.filterResetButton).click();
      await page.waitForLoadState();
    }
  }
}

const productsPage = new BOProductsVersion();
export {productsPage, BOProductsVersion as ProductsPage};
