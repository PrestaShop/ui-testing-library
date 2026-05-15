// Import pages
import type {BOOrdersPageInterface} from '@interfaces/BO/orders';
import {OrdersPage} from '@versions/1.7.7/pages/BO/orders';

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
    // Link
    this.createNewOrderButton = '#page-header-desc-order-new_order';
  }
}

const ordersPage = new OrdersPageVersion();
export {ordersPage, OrdersPageVersion as OrdersPage};
