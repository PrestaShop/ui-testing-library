import {type FoProductHummingbirdPageInterface} from '@interfaces/FO/product';
import {FoProductPage as FoProductPageVersion} from '@versions/develop/pages/FO/hummingbird/product';
/**
 * @class
 * @extends FOBasePage
 */
class FoProductPage extends FoProductPageVersion implements FoProductHummingbirdPageInterface {
  constructor() {
    super();

    // Selectors for product page
    this.productFlags = '#product-images  ul.product-flags';
    this.proceedToCheckoutButton = '#blockcart-modal div.cart-footer-actions a';
  }
}

const foProductPage = new FoProductPage();
export {foProductPage, FoProductPage};
