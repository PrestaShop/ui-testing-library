import {type FoModalBlockCartPageInterface} from '@interfaces/FO/modal/blockCart';
import {FoModalBlockCartPage as FoModalBlockCartPageClassic} from '@versions/develop/pages/FO/classic/modal/blockCart';

/**
 * Block cart modal, contains functions that can be used on the modal
 * @class
 * @extends BlockCartModal
 */
class FoModalBlockCartPage extends FoModalBlockCartPageClassic implements FoModalBlockCartPageInterface {
  protected blockCartModalSummary: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on home page
   */
  constructor() {
    super('hummingbird');

    // Block Cart Modal
    this.blockCartLabel = '#blockcart-modal-title';
    this.blockCartModalCloseButton = `${this.blockCartModalDiv} button.btn-close`;
    this.cartModalProductNameBlock = `${this.blockCartModalDiv} .blockcart-modal__name`;
    this.cartModalProductPriceBlock = `${this.blockCartModalDiv} .blockcart-modal__price`;
    this.cartModalProductSizeBlock = `${this.blockCartModalDiv} .blockcart-modal__property.size`;
    this.cartModalProductColorBlock = `${this.blockCartModalDiv} .blockcart-modal__property.color`;
    this.cartModalProductQuantityBlock = `${this.blockCartModalDiv} .blockcart-modal__quantity`;
    this.blockCartModalSummary = '.blockcart-modal__summary';
    this.cartModalProductsCountBlock = `${this.blockCartModalSummary} .blockcart-modal__nb-products`;
    this.cartModalSubtotalBlock = `${this.blockCartModalSummary} .blockcart-modal__total .subtotals.value`;
    this.cartModalShippingBlock = `${this.blockCartModalSummary} .blockcart-modal__total .shipping.value`;
    this.cartModalProductTaxInclBlock = `${this.blockCartModalSummary} .blockcart-modal__total--bold .value`;
    this.cartModalCheckoutLink = `${this.blockCartModalDiv} div.modal-footer a`;
    this.continueShoppingButton = `${this.blockCartModalDiv} div.modal-footer button`;
  }
}

const foModalBlockCartPage = new FoModalBlockCartPage();
export {foModalBlockCartPage, FoModalBlockCartPage};
