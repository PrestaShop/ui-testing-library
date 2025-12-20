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

    // Selectors
    this.accountInformationLink = '#identity_link';
    this.accountHistoryLink = '#history_link';
    this.accountAddressesLink = '#addresses_link';
    this.accountFirstAddressLink = '#address_link';
    this.accountVouchersLink = '#discounts_link';
    this.merchandiseReturnsLink = '#returns_link';
    this.orderSlipsLink = '#order-slips_link';
    this.successMessageAlert = 'div.alert';
    this.logoutFooterLink = '#footer_customeraccountlinks a.logout';
    this.psgdprLink = '.account-menu__nav #psgdpr_link';
  }
}

const myAccountPage = new MyAccountPage();
export {myAccountPage, MyAccountPage};
