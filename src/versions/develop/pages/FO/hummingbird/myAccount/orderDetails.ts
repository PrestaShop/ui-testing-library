import {FoMyOrderDetailsPageInterface} from '@interfaces/FO/myAccount/orderDetails';
import {MyOrderDetailsPage as MyOrderDetailsPageVersion} from '@versions/develop/pages/FO/classic/myAccount/orderDetails';

/**
 * My account page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class MyOrderDetailsPage extends MyOrderDetailsPageVersion implements FoMyOrderDetailsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super('hummingbird');

    // Add message form selectors
    this.boxMessagesBlock = 'div.customer__message__content';
    this.reorderLink = '.order__details a';
    this.invoiceLink = '#content div.order__details div.order__header__left a[href*=\'pdf-invoice\']';
  }
}

module.exports = new MyOrderDetailsPage();
