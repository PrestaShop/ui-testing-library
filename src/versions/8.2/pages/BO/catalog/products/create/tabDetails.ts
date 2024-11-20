// Import pages
import type {BOProductsCreateTabDetailsPageInterface} from '@interfaces/BO/catalog/products/create/tabDetails';
import {DetailsTab} from '@versions/develop/pages/BO/catalog/products/create/tabDetails';

// Import data
import type FakerProduct from '@data/faker/product';

import type {Page} from 'playwright';

/**
 * Details tab in product page, contains functions that can be used on the page
 * @class
 * @extends DetailsTab
 */
class DetailsTabVersion extends DetailsTab implements BOProductsCreateTabDetailsPageInterface {
  /**
   * Set product details
   * @param page {Page} Browser tab
   * @param productData {FakerProduct} Data to set in details form
   * @returns {Promise<void>}
   */
  async setProductDetails(page: Page, productData: FakerProduct): Promise<void> {
    await this.waitForSelectorAndClick(page, this.detailsTabLink);
    await this.setValue(page, this.productReferenceInput, productData.reference);
    await this.setCondition(page, productData);
  }
}

const detailsTab = new DetailsTabVersion();
export {detailsTab, DetailsTabVersion as DetailsTab};
