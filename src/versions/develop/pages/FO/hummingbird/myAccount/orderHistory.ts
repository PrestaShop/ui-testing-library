import {FoMyOrderHistoryPageInterface} from '@interfaces/FO/myAccount/orderHistory';
import {MyOrderHistoryPage as MyOrderHistoryPageVersion} from '@versions/develop/pages/FO/classic/myAccount/orderHistory';

/**
 * My account page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class MyOrderHistoryPage extends MyOrderHistoryPageVersion implements FoMyOrderHistoryPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super('hummingbird');

    // Selectors
    this.detailsLink = (row: number) => `${this.ordersTableRow(row)} a[data-link-action="view-order-details"]`;
    this.reorderLink = (row: number) => `${this.ordersTableRow(row)} a[href*='submitReorder']`;
  }
}

module.exports = new MyOrderHistoryPage();
