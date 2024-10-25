// Import pages
import type {BOProductsPageInterface} from '@interfaces/BO/catalog/products';
import {ProductsPage} from '@versions/8.0/pages/BO/catalog/products';

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

    // Products table selectors
    this.productGridTable = '#product_catalog_list table';

    // Products list
    this.productsListTableColumnStatus = (row: number) => `${this.productsListTableRow(row)} td:nth-child(10)`;
    this.productsListTableColumnStatusInput = (row: number) => `${this.productsListTableColumnStatus(row)} .action-enabled`;
  }

  /**
   * Get Product Status
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @returns {Promise<boolean>}
   */
  async getProductStatusFromList(page: Page, row: number): Promise<boolean> {
    const inputValue = await this.getTextContent(page, this.productsListTableColumnStatusInput(row));

    return inputValue !== '0';
  }
}

const productsPage = new BOProductsVersion();
export {productsPage, BOProductsVersion as ProductsPage};
