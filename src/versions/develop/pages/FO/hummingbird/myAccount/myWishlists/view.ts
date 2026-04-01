import {type FoMyWishlistsViewPageInterface} from '@interfaces/FO/myAccount/myWishlists/view';
import {
  FoMyWishlistsViewPage as FoMyWishlistViewPageVersion,
} from '@versions/develop/pages/FO/classic/myAccount/myWishlists/view';

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
    super('hummingbird');

    // Selectors
    this.headerTitle = '#wrapper h1';
  }
}

const foMyWishlistsViewPage = new FoMyWishlistsViewPage();
export {foMyWishlistsViewPage, FoMyWishlistsViewPage};
