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
    this.orderTableColumn = (row: number, column: number) => `${this.ordersTableRow(row)} td:nth-child(${column})`;
    this.orderTableColumnReference = (row: number) => `${this.ordersTableRow(row)} th:nth-child(1)`;
    this.reorderLink = (row: number) => `${this.ordersTableRow(row)} a[href*='submitReorder']`;
    this.detailsLink = (row: number) => `${this.ordersTableRow(row)} a[data-link-action="view-order-details"]`;
    this.orderTableColumnInvoice = (row: number) => `${this.ordersTableRow(row)} td:nth-child(6) a`;
  }
}

const foMyOrderHistoryPage = new FoMyOrderHistoryPage();
export {foMyOrderHistoryPage, FoMyOrderHistoryPage};
