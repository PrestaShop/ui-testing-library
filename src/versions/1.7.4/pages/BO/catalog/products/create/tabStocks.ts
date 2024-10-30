// Import pages
import type {BOProductsCreateTabStocksPageInterface} from '@interfaces/BO/catalog/products/create/tabStocks';
import {StocksTab} from '@versions/8.0/pages/BO/catalog/products/create/tabStocks';
import type FakerProduct from '@data/faker/product';

import type {Page} from 'playwright';

/**
 * Bo product stocks tab, contains functions that can be used on the page
 * @class
 * @extends StocksTab
 */
class BOProductTabStocksVersion extends StocksTab implements BOProductsCreateTabStocksPageInterface {
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

    await this.setOptionWhenOutOfStock(page, productData.behaviourOutOfStock);

    // Set value on label In and out of stock inputs
    await page.locator(this.labelWhenInStockInput).fill(productData.labelWhenInStock);
    await page.locator(this.labelWhenOutOfStock).fill(productData.labelWhenOutOfStock);
  }
}

const stocksTab = new BOProductTabStocksVersion();
export {stocksTab, BOProductTabStocksVersion};
