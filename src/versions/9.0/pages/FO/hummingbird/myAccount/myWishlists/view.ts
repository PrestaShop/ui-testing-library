import {type FoMyWishlistsViewPageInterface} from '@interfaces/FO/myAccount/myWishlists/view';
import {
  FoMyWishlistsViewPage as FoMyWishlistViewPageVersion,
} from '@versions/develop/pages/FO/hummingbird/myAccount/myWishlists/view';

/**
 * @class
 * @extends FOBasePage
 */
class FoMyWishlistsViewPage extends FoMyWishlistViewPageVersion implements FoMyWishlistsViewPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super();

    // Selectors
    this.headerTitle = '#content-wrapper h1';
  }
}

const foMyWishlistsViewPage = new FoMyWishlistsViewPage();
export {foMyWishlistsViewPage, FoMyWishlistsViewPage};
