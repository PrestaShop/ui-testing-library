import {type FoProductHummingbirdPageInterface} from '@interfaces/FO/product';
import {ProductPage as FoProductPageClassic} from '@versions/develop/pages/FO/classic/product';
import {type Page} from '@playwright/test';
import {type ProductDetailsBasic, type ProductAttribute} from '@data/types/product';

/**
 * @class
 * @extends FOBasePage
 */
class FoProductPage extends FoProductPageClassic implements FoProductHummingbirdPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on checkout page
   */
  private readonly productCarouselImageItem: string;

  protected carouselControlProductModal: (direction: string) => string;

  protected productImageRow: (row: number) => string;

  private readonly modalImageCloseButton: string;

  constructor() {
    super('hummingbird');

    this.warningMessage = '#js-toast-container div.bg-danger  div.toast-body';
    this.productRowQuantityUpDownButton = (direction: string) => `div.product-actions__quantity button.js-${direction}-button`;
    this.proceedToCheckoutButton = '#blockcart-modal div.modal-footer a';
    this.productCoverImg = '.product__images .product__thumbnails-list .product__thumbnail.active';
    this.scrollBoxImages = (direction: string) => `.product__images .product__carousel button.carousel-control-${direction}`;
    this.productCarouselImageItem = '#product-modal .product-images-modal__body div.carousel-item';
    this.productCoverImgProductModal = `${this.productCarouselImageItem}.active img`;
    this.carouselControlProductModal = (direction: string) => '#product-modal .product-images-modal__body'
      + ` button.carousel-control-${direction}`;
    this.productImageRow = (row: number) => `.product__images .product__thumbnails-list .product__thumbnail:nth-child(${row})`;
    this.thumbImg = (row: number) => `${this.productImageRow(row)} picture img.js-thumb`;
    this.zoomIcon = '.product__images .product__carousel .product__zoom';
    this.productName = '#wrapper .product__name';
    this.shortDescription = 'div.product__description-short';
    this.productFlags = '.product__images ul.product-flags';
    this.customizationBlock = 'section.product__customization';
    this.customizedTextarea = (row: number) => `.product-customization__item:nth-child(${row}) .product-message`;
    this.customizationsMessage = (row: number) => `.product-customization__item:nth-child(${row}) `
      + ' .product-customization__message';
    this.productMinimalQuantity = 'div.product__minimal-quantity';
    this.productAttributeSelect = (itemNumber: number) => 'div.product__variants fieldset.product-variant'
      + `:nth-child(${itemNumber}) select`;
    this.productAttributeButton = (itemNumber: number) => 'div.product__variants fieldset.product-variant'
      + `:nth-child(${itemNumber}) input`;
    this.deliveryInformationSpan = 'span.product__delivery__information';
    this.facebookSocialSharing = 'div.ps-sharebuttons .facebook a';
    this.twitterSocialSharing = 'div.ps-sharebuttons .twitter a';
    this.pinterestSocialSharing = 'div.ps-sharebuttons .pinterest a';

    // Product prices block
    this.productPricesBlock = 'div.product__prices';
    this.productPrice = `${this.productPricesBlock} .product__price`;
    this.discountAmountSpan = `${this.productPricesBlock} .product__discount-amount`;
    this.discountPercentageSpan = `${this.productPricesBlock} .product__discount-percentage`;
    this.regularPrice = `${this.productPricesBlock} .product__regular-price`;

    // Product discount table
    this.discountTable = '.product__discounts';
    this.unitDiscountColumn = `${this.discountTable} th:nth-child(2)`;
    this.quantityDiscountValue = `${this.discountTable} td:nth-child(1)`;
    this.unitDiscountValue = `${this.discountTable} td:nth-child(2)`;
    this.savedValue = `${this.discountTable} td:nth-child(3)`;

    // Products in pack selectors
    this.productInPackList = (productInList: number) => `.product-pack__list article:nth-child(${productInList})`;
    this.productInPackImage = (productInList: number) => `${this.productInPackList(productInList)} img.product-pack__image`;
    this.productInPackName = (productInList: number) => `${this.productInPackList(productInList)} span.product-pack__name`;
    this.productInPackPrice = (productInList: number) => `${this.productInPackList(productInList)} span.product-pack__price`;
    this.productInPackQuantity = (productInList: number) => `${this.productInPackList(productInList)}`
      + ' span.product-pack__quantity';

    this.modalImageCloseButton = '#product-modal .modal-header .btn-close';
  }

  /**
   * Get product information in pack
   * @param page {Page} Browser tab
   * @param productInList {number} Product in pack list
   * @returns {Promise<ProductDetailsBasic>}
   */
  async getProductInPackList(page: Page, productInList: number = 1): Promise<ProductDetailsBasic> {
    return {
      image: await this.getAttributeContent(page, this.productInPackImage(productInList), 'src'),
      name: await this.getTextContent(page, this.productInPackName(productInList)),
      price: await this.getNumberFromText(page, this.productInPackPrice(productInList)),
      quantity: await this.getNumberFromText(page, this.productInPackQuantity(productInList)),
    };
  }

  /**
   * Click on product in pack
   * @param page {Page} Browser tab
   * @param productInList {number} Product in pack list
   * @returns {Promise<void>}
   */
  async clickProductInPackList(page: Page, productInList: number = 1): Promise<void> {
    return this.clickAndWaitForURL(page, this.productInPackName(productInList));
  }

  /**
   * Get the position in the slide of the cover image
   * @param page {Page} Browser tab
   * @returns {Promise<string|null>}
   */
  async getCoverImage(page: Page): Promise<string | null> {
    return this.getAttributeContent(page, this.productCoverImg, 'data-bs-slide-to');
  }

  /**
   * get the URL of the cover image
   * @param page {Page} Browser tab
   * @returns {Promise<string|null>}
   */
  async getCoverImageFromProductModal(page: Page): Promise<string | null> {
    const locatorsItem = await page.locator(this.productCarouselImageItem);

    for (let iNth = (await locatorsItem.count()) - 1; iNth >= 0; iNth--) {
      if ((await locatorsItem.nth(iNth).evaluate((node: HTMLElement) => node.className)).includes('active')) {
        return iNth.toString();
      }
    }

    return null;
  }

  /**
   * Select thumb image
   * @param page {Page} Browser tab
   * @param imageRow {number} Row of the image
   * @returns {Promise<string>}
   */
  async selectThumbImage(page: Page, imageRow: number): Promise<string> {
    await this.waitForSelectorAndClick(page, this.thumbImg(imageRow));
    await this.waitForVisibleSelector(page, `${this.productImageRow(imageRow)}.active`);
    await page.waitForTimeout(2000);

    return this.getAttributeContent(page, this.productCoverImg, 'data-bs-slide-to');
  }

  /**
   * Click on arrow next/previous in product modal
   * @param page {Page} Browser tab
   * @param direction {string} Direction Next/Prev
   * @returns {Promise<string>}
   */
  async clickOnArrowNextPrevInProductModal(page: Page, direction: string): Promise<string> {
    await page.locator(this.carouselControlProductModal(direction)).click();
    await page.waitForTimeout(4000);

    return (await this.getCoverImageFromProductModal(page)) ?? '';
  }

  /**
   * Set quantity
   * @param page {Page} Browser tab
   * @param quantity {number|string} Quantity to set
   * @returns {Promise<void>}
   */
  async setQuantity(page: Page, quantity: number | string): Promise<void> {
    await this.setValue(page, this.productQuantity, quantity);
    await page.locator(this.productQuantity).dispatchEvent('change');
    await page.waitForTimeout(4000);
  }

  /**
   * Close product modal
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async closeProductModal(page: Page): Promise<boolean> {
    await page.locator(this.modalImageCloseButton).click();
    await page.waitForTimeout(4000);

    return this.elementNotVisible(page, this.productModal, 2000);
  }

  /**
   * Select product attributes
   * @param page {Page} Browser tab
   * @param type {string} Type of block (Select or radio)
   * @param attributes {ProductAttribute[]}  Product's attributes data to select
   * @param itemNumber {number} The row of attribute block
   * @returns {Promise<void>}
   */
  async selectAttributes(page: Page, type: string, attributes: ProductAttribute[], itemNumber: number = 1): Promise<void> {
    if (attributes.length === 0) {
      return;
    }
    for (let i: number = 0; i < attributes.length; i++) {
      if (type === 'select') {
        await Promise.all([
          this.waitForAttachedSelector(page, `${this.productAttributeSelect(itemNumber)} option[selected]`),
          this.selectByVisibleText(page, this.productAttributeSelect(itemNumber), attributes[i].value),
        ]);
      } else {
        await Promise.all([
          this.waitForVisibleSelector(
            page,
            `${this.productAttributeButton(itemNumber)}[checked]:has( + label :has-text("${attributes[i].value}"))`,
          ),
          page.locator(`${this.productAttributeButton(itemNumber)}:has( + label :has-text("${attributes[i].value}"))`).click(),
        ]);
      }
    }
  }

  /**
   * Get selected attribute
   * @param page {Page} Browser tab
   * @param variantItem {string} Variant row
   * @param type {string} Type of attribute
   * @returns {Promise<string>}
   */
  async getSelectedAttribute(page: Page, variantItem: number, type: string = 'select'): Promise<string> {
    if (type === 'select') {
      return this.getTextContent(page, `${this.productAttributeSelect(variantItem)} option[selected]`, false);
    }
    return this.getTextContent(page, `${this.productAttributeButton(variantItem)}[checked] + label span`, false);
  }
}

const foProductPage = new FoProductPage();
export {foProductPage, FoProductPage};
