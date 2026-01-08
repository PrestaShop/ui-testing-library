import {type FoMyVouchersPageInterface} from '@interfaces/FO/myAccount/vouchers';
import {type Page} from '@playwright/test';
import {FoMyVouchersPage as FoMyVouchersPageClassic} from '@versions/develop/pages/FO/classic/myAccount/vouchers';

/**
 * @class
 * @extends FOBasePage
 */
class FoMyVouchersPage extends FoMyVouchersPageClassic implements FoMyVouchersPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super('hummingbird');

    // Selectors
    this.vouchersTable = '#wrapper div.grid-table';
    this.vouchersTableBody = `${this.vouchersTable} .grid-table__inner`;
    this.vouchersTableRows = `${this.vouchersTableBody} div.grid-table__row`;
    this.vouchersTableRow = (row: number) => `${this.vouchersTableRows}:nth-child(${row + 1})`;
    this.tableColumnCode = (row: number) => `${this.vouchersTableRow(row)} span.grid-table__cell:nth-child(1)`;
    this.tableColumnDescription = (row: number) => `${this.vouchersTableRow(row)} span.grid-table__cell:nth-child(2)`;
    this.tableColumnQuantity = (row: number) => `${this.vouchersTableRow(row)} span.grid-table__cell:nth-child(3)`;
    this.tableColumnValue = (row: number) => `${this.vouchersTableRow(row)} span.grid-table__cell:nth-child(4)`;
    this.tableColumnMinimum = (row: number) => `${this.vouchersTableRow(row)} span.grid-table__cell:nth-child(5)`;
    this.tableColumnCumulative = (row: number) => `${this.vouchersTableRow(row)} span.grid-table__cell:nth-child(6)`;
    this.tableColumnExpirationDate = (row: number) => `${this.vouchersTableRow(row)} span.grid-table__cell:nth-child(7)`;
  }

  /**
   * Get text column from table vouchers
   * @param page {Page} Browser tab
   * @param row {number} Row number in vouchers table
   * @param columnName {string} Column name in vouchers table
   * @param waitForSelector {boolean|undefined} True to wait for selector to be visible before getting text
   * @returns {Promise<string>}
   */
  async getTextColumnFromTableVouchers(
    page: Page,
    row: number,
    columnName: string,
    waitForSelector: boolean|undefined,
  ): Promise<string> {
    return super.getTextColumnFromTableVouchers(
      page,
      row,
      columnName,
      typeof waitForSelector === 'undefined' ? false : waitForSelector,
    );
  }
}

const foMyVouchersPage = new FoMyVouchersPage();
export {foMyVouchersPage, FoMyVouchersPage};
