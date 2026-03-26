import {type FoMyWishlistsPageInterface} from '@interfaces/FO/myAccount/myWishlists';
import {MyWishlistsPage as MyWishlistsPageVersion} from '@versions/develop/pages/FO/classic/myAccount/myWishlists';

/**
 * @class
 * @extends FOBasePage
 */
class MyWishlistsPage extends MyWishlistsPageVersion implements FoMyWishlistsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new MyWishlistsPage();
