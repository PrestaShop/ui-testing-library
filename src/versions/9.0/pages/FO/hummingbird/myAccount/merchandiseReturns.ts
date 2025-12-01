import {FoMyMerchandiseReturnsPageInterface} from '@interfaces/FO/myAccount/merchandiseReturns';
import {
  FoMyMerchandiseReturnsPage as FoMyMerchandiseReturnsPageVersion,
} from '@versions/develop/pages/FO/hummingbird/myAccount/merchandiseReturns';

/**
 * My account page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FoMyMerchandiseReturnsPage extends FoMyMerchandiseReturnsPageVersion implements FoMyMerchandiseReturnsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super();

    // Selectors
    this.gridTable = '.table.table-striped';

    // Merchandise return table body selectors
    this.tableBody = `${this.gridTable} tbody`;
    this.tableBodyRows = `${this.tableBody} tr`;
    this.tableBodyRow = (row: number) => `${this.tableBodyRows}:nth-child(${row})`;
    this.tableColumn = (row: number, column: number) => `${this.tableBodyRow(row)} td:nth-child(${column})`;
  }
}

const foMyMerchandiseReturnsPage = new FoMyMerchandiseReturnsPage();
export {foMyMerchandiseReturnsPage, FoMyMerchandiseReturnsPage};
