// Import pages
import type {BOProductsCreatePageInterface} from '@interfaces/BO/catalog/products/create';
import {BOProductsCreatePage} from '@versions/1.7.8/pages/BO/catalog/products/create';

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

    this.productNameInput = (locale: string) => `${this.productName} div.translation-label-${locale} input`;
  }
}

const boProductsCreatePage = new BOProductsCreatePageVersion();
export {boProductsCreatePage, BOProductsCreatePageVersion as BOProductsCreatePage};
