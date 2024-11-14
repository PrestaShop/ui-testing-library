// Import pages
import type {BOProductsCreatePageInterface} from '@interfaces/BO/catalog/products/create';
import {CreateProduct} from '@versions/1.7.5/pages/BO/catalog/products/create';
import {type Page} from '@playwright/test';

/**
 * Bo create product page, contains functions that can be used on the page
 * @class
 * @extends CreateProduct
 */
class BOCreateProductVersion extends CreateProduct implements BOProductsCreatePageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on create products page
   */
  constructor() {
    super();

    this.deleteProductButton = '#product_form_delete_btn';
  }

  /**
   * Delete product
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async deleteProduct(page: Page): Promise<string> {
    await this.clickAndWaitForURL(page, this.deleteProductButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

const createProduct = new BOCreateProductVersion();
export {createProduct, BOCreateProductVersion as CreateProduct};