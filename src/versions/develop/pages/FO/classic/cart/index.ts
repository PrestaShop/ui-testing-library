import type {ProductAttribute, ProductDetailsWithDiscount} from '@data/types/product';
import {type FoCartPageInterface} from '@interfaces/FO/cart';
import FOBasePage from '@pages/FO/FOBasePage';
import {type Page} from '@playwright/test';

/**
 * Cart page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class CartPage extends FOBasePage implements FoCartPageInterface {
  public readonly pageTitle: string;

  public readonly cartRuleAlreadyUsedErrorText: string;

  public readonly cartRuleAlreadyInYourCartErrorText: string;

  public readonly cartRuleNotExistingErrorText: string;

  public readonly cartRuleMustEnterVoucherErrorText: string;

  public readonly cartRuleLimitUsageErrorText: string;

  public readonly cartRuleProductsOnSaleErrorText: string;

  public readonly cartRuleAlertMessageText: string;

  public readonly alertChooseDeliveryAddressWarningText: string;

  public readonly noItemsInYourCartMessage: string;

  protected productItem: (number: number) => string;

  protected productName: (number: number) => string;

  protected productRegularPrice: (number: number) => string;

  protected productDiscountAmount: (number: number) => string;

  protected productDiscountPercentage: (number: number) => string;

  protected productPrice: (number: number) => string;

  protected productTotalPrice: (number: number) => string;

  protected productQuantity: (number: number) => string;

  protected productQuantityScrollUpButton: (number: number) => string;

  protected productQuantityScrollDownButton: (number: number) => string;

  protected productSize: (number: number) => string;

  protected productColor: (number: number) => string;

  protected productImage: (number: number) => string;

  protected readonly deleteIcon: (number: number) => string;

  private readonly itemsNumber: string;

  protected noItemsInYourCartSpan: string;

  protected customizationLink: (row: number) => string;

  protected customizationModal: (row: number) => string;

  protected readonly customizationModalBody: (row: number) => string;

  protected customizationModalCloseButton: (row: number) => string;

  protected alertMessage: string;

  private readonly subtotalProductsValueSpan: string;

  private readonly subtotalShippingValueSpan: string;

  private readonly subtotalDiscountValueSpan: string;

  protected cartTotalATI: string;

  protected blockPromoDiv: string;

  protected cartSummaryLine: (line: number) => string;

  protected cartRuleName: (line: number) => string;

  protected discountValue: (line: number) => string;

  protected promoCodeLink: string;

  private readonly promoCodeBlock: string;

  protected promoInput: string;

  private readonly addPromoCodeButton: string;

  private readonly promoCodeRemoveIcon: (line: number) => string;

  private readonly cartRuleAlertMessage: string;

  protected highlightPromoCodeBlock: string;

  protected highlightPromoCode: string;

  public readonly cartRuleChooseCarrierAlertMessageText: string;

  public readonly cartRuleCannotUseVoucherAlertMessageText: string;

  public readonly minimumAmountErrorMessage: string;

  public readonly errorNotificationForProductQuantity: string;

  private readonly alertWarning: string;

  protected proceedToCheckoutButton: string;

  private readonly disabledProceedToCheckoutButton: string;

  private readonly alertPromoCode: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on cart page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.pageTitle = 'Cart';
    this.cartRuleAlreadyUsedErrorText = 'This voucher has already been used';
    this.cartRuleAlreadyInYourCartErrorText = 'This voucher is already in your cart';
    this.cartRuleNotExistingErrorText = 'This voucher does not exist.';
    this.cartRuleMustEnterVoucherErrorText = 'You must enter a voucher code.';
    this.cartRuleLimitUsageErrorText = 'You cannot use this voucher anymore (usage limit reached)';
    this.cartRuleProductsOnSaleErrorText = 'You cannot use this voucher on products on sale';
    this.cartRuleAlertMessageText = 'You cannot use this voucher';
    this.alertChooseDeliveryAddressWarningText = 'You must choose a delivery address'
      + ' before applying this voucher to your order';
    this.noItemsInYourCartMessage = 'There are no more items in your cart';
    this.cartRuleChooseCarrierAlertMessageText = 'You must choose a carrier before applying this voucher to your order';
    this.cartRuleCannotUseVoucherAlertMessageText = 'You cannot use this voucher with this carrier';
    this.minimumAmountErrorMessage = 'The minimum amount to benefit from this promo code is';
    this.errorNotificationForProductQuantity = 'You can only buy 300 "Hummingbird printed t-shirt".'
      + ' Please adjust the quantity in your cart to continue.';

    // Selectors for cart page
    // Shopping cart block selectors
    this.productItem = (number: number) => `#main li:nth-of-type(${number})`;
    this.productName = (number: number) => `${this.productItem(number)} div.product-line-info a`;
    this.productRegularPrice = (number: number) => `${this.productItem(number)} span.regular-price`;
    this.productDiscountAmount = (number: number) => `${this.productItem(number)} span.discount-amount`;
    this.productDiscountPercentage = (number: number) => `${this.productItem(number)} span.discount-percentage`;
    this.productPrice = (number: number) => `${this.productItem(number)} div.current-price span`;
    this.productTotalPrice = (number: number) => `${this.productItem(number)} span.product-price`;
    this.productQuantity = (number: number) => `${this.productItem(number)} div.input-group `
      + 'input.js-cart-line-product-quantity';
    this.productQuantityScrollUpButton = (number: number) => `${this.productItem(number)} `
      + 'button.js-increase-product-quantity.bootstrap-touchspin-up';
    this.productQuantityScrollDownButton = (number: number) => `${this.productItem(number)} `
      + 'button.js-decrease-product-quantity.bootstrap-touchspin-down';
    this.productSize = (number: number) => `${this.productItem(number)} div.product-line-info.size span.value`;
    this.productColor = (number: number) => `${this.productItem(number)} div.product-line-info.color span.value`;
    this.productImage = (number: number) => `${this.productItem(number)} span.product-image img`;
    this.deleteIcon = (number: number) => `${this.productItem(number)} .remove-from-cart`;
    this.noItemsInYourCartSpan = 'div.cart-grid-body div.cart-overview.js-cart span.no-items';
    this.customizationLink = (row: number) => `${this.productItem(row)} div.product-line-grid-body`
      + " a[data-target*='#product-customizations-modal']";
    this.customizationModal = (row: number) => `${this.productItem(row)} [id*="product-customizations-modal"]`;
    this.customizationModalBody = (row: number) => `${this.customizationModal(row)} .modal-body`;
    this.customizationModalCloseButton = (row: number) => `${this.customizationModal(row)} .modal-header button.close`;

    // Notifications
    this.alertMessage = '#notifications div.notifications-container';

    // Cart summary block selectors
    this.itemsNumber = '#cart-subtotal-products span.label.js-subtotal';
    this.subtotalProductsValueSpan = '#cart-subtotal-products span.value';
    this.subtotalShippingValueSpan = '#cart-subtotal-shipping span.value';
    this.subtotalDiscountValueSpan = '#cart-subtotal-discount span.value';
    this.cartTotalATI = '.cart-summary-totals span.value';
    this.blockPromoDiv = '.block-promo';
    this.cartSummaryLine = (line: number) => `${this.blockPromoDiv} li:nth-child(${line}).cart-summary-line`;
    this.cartRuleName = (line: number) => `${this.cartSummaryLine(line)} span.label`;
    this.discountValue = (line: number) => `${this.cartSummaryLine(line)} div span`;

    // Promo code selectors
    this.promoCodeBlock = '#main div.block-promo';
    this.promoCodeLink = '#main div.block-promo a[href=\'#promo-code\']';
    this.promoInput = '#promo-code input.promo-input';
    this.addPromoCodeButton = '#promo-code button.btn-primary';
    this.promoCodeRemoveIcon = (line: number) => `${this.cartSummaryLine(line)} a[data-link-action='remove-voucher']`;
    this.cartRuleAlertMessage = '#promo-code div.alert-danger span.js-error-text';
    this.highlightPromoCodeBlock = `${this.blockPromoDiv} div ul.promo-discounts`;
    this.highlightPromoCode = `${this.blockPromoDiv} li span.code`;

    this.alertWarning = '.checkout.cart-detailed-actions.card-block div.alert.alert-warning';

    this.proceedToCheckoutButton = '#main div.checkout a';
    this.disabledProceedToCheckoutButton = '#main div.checkout .disabled';

    this.alertPromoCode = '#promo-code div div span';
  }

  /*
 Methods
  */
  /**
   * Get notification message
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getNotificationMessage(page: Page): Promise<string> {
    return this.getTextContent(page, this.alertMessage);
  }

  /**
   * Get no items in your cart message
   * @param page {Page} Browser tab
   */
  async getNoItemsInYourCartMessage(page: Page): Promise<string> {
    return this.getTextContent(page, this.noItemsInYourCartSpan);
  }

  /**
   *
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getProductsNumber(page: Page): Promise<number> {
    return this.getNumberFromText(page, this.itemsNumber);
  }

  /**
   * Get product name
   * @param page {Page} Browser tab
   * @param row {number} Row number in the table
   * @returns {Promise<string>}
   */
  async getProductName(page: Page, row: number): Promise<string> {
    return this.getTextContent(page, this.productName(row));
  }

  /**
   * Get product price
   * @param page {Page} Browser tab
   * @param row {number} Row number in the table
   * @returns {Promise<number>}
   */
  async getProductPrice(page: Page, row: number): Promise<number> {
    return this.getPriceFromText(page, this.productPrice(row));
  }

  /**
   * Returns if the product is Gift
   * @param page {Page} Browser tab
   * @param row {number} Row number in the table
   * @returns {Promise<boolean>}
   */
  async isProductGift(page: Page, row: number): Promise<boolean> {
    return (await this.getTextContent(page, this.productTotalPrice(row))).trim() === 'Gift';
  }

  /**
   * Get product quantity
   * @param page {Page} Browser tab
   * @param row {number} Row number in the table
   * @returns {Promise<number>}
   */
  async getProductQuantity(page: Page, row: number): Promise<number> {
    return parseFloat(await this.getAttributeContent(page, this.productQuantity(row), 'value') ?? '');
  }

  /**
   * Get Product detail from cart
   * @param page {Page} Browser tab
   * @param row {number} Row number in the table
   * @returns {Promise<ProductDetailsWithDiscount>}
   */
  async getProductDetail(page: Page, row: number): Promise<ProductDetailsWithDiscount> {
    return {
      name: await this.getTextContent(page, this.productName(row)),
      regularPrice:
        await page.locator(this.productRegularPrice(row)).count() > 0
          ? await this.getPriceFromText(page, this.productRegularPrice(row))
          : await this.getPriceFromText(page, this.productPrice(row)),
      price: await this.getPriceFromText(page, this.productPrice(row)),
      discountAmount:
        await page.locator(this.productDiscountAmount(row)).count() > 0
          ? await this.getTextContent(page, this.productDiscountAmount(row))
          : '',
      discountPercentage:
        await page.locator(this.productDiscountPercentage(row)).count() > 0
          ? await this.getTextContent(page, this.productDiscountPercentage(row))
          : '',
      image: await this.getAttributeContent(page, this.productImage(row), 'src'),
      quantity: parseFloat(await this.getAttributeContent(page, this.productQuantity(row), 'value') ?? ''),
      totalPrice: await this.getPriceFromText(page, this.productTotalPrice(row)),
    };
  }

  /**
   * Get product attributes
   * @param page {Page} Browser tab
   * @param row {number} Row number in the table
   * @returns {Promise<ProductAttribute[]>}
   */
  async getProductAttributes(page: Page, row: number): Promise<ProductAttribute[]> {
    return [
      {
        name: 'size',
        value: await this.getTextContent(page, this.productSize(row)),
      },
      {
        name: 'color',
        value: await this.getTextContent(page, this.productColor(row)),
      },
    ];
  }

  /**
   * Click on product customization
   * @param page {Page} Browser tab
   * @param row {number} Row number in the table
   * @returns {Promise<boolean>}
   */
  async clickOnProductCustomization(page: Page, row: number = 1): Promise<boolean> {
    await page.locator(this.customizationLink(row)).click();

    return this.elementVisible(page, this.customizationModal(row), 1000);
  }

  /**
   * Get product customization modal
   * @param page {Page} Browser tab
   * @param row {number} Row number in the table
   * @returns {Promise<string>}
   */
  async getProductCustomizationModal(page: Page, row: number = 1): Promise<string> {
    return this.getTextContent(page, this.customizationModalBody(row));
  }

  /**
   * Close product customization modal
   * @param page {Page} Browser tab
   * @param row {number} Row number in the table
   * @returns {Promise<string>}
   */
  async closeProductCustomizationModal(page: Page, row: number = 1): Promise<boolean> {
    await page.locator(this.customizationModalCloseButton(row)).click();

    return this.elementNotVisible(page, this.customizationModal(row), 1000);
  }

  /**
   * Click on Proceed to checkout button
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async clickOnProceedToCheckout(page: Page): Promise<void> {
    await this.waitForVisibleSelector(page, this.proceedToCheckoutButton);
    await this.clickAndWaitForLoadState(page, this.proceedToCheckoutButton);
    await this.elementNotVisible(page, this.proceedToCheckoutButton, 2000);
  }

  /**
   * To edit the product quantity
   * @param page {Page} Browser tab
   * @param productID {number} ID of the product
   * @param quantity {number} New quantity of the product
   * @returns {Promise<void>}
   */
  async editProductQuantity(page: Page, productID: number, quantity: number | string): Promise<void> {
    await this.setValue(page, this.productQuantity(productID), quantity);
    // click on price to see that its changed
    await page.locator(this.productPrice(productID)).click();
  }

  /**
   * Set product quantity
   * @param page {Page} Browser tab
   * @param productRow {number} Row of the product
   * @param quantity {number} New quantity of the product
   * @returns {Promise<number>}
   */
  async setProductQuantity(page: Page, productRow: number = 1, quantity: number = 1): Promise<number> {
    const productQuantity: number = parseInt(await this.getAttributeContent(page, this.productQuantity(productRow), 'value'), 10);

    if (productQuantity < quantity) {
      for (let i: number = 1; i < quantity; i++) {
        await page.locator(this.productQuantityScrollUpButton(productRow)).click();
        await page.waitForTimeout(1000);
      }
    } else {
      for (let i: number = productQuantity; i > quantity; i--) {
        await page.locator(this.productQuantityScrollDownButton(productRow)).click();
        await page.waitForTimeout(1000);
      }
    }

    if (quantity > 0) {
      return parseInt(await this.getAttributeContent(page, this.productQuantity(productRow), 'value'), 10);
    }
    return 0;
  }

  /**
   * Delete product
   * @param page {Page} Browser tab
   * @param productID {number} ID of the product
   * @returns {Promise<void>}
   */
  async deleteProduct(page: Page, productID: number): Promise<void> {
    await this.waitForSelectorAndClick(page, this.deleteIcon(productID));
  }

  /**
   * Get All tax included price
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getATIPrice(page: Page): Promise<number> {
    return this.getPriceFromText(page, this.cartTotalATI, 2000);
  }

  /**
   * Get subtotal products value
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getSubtotalProductsValue(page: Page): Promise<number> {
    return this.getPriceFromText(page, this.subtotalProductsValueSpan, 2000);
  }

  /**
   * Get subtotal discount value
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getSubtotalDiscountValue(page: Page): Promise<number> {
    return this.getPriceFromText(page, this.subtotalDiscountValueSpan, 2000);
  }

  /**
   * Return if there is subtotal discount
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async hasSubtotalDiscount(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.subtotalDiscountValueSpan);
  }

  /**
   * Get subtotal shipping value
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getSubtotalShippingValue(page: Page): Promise<string> {
    return this.getTextContent(page, this.subtotalShippingValueSpan);
  }

  /**
   * Is proceed to checkout button disabled
   * @param page {Page} Browser tab
   * @returns {boolean}
   */
  async isProceedToCheckoutButtonDisabled(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.disabledProceedToCheckoutButton, 1000);
  }

  /**
   * Is alert warning for minimum purchase total visible
   * @param page {Page} Browser tab
   * @returns {boolean}
   */
  async isAlertWarningForMinimumPurchaseVisible(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.alertWarning, 1000);
  }

  /**
   * Get alert warning
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getAlertWarning(page: Page): Promise<string> {
    return this.getTextContent(page, this.alertWarning);
  }

  /**
   * Get alert warning
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getAlertWarningForPromoCode(page: Page): Promise<string> {
    return this.getTextContent(page, this.alertPromoCode);
  }

  /**
   * Is cart rule name visible
   * @param page {Page} Browser tab
   * @param line {number} Cart summary line
   * @returns {Promise<boolean>}
   */
  async isCartRuleNameVisible(page: Page, line: number = 1): Promise<boolean> {
    return this.elementVisible(page, this.cartRuleName(line), 1000);
  }

  /**
   * Set promo code
   * @param page {Page} Browser tab
   * @param code {string} The promo code
   * @param clickOnPromoCodeLink {boolean} True if we need to click on promo code link
   * @returns {Promise<void>}
   */
  async addPromoCode(page: Page, code: string, clickOnPromoCodeLink: boolean = true): Promise<void> {
    if (clickOnPromoCodeLink) {
      await page.locator(this.promoCodeLink).click();
    }
    await this.setValue(page, this.promoInput, code);
    await page.locator(this.addPromoCodeButton).click();
    await page.waitForTimeout(1000);
  }

  /**
   * Get highlight promo code
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getHighlightPromoCode(page: Page): Promise<string> {
    return this.getTextContent(page, this.highlightPromoCodeBlock);
  }

  /**
   * Click on highlight promo code
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async clickOnPromoCode(page: Page): Promise<void> {
    await this.waitForSelectorAndClick(page, this.highlightPromoCode);
    await Promise.all([
      page.locator(this.addPromoCodeButton).click(),
      page.waitForResponse((response) => response.url().includes('action=refresh')),
    ]);
  }

  /**
   * Get cart rule name
   * @param page {Page} Browser tab
   * @param line {number} Cart summary line
   * @returns {Promise<number>}
   */
  async getCartRuleName(page: Page, line: number = 1): Promise<string> {
    return this.getTextContent(page, this.cartRuleName(line));
  }

  /**
   * Get cart rule value
   * @param page {Page} Browser tab
   * @param line {number} Cart rule line
   * @return {string}
   */
  async getCartRuleValue(page: Page, line: number = 1): Promise<string> {
    return this.getTextContent(page, this.discountValue(line));
  }

  /**
   * Get cart rule error text
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getCartRuleErrorMessage(page: Page): Promise<string> {
    return this.getTextContent(page, this.cartRuleAlertMessage);
  }

  /**
   * Remove voucher
   * @param page {Page} Browser tab
   * @param line {number} Cart summary line
   * @returns {Promise<boolean>}
   */
  async removeVoucher(page: Page, line: number = 1): Promise<boolean> {
    await this.waitForSelectorAndClick(page, this.promoCodeRemoveIcon(line));
    await this.waitForHiddenSelector(page, this.promoCodeRemoveIcon(line));

    return this.elementNotVisible(page, this.promoCodeRemoveIcon(line), 1000);
  }
}

const cartPage = new CartPage();
export {cartPage, CartPage};
