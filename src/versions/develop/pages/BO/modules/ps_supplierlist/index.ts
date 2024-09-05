import {ModulePsSupplierListMainPageInterface} from '@interfaces/BO/modules/ps_supplierlist';
import ModuleConfiguration from '@pages/BO/modules/moduleConfiguration';
import {type Page} from '@playwright/test';

/**
 * Module configuration page for module : ps_supplierlist, contains selectors and functions for the page
 * @class
 * @extends ModuleConfiguration
 */
class PsSupplierListPage extends ModuleConfiguration implements ModulePsSupplierListMainPageInterface {
  public readonly pageSubTitle: string;

  public readonly updateSettingsSuccessMessage: string;

  public readonly typeOfDisplayPlaintext: string;

  public readonly typeOfDisplayDropdown: string;

  private readonly supplierForm: string;

  private readonly supplierDisplayTypeSelect: string;

  private readonly supplierSaveBtn: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on ps_supplierlist page
   */
  constructor() {
    super();

    this.pageSubTitle = 'Supplier list';
    this.updateSettingsSuccessMessage = 'The settings have been updated.';
    // Type of display
    this.typeOfDisplayPlaintext = 'Use a plain-text list';
    this.typeOfDisplayDropdown = 'Use a drop-down list';

    // Selectors
    this.supplierForm = 'form#module_form';
    this.supplierDisplayTypeSelect = `${this.supplierForm} #SUPPLIER_DISPLAY_TYPE`;
    this.supplierSaveBtn = `${this.supplierForm} button[type="submit"]`;
  }

  /* Methods */
  /**
   * Set type of display
   * @param page {Page} Browser tab
   * @param value {string}
   * @returns {Promise<string>}
   */
  async setTypeOfDisplay(page: Page, value: string): Promise<string> {
    await page.locator(this.supplierDisplayTypeSelect).selectOption({label: value});
    await page.locator(this.supplierSaveBtn).click();

    return this.getAlertSuccessBlockContent(page);
  }
}

module.exports = new PsSupplierListPage();
