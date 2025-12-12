import {type ProductAttribute} from '@data/types/product';
import {type FoModalQuickViewPageInterface} from '@interfaces/FO/modal/quickView';
import {type Page} from '@playwright/test';
import {FoModalQuickViewPage as FoModalQuickViewPageVersion} from '@versions/develop/pages/FO/hummingbird/modal/quickView';

/**
 * Quick view modal, contains functions that can be used on the page
 * @class
 * @extends FoModalQuickViewPageClassic
 */
class FoModalQuickViewPage extends FoModalQuickViewPageVersion implements FoModalQuickViewPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on home page
   */
  constructor() {
    super();

    // Quick view modal
    this.quickViewProductName = `${this.quickViewModalDiv} .h3`;
    this.quickViewProductPrice = `${this.quickViewModalDiv} div.product__current-price`;
    this.quickViewTaxShippingDeliveryLabel = `${this.quickViewModalDiv} div.product__tax-label`;
    this.quickViewShortDescription = `${this.quickViewModalDiv} div#product-description-short`;
    this.quickViewCoverImage = `${this.quickViewModalDiv} #product-images div.carousel-item.active img.img-fluid`;
    this.quickViewThumbImage = `${this.quickViewModalDiv} div.thumbnails__container img.img-fluid`;
    this.quickViewProductDimension = `${this.quickViewProductVariants} select#group_3`;
    this.quickViewProductSize = `${this.quickViewProductVariants} select#group_1`;
    this.quickViewProductColor = `${this.quickViewProductVariants} ul#group_2`;
    this.quickViewCloseButton = `${this.quickViewModalDiv} button.btn-close`;
    this.quickViewThumbImagePosition = (position: number) => `${this.quickViewModalDiv} li:nth-child(${position}) img.js-thumb`;
  }

  /**
   * Change product attribute
   * @param page {Page} Browser tab
   * @param attributes {ProductAttribute} The attributes data (size, color, dimension)
   * @returns {Promise<void>}
   */
  async setAttribute(page: Page, attributes: ProductAttribute): Promise<void> {
    switch (attributes.name) {
      case 'color':
        await Promise.all([
          await this.waitForSelectorAndClick(page, `${this.quickViewProductColor} input[title='${attributes.value}'] + span`),
          await page.waitForResponse((response) => response.url().includes('product&token=')),
        ]);
        break;
      case 'dimension':
        await Promise.all([
          page.waitForResponse((response) => response.url().includes('product&token=')),
          this.selectByVisibleText(page, this.quickViewProductDimension, attributes.value),
        ]);
        break;
      case 'size':
        await Promise.all([
          page.waitForResponse((response) => response.url().includes('product&token=')),
          this.selectByVisibleText(page, this.quickViewProductSize, attributes.value),
        ]);
        break;
      default:
        throw new Error(`${attributes.name} has not being in defined in "changeAttributes"`);
    }
  }
}

const foModalQuickViewPage = new FoModalQuickViewPage();
export {foModalQuickViewPage, FoModalQuickViewPage};
