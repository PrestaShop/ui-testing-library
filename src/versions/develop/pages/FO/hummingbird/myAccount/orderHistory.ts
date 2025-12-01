import {FoMyOrderHistoryPageInterface} from '@interfaces/FO/myAccount/orderHistory';
import {MyOrderHistoryPage as MyOrderHistoryPageClassic} from '@versions/develop/pages/FO/classic/myAccount/orderHistory';

/**
 * My account page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FoMyOrderHistoryPage extends MyOrderHistoryPageClassic implements FoMyOrderHistoryPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super('hummingbird');

    // Selectors
    this.ordersTable = '#wrapper div.order-history[role="table"]';
    this.ordersTableRows = `${this.ordersTable} div.order-history__row`;
    this.ordersTableRow = (row: number) => `${this.ordersTableRows}:nth-child(${row + 1})`;
    this.detailsLink = (row: number) => `${this.ordersTableRow(row)} a[data-link-action="view-order-details"]`;
    this.reorderLink = (row: number) => `${this.ordersTableRow(row)} a[href*='submitReorder']`;
  }
}

const foMyOrderHistoryPage = new FoMyOrderHistoryPage();
export {foMyOrderHistoryPage, FoMyOrderHistoryPage};
