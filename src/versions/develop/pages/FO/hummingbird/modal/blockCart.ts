import {type FoModalBlockCartPageInterface} from '@interfaces/FO/modal/blockCart';
import {FoModalBlockCartPage as FoModalBlockCartPageClassic} from '@versions/develop/pages/FO/classic/modal/blockCart';

/**
 * Block cart modal, contains functions that can be used on the modal
 * @class
 * @extends BlockCartModal
 */
class FoModalBlockCartPage extends FoModalBlockCartPageClassic implements FoModalBlockCartPageInterface {
  private readonly blockCartModalSummary: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on home page
   */
  constructor() {
    super('hummingbird');

    // Block Cart Modal
    this.cartModalCheckoutLink = `${this.blockCartModalDiv} div.cart-footer-actions a`;
    this.continueShoppingButton = `${this.blockCartModalDiv} div.cart-footer-actions button`;
    this.blockCartModalCloseButton = `${this.blockCartModalDiv} button.btn-close`;
    this.blockCartModalSummary = '.blockcart-modal__summery';
    this.cartModalProductsCountBlock = `${this.blockCartModalSummary} p`;
    this.cartModalSubtotalBlock = `${this.blockCartModalSummary} .product-subtotal .subtotals.value`;
    this.cartModalShippingBlock = `${this.blockCartModalSummary} .product-shipping .shipping.value`;
    this.cartModalProductTaxInclBlock = `${this.blockCartModalSummary} .product-total .value`;
  }
}

module.exports = new FoModalBlockCartPage();
