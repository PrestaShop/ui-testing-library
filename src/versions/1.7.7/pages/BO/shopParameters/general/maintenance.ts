// Import pages
import type {BOMaintenancePageInterface} from '@interfaces/BO/shopParameters/general/maintenance';
import {BOMaintenancePage} from '@versions/develop/pages/BO/shopParameters/general/maintenance';

/**
 * Maintenance page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class BOMaintenanceVersion extends BOMaintenancePage implements BOMaintenancePageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on products page
   */
  constructor() {
    super();

    this.shopStatusToggleInput = (toggle: number) => `label[for='form_general_enable_shop_${toggle}']`;
    this.saveFormButton = 'div.card-footer button.btn-primary';
    this.addMyIPAddressButton = '.add_ip_button';
  }
}

const maintenancePage = new BOMaintenanceVersion();
export {maintenancePage, BOMaintenanceVersion as MaintenancePage};
