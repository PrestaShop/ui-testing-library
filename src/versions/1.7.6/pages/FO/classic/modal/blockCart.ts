// Import base page
import FOBasePage from '@pages/FO/FOBasePage';

// Import data
import {CartProductDetails} from '@data/types/cart';

import type {Page} from 'playwright';
/**
 * Block cart modal — only handles product quantity
 * @class
 * @extends FOBasePage
 */
class FoModalBlockCartPage extends FOBasePage {
  private readonly blockCartModalDiv: string;

  private readonly cartModalProductNameBlock: string;

  private readonly cartModalProductPriceBlock: string;

  private readonly cartModalProductQuantityBlock: string;

  private readonly cartContentBlock: string;

  protected cartModalProductsCountBlock: string;

  protected cartModalShippingBlock: string;

  protected cartModalSubtotalBlock: string;

  protected cartModalProductTaxInclBlock: string;

  protected cartModalCheckoutLink: string;

  constructor(theme: string = 'classic') {
    super(theme);

    // Selectors
    this.blockCartModalDiv = '#blockcart-modal';
    this.cartModalProductNameBlock = `${this.blockCartModalDiv} .product-name`;
    this.cartModalProductPriceBlock = `${this.blockCartModalDiv} .product-price`;
    this.cartModalProductQuantityBlock = `${this.blockCartModalDiv} span strong`;
    this.cartContentBlock = `${this.blockCartModalDiv} .cart-content`;
    this.cartModalProductsCountBlock = `${this.cartContentBlock} .cart-products-count`;
    this.cartModalShippingBlock = `${this.cartContentBlock} p:nth-of-type(2) span.value`;
    this.cartModalSubtotalBlock = `${this.cartContentBlock} p:nth-of-type(2) span.value`;
    this.cartModalProductTaxInclBlock = `${this.cartContentBlock} .product-total .value`;

    this.cartModalCheckoutLink = `${this.blockCartModalDiv} div.cart-content-btn a`;
  }

  /**
     * Get product quantity from block cart modal
     * @param page {Page} Browser tab
     * @returns {Promise<number>}
     */
  async getQuantity(page: Page): Promise<number> {
    const text = await page.locator(this.cartModalProductQuantityBlock).last().textContent();

    return parseFloat(text?.match(/-?[\d.]+/)?.[0] ?? '0');
  }

  /**
     * Get product quantity from block cart modal
     * @param page {Page} Browser tab
     * @returns {Promise<number>}
     */
  async getProductDetailsFromBlockCartModal(page: Page): Promise<CartProductDetails> {
    return {
      name: await this.getTextContent(page, this.cartModalProductNameBlock),
      price: parseFloat((await this.getTextContent(page, this.cartModalProductPriceBlock)).replace('€', '')),
      quantity: await this.getQuantity(page),
      cartProductsCount: await this.getNumberFromText(page, this.cartModalProductsCountBlock),
      cartSubtotal: parseFloat((await this.getTextContent(page, this.cartModalSubtotalBlock)).replace('€', '')),
      cartShipping: await this.getTextContent(page, this.cartModalShippingBlock),
      totalTaxIncl: parseFloat((await this.getTextContent(page, this.cartModalProductTaxInclBlock)).replace('€', '')),
    };
  }

    /**
   * Click on proceed to checkout after adding product to cart (in modal homePage)
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async proceedToCheckout(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.cartModalCheckoutLink);
    await page.waitForLoadState('domcontentloaded');
  }
}

const foModalBlockCartPage = new FoModalBlockCartPage();
export {foModalBlockCartPage, FoModalBlockCartPage};
