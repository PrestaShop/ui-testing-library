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
  /**
   * Modify the order status
   * @param page {Page} Browser tab
   * @param status {string} Status to edit
   * @returns {Promise<string>}
   */
  async modifyOrderStatus(page: Page, status: string): Promise<string> {
    const actualStatus = await this.getOrderStatus(page);

    if (status !== actualStatus) {
      await this.selectByVisibleText(page, this.orderStatusesSelect, status);
      await page.locator(this.updateStatusButton).click();
      await page.waitForLoadState();
      return this.getOrderStatus(page);
    }

    return actualStatus;
  }
}

const viewOrderBasePage = new ViewOrderBasePageVersion();
export {viewOrderBasePage, ViewOrderBasePageVersion as ViewOrderBasePage};
