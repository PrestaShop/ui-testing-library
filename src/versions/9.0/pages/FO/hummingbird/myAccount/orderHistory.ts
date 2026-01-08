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

    // @FOBasePage
    // Alert block selectors
    this.alertSuccessBlock = '.alert-success ul li';

    // Selectors
    this.ordersTable = '#content table';
    this.ordersTableRows = `${this.ordersTable} tbody tr`;
    this.ordersTableRow = (row: number) => `${this.ordersTableRows}:nth-child(${row})`;
    this.orderTableColumn = (row: number, column: number) => `${this.ordersTableRow(row)} td:nth-child(${column})`;
    this.orderTableColumnReference = (row: number) => `${this.ordersTableRow(row)} th:nth-child(1)`;
    this.reorderLink = (row: number) => `${this.ordersTableRow(row)} a[href*='submitReorder']`;
    this.detailsLink = (row: number) => `${this.ordersTableRow(row)} a[data-link-action="view-order-details"]`;
    this.orderTableColumnInvoice = (row: number) => `${this.ordersTableRow(row)} td:nth-child(6) a`;
    this.orderDetailsLink = (orderID: number) => `${this.ordersTableRows}`
      + ` td a.view-order-details-link[href$='order-detail&id_order=${orderID}']`;

    // Messages block
    this.boxMessagesSection = '.box.messages';
    this.messageRow = (row: number) => `${this.boxMessagesSection} div:nth-child(${row + 1}).message.row`;

    // Add message block
    this.orderMessageForm = '.order-message-form';
    this.productSelect = `${this.orderMessageForm} select[data-role='product']`;
    this.messageTextarea = `${this.orderMessageForm} textarea[data-role='msg-text']`;
    this.sendMessageButton = `${this.orderMessageForm} button.form-control-submit`;
  }
}

const foMyOrderHistoryPage = new FoMyOrderHistoryPage();
export {foMyOrderHistoryPage, FoMyOrderHistoryPage};
