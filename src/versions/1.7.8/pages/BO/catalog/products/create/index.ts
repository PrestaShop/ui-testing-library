// Import pages
import type {BOProductsCreatePageInterface} from '@interfaces/BO/catalog/products/create';
import {BOProductsCreatePage} from '@versions/8.2/pages/BO/catalog/products/create';

import type {Page} from 'playwright';

/**
 * Bo create product page, contains functions that can be used on the page
 * @class
 * @extends BOProductsCreatePage
 */
class BOProductsCreatePageVersion extends BOProductsCreatePage implements BOProductsCreatePageInterface {
  /**
     * @constructs
     * Setting up texts and selectors to use on create product page
     */
  constructor() {
    super();

    this.saveProductButton = '.product-footer #submit';
  }

  /**
   * Save product
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async saveProduct(page: Page): Promise<string> {
    await page.click(this.saveProductButton);
    const growlTextMessage = await this.getGrowlMessageContent(page, 30000);
    await this.closeGrowlMessage(page);

    return growlTextMessage ?? '';
  }
}

const boProductsCreatePage = new BOProductsCreatePageVersion();
export {boProductsCreatePage, BOProductsCreatePageVersion as BOProductsCreatePage};
