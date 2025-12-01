import {FoMyOrderHistoryPageInterface} from '@interfaces/FO/myAccount/orderHistory';
import {FoMyOrderHistoryPage as FoMyOrderHistoryPageVersion} from '@versions/develop/pages/FO/hummingbird/myAccount/orderHistory';

/**
 * Hummingbird 1
 * @class
 * @extends FoMyOrderHistoryPageVersion
 */
class FoMyOrderHistoryPage extends FoMyOrderHistoryPageVersion implements FoMyOrderHistoryPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on create products page
   */
  constructor() {
    super();

    // Selectors
    this.ordersTable = '#content table';
    this.ordersTableRows = `${this.ordersTable} tbody tr`;
    this.ordersTableRow = (row: number) => `${this.ordersTableRows}:nth-child(${row})`;
    this.detailsLink = (row: number) => `${this.ordersTableRow(row)} a[data-link-action="view-order-details"]`;
    this.reorderLink = (row: number) => `${this.ordersTableRow(row)} a[href*='submitReorder']`;
  }
}

const foMyOrderHistoryPage = new FoMyOrderHistoryPage();
export {foMyOrderHistoryPage, FoMyOrderHistoryPage};
