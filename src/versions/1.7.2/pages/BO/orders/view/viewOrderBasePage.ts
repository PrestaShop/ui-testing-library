// Import pages
import type {BOViewOrderBasePageInterface} from '@interfaces/BO/orders/view/viewOrderBasePage';
import {ViewOrderBasePage} from '@versions/1.7.6/pages/BO/orders/view/viewOrderBasePage';
import type {Page} from 'playwright-core';

/**
 * View orders page, contains functions that can be used in the page
 * @class
 * @extends OrdersPage
 */
class ViewOrderBasePageVersion extends ViewOrderBasePage implements BOViewOrderBasePageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on view order page
   */
  constructor() {
    super();
    this.submitStatusButton = 'button[name="submitState"]';
  }
}

const viewOrderBasePage = new ViewOrderBasePageVersion();
export {viewOrderBasePage, ViewOrderBasePageVersion as ViewOrderBasePage};
