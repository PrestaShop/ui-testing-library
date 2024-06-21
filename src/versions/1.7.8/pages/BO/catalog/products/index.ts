// Import pages
import type {BOProductsPageInterface} from '@interfaces/BO/catalog/products';
import {ProductsPage} from '@versions/8.0/pages/BO/catalog/products';

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

    this.selectAllProductsCheckbox = '#catalog-actions div.md-checkbox label';
  }
}

const productsPage = new BOProductsVersion();
export {productsPage, BOProductsVersion as ProductsPage};
