// Import pages
import type {BOOrdersPageInterface} from '@interfaces/BO/orders';
import {OrdersPage} from '@versions/1.7.6/pages/BO/orders/index';
import type {Page} from 'playwright-core';

/**
 * Orders page, contains functions that can be used on the page
 * @class
 * @extends OrdersPage
 */
class OrdersPageVersion extends OrdersPage implements BOOrdersPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on order confirmation page
   */
  constructor() {
    super();

    // Selectors grid panel
    this.gridTable = 'table.table.order';
    this.filterSearchButton = `${this.gridTable} #submitFilterButtonorder`;
    this.filterResetButton = `${this.gridTable} button[name='submitResetorder']`;

    // Table rows
    this.tableBody = `${this.gridTable} tbody`;
    this.tableRows = `${this.tableBody} tr`;
    this.tableRow = (row: number) => `${this.tableRows}:nth-child(${row})`;
    this.tableRowColumn = (row: number, column: number) => `${this.tableRow(row)} td:nth-child(${column})`;
    this.viewRowLink = (row: number) => `${this.tableRow(row)} a[href*='view']`;
  }

  /**
   * Filter Orders
   * @param page {Page} Browser tab
   * @param filterType {string} Type of filter
   * @param filterBy {string} Column to filter with
   * @param value {string} Value to filter
   * @returns {Promise<void>}
   */
  async filterOrders(page: Page, filterType: string, filterBy: string, value: string = ''): Promise<void> {
    await this.resetFilter(page);
    switch (filterType) {
      case 'input':
        await this.setValue(page, this.filterColumn(filterBy), value);
        break;
      case 'select':
        await this.selectByVisibleText(page, this.filterColumn(filterBy), value);
        break;
      default:
      // Do nothing
    }
    // click on search
    await page.locator(this.filterSearchButton).click();
    await page.waitForLoadState();
  }
}

const ordersPage = new OrdersPageVersion();
export {ordersPage, OrdersPageVersion as OrdersPage};
