import type {DashboardPageInterface} from '@interfaces/BO/dashboard';
import {Dashboard as DashboardPageVersion} from '@versions/develop/pages/BO/dashboard';

/**
 * Bo dashboard page, contains functions that can be used on the page
 * @class
 * @extends DashboardPage
 */
class DashboardPage extends DashboardPageVersion implements DashboardPageInterface {
  private shippingLink: string;
  private carriersLink: string;
  /**
   * @constructs
   * Setting up titles and selectors to use on dashboard page
   */
  constructor() {
    super();
    // Orders
    this.ordersParentLink = 'li#maintab-AdminParentOrders';
    // Customers
    this.customersParentLink = 'li#maintab-AdminParentCustomer';
    // Shipping
    this.shippingLink = '#maintab-AdminParentShipping';
    this.carriersLink = '#subtab-AdminCarriers';
  }
}

const boDashboardPage = new DashboardPage();
export {boDashboardPage, DashboardPage};
