import {type FoProductHummingbirdPageInterface} from '@interfaces/FO/product';
import {type Page} from '@playwright/test';
import {FoProductPage as FoProductPageVersion} from '@versions/develop/pages/FO/hummingbird/product';
import {type ProductDetailsBasic, type ProductAttribute} from '@data/types/product';
/**
 * @class
 * @extends FOBasePage
 */
class FoProductPage extends FoProductPageVersion implements FoProductHummingbirdPageInterface {
  constructor() {
    super();

    // Selectors for product page
    this.proceedToCheckoutButton = '#blockcart-modal div.cart-footer-actions a';
    this.continueShoppingButton = `${this.blockCartModal} div.cart-content-btn button`;
    this.productDetail = 'div.product-information a[href=\'#product-details\']';
    this.productFeaturesList = '#product-details section.product-features';
    this.productCoverImg = '#product-images div.carousel-item.active';
    this.scrollBoxImages = (direction: string) => `#product-images button.carousel-control-${direction}`;
    this.productCoverImgProductModal = '#product-images-modal div.carousel-item.active picture img';
    this.carouselControlProductModal = (direction: string) => `#product-images-modal button.carousel-control-${direction}`;
    this.productImageRow = (row: number) => `#content-wrapper div.thumbnails__container li:nth-child(${row})`;
    this.thumbImg = (row: number) => `${this.productImageRow(row)} picture img.js-thumb`;
    this.zoomIcon = '#product-images div.carousel-item.active i.zoom-in';
    this.productName = '#content-wrapper h1.product__name';
    this.productFlags = '#product-images  ul.product-flags';
    this.productDescription = '#description';
    this.customizationBlock = 'div.product__col section.product-customization';
    this.customizedTextarea = (row: number) => `.product-customization__item:nth-child(${row}) .product-message`;
    this.customizationsMessage = (row: number) => `.product-customization__item:nth-child(${row}) div.card-body div:nth-child(2)`;
    this.productMinimalQuantity = 'div.product__add-to-cart .product__minimal-quantity';
    this.productAttributeSelect = (itemNumber: number) => `div.product__variants div.variant:nth-child(${itemNumber}) select`;
    this.productAttributeButton = (itemNumber: number) => `div.product__variants div.variant:nth-child(${itemNumber}) input`;
    this.productSizeSelect = '#group_1';
    this.productSizeOption = (size: string) => `${this.productSizeSelect} option[title=${size}]`;
    this.productColorUl = 'ul[id^="group_"]';
    this.productColorInput = (color: string, isChecked: boolean) => `${this.productColorUl} input[title=${color}]`
      + `${isChecked ? '[checked]' : ''}`;
    this.deliveryInformationSpan = 'span.product__delivery__information';
    this.facebookSocialSharing = '.social-sharing .facebook a';
    this.twitterSocialSharing = '.social-sharing .twitter a';
    this.pinterestSocialSharing = '.social-sharing .pinterest a';

    // Product prices block
    this.productUnitPrice = `${this.productPricesBlock} p.product-unit-price`;
    this.productPrice = `${this.productPricesBlock} .product__current-price`;
    this.regularPrice = `${this.productPricesBlock} .product__price-regular`;
    this.packProductsPrice = `${this.productPricesBlock} .product-pack-price span`;

    // Product information block
    this.productInformationBlock = 'div.product-information';
    this.productMailAlertsBlock = `${this.productInformationBlock} div.js-mailalert`;
    this.productMailAlertsEmailInput = `${this.productMailAlertsBlock} input[type="email"]`;
    this.productMailAlertsGDPRLabel = `${this.productMailAlertsBlock} div.gdpr_consent label.psgdpr_consent_message `
      + 'span:nth-of-type(2)';
    this.productMailAlertsNotifyButton = `${this.productMailAlertsBlock} button`;
    this.productMailAlertsNotification = `${this.productMailAlertsBlock} article`;

    // Product information block
    this.productInformationBlock = 'div.product-information';
    this.productMailAlertsBlock = `${this.productInformationBlock} div.js-mailalert`;
    this.productMailAlertsEmailInput = `${this.productMailAlertsBlock} input[type="email"]`;
    this.productMailAlertsGDPRLabel = `${this.productMailAlertsBlock} div.gdpr_consent label.psgdpr_consent_message `
        + 'span:nth-of-type(2)';
    this.productMailAlertsNotifyButton = `${this.productMailAlertsBlock} button`;
    this.productMailAlertsNotification = `${this.productMailAlertsBlock} article`;

    // Product discount table
    this.discountTable = '.product__discounts__table';
    this.quantityDiscountValue = `${this.discountTable} td:nth-child(1)`;
    this.unitDiscountColumn = `${this.discountTable} th:nth-child(2)`;
    this.unitDiscountValue = `${this.discountTable} td:nth-child(2)`;
    this.savedValue = `${this.discountTable} td:nth-child(3)`;

    // Products in pack selectors
    this.productInPackList = (productInList: number) => `.product-pack article:nth-child(${productInList})`;
    this.productInPackImage = (productInList: number) => `${this.productInPackList(productInList)} div.product-pack__image img`;
    this.productInPackName = (productInList: number) => `${this.productInPackList(productInList)} p.product-pack__name`;
    this.productInPackPrice = (productInList: number) => `${this.productInPackList(productInList)} p.product-pack__price `
      + 'strong';
    this.productInPackQuantity = (productInList: number) => `${this.productInPackList(productInList)}`
      + ' p.product-pack__quantity';

    // Review selector
    this.productReviewModalGDPRLabel = `${this.productReviewModal} div.gdpr_consent label span:nth-of-type(2)`;
    this.reviewCancelButton = `${this.reviewForm} button[data-dismiss="modal"]`;
    this.productsBlock = (blockName: string) => `#content-wrapper section[data-type="${blockName}"]`;
    this.productsBlockPrice = (blockName: string) => `${this.productsBlock(blockName)} .product-price-and-shipping`;
  }

