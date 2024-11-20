// Import pages
import type {BOProductsCreatePageInterface} from '@interfaces/BO/catalog/products/create';
import {CreateProduct} from '@versions/develop/pages/BO/catalog/products/create';

import descriptionTab from '@pages/BO/catalog/products/create/tabDescription';
import pricingTab from '@pages/BO/catalog/products/create/tabPricing';
import detailsTab from '@pages/BO/catalog/products/create/tabDetails';
import virtualProductTab from '@pages/BO/catalog/products/create/tabVirtualProduct';
import stocksTab from '@pages/BO/catalog/products/create/tabStocks';
import packTab from '@pages/BO/catalog/products/create/tabPack';

import type FakerProduct from '@data/faker/product';

import type {Page} from 'playwright';

/**
 * Bo create product page, contains functions that can be used on the page
 * @class
 * @extends CreateProduct
 */
class BOCreateProductVersion extends CreateProduct implements BOProductsCreatePageInterface {
  /**
   * Set product
   * @param page {Page} Browser tab
   * @param productData {FakerProduct} Data to set in new product page
   * @returns {Promise<string>}
   */
  async setProduct(page: Page, productData: FakerProduct): Promise<string|null> {
    await this.waitForVisibleSelector(page, this.productActiveSwitchButtonToggleInput);

    //// Tab "Description"
    // Set description
    await descriptionTab.setProductDescription(page, productData);
    // Set name
    await this.setProductName(page, productData.nameFR, 'fr');
    await this.setProductName(page, productData.name, 'en');

    // Set status
    await this.setProductStatus(page, productData.status);

    //// Tab "Details"
    await detailsTab.setProductDetails(page, productData);

    //// Tab "Stocks"
    if (productData.type === 'virtual') {
      await virtualProductTab.setVirtualProduct(page, productData);
    } else if (productData.type !== 'combinations') {
      await stocksTab.setProductStock(page, productData);
    }

    if (productData.type === 'pack') {
      await packTab.setPackOfProducts(page, productData.pack);
    }

    //// Tab "Pricing"
    await pricingTab.setProductPricing(page, productData);

    return this.saveProduct(page);
  }
}

const createProduct = new BOCreateProductVersion();
export {createProduct, BOCreateProductVersion as CreateProduct};
