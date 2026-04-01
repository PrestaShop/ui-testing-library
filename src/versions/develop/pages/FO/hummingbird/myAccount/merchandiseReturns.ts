import {type OrderMerchandiseReturns} from '@data/types/order';
import {FoMyMerchandiseReturnsPageInterface} from '@interfaces/FO/myAccount/merchandiseReturns';
import {type Page} from '@playwright/test';
import {
  MyMerchandiseReturnsPage as MyMerchandiseReturnsPageClassic,
} from '@versions/develop/pages/FO/classic/myAccount/merchandiseReturns';

/**
 * My account page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FoMyMerchandiseReturnsPage extends MyMerchandiseReturnsPageClassic implements FoMyMerchandiseReturnsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super('hummingbird');

    // Selectors
    this.gridTable = 'div.grid-table';

    // Merchandise return table body selectors
    this.tableBody = `${this.gridTable} div.grid-table__inner`;
    this.tableBodyRows = `${this.tableBody} div.grid-table__row`;
    this.tableBodyRow = (row: number) => `${this.tableBodyRows}:nth-child(${row + 1})`;
    this.tableColumn = (row: number, column: number) => `${this.tableBodyRow(row)} span.grid-table__cell:nth-child(${column})`;
  }

  /**
   * Get merchandise returns details
   * @param page {Page} Browser tab
   * @param row {number} Row number in table
   */
  async getMerchandiseReturnsDetails(page: Page, row: number = 1): Promise<OrderMerchandiseReturns> {
    return {
      orderReference: (await this.getTextContent(page, this.tableColumn(row, 1)))
        .replace('View order reference', '')
        .trim(),
      fileName: await this.getTextContent(page, this.tableColumn(row, 2)),
      status: await this.getTextContent(page, this.tableColumn(row, 3)),
      dateIssued: await this.getTextContent(page, this.tableColumn(row, 4)),
    };
  }

  /**
   * Get text column from merchandise returns table
   * @param page {Page} Browser tab
   * @param columnName {string} Column name in table
   * @param row {number} Row number in table
   * @returns {Promise<string>}
   */
  async getTextColumn(page: Page, columnName: string, row: number = 1): Promise<string> {
    const columnValue: string = await super.getTextColumn(page, columnName, row);

    switch (columnName) {
      case 'orderReference':
        return columnValue
          .replace('View order reference', '')
          .trim();

      default:
        return columnValue;
    }
  }
}

const foMyMerchandiseReturnsPage = new FoMyMerchandiseReturnsPage();
export {foMyMerchandiseReturnsPage, FoMyMerchandiseReturnsPage};
