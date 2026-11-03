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

  private readonly checkedCategoryBox: (idCategory: string) => string;

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
    this.checkedCategoryBox = (idCategory: string) => `#categories-tree input[name="categoryBox[]"][value="${idCategory}"]`
      + ':checked';
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
    await this.setCategoryRoot(page, shopData.categoryRoot);
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
   * Select the root category and wait for the associated categories tree to be reloaded
   * @param page {Page} Browser tab
   * @param categoryRoot {string} Name of the root category to select
   * @returns {Promise<void>}
   */
  private async setCategoryRoot(page: Page, categoryRoot: string): Promise<void> {
    await this.selectByVisibleText(page, this.categoryRootSelect, categoryRoot, true);
    // The tree is replaced by ajax on page load and on each change of the root category, then its boxes are checked
    // by JavaScript: a form saved in between posts no category and is rejected ("You need to select at least the root
    // category."). jQuery.active is back to 0 once every ajax callback ran, so the tree is the reloaded one.
    await page.waitForFunction(() => (window as any).jQuery.active === 0);

    const idCategoryRoot: string = await page.locator(this.categoryRootSelect).inputValue();
    await this.waitForSelector(page, this.checkedCategoryBox(idCategoryRoot), 'attached');
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
