import {type FoMyWishlistsViewPageInterface} from '@interfaces/FO/myAccount/myWishlists/view';
import {MyWishlistViewPage as MyWishlistViewPageVersion} from '@versions/develop/pages/FO/classic/myAccount/myWishlists/view';

/**
 * @class
 * @extends FOBasePage
 */
class MyWishlistViewPage extends MyWishlistViewPageVersion implements FoMyWishlistsViewPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new MyWishlistViewPage();
