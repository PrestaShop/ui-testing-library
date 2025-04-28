import {DashboardPageInterface} from '@interfaces/BO/dashboard';
import {DashboardPage as DashboardPageVersion} from '@versions/develop/pages/BO/dashboard';


// @ts-ignore
class DashboardPage extends DashboardPageVersion implements DashboardPageInterface {
  private shippingLink: string;
  private carriersLink: string;
  /**
   * @constructs
   * Setting up titles and selectors to use on dashboard page
   */
  constructor() {
    super();
    // Shipping
    this.shippingLink = '#maintab-AdminParentShipping';
    this.carriersLink = '#subtab-AdminCarriers';
  }
}

module.exports = new DashboardPage();