  /**
   * Close product modal
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async closeProductModal(page: Page): Promise<boolean> {
    await page.mouse.click(5, 5);

    return this.elementNotVisible(page, this.productModal, 2000);
  }

  /**
   * Get product attributes from a Ul selector
   * @param page {Page} Browser tab
   * @param ulSelector {string} Selector to locate the element
   * @returns {Promise<Array<string>>}
   */
  async getProductsAttributesFromUl(page: Page, ulSelector: string): Promise<Array<string | null>> {
    return page.locator(`${ulSelector} li .attribute-name`).allTextContents();
  }

  /**
   * Get product features list
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getProductFeaturesList(page: Page): Promise<string> {
    await this.waitForSelectorAndClick(page, this.productDetail);

    return this.getTextContent(page, this.productFeaturesList);
  }

  /**
   * Return if product features list is visible
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async hasProductFeaturesList(page: Page): Promise<boolean> {
    if (!await this.elementVisible(page, this.productDetail)) {
      return false;
    }
    await this.waitForSelectorAndClick(page, this.productDetail);
    return this.elementVisible(page, this.productFeaturesList, 2000);
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
          this.waitForVisibleSelector(page, `${this.productAttributeButton(itemNumber)}[title=${attributes[i].value}][checked]`),
          page.locator(`${this.productAttributeButton(itemNumber)}[title=${attributes[i].value}]`).click(),
        ]);
      }
    }
  }

  /**
   * Select default product attributes (ISO to Classic)
   * @param page {Page} Browser tab
   * @param attributes {ProductAttribute[]}  Product's attributes data to select
   * @returns {Promise<void>}
   */
  async selectDefaultAttributes(page: Page, attributes: ProductAttribute[]): Promise<void> {
    if (attributes.length === 0) {
      return;
    }
    for (let i: number = 0; i < attributes.length; i++) {
      switch (attributes[i].name) {
        case 'color':
          await Promise.all([
            this.waitForVisibleSelector(page, this.productColorInput(attributes[i].value, true)),
            page.locator(this.productColorInput(attributes[i].value, false)).click(),
          ]);
          break;
        case 'size':
          await Promise.all([
            this.waitForAttachedSelector(page, `${this.productSizeOption(attributes[i].value)}[selected]`),
            this.selectByVisibleText(page, this.productSizeSelect, attributes[i].value),
          ]);
          break;
        default:
          throw new Error(`${attributes[i].name} is not defined`);
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
    return this.getTextContent(page, `${this.productAttributeButton(variantItem)}[checked] +span`, false);
  }

  /**
   * get the URL of the cover image
   * @param page {Page} Browser tab
   * @returns {Promise<string|null>}
   */
  async getCoverImageFromProductModal(page: Page): Promise<string | null> {
    return this.getAttributeContent(page, this.productCoverImg, 'src');
  }

  /**
   * Click on arrow next/previous in product modal
   * @param page {Page} Browser tab
   * @param direction {string} Direction Next/Prev
   * @returns {Promise<string>}
   */
  async clickOnArrowNextPrevInProductModal(page: Page, direction: string): Promise<string> {
    await page.locator(this.carouselControlProductModal(direction)).click();

    return this.getAttributeContent(page, this.productCoverImgProductModal, 'src');
  }

  /**
   * Get product information in pack
   * @param page {Page} Browser tab
   * @param productInList {number} Product in pack list
   * @returns {Promise<ProductDetailsBasic>}
   */
  async getProductInPackList(page: Page, productInList: number = 1): Promise<ProductDetailsBasic> {
    // Add +1 due to span before the article
    const productIdentifier: number = productInList + 1;

    return {
      image: await this.getAttributeContent(page, this.productInPackImage(productIdentifier), 'src'),
      name: await this.getTextContent(page, this.productInPackName(productIdentifier)),
      price: await this.getNumberFromText(page, this.productInPackPrice(productIdentifier)),
      quantity: await this.getNumberFromText(page, this.productInPackQuantity(productIdentifier)),
    };
  }

  /**
   * Click on product in pack
   * @param page {Page} Browser tab
   * @param productInList {number} Product in pack list
   * @returns {Promise<void>}
   */
  async clickProductInPackList(page: Page, productInList: number = 1): Promise<void> {
    // Add +1 due to span before the article
    const productIdentifier: number = productInList + 1;

    return this.clickAndWaitForURL(page, this.productInPackName(productIdentifier));
  }
}

const foProductPage = new FoProductPage();
export {foProductPage, FoProductPage};
