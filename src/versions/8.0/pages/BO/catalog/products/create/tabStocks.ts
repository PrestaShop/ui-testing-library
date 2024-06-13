// Import pages
import type {BOProductsCreateTabStocksPageInterface} from '@interfaces/BO/catalog/products/create/tabStocks';
import {StocksTab} from '@versions/develop/pages/BO/catalog/products/create/tabStocks';
import type FakerProduct from '@data/faker/product';

import type {Page} from 'playwright';

/**
 * Bo products page, contains functions that can be used on the page
 * @class
 * @extends ProductsPage
 */
class BOProductTabStocksVersion extends StocksTab implements BOProductsCreateTabStocksPageInterface {
  private readonly labelWhenInStockInput: string;

  private readonly labelWhenOutOfStock: string;

  /**
     * @constructs
     * Setting up texts and selectors to use on products page
     */
  constructor() {
    super();

    this.stocksTabLink = '#tab_step3';
    this.productQuantityInput = '#form_step3_qty_0';
    this.productMinimumQuantityInput = '#form_step3_minimal_quantity';
    this.productStockLocationInput = '#form_step3_location';
    this.denyOrderRadioButton = '#form_step3_out_of_stock_0';
    this.allowOrderRadioButton = '#form_step3_out_of_stock_1';
    this.useDefaultBehaviourRadioButton = '#form_step3_out_of_stock_2';
    this.labelWhenInStockInput = '#form_step3_available_now_1';
    this.labelWhenOutOfStock = '#form_step3_available_later_1';
  }

  /**
     * Set option when out of stock
     * @param page {Page} Browser tab
     * @param option {string} Option to check
     * @returns {Promise<void>}
     */
  async setOptionWhenOutOfStock(page: Page, option: string): Promise<void> {
    switch (option) {
      case 'Deny orders':
        // @ts-ignore
        await page.$eval(this.denyOrderRadioButton, (el) => el.click());
        break;
      case 'Allow orders':
        // @ts-ignore
        await page.$eval(this.allowOrderRadioButton, (el) => el.click());
        break;
      case 'Default behavior':
      case 'Use default behavior':
        // @ts-ignore
        await page.$eval(this.useDefaultBehaviourRadioButton, (el) => el.click());
        break;
      default:
        throw new Error(`Option ${option} was not found`);
    }
  }

  /**
     * Set product stock
     * @param page {Page} Browser tab
     * @param productData {FakerProduct} Data to set in stock form
     * @returns {Promise<void>}
     */
  async setProductStock(page: Page, productData: FakerProduct): Promise<void> {
    await this.waitForSelectorAndClick(page, this.stocksTabLink);

    await this.setValue(page, this.productQuantityInput, productData.quantity);
    await this.setValue(page, this.productMinimumQuantityInput, productData.minimumQuantity);
    await this.setStockLocation(page, productData.stockLocation);

    await this.setOptionWhenOutOfStock(page, productData.behaviourOutOfStock);

    // Set value on label In and out of stock inputs
    await page.locator(this.labelWhenInStockInput).fill(productData.labelWhenInStock);
    await page.locator(this.labelWhenOutOfStock).fill(productData.labelWhenOutOfStock);
  }
}

const stocksTab = new BOProductTabStocksVersion();
export {stocksTab, BOProductTabStocksVersion};
