import {type FoProductHummingbirdPageInterface} from '@interfaces/FO/product';
import {FoProductPage as FoProductPageVersion} from '@versions/develop/pages/FO/hummingbird/product';

/**
 * Product page, contains functions that can be used on the page
 * @class
 * @extends FoProductPageVersion
 */
class FoProductPage extends FoProductPageVersion implements FoProductHummingbirdPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on product page
   */
  constructor() {
    super();

    // Before Hummingbird wrapped each thumbnail button in `li.product__thumbnails-item`,
    // the button (`.product__thumbnail`) was a direct child of `ul.product__thumbnails-list`.
    this.productImageRow = (row: number) => `.product__images .product__thumbnails-list `
      + `.product__thumbnail:nth-child(${row})`;
  }
}

const foProductPage = new FoProductPage();
export {foProductPage, FoProductPage};
