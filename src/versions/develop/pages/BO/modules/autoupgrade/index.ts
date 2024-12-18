import {ModuleAutoupgradeMainPageInterface} from '@interfaces/BO/modules/autoupgrade';
import ModuleConfiguration from '@pages/BO/modules/moduleConfiguration';
import type {Page} from '@playwright/test';

/**
 * Module configuration page for module : Autoupgrade, contains selectors and functions for the page
 * @class
 * @extends ModuleConfiguration
 */
class Autoupgrade extends ModuleConfiguration implements ModuleAutoupgradeMainPageInterface {
  public readonly pageTitle: string;

  private readonly currentConfigurationTable: string;

  private readonly maintenanceModeLink: string;

  private readonly alertDangerPreUpgrade: string;

  /**
   * @constructs
   */
  constructor() {
    super();

    this.pageTitle = `Update assistant > Update assistant • ${global.INSTALL.SHOP_NAME}`;

    // Selectors
    this.currentConfigurationTable = '#currentConfiguration table';
    this.maintenanceModeLink = `${this.currentConfigurationTable} a[href*='shop/maintenance']`;
    this.alertDangerPreUpgrade = `#${this.currentConfigurationTable} p.alert.alert-danger`;
  }

  // Methods
  // Pre-upgrade checklist table
  /**
   * Go to maintenance page
   * @param page {Page} Browser tab
   * @return {Promise<Page>} Opened tab after the click
   */
  async goToMaintenancePage(page: Page): Promise<Page> {
    return this.openLinkWithTargetBlank(page, this.maintenanceModeLink);
  }

  /**
   * Is requirements alert danger visible
   * @param page {Page} Browser tab
   * @return {Promise<Page>}
   */
  async isRequirementsAlertDangerVisible(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.alertDangerPreUpgrade, 2000);
  }
}

module.exports = new Autoupgrade();
