import {FoMyAccountPageInterface} from '@interfaces/FO/myAccount';
import {MyAccountPage as MyAccountPageVersion} from '@versions/develop/pages/FO/hummingbird/myAccount';

/**
 * Hummingbird 1
 * @class
 * @extends MyAccountPageVersion
 */
class FoMyAccountPage extends MyAccountPageVersion implements FoMyAccountPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on create products page
   */
  constructor() {
    super();

    // Selectors
    this.accountInformationLink = '#identity-link';
    this.accountHistoryLink = '#history-link';
    this.accountAddressesLink = '#addresses-link';
    this.accountFirstAddressLink = '#address-link';
    this.accountVouchersLink = '#discounts-link';
    this.merchandiseReturnsLink = '#returns-link';
    this.orderSlipsLink = '.account-menu #order-slips__link';
    this.successMessageAlert = '#notifications article.alert-success';
    this.logoutFooterLink = '#my-account .account-menu .account-menu--signout';
    this.psgdprLink = '#content #psgdpr-link';
  }
}

const foMyAccountPage = new FoMyAccountPage();
export {foMyAccountPage, FoMyAccountPage};
