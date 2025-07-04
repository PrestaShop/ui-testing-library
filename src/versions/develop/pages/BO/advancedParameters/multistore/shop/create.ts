import type FakerShop from '@data/faker/shop';
import {type BOMultistoreShopCreatePageInterface} from '@interfaces/BO/advancedParameters/multistore/shop/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add shop page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOMultistoreShopCreatePage extends BOBasePage implements BOMultistoreShopCreatePageInterface {
  public readonly pageTitleCreate: string;

  public readonly pageTitleEdit: string;

  private readonly storeForm: string;

  private readonly nameInput: string;

  private readonly colorInput: string;

  private readonly shopGroupSelect: string;

  private readonly categoryRootSelect: string;

  private readonly themeRadio: (themeName: string) => string;

  private readonly useImportDataToggle: (toggle: string) => string;

  private readonly saveButton: string;

  private readonly sourceStoreSelect: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on add shop page
   */
  constructor() {
    super();

    this.pageTitleCreate = 'Add new •';
    this.pageTitleEdit = 'Edit:';

    // Selectors
    this.storeForm = '#shop_form';
    this.nameInput = '#name';
    this.colorInput = '#color_0';
    this.shopGroupSelect = '#id_shop_group';
    this.categoryRootSelect = '#id_category';
    this.themeRadio = (themeName: string) => `div.form-group div.select_theme input[name="theme_name"][value="${themeName}"]`;
    this.useImportDataToggle = (toggle: string) => `${this.storeForm} #useImportData_${toggle}`;
    this.saveButton = `${this.storeForm} #fieldset_0 #shop_form_submit_btn`;
    this.sourceStoreSelect = '#importFromShop';
  }

  /*
  Methods
   */

  /**
   * Fill form for add/edit shop
   * @param page {Page} Browser tab
   * @param shopData {FakerShop} Data to set on create/edit shop form
   * @returns {Promise<string>}
   */
  async setShop(page: Page, shopData: FakerShop): Promise<string> {
    const currentUrl: string = page.url();

    await this.setValue(page, this.nameInput, shopData.name);
    await this.selectByVisibleText(page, this.shopGroupSelect, shopData.shopGroup);
    await this.setValue(page, this.colorInput, shopData.color);
    await this.selectByVisibleText(page, this.categoryRootSelect, shopData.categoryRoot);
    await page.locator(this.themeRadio(shopData.theme)).click();

    if ((await page.locator(this.useImportDataToggle(shopData.importDataFromAnotherShop ? 'on' : 'off')).count()) > 0) {
      await this.setChecked(page, this.useImportDataToggle(shopData.importDataFromAnotherShop ? 'on' : 'off'));
    }

    await Promise.all([
      page.locator(this.saveButton).evaluate((el: HTMLElement) => el.click()),
      page.waitForURL((url: URL): boolean => url.toString() !== currentUrl, {timeout: 30000}),
    ]);

    return this.getTextContent(page, this.alertSuccessBlock);
  }

  /**
   * Get source store
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getSourceStore(page: Page): Promise<string> {
    return this.getTextContent(page, `${this.sourceStoreSelect} option[selected]`, false);
  }
}

module.exports = new BOMultistoreShopCreatePage();
