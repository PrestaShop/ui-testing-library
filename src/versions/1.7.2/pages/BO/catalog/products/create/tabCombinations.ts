// Import pages
import type {BOProductsCreateTabCombinationsPageInterface} from '@interfaces/BO/catalog/products/create/tabCombinations';
import {CombinationsTab} from '@versions/8.0/pages/BO/catalog/products/create/tabCombinations';
import boProductsCreatePage from '@pages/BO/catalog/products/create';

// Import data
import type {ProductAttributes} from '@data/types/product';

import type {Page} from 'playwright';

/**
 * Bo product combinations tab, contains functions that can be used on the page
 * @class
 * @extends CombinationsTab
 */
class BOProductTabCombinaisonsVersion extends CombinationsTab implements BOProductsCreateTabCombinationsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on combination tab
   */
  constructor() {
    super();

    this.combinationsTabLink = '#tab_step3';
    this.searchAttributesInput = '#form_step3_attributes-tokenfield';
    this.generateCombinationButton = '#create-combinations';
  }

  /**
   * Set product attributes
   * @param page {Page} Browser tab
   * @param attributes {ProductAttributes[]} Combinations of the product
   * @returns {Promise<string>}
   */
  async setProductAttributes(page: Page, attributes: ProductAttributes[]): Promise<string |null> {
    await this.waitForSelectorAndClick(page, this.combinationsTabLink);

    for (let i: number = 0; i < attributes.length; i++) {
      for (let j: number = 0; j < attributes[i].values.length; j++) {
        await this.selectAttribute(page, `${attributes[i].name} : ${attributes[i].values[j]}`);
      }
    }
    await page.locator(this.generateCombinationButton).click();
    await page.waitForTimeout(2000);

    return boProductsCreatePage.saveProduct(page);
  }
}

const combinationsTab = new BOProductTabCombinaisonsVersion();
export {combinationsTab, BOProductTabCombinaisonsVersion};
