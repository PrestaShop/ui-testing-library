// Import pages
import type {BOProductsCreatePageInterface} from '@interfaces/BO/catalog/products/create';
import {CreateProduct} from '@versions/1.7.3/pages/BO/catalog/products/create';
import {type Page} from '@playwright/test';

/**
 * Bo create product page, contains functions that can be used on the page
 * @class
 * @extends CreateProduct
 */
class BOCreateProductVersion extends CreateProduct implements BOProductsCreatePageInterface {
  private readonly confirmationModalContinueButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on create products page
   */
  constructor() {
    super();

    this.deleteProductButton = '#product_form_delete_btn';
    this.confirmationModalContinueButton = '#confirmation_modal button.continue';
    this.alertSuccessBlock = `${this.alertBlock}.flash-message-list.alert-success`;
  }

  /**
   * Delete product
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async deleteProduct(page: Page): Promise<string> {
    await page.locator(this.deleteProductButton).click();
    await this.clickAndWaitForURL(page, this.confirmationModalContinueButton);

    return this.getAlertSuccessBlockContent(page);
  }
}

const createProduct = new BOCreateProductVersion();
export {createProduct, BOCreateProductVersion as CreateProduct};
