// Import pages
import type {BOOrdersPageInterface} from '@interfaces/BO/orders';
import {OrdersPage} from '@versions/develop/pages/BO/orders/index';
import type {Page} from 'playwright-core';

/**
 * Orders page, contains functions that can be used on the page
 * @class
 * @extends OrdersPage
 */
class OrdersPageVersion extends OrdersPage implements BOOrdersPageInterface {
  private readonly tableRowColumn: (row: number, column: number) => string;

  /**
   * @constructs
   * Setting up texts and selectors to use on order confirmation page
   */
  constructor() {
    super();

    // Selectors grid panel
    this.gridPanel = '#form-order .panel .panel-heading';
    this.gridTable = '#table-order';
    this.gridHeaderTitle = `${this.gridPanel} span.badge`;
    this.filterResetButton = `${this.gridTable} button[name="submitResetorder"]`;

    // Table rows
    this.tableBody = `${this.gridTable} tbody`;
    this.tableRows = `${this.tableBody} tr`;
    this.tableRow = (row: number) => `${this.tableRows}:nth-child(${row})`;
    this.tableRowColumn = (row: number, column: number) => `${this.tableRow(row)} td:nth-child(${column})`;
  }

  /**
   * Reset Filter And get number of elements in list
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async resetAndGetNumberOfLines(page: Page): Promise<number> {
    await this.resetFilter(page);
    return this.getNumberOfElementInGrid(page);
  }

  /**
   * Get text from Column
   * @param page {Page} Browser tab
   * @param columnName {string} Column name on table
   * @param row {number} Order row in table
   * @returns {Promise<string>}
   */
  async getTextColumn(page: Page, columnName: string, row: number = 1): Promise<string> {
    if (columnName === 'id_order') {
      return (await this.getNumberFromText(page, this.tableRowColumn(row, 2))).toString();
    }
    if (columnName === 'reference') {
      return this.getTextContent(page, this.tableRowColumn(row, 3));
    }
    if (columnName === 'payment') {
      return this.getTextContent(page, this.tableRowColumn(row, 8));
    }
    if (columnName === 'osname') {
      return this.getTextContent(page, this.tableRowColumn(row, 9));
    }

    return '';
  }
}

module.exports = new OrdersPageVersion();
