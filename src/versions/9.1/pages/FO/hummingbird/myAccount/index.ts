import {FoMyAccountPageInterface} from '@interfaces/FO/myAccount';
import {MyAccountPage as MyAccountPageVersion} from '@versions/develop/pages/FO/hummingbird/myAccount';

/**
 * My account page, contains functions that can be used on the page
 * @class
 * @extends MyAccountPageVersion
 */
class FoMyAccountPage extends MyAccountPageVersion implements FoMyAccountPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on my account page
   */
  constructor() {
    super();

    // Selectors
    this.myWishlistsLink = '.account-menu__nav #wishlist_link';
    this.psgdprLink = '.account-menu__nav #psgdpr_link';
  }
}

const foMyAccountPage = new FoMyAccountPage();
export {foMyAccountPage, FoMyAccountPage};
