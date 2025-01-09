import {ModuleAutoupgradeMainPageInterface} from '@interfaces/BO/modules/autoupgrade';
import {Autoupgrade} from '@versions/develop/pages/BO/modules/autoupgrade';
import type {Page} from '@playwright/test';

/**
 * Module configuration page for module : Autoupgrade, contains selectors and functions for the page
 * @class
 * @extends ModuleConfiguration
 */
class AutoupgradeVersion extends Autoupgrade implements ModuleAutoupgradeMainPageInterface {
  // Methods
  /**
   * Go to maintenance page
   * @param page {Page} Browser tab
   * @return {Promise<Page>} Opened tab after the click
   */
  async goToMaintenancePage(page: Page): Promise<Page> {
    return this.openLinkWithTargetBlank(page, this.goToMaintenancePageLink, 'body #main');
  }
}

const autoupgrade = new AutoupgradeVersion();
export {autoupgrade, AutoupgradeVersion as Autoupgrade};
