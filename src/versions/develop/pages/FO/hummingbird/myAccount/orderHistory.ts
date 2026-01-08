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
    this.orderTableColumn = (row: number, column: number) => `${this.ordersTableRow(row)} span:nth-child(${column})`;
    this.orderTableColumnReference = (row: number) => `${this.ordersTableRow(row)} span.order-history__cell--reference`;
    this.reorderLink = (row: number) => `${this.ordersTableRow(row)} a[href*='submitReorder']`;
    this.detailsLink = (row: number) => `${this.ordersTableRow(row)} a[data-link-action="view-order-details"]`;
    this.orderTableColumnInvoice = (row: number) => `${this.ordersTableRow(row)} span.order-history__cell--invoice a`;
    this.orderDetailsLink = (orderID: number) => `${this.ordersTableRows} span.order-history__cell--actions`
      + ` a[data-link-action="view-order-details"][href$='order-detail&id_order=${orderID}']`;

    // Messages block
    this.boxMessagesSection = 'section.order-messages';
    this.messageRow = (row: number) => `${this.boxMessagesSection} div.order-message__list div.order-message:nth-child(${row})`;
  }
}

const foMyOrderHistoryPage = new FoMyOrderHistoryPage();
export {foMyOrderHistoryPage, FoMyOrderHistoryPage};
