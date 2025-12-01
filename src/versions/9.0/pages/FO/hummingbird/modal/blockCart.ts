import {type FoModalBlockCartPageInterface} from '@interfaces/FO/modal/blockCart';
import {FoModalBlockCartPage as FoModalBlockCartPageVersion} from '@versions/develop/pages/FO/hummingbird/modal/blockCart';

/**
 * Quick view modal, contains functions that can be used on the page
 * @class
 * @extends FoModalQuickViewPageClassic
 */
class FoModalBlockCartPage extends FoModalBlockCartPageVersion implements FoModalBlockCartPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on home page
   */
  constructor() {
    super();

    // Block Cart Modal
    this.blockCartLabel = '#myModalLabel';
    this.cartModalProductNameBlock = `${this.blockCartModalDiv} .product-name`;
    this.cartModalProductPriceBlock = `${this.blockCartModalDiv} .product-price`;
    this.cartModalProductSizeBlock = `${this.blockCartModalDiv} .size strong`;
    this.cartModalProductColorBlock = `${this.blockCartModalDiv} .color strong`;
    this.cartModalProductQuantityBlock = `${this.blockCartModalDiv} .product-quantity`;
    this.blockCartModalSummary = '.blockcart-modal__summery';
    this.cartModalProductsCountBlock = `${this.blockCartModalSummary} p`;
    this.cartModalSubtotalBlock = `${this.blockCartModalSummary} .product-subtotal .subtotals.value`;
    this.cartModalShippingBlock = `${this.blockCartModalSummary} .product-shipping .shipping.value`;
    this.cartModalProductTaxInclBlock = `${this.blockCartModalSummary} .product-total .value`;
    this.cartModalCheckoutLink = `${this.blockCartModalDiv} div.cart-footer-actions a`;
    this.continueShoppingButton = `${this.blockCartModalDiv} div.cart-footer-actions button`;
  }
}

const foModalBlockCartPage = new FoModalBlockCartPage();
export {foModalBlockCartPage, FoModalBlockCartPage};
