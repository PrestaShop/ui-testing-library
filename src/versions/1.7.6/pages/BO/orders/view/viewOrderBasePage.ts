// Import pages
import type {BOViewOrderBasePageInterface} from '@interfaces/BO/orders/view/viewOrderBasePage';
import {ViewOrderBasePage} from '@versions/develop/pages/BO/orders/view/viewOrderBasePage';
import type {Page} from 'playwright-core';

/**
 * View orders page, contains functions that can be used in the page
 * @class
 * @extends OrdersPage
 */
class ViewOrderBasePageVersion extends ViewOrderBasePage implements BOViewOrderBasePageInterface {
  private readonly orderStatus: string;

  private readonly orderStatusSearchInput: string;

  private readonly orderStatusSearchFirstResult: string;

  protected submitStatusButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on view order page
   */
  constructor() {
    super();

    this.orderStatus = '#id_order_state_chosen';
    this.orderStatusSearchInput = '#id_order_state_chosen div.chosen-search input';
    this.orderStatusSearchFirstResult = 'li.active-result:nth-child(1)';
    this.submitStatusButton = '#submit_state';
  }

  /**
   * Get order status
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getOrderStatus(page: Page): Promise<string> {
    return this.getTextContent(page, this.orderStatus, false);
  }

  /**
   * Modify the order status
   * @param page {Page} Browser tab
   * @param status {string} Status to edit
   * @returns {Promise<string>}
   */
  async modifyOrderStatus(page: Page, status: string): Promise<string> {
    const actualStatus = await this.getOrderStatus(page);

    if (status !== actualStatus) {
      await page.locator(this.orderStatus).click();
      await this.setValue(page, this.orderStatusSearchInput, status);
      await page.locator(this.orderStatusSearchFirstResult).click();
      await page.locator(this.submitStatusButton).click();
      await page.waitForLoadState();
      return this.getOrderStatus(page);
    }

    return actualStatus;
  }
}

const viewOrderBasePage = new ViewOrderBasePageVersion();
export {viewOrderBasePage, ViewOrderBasePageVersion as ViewOrderBasePage};
