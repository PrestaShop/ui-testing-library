import {type FoMyWishlistsPageInterface} from '@interfaces/FO/myAccount/myWishlists';
import {FoMyWishlistsPage as FoMyWishlistPageVersion} from '@versions/develop/pages/FO/hummingbird/myAccount/myWishlists';

/**
 * @class
 * @extends FOBasePage
 */
class FoMyWishlistsPage extends FoMyWishlistPageVersion implements FoMyWishlistsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super();

    this.headerTitle = '#content-wrapper h1';
  }
}

const foMyWishlistsPage = new FoMyWishlistsPage();
export {foMyWishlistsPage, FoMyWishlistsPage};
