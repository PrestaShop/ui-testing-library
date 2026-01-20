import {type FoCartHummingbirdPageInterface} from '@interfaces/FO/cart';
import {type Page} from '@playwright/test';
import {FoCartPage as FoCartPageVersion} from '@versions/develop/pages/FO/hummingbird/cart';

/**
 * Cart page, contains functions that can be used on the page
 * @class
 * @extends CartPageClassic
 */
class FoCartPage extends FoCartPageVersion implements FoCartHummingbirdPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super();

    this.cartRuleMustEnterVoucherErrorText = 'You must enter a voucher code.';

    this.noItemsInYourCartSpan = '#content-wrapper div.cart-overview p';
    this.productListItem = '#content-wrapper li.cart__item';
    this.productItem = (number: number) => `${this.productListItem}:nth-of-type(${number})`;
    this.productName = (number: number) => `${this.productItem(number)} div.product-line__content a.product-line__title`;
    this.productRegularPrice = (number: number) => `${this.productItem(number)} div.product-line__basic`
      + ' span.product-line__regular';
    this.productDiscountAmount = (number: number) => `${this.productItem(number)} span.discount-amount`;
    this.productDiscountPercentage = (number: number) => `${this.productItem(number)} span.discount.badge.discount`;
    this.productPrice = (number: number) => `${this.productItem(number)} div.product-line__current span.price`;
    this.productTotalPrice = (number: number) => `${this.productItem(number)} span.product-line__price`;
    this.productQuantity = (number: number) => `${this.productItem(number)} div.input-group `
      + 'input.js-cart-line-product-quantity';
    this.productQuantityScrollUpButton = (number: number) => `${this.productItem(number)} button.js-increment-button`;
    this.productQuantityScrollDownButton = (number: number) => `${this.productItem(number)} button.js-decrement-button`;
    this.productImage = (number: number) => `${this.productItem(number)} div.product-line__image img`;
    this.productSize = (number: number) => `${this.productItem(number)} div.product-line__info.size span.value`;
    this.productColor = (number: number) => `${this.productItem(number)} div.product-line__info.color span.value`;
    this.deleteIcon = (number: number) => `${this.productItem(number)} .remove-from-cart`;
    this.customizationLink = (row: number) => `${this.productItem(row)} div.product-customization-modal__content`
      + " button[data-bs-target*='#product-customization-modal']";
    this.customizationModal = (row: number) => `${this.productItem(row)} [id*="product-customization-modal"]`;

    // Summary block
    this.cartTotalATI = 'div.cart-summary__totals span.cart-summary__value';

    // Cart summary block selectors
    this.subtotalProductsValueSpan = '#cart-subtotal-products span.value';
    this.subtotalShippingValueSpan = '#cart-subtotal-shipping span.value';
    this.subtotalDiscountValueSpan = '#cart-subtotal-discount span.value';
    this.blockPromoDiv = '.block-promo';
    this.cartSummaryLine = (line: number) => `div.cart-voucher li:nth-child(${line})`;
    this.cartRuleName = (line: number) => `${this.cartSummaryLine(line)} span.cart-voucher__name`;
    this.discountValue = (line: number) => `${this.cartSummaryLine(line)} div span.fw-bold`;
    this.highlightPromoCodeBlock = 'div.cart-voucher ul.cart-voucher__offers';
    this.highlightPromoCode = 'div.cart-voucher li span.js-code';

    // Promo code selectors
    this.promoCodeRemoveIcon = (line: number) => `${this.cartSummaryLine(line)} a[data-link-action='remove-voucher']`;

    this.alertWarning = '.checkout.cart-detailed-actions.card-block div.alert.alert-warning';

    this.disabledProceedToCheckoutButton = '#main div.checkout .disabled';

    // Notifications
    this.alertMessage = '#js-toast-container div.toast div.toast-body';
  }

  /**
   * Returns the number of differents product in the cart
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getProductsNumber(page: Page): Promise<number> {
    return page.locator(`${this.productListItem}`).count();
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
   * Delete product
   * @param page {Page} Browser tab
   * @param productID {number} ID of the product
   * @returns {Promise<void>}
   */
  async deleteProduct(page: Page, productID: number): Promise<void> {
    await super.deleteProduct(page, productID);
    await this.waitForHiddenSelector(page, this.deleteIcon(productID));
  }
}

const foCartPage = new FoCartPage();
export {foCartPage, FoCartPage};
