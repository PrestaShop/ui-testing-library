import {type ProductDetailsWithDiscount} from '@data/types/product';
import {type FoCartHummingbirdPageInterface} from '@interfaces/FO/cart';
import {type Page} from '@playwright/test';
import {CartPage as FoCartPageClassic} from '@versions/develop/pages/FO/classic/cart';

/**
 * Cart page, contains functions that can be used on the page
 * @class
 * @extends CartPageClassic
 */
class FoCartPage extends FoCartPageClassic implements FoCartHummingbirdPageInterface {
  protected productListItem: string;

  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');

    this.cartRuleMustEnterVoucherErrorText = 'Please fill in this field.';

    this.proceedToCheckoutButton = '#wrapper div.cart-summary div.checkout a.btn';
    this.noItemsInYourCartSpan = '#wrapper div.cart__overview p.cart__empty';
    this.productListItem = '#wrapper div.cart__item';
    this.productItem = (number: number) => `${this.productListItem}:nth-of-type(${number})`;
    this.productName = (number: number) => `${this.productItem(number)} div.product-line__content a.product-line__title`;
    this.productRegularPrice = (number: number) => `${this.productItem(number)} div.product-line__item--prices`
      + ' span.product-line__item-regular-price';
    this.productDiscountPercentage = (number: number) => `${this.productItem(number)} div.product-line__item--prices`
      + ' span.product-line__item-discount';
    this.productPrice = (number: number) => `${this.productItem(number)} div.product-line__item--prices`
      + ' span.product-line__item-price';
    this.productTotalPrice = (number: number) => `${this.productItem(number)} div.product-line__price`;
    this.productQuantity = (number: number) => `${this.productItem(number)} div.input-group `
      + 'input.js-cart-line-product-quantity';
    this.productQuantityScrollUpButton = (number: number) => `${this.productItem(number)} button.js-increment-button`;
    this.productQuantityScrollDownButton = (number: number) => `${this.productItem(number)} button.js-decrement-button`;
    this.productImage = (number: number) => `${this.productItem(number)} div.product-line__image img`;
    this.productSize = (number: number) => `${this.productItem(number)} div.product-line__item--info.size`
      + ' span.product-line__item-value';
    this.productColor = (number: number) => `${this.productItem(number)} div.product-line__item--info.color`
      + ' span.product-line__item-value';
    this.deleteIcon = (number: number) => `${this.productItem(number)} .js-remove-from-cart`;
    this.customizationLink = (row: number) => `${this.productItem(row)} div.product-customization-modal__content`
      + " button[data-bs-target*='#product-customization-modal']";
    this.customizationModal = (row: number) => `${this.productItem(row)} [id*="product-customization-modal"]`;
    this.customizationModalCloseButton = (row: number) => `${this.customizationModal(row)} .modal-header button.btn-close`;

    // Summary block
    this.cartTotalATI = 'div.cart-summary__totals div.cart-summary__total span.cart-summary__value';

    // Cart summary block selectors
    this.blockPromoDiv = '.cart-summary__voucher';
    this.promoCodeLink = 'div.cart-voucher button.accordion-button';
    this.promoInput = '#promo-code input[name="discount_name"]';
    this.cartSummaryLine = (line: number) => `${this.blockPromoDiv} li:nth-child(${line}).cart-summary__line`;
    this.cartRuleName = (line: number) => `${this.cartSummaryLine(line)} span.cart-summary__label`;
    this.discountValue = (line: number) => `${this.cartSummaryLine(line)} div.cart-summary__value`;
    this.highlightPromoCodeBlock = `${this.blockPromoDiv} ul.cart-voucher__offers`;
    this.highlightPromoCode = `${this.highlightPromoCodeBlock} button.cart-voucher__code-value`;

    // Promo code selectors
    this.promoCodeRemoveIcon = (line: number) => `${this.cartSummaryLine(line)} a.cart-voucher__remove`;

    // Notifications
    this.alertMessage = '#js-toast-container div.toast.show div.toast-body';
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
      image: await this.getAttributeContent(page, this.productImage(row), 'srcset'),
      quantity: parseFloat(await this.getAttributeContent(page, this.productQuantity(row), 'value') ?? ''),
      totalPrice: await this.getPriceFromText(page, this.productTotalPrice(row)),
    };
  }

  /**
   * Set quantity
   * @param page {Page} Browser tab
   * @param productID {number} Row of the product
   * @param quantity {number} New quantity of the product
   * @returns {Promise<void>}
   */
  async setQuantity(page: Page, productID: number, quantity: number | string): Promise<void> {
    await this.setValue(page, this.productQuantity(productID), quantity);
  }

  /**
   * To edit the product quantity
   * @param page {Page} Browser tab
   * @param productID {number} Row of the product
   * @param quantity {number} New quantity of the product
   * @returns {Promise<void>}
   */
  async editProductQuantity(page: Page, productID: number, quantity: number | string): Promise<void> {
    await this.setValue(page, this.productQuantity(productID), quantity);
    await page.locator(this.productQuantityScrollUpButton(productID)).click();
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
    // Fetch validation messages
    const validationMessage = await page.locator(this.promoInput).evaluate(
      (element: HTMLInputElement) => element.validationMessage,
    );

    return validationMessage + await this.getTextContent(page, this.cartRuleAlertMessage);
  }
}

const foCartPage = new FoCartPage();
export {foCartPage, FoCartPage};
