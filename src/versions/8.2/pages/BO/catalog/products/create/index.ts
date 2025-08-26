// Import pages
import type {BOProductsCreatePageInterface} from '@interfaces/BO/catalog/products/create';
import {BOProductsCreatePage} from '@versions/develop/pages/BO/catalog/products/create';

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
 * @extends BOProductsCreatePage
 */
class BOProductsCreatePageVersion extends BOProductsCreatePage implements BOProductsCreatePageInterface {
  /**
   * Set product name
   * @param page {Page} Browser tab
   * @param name {string} Name of the product
   * @param locale {string} Locale
   * @returns {Promise<void>}
   */
  async setProductName(page: Page, name: string, locale: string = 'en'): Promise<void> {
    const isShopMultiLanguages = await page.locator(this.productNameLanguageButton).isVisible({timeout: 1200});

    if (isShopMultiLanguages) {
      await page.locator(this.productNameLanguageButton).click({timeout: 1000});
      await page.locator(this.productNameLanguageDropdownItem(locale)).click({timeout: 1000});
    }

    await this.setValue(page, this.productNameInput(locale), name);
  }

  /**
   * Set product name
   * @param page {Page} Browser tab
   * @param name {string} Name of the product
   * @param locale {string} Locale
   * @returns {Promise<void>}
   */
  async setProductName(page: Page, name: string, locale: string = 'en'): Promise<void> {
    const isShopMultiLanguages = await page.locator(this.productNameLanguageButton).isVisible({timeout: 1200});

    if (isShopMultiLanguages) {
      await page.locator(this.productNameLanguageButton).click({timeout: 1000});
      await page.locator(this.productNameLanguageDropdownItem(locale)).click({timeout: 1000});
    }

    await this.setValue(page, this.productNameInput(locale), name);
  }

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

    //await this.setProductName(page, productData.nameFR, 'fr');
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

const boProductsCreatePage = new BOProductsCreatePageVersion();
export {boProductsCreatePage, BOProductsCreatePageVersion as BOProductsCreatePage};
