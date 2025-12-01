import {type FoModalQuickViewPageInterface} from '@interfaces/FO/modal/quickView';
import {FoModalQuickViewPage as FoModalQuickViewPageVersion} from '@versions/develop/pages/FO/hummingbird/modal/quickView';

/**
 * Quick view modal, contains functions that can be used on the page
 * @class
 * @extends FoModalQuickViewPageClassic
 */
class FoModalQuickViewPage extends FoModalQuickViewPageVersion implements FoModalQuickViewPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on home page
   */
  constructor() {
    super();

    // Quick view modal
    this.quickViewProductName = `${this.quickViewModalDiv} .h3`;
    this.quickViewProductPrice = `${this.quickViewModalDiv} div.product__current-price`;
    this.quickViewTaxShippingDeliveryLabel = `${this.quickViewModalDiv} div.product__tax-label`;
    this.quickViewShortDescription = `${this.quickViewModalDiv} div#product-description-short`;
    this.quickViewCoverImage = `${this.quickViewModalDiv} #product-images div.carousel-item.active img.img-fluid`;
    this.quickViewThumbImage = `${this.quickViewModalDiv} div.thumbnails__container img.img-fluid`;
    this.quickViewProductDimension = `${this.quickViewProductVariants} select#group_3`;
    this.quickViewCloseButton = `${this.quickViewModalDiv} button.btn-close`;
  }
}

const foModalQuickViewPage = new FoModalQuickViewPage();
export {foModalQuickViewPage, FoModalQuickViewPage};
