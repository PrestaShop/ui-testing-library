import type FakerAttributeValue from '@data/faker/attributeValue';
import dataLanguages from '@data/demo/languages';
import {type BOAttributesValueCreatePageInterface} from '@interfaces/BO/catalog/attributes/createValue';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add value page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOAttributesValueCreatePage extends BOBasePage implements BOAttributesValueCreatePageInterface {
  public readonly createPageTitle: string;

  public readonly editPageTitle: (name: string) => string;

  private readonly attributeGroupSelect: string;

  private readonly valueInput:(idLanguage: number) => string;

  private readonly urlInput: (idLanguage: number) => string;

  private readonly metaTitleInput: (idLanguage: number) => string;

  private readonly colorInput: string;

  private readonly saveButton: string;

  private readonly saveAndStayButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on add value page
   */
  constructor() {
    super();

    this.createPageTitle = `New attribute value • ${global.INSTALL.SHOP_NAME}`;
    this.editPageTitle = (name: string) => `Editing attribute value ${name} • ${global.INSTALL.SHOP_NAME}`;

    // Form selectors
    this.attributeGroupSelect = '#attribute_attribute_group';
    this.valueInput = (idLanguage: number) => `#attribute_name_${idLanguage}`;
    this.urlInput = (idLanguage: number) => `#attribute_url_name_${idLanguage}`;
    this.metaTitleInput = (idLanguage: number) => `#attribute_meta_title_${idLanguage}`;
    this.colorInput = 'input[name="attribute[color]"]';
    this.saveButton = 'form[name="attribute"] div.card-footer button#save-button';
    this.saveAndStayButton = 'form[name="attribute"] div.card-footer button[name="save-and-add-new"]';
  }

  /*
  Methods
   */

  /**
   * Fill value form and save it
   * @param page {Page} Browser tab
   * @param valueData {FakerAttributeValue} Data to set on add/edit value form
   * @param saveAndStay {boolean} True if we need to save and stay, false if not
   * @return {Promise<string>}
   */
  async addEditValue(page: Page, valueData: FakerAttributeValue, saveAndStay: boolean = false): Promise<string> {
    // Set group and value
    await this.selectByVisibleText(page, this.attributeGroupSelect, `${valueData.attributeName} (#${valueData.attributeID})`);
    await this.setValue(page, this.valueInput(dataLanguages.english.id), valueData.value);

    // Set Url and meta title
    await this.setValue(page, this.urlInput(dataLanguages.english.id), valueData.url);
    await this.setValue(page, this.metaTitleInput(dataLanguages.english.id), valueData.metaTitle);

    // Set color and texture inputs
    if (await this.elementVisible(page, this.colorInput, 1000)) {
      await this.setValue(page, this.colorInput, valueData.color);
    }

    // Save value
    if (saveAndStay) {
      await page.locator(this.saveAndStayButton).click();
    } else {
      await this.clickAndWaitForURL(page, this.saveButton);
    }

    // Return successful message
    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Get the value of an input
   * @param page {Page} Browser tab
   * @param input {string} ID of the input
   * @param languageId {number | undefined}
   * @returns {Promise<string>}
   */
  async getInputValue(page: Page, input: string, languageId?: number): Promise<string> {
    switch (input) {
      case 'color':
        return this.getAttributeContent(page, this.colorInput, 'value');
      case 'name':
        return this.getAttributeContent(page, this.valueInput(languageId!), 'value');
      default:
        throw new Error(`Field ${input} was not found`);
    }
  }
}

module.exports = new BOAttributesValueCreatePage();
