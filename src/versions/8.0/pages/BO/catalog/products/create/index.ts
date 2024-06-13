// Import pages
import type {BOProductsCreatePageInterface} from '@interfaces/BO/catalog/products/create';
import {CreateProduct} from '@versions/develop/pages/BO/catalog/products/create';

import type {Page} from 'playwright';

/**
 * Bo products page, contains functions that can be used on the page
 * @class
 * @extends ProductsPage
 */
class BOCreateProductVersion extends CreateProduct implements BOProductsCreatePageInterface {
  public readonly productOnlineTitle: string;

  public readonly deleteProductLink: string;

  public readonly productTypeSelect: string;

  public readonly goToCatalogFromDropDown: string;

  public readonly newProductInDropDow: string;

  /**
     * @constructs
     * Setting up texts and selectors to use on products page
     */
  constructor() {
    super();

    this.successfulUpdateMessage = 'Settings updated.';
    this.pageTitle = 'Product';

    this.productTypeSelect = '#form_step1_type_product';
    this.productName = '[id*="form_step1_name"]';
    this.productNameInput = (locale: string) => `${this.productName} div[data-locale=${locale}] input`;
    this.productNameLanguageButton = '#form_switch_language';
    this.tabLink = (tabName: string) => `tab_step${tabName}`;
    this.productOnlineTitle = 'h2.for-switch.online-title';
    this.productActiveSwitchButtonToggleInput = '.product-footer div.switch-input';
    this.saveProductButton = '#form div.product-footer button.btn-primary[type="submit"]';

    this.previewProductButton = '#product_form_preview_btn';
    this.deleteProductLink = '.product-footer a.delete';
    this.footerProductDropDown = '#dropdownMenu';
    this.goToCatalogFromDropDown = '#form div.product-footer a.dropdown-item.go-catalog';
    this.goToCatalogButton = '#product_form_save_go_to_catalog_btn';
    this.newProductButton = '#product_form_save_new_btn';
    this.newProductInDropDow = '#form div.product-footer a.dropdown-item.new-product';
  }

  /**
     * Set product name
     * @param page {Page} Browser tab
     * @param name {string} Name of the product
     * @param locale {string} Locale
     * @returns {Promise<void>}
     */
  async setProductName(page: Page, name: string, locale: string = 'en'): Promise<void> {
    await this.selectByVisibleText(page, this.productNameLanguageButton, locale);
    await this.setValue(page, this.productNameInput(locale), name);
  }

  /**
   * Get product status
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async getProductStatus(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.productOnlineTitle, 1000);
  }

  /**
   * Set product status
   * @param page {Page} Browser tab
   * @param status {boolean} The product status
   * @returns {Promise<void>}
   */
  async setProductStatus(page: Page, status: boolean): Promise<boolean> {
    if (await this.getProductStatus(page) !== status) {
      await page.click(this.productActiveSwitchButtonToggleInput);
      await this.closeGrowlMessage(page);
      return true;
    }

    return false;
  }

  /**
     * Go to a tab
     * @param page {Page} Browser tab
     * @param tabName {'combinations'|'description'|'details'|'options'|'pricing'|'seo'|'shipping'|'stock'} Name of the tab
     * @returns {Promise<void>}
     */
  async goToTab(page: Page, tabName: string): Promise<void> {
    let tabId :string = '1';

    switch (tabName) {
      case 'basic settings':
        tabId = '1';
        break;
      case 'quantities':
        tabId = '3';
        break;
      case 'shipping':
        tabId = '4';
        break;
      case 'options':
        tabId = '6';
        break;
      case 'pricing':
        tabId = '2';
        break;
      case 'seo':
        tabId = '5';
        break;
      default:
        throw new Error(`Type ${tabName} is not defined`);
    }

    this.waitForSelectorAndClick(page, this.tabLink(tabId));
    await this.waitForVisibleSelector(page, `${this.tabLink(tabId)} a.active`, 2000);
  }

  /**
   * Save product
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async saveProduct(page: Page): Promise<string|null> {
    await page.click(this.saveProductButton);
    const growlTextMessage = await this.getGrowlMessageContent(page, 30000);
    await this.closeGrowlMessage(page);

    return growlTextMessage;
  }

  /**
   * Preview product in new tab
   * @param page {Page} Browser tab
   * @return page opened
   */
  async previewProduct(page: Page): Promise<Page> {
    await this.waitForVisibleSelector(page, this.previewProductButton);
    const newPage = await this.openLinkWithTargetBlank(page, this.previewProductButton, 'body a');
    const textBody = await this.getTextContent(newPage, 'body');

    if (textBody.includes('[Debug] This page has moved')) {
      await this.clickAndWaitForURL(newPage, 'a');
    }
    return newPage;
  }

  /**
   * Delete product
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async deleteProduct(page: Page): Promise<string> {
    await Promise.all([
      this.waitForVisibleSelector(page, this.modalDialog),
      page.click(this.deleteProductLink),
    ]);
    await this.clickAndWaitForURL(page, this.modalDialogYesButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Choose product type
   * @param page {Page} Browser tab
   * @param productType {string} Data to choose in product type
   * @returns {Promise<void>}
   */
  async chooseProductType(page: Page, productType: string): Promise<void> {
    await this.selectByVisibleText(page, this.productTypeSelect, productType, true);
  }

  /**
   * Go to catalog page
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToCatalogPage(page: Page): Promise<void> {
    if (await this.elementVisible(page, this.goToCatalogButton, 1000)) {
      await this.clickAndWaitForURL(page, this.goToCatalogButton);
    } else {
      await page.locator(this.footerProductDropDown).click();
      await this.clickAndWaitForURL(page, this.goToCatalogFromDropDown);
    }
  }

  /**
   * Click on new product button
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async clickOnNewProductButton(page: Page): Promise<boolean> {
    if (await this.elementVisible(page, this.newProductButton, 1000)) {
      await this.clickAndWaitForURL(page, this.newProductButton);
    } else {
      await page.locator(this.footerProductDropDown).click();
      await this.clickAndWaitForURL(page, this.newProductInDropDow);
    }

    return true;
  }
}

const createProduct = new BOCreateProductVersion();
export {createProduct, BOCreateProductVersion};
