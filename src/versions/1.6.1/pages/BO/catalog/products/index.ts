// Import pages
import type {BOProductsPageInterface} from '@interfaces/BO/catalog/products';
import {ProductsPage} from '@versions/1.7.7/pages/BO/catalog/products';

import type {Page} from 'playwright';

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
    // header
    this.newProductButton = '#page-header-desc-product-new_product';
  }
}

const productsPage = new BOProductsVersion();
export {productsPage, BOProductsVersion as ProductsPage};
