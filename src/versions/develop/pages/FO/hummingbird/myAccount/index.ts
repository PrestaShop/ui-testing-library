import {FoMyAccountPageInterface} from '@interfaces/FO/myAccount';
import {MyAccountPage as MyAccountPageVersion} from '@versions/develop/pages/FO/classic/myAccount/index';

/**
 * My account page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class MyAccountPage extends MyAccountPageVersion implements FoMyAccountPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on my account page
   */
  constructor() {
    super('hummingbird');

    this.orderSlipsLink = '.account-menu #order-slips__link';
    this.logoutFooterLink = '#my-account .account-menu .account-menu--signout';
  }
}

export default new MyAccountPage();
