import {FoMyOrderDetailsPageInterface} from '@interfaces/FO/myAccount/orderDetails';
import {MyOrderDetailsPage as FoMyOrderDetailsPageClassic} from '@versions/develop/pages/FO/classic/myAccount/orderDetails';

/**
 * My account page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FoMyOrderDetailsPage extends FoMyOrderDetailsPageClassic implements FoMyOrderDetailsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super('hummingbird');

    // Override FOBasePage
    this.alertSuccessBlock = '#notifications .container .alert-success';

    // Order return form selectors
    this.gridTable = 'section.order-products';

    // Order products table body selectors
    this.tableBody = `${this.gridTable} .grid-table__inner`;
    this.tableBodyRows = `${this.tableBody} .grid-table__row`;
    this.tableBodyRow = (row: number) => `${this.tableBodyRows}:nth-child(${row + 1})`;
    this.tableBodyColumn = (row: number, column: number) => `${this.tableBodyRow(row)} span:nth-child(${column})`;

    // Order product table content
    this.productName = (row, column) => `${this.tableBodyColumn(row, column)} a.order-product__name`;

    // Add message form selectors
    this.boxMessagesBlock = 'div.order-message__content';
    this.reorderLink = '.order-infos__summary .order-infos__actions a[href*=\'order?submitReorder\']';
    this.invoiceLink = '.order-infos__summary .order-infos__actions a[href*=\'pdf-invoice\']';
  }
}

const foMyOrderDetailsPage = new FoMyOrderDetailsPage();
export {foMyOrderDetailsPage, FoMyOrderDetailsPage};
