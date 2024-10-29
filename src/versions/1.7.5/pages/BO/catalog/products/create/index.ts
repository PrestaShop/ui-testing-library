// Import pages
import type {BOProductsCreatePageInterface} from '@interfaces/BO/catalog/products/create';
import {CreateProduct} from '@versions/8.0/pages/BO/catalog/products/create';

/**
 * Bo create product page, contains functions that can be used on the page
 * @class
 * @extends CreateProduct
 */
class BOCreateProductVersion extends CreateProduct implements BOProductsCreatePageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on create product page
   */
  constructor() {
    super();

    this.productNameInput = (locale: string) => `${this.productName} div.translation-label-${locale} input`;
  }
}

const createProduct = new BOCreateProductVersion();
export {createProduct, BOCreateProductVersion as CreateProduct};
