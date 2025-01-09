// Import pages
import type {BOMaintenancePageInterface} from '@interfaces/BO/shopParameters/general/maintenance';
import {BOMaintenancePage} from '@versions/develop/pages/BO/shopParameters/general/maintenance';

import type {Page} from 'playwright';

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

    this.shopStatusToggleInput = (toggle: number) => `label[for='PS_SHOP_ENABLE_${toggle ? 'on' : 'off'}']`;
    this.saveFormButton = '#configuration_fieldset_general div.panel-footer button';
    this.addMyIPAddressButton = '#conf_id_PS_MAINTENANCE_IP button';
    this.alertSuccessBlock = 'div.alert.alert-success[style*=\'display\']';
    this.successfulUpdateMessage = 'The settings have been successfully updated.';
  }

  /**
   * Enable/Disable shop
   * @param page {Page} Browser tab
   * @param toEnable {boolean} Status to set to enable/disable the shop
   * @return {Promise<string>}
   */
  async changeShopStatus(page: Page, toEnable: boolean = true): Promise<string> {
    await this.setChecked(page, this.shopStatusToggleInput(toEnable ? 1 : 0));
    await this.clickAndWaitForLoadState(page, this.saveFormButton);
    await this.elementNotVisible(page, this.shopStatusToggleInput(!toEnable ? 1 : 0), 2000);

    return this.getTextContent(page, this.alertSuccessBlock);
  }

  /**
   * Add my IP address in maintenance IP input
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async addMyIpAddress(page: Page): Promise<string> {
    await page.locator(this.addMyIPAddressButton).click();
    await page.locator(this.saveFormButton).click();

    return this.getTextContent(page, this.alertSuccessBlock);
  }
}

const maintenancePage = new BOMaintenanceVersion();
export {maintenancePage, BOMaintenanceVersion as MaintenancePage};
