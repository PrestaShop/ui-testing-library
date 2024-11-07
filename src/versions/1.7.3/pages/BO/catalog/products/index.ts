// Import pages
import type {BOProductsPageInterface} from '@interfaces/BO/catalog/products';
import {ProductsPage} from '@versions/1.7.5/pages/BO/catalog/products';
import {ProductFilterMinMax} from '@data/types/product';
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

  /**
   * Filter products
   * @param page {Page} Browser tab
   * @param filterBy {string} Column to filter
   * @param value {string|ProductFilterMinMax} Value to put on filter
   * @param filterType {string} Input or select to choose method of filter
   * @return {Promise<void>}
   */
  async filterProducts(page: Page, filterBy: string, value: string | ProductFilterMinMax = '', filterType: string = 'input')
    : Promise<void> {
    switch (filterType) {
      case 'input':
        if (typeof value === 'string') {
          switch (filterBy) {
            case 'product_name':
              await page.locator(this.productFilterNameInput).fill(value);
              break;
            case 'reference':
              await page.locator(this.productFilterReferenceInput).fill(value);
              break;
            case 'category':
              await page.locator(this.productFilterCategoryInput).fill(value);
              break;
            case 'position':
              await this.setValue(page, this.productFilterPositionInput, value);
              break;
            default:
          }
        } else {
          switch (filterBy) {
            case 'id_product':
              await this.filterProductsByID(page, value.min, value.max);
              break;
            case 'price':
              await this.filterProductsByPrice(page, value.min, value.max);
              break;
            case 'quantity':
              await this.filterProductsByQuantity(page, value.min, value.max);
              break;
            default:
          }
        }
        break;
      case 'select':
        await this.selectByVisibleText(page, this.productFilterSelectStatus, typeof value === 'string' ? value : 'No');
        break;
      default:
      // Do nothing
    }
    // click on search
    await page.mouse.click(100, 100);
    await this.clickAndWaitForLoadState(page, this.filterSearchButton, 'networkidle', 10000);
  }
}

const productsPage = new BOProductsVersion();
export {productsPage, BOProductsVersion as ProductsPage};
