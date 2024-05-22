import type {FoProductPageInterface} from '@interfaces/FO/product/index';
import type {Page} from '@playwright/test';
import {ProductPage} from '@versions/develop/pages/FO/classic/product/index';

/**
 * @class
 * @extends ProductPage
 */
class ProductPageVersion extends ProductPage implements FoProductPageInterface {
  private readonly productCategoryProductsBlock: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on order confirmation page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    // Selectors
    this.productCategoryProductsBlock = '#content-wrapper section.featured-products';
  }

  /**
   * Has products block
   * @param blockName {'categoryproducts'} The block name in the page
   * @param page {Page} Browser tab
   * @return {Promise<boolean>}
   */
  async hasProductsBlock(page: Page, blockName: 'categoryproducts'): Promise<boolean> {
    if (blockName === 'categoryproducts') {
      return (await page.locator(this.productCategoryProductsBlock).count()) > 0;
    }
    return false;
  }
}

module.exports = new ProductPageVersion();
