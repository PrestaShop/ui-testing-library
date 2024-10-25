// Import pages
import type {BOProductsCreateTabDescriptionPageInterface} from '@interfaces/BO/catalog/products/create/tabDescription';
import {DescriptionTab} from '@versions/8.0/pages/BO/catalog/products/create/tabDescription';

import type FakerProduct from '@data/faker/product';

import type {Page} from 'playwright';

/**
 * Bo product description tab, contains functions that can be used on the page
 * @class
 * @extends DescriptionTab
 */
class BOProductTabDescriptionVersion extends DescriptionTab implements BOProductsCreateTabDescriptionPageInterface {
  private readonly basicSettingsTabLink: string;

  private readonly shortDescriptionTabLink: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on description tab
   */
  constructor() {
    super();

    this.basicSettingsTabLink = '#tab_step1';
    this.descriptionTabLink = '#tab_description';
    this.shortDescriptionTabLink = '#tab_description_short';
  }

  /**
   * Set product description
   * @param page {Page} Browser tab
   * @param productData {FakerProduct} Data to set in description form
   * @returns {Promise<void>}
   */
  async setProductDescription(page: Page, productData: FakerProduct): Promise<void> {
    await page.locator(this.basicSettingsTabLink).click();
    await page.locator(this.descriptionTabLink).click();
    await this.setValueOnTinymceInput(page, this.productDescriptionIframe, productData.description);
    await page.locator(this.shortDescriptionTabLink).click();
    await this.setValueOnTinymceInput(page, this.productShortDescriptionIframe, productData.summary);
    if (productData.type === 'combinations') {
      await page.locator(this.productWithCombinationsInput).click();
    }

    await this.addProductImages(page, [productData.coverImage, productData.thumbImage]);
  }
}

const descriptionTab = new BOProductTabDescriptionVersion();
export {descriptionTab, BOProductTabDescriptionVersion};
