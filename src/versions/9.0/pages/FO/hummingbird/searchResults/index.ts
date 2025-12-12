import {type FoSearchResultsPageInterface} from '@interfaces/FO/searchResults';
import {FoSearchResultsPage as FoSearchResultsPageVersion} from '@versions/develop/pages/FO/hummingbird/searchResults';

/**
 * @class
 * @extends FoSearchResultsPageVersion
 */
class FoSearchResultsPage extends FoSearchResultsPageVersion implements FoSearchResultsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on my account page
   */
  constructor() {
    super();

    this.totalProduct = `${this.productListTopDiv} .total-products`;
    this.productPrice = '#js-product-list div.card span.product-miniature__price';
    this.productQuickViewLink = (number: number) => `${this.productArticle(number)} button.product-miniature__quickview_button`;
  }
}

const foSearchResultsPage = new FoSearchResultsPage();
export {foSearchResultsPage, FoSearchResultsPage};
