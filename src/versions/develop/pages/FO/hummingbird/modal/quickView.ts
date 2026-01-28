import {type ProductAttribute, type ProductDetails} from '@data/types/product';
import {type FoModalQuickViewPageInterface} from '@interfaces/FO/modal/quickView';
import foHummingbirdModalBlockCartPage from '@pages/FO/hummingbird/modal/blockCart';
import {type Page} from '@playwright/test';
import {FoModalQuickViewPage as FoModalQuickViewPageClassic} from '@versions/develop/pages/FO/classic/modal/quickView';

/**
 * Quick view modal, contains functions that can be used on the page
 * @class
 * @extends FoModalQuickViewPageClassic
 */
class FoModalQuickViewPage extends FoModalQuickViewPageClassic implements FoModalQuickViewPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on home page
   */
  constructor() {
    super('hummingbird');

    // Quick view modal
    this.quickViewModalProductImageCover = `${this.quickViewModalDiv} .product__carousel div.carousel-item.active picture`;
    this.productRowQuantityUpDownButton = (direction: string) => `div.product-actions__quantity button.js-${direction}-button`;
    this.quickViewProductName = `${this.quickViewModalDiv} .product__name`;
    this.quickViewRegularPrice = `${this.quickViewModalDiv} span.product__price-regular`;
    this.quickViewProductPrice = `${this.quickViewModalDiv} div.product__price`;
    this.quickViewDiscountPercentage = `${this.quickViewModalDiv} div.product__discount-percentage`;
    this.quickViewTaxShippingDeliveryLabel = `${this.quickViewModalDiv} span.product__tax-label`;
    this.quickViewShortDescription = `${this.quickViewModalDiv} div.product__description-short`;
    this.quickViewCoverImage = `${this.quickViewModalDiv} .product__images div.carousel-item.active img.img-fluid`;
    this.quickViewThumbImage = `${this.quickViewModalDiv} div.product__thumbnails img.img-fluid`;
    this.quickViewProductVariants = `${this.quickViewModalDiv} div.js-product-variants`;
    this.quickViewProductDimension = `${this.quickViewProductVariants} select[data-product-attribute="3"]`;
    this.quickViewProductSize = `${this.quickViewProductVariants} select[data-product-attribute="1"]`;
    this.quickViewProductColor = `${this.quickViewProductVariants} div[id^="group_2"]`;
    this.quickViewCloseButton = `${this.quickViewModalDiv} .quickview__header button.btn-close`;
    this.quickViewThumbImagePosition = (position: number) => `${this.quickViewModalDiv} ul.product__thumbnails-list `
      + `button:nth-child(${position}) img`;
  }

  /**
   * Click on add to cart button from quick view modal
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async addToCartByQuickView(page: Page, isHidden: boolean = true): Promise<void> {
    await this.waitForVisibleSelector(page, this.addToCartButton);
    await page.locator(this.addToCartButton).click();
    if (isHidden) {
      await this.waitForHiddenSelector(page, this.quickViewModalDiv);
      await this.waitForVisibleSelector(page, foHummingbirdModalBlockCartPage.blockCartModalDiv);
    }
  }

  /**
   * Get product details from quick view modal
   * @param page {Page} Browser tab
   * @returns {Promise<ProductDetails>}
   */
  async getProductDetailsFromQuickViewModal(page: Page): Promise<ProductDetails> {
    return {
      name: await this.getTextContent(page, this.quickViewProductName),
      price: parseFloat((await this.getTextContent(page, this.quickViewProductPrice))
        .replace('Price:', '')
        .replace('€', '')
        .trim(),
      ),
      taxShippingDeliveryLabel: await this.getTextContent(page, this.quickViewTaxShippingDeliveryLabel),
      shortDescription: await this.getTextContent(page, this.quickViewShortDescription),
      coverImage: await this.getAttributeContent(page, this.quickViewCoverImage, 'src'),
      thumbImage: await this.getAttributeContent(page, this.quickViewThumbImage, 'srcset'),
    };
  }

  /**
   * Returns the URL of the main image in the quickview
   * @param page {Page} Browser tab
   * @returns {Promise<string|null>}
   */
  async getQuickViewImageMain(page: Page): Promise<string | null> {
    let selector: string = `${this.quickViewModalProductImageCover} source`;

    if (await page.locator(selector).count() === 0) {
      selector = `${this.quickViewModalProductImageCover} img`;
    }
    const srcset = await this.getAttributeContent(page, selector, 'srcset');

    if (!srcset) {
      return null;
    }
    const srcsets: string[] = srcset
      .split(',')
      .map((el: string) => el.replace(/\s[0-9]+w/i, ''))
      .map((el: string) => el.trim());

    return srcsets[0];
  }

  /**
   * Select thumb image
   * @param page {Page} Browser tab
   * @param position {number} Position of the image
   * @returns {Promise<string>}
   */
  async selectThumbImage(page: Page, position: number): Promise<string> {
    await page.locator(this.quickViewThumbImagePosition(position)).click();
    await page.waitForTimeout(2000);

    return this.getAttributeContent(page, this.quickViewCoverImage, 'src');
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
          await this.waitForSelectorAndClick(
            page,
            `${this.quickViewProductColor} span.color:has(span:has-text('Color - ${attributes.value}'))`,
          ),
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
