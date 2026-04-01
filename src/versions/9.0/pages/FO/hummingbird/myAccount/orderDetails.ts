import {FoMyOrderDetailsPageInterface} from '@interfaces/FO/myAccount/orderDetails';
import {FoMyOrderDetailsPage as FoMyOrderDetailsPageVersion} from '@versions/develop/pages/FO/hummingbird/myAccount/orderDetails';

/**
 * My account page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FoMyOrderDetailsPage extends FoMyOrderDetailsPageVersion implements FoMyOrderDetailsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super();

    // Override FOBasePage
    this.alertSuccessBlock = '.alert-success ul li';

    // Order return form selectors
    this.gridTable = '#order-products';

    // Order products table body selectors
    this.tableBody = `${this.gridTable} tbody`;
    this.tableBodyRows = `${this.tableBody} tr`;
    this.tableBodyRow = (row: number) => `${this.tableBodyRows}:nth-child(${row})`;
    this.tableBodyColumn = (row: number, column: number) => `${this.tableBodyRow(row)} td:nth-child(${column})`;

    // Order product table content
    this.productName = (row, column) => `${this.tableBodyColumn(row, column)} a`;

    // Add message form selectors
    this.boxMessagesBlock = 'div.customer__message__content';
    this.reorderLink = '.order__details a';
    this.invoiceLink = '#content div.order__details div.order__header__left a[href*=\'pdf-invoice\']';
  }
}

const foMyOrderDetailsPage = new FoMyOrderDetailsPage();
export {foMyOrderDetailsPage, FoMyOrderDetailsPage};
