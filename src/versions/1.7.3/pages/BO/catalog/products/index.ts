// Import pages
import type {BOProductsPageInterface} from '@interfaces/BO/catalog/products';
import {ProductsPage} from '@versions/1.7.5/pages/BO/catalog/products';
import {type Page} from '@playwright/test';

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

    // Products list
    this.productsListTableColumnName = (row: number) => `${this.productsListTableRow(row)} td:nth-child(3) a`;
    this.productsListTableColumnReference = (row: number) => `${this.productsListTableRow(row)} td:nth-child(4)`;
    this.productsListTableColumnCategory = (row: number) => `${this.productsListTableRow(row)} td:nth-child(5)`;
    this.productsListTableColumnPriceTExc = (row: number) => `${this.productsListTableRow(row)} td:nth-child(6) a`;
    this.productsListTableColumnPriceATI = (row: number) => `${this.productsListTableRow(row)} td:nth-child(7)`;
    this.productsListTableColumnStatus = (row: number) => `${this.productsListTableRow(row)} td:nth-child(8)`;
    this.productListTableDropDownList = (row: number) => `${this.productsListTableRow(row)} td div.btn-group-action `
      + 'a.dropdown-toggle';

    // Bulk actions
    this.selectAllProductsCheckbox = '#bulk_action_select_all';
  }
}

const productsPage = new BOProductsVersion();
export {productsPage, BOProductsVersion as ProductsPage};