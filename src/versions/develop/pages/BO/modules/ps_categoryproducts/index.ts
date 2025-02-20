import {type ModulePsCategoryProductsMainPageInterface} from '@interfaces/BO/modules/ps_categoryproducts';
import {ModuleConfigurationPage} from '@versions/develop/pages/BO/modules/moduleConfiguration';
import {type Page} from '@playwright/test';

/**
 * Module configuration page for module : ps_emailalerts, contains selectors and functions for the page
 * @class
 * @extends ModuleConfiguration
 */
class ModulePsCategoryProductsMain extends ModuleConfigurationPage implements ModulePsCategoryProductsMainPageInterface {
  public readonly pageTitle: string;

  private readonly displayProductsPriceCheckbox: (toEnable: boolean) => string;

  private readonly submitSettings: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on ps email alerts page
   */
  constructor() {
    super();
    this.pageTitle = 'Products in the same category';
    this.successfulUpdateMessage = 'The settings have been updated.';

    // Selectors
    this.displayProductsPriceCheckbox = (toEnable: boolean) => `#CATEGORYPRODUCTS_DISPLAY_PRICE_${toEnable ? 'on' : 'off'}`;
    this.submitSettings = '#module_form_submit_btn';
  }

  /* Methods */
  /**
   * Enable / Disable "Display products' prices"
   * @param page {Page}
   * @param status {boolean}
   * @returns Promise<string>
   */
  async setDisplayProductsPriceStatus(page: Page, status: boolean): Promise<string> {
    await this.setChecked(page, this.displayProductsPriceCheckbox(status));
    await this.clickAndWaitForURL(page, this.submitSettings);

    return this.getAlertSuccessBlockContent(page);
  }
}

module.exports = new ModulePsCategoryProductsMain();
