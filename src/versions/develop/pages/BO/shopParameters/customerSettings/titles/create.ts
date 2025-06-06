import type FakerTitle from '@data/faker/title';
import {type BOTitlesCreatePageInterface} from '@interfaces/BO/shopParameters/customerSettings/titles/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add title page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOTitlesCreatePage extends BOBasePage implements BOTitlesCreatePageInterface {
  public readonly pageTitleCreate: string;

  public readonly pageTitleEdit: (titleName: string) => string;

  private readonly genderForm: string;

  private readonly nameInput: (idLang: number) => string;

  private readonly genderInput: (type: number) => string;

  private readonly imageInput: string;

  private readonly imageWidthInput: string;

  private readonly imageHeightInput: string;

  private readonly saveButton: string;

  private readonly dropdownButton: string;

  private readonly dropdownMenu: string;

  private readonly dropdownMenuItemLink: (lang: string) => string;

  /**
   * @constructs
   * Setting up texts and selectors to use on add title page
   */
  constructor() {
    super();

    this.pageTitleCreate = `Titles • ${global.INSTALL.SHOP_NAME}`;
    this.pageTitleEdit = (titleName: string) => `Edit: ${titleName} • ${global.INSTALL.SHOP_NAME}`;

    // Form selectors
    this.genderForm = 'form[name="title"]';
    this.nameInput = (idLang: number) => `#title_name_${idLang}`;
    this.genderInput = (type: number) => `#title_gender_type_${type}`;
    this.imageInput = '#title_image';
    this.imageWidthInput = '#title_img_width';
    this.imageHeightInput = '#title_img_height';
    this.saveButton = `${this.genderForm} #save-button`;

    // Language selectors
    this.dropdownButton = `${this.genderForm} button.dropdown-toggle.js-locale-btn`;
    this.dropdownMenu = `${this.genderForm} div.dropdown-menu`;
    this.dropdownMenuItemLink = (lang: string) => `${this.dropdownMenu} span.dropdown-item[data-locale="${lang}"]`;
  }

  /*
  Methods
   */

  /**
   * Change language in form
   * @param page {Page} Browser tab
   * @param lang {string} Language to select
   * @return {Promise<void>}
   */
  async changeLanguage(page: Page, lang: string): Promise<void> {
    await Promise.all([
      page.locator(this.dropdownButton).click(),
      this.waitForVisibleSelector(page, this.dropdownMenuItemLink(lang)),
    ]);

    await Promise.all([
      page.locator(this.dropdownMenuItemLink(lang)).click(),
      this.waitForHiddenSelector(page, this.dropdownMenuItemLink(lang)),
    ]);
  }

  /**
   * Fill title form and get successful message
   * @param page {Page} Browser tab
   * @param titleData {FakerTitle} Data to set on create/edit title form
   * @return {Promise<string>}
   */
  async createEditTitle(page: Page, titleData: FakerTitle): Promise<string> {
    const genders: string[] = ['Male', 'Female', 'Neutral'];

    await this.changeLanguage(page, 'en');
    await this.setValue(page, this.nameInput(1), titleData.name);

    await this.changeLanguage(page, 'fr');
    await this.setValue(page, this.nameInput(2), titleData.frName);

    await page.locator(this.genderInput(genders.indexOf(titleData.gender))).click();

    // Upload image
    await this.uploadFile(page, this.imageInput, titleData.imageName);

    await this.setValue(page, this.imageWidthInput, titleData.imageWidth);
    await this.setValue(page, this.imageHeightInput, titleData.imageHeight);

    // Save title
    await this.clickAndWaitForURL(page, this.saveButton);

    // Return successful message
    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

module.exports = new BOTitlesCreatePage();
