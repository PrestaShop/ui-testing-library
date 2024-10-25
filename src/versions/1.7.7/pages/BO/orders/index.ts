// Import pages
import type {BOOrdersPageInterface} from '@interfaces/BO/orders';
import {OrdersPage} from '@versions/develop/pages/BO/orders/index';

/**
 * Orders page, contains functions that can be used on the page
 * @class
 * @extends OrdersPage
 */
class OrdersPageVersion extends OrdersPage implements BOOrdersPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use in orders page
   */
  constructor() {
    super();

    this.viewRowLink = (row: number) => `${this.actionsColumn(row)} a[href*='view']`;
  }
}

module.exports = new OrdersPageVersion();
