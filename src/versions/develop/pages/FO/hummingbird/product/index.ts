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

  private readonly productFeature: string;

  private readonly productColorInputLabel: (color: string) => string;

  protected carouselControlProductModal: (direction: string) => string;

  protected productImageRow: (row: number) => string;

  private readonly modalImageCloseButton: string;

  constructor() {
    super('hummingbird');

    // Selectors for product page
    this.warningMessage = 'div.alert-warning div p.alert-text';
    this.productFlags = '.product__images ul.product-flags';
    this.productFlag = (flag: string) => `${this.productFlags} li.badge${flag.length === 0 ? '' : `.${flag}`}`;
    this.productRowQuantityUpDownButton = (direction: string) => `div.product-actions__quantity button.js-${direction}-button`;
    this.proceedToCheckoutButton = '#blockcart-modal div.modal-footer a';
    this.productQuantitySpan = 'ul.details__list li.details__item--quantities div.details__right span';
    this.productDetail = '#product_details button.accordion-button';
    this.productFeature = '#product_features button.accordion-button';
    this.productCondition = 'ul.details__list li.details__item--condition div.details__right span';
    this.productFeaturesList = '#product_features div.accordion-body ul.details__list';
    this.continueShoppingButton = `${this.blockCartModal} div.modal-footer button`;
    this.productAvailability = '#product-availability div.product__availability-messages span:not(.visually-hidden)';
    this.productAvailabilityIcon = '#product-availability i';
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
    this.productDescription = '.product__description';
    this.customizationBlock = 'section.product__customization';
    this.customizedTextarea = (row: number) => `.product-customization__item:nth-child(${row}) .product-message`;
    this.customizationsMessage = (row: number) => `.product-customization__item:nth-child(${row}) `
      + ' .product-customization__message';
    this.productMinimalQuantity = 'div.product__minimal-quantity';
    this.productAttributeSelect = (itemNumber: number) => 'div.product__variants fieldset.product-variant'
      + `:nth-child(${itemNumber}) select`;
    this.productAttributeButton = (itemNumber: number) => 'div.product__variants fieldset.product-variant'
      + `:nth-child(${itemNumber}) input`;
    this.productSizeSelect = 'select[name="group[1]"]';
    this.productSizeOption = (size: string) => `${this.productSizeSelect} option:has-text("${size}")`;
    this.productColorUl = 'div.product-variant__colors';
    this.productColorInput = (color: string, isChecked: boolean) => `${this.productColorUl} input${isChecked ? '[checked]' : ''}`
      + `:has( + label.input-color__label span:has-text("Color - ${color}"))`;
    this.productColorInputLabel = (color: string) => `${this.productColorUl} label.input-color__label`
      + `:has(span:has-text("Color - ${color}"))`;
    this.deliveryInformationSpan = '.product__delivery-infos';
    this.metaLink = 'head meta[content]:not([http-equiv],[name],[property])';
    this.facebookSocialSharing = 'div.ps-sharebuttons .facebook a';
    this.twitterSocialSharing = 'div.ps-sharebuttons .twitter a';
    this.pinterestSocialSharing = 'div.ps-sharebuttons .pinterest a';

    // Product prices block
    this.productPricesBlock = 'div.product__prices';
    this.productUnitPrice = `${this.productPricesBlock} span.product__unit-price`;
    this.productPrice = `${this.productPricesBlock} .product__price`;
    this.discountAmountSpan = `${this.productPricesBlock} .product__discount-amount`;
    this.discountPercentageSpan = `${this.productPricesBlock} .product__discount-percentage`;
    this.regularPrice = `${this.productPricesBlock} .product__regular-price`;
    this.packProductsPrice = `${this.productPricesBlock} .product__pack-price`;

    // Product information block
    this.productInformationBlock = 'div.product__additional-info';
    this.productMailAlertsBlock = `${this.productInformationBlock} div.ps-emailalerts`;
    this.productMailAlertsEmailInput = `${this.productMailAlertsBlock} input[type="email"]`;
    this.productMailAlertsGDPRLabel = `${this.productMailAlertsBlock} div.gdpr-consent label`;
    this.productMailAlertsNotifyButton = `${this.productMailAlertsBlock} button[data-ps-action="emailalerts-subscribe"]`;
    this.productMailAlertsNotification = `${this.productMailAlertsBlock} div[data-ps-target="emailalerts-alerts"] div.alert-body`;

    // Product discount table
    this.discountTable = '.product__discounts';
    this.unitDiscountColumn = `${this.discountTable} th:nth-child(2)`;
    this.quantityDiscountValue = `${this.discountTable} td:nth-child(1)`;
    this.unitDiscountValue = `${this.discountTable} td:nth-child(2)`;
    this.savedValue = `${this.discountTable} td:nth-child(3)`;

    // Review selector
    this.productReviewModalGDPRLabel = `${this.productReviewModal} .gdpr-consent label.form-check-label`;
    this.reviewCancelButton = `${this.reviewForm} .post-comment-buttons button[data-bs-dismiss="modal"]`;

    // Products in pack selectors
    this.productInPackList = (productInList: number) => `.product-pack__list article:nth-child(${productInList})`;
    this.productInPackImage = (productInList: number) => `${this.productInPackList(productInList)} img.product-pack__image`;
    this.productInPackName = (productInList: number) => `${this.productInPackList(productInList)} span.product-pack__name`;
    this.productInPackPrice = (productInList: number) => `${this.productInPackList(productInList)} span.product-pack__price`;
    this.productInPackQuantity = (productInList: number) => `${this.productInPackList(productInList)}`
      + ' span.product-pack__quantity';

    this.productsBlock = (blockName: string) => `#wrapper section.${blockName}`;
    this.productsBlockPrice = (blockName: string) => `${this.productsBlock(blockName)} .product-miniature__price`;

    this.modalImageCloseButton = '#product-modal .modal-header .btn-close';

    // Notifications
    this.notificationsContainer = '#notifications div.container';
    this.notificationsContainerMessage = `${this.notificationsContainer} div.alert`;
  }

  /**
   * Get product features list
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getProductFeaturesList(page: Page): Promise<string> {
    await this.waitForSelectorAndClick(page, this.productFeature);

    return this.getTextContent(page, this.productFeaturesList);
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
   * Return if product features list is visible
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async hasProductFeaturesList(page: Page): Promise<boolean> {
    if (!await this.elementVisible(page, this.productFeature)) {
      return false;
    }
    await this.waitForSelectorAndClick(page, this.productFeature);
    return this.elementVisible(page, this.productFeaturesList, 2000);
  }

  /**
   * Select default product attributes
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
          if (!(await page.locator(this.productColorInput(attributes[i].value, false)).isChecked())) {
            await page.locator(this.productColorInputLabel(attributes[i].value)).click();
            await this.waitForAttachedSelector(page, this.productColorInput(attributes[i].value, true));
          }
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
          this.waitForAttachedSelector(
            page,
            `${this.productAttributeSelect(itemNumber)} option[selected]:has-text("${attributes[i].value}")`,
          ),
          this.selectByVisibleText(page, this.productAttributeSelect(itemNumber), attributes[i].value),
        ]);
      } else {
        await Promise.all([
          this.waitForAttachedSelector(
            page,
            `${this.productAttributeButton(itemNumber)}[checked]:has( + label :has-text("${attributes[i].value}"))`,
          ),
          page
            .locator(`${this.productAttributeButton(itemNumber)}:has( + label :has-text("${attributes[i].value}"))`)
            .click({force: true}),
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

  /**
   * Get product attributes from a Ul selector
   * @param page {Page} Browser tab
   * @param ulSelector {string} Selector to locate the element
   * @returns {Promise<Array<string>>}
   */
  async getProductsAttributesFromUl(page: Page, ulSelector: string): Promise<Array<string | null>> {
    return (
      await page
        .locator(`${ulSelector} .product-variant__color label span.visually-hidden`)
        .allTextContents()
    ).map((text: string|null) => (text ? text.replace('Color - ', '') : null));
  }
}

const foProductPage = new FoProductPage();
export {foProductPage, FoProductPage};
