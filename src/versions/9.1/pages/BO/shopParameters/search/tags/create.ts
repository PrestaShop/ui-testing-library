import FakerSearchTag from '@data/faker/searchTag';
import {type BOTagsCreatePageInterface} from '@interfaces/BO/shopParameters/search/tags/create';
import {Page} from '@playwright/test';
import {BOTagsCreatePage as BOTagsCreatePageVersion} from '@versions/develop/pages/BO/shopParameters/search/tags/create';

/**
 * @class
 * @extends BOTagsPageVersion
 */
class BOTagsCreatePage extends BOTagsCreatePageVersion implements BOTagsCreatePageInterface {
  private readonly productSelect: string;

  private readonly moveToLeftButton: string;

  private readonly moveToRightButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on add tag page
   */
  constructor() {
    super();

    this.alertSuccessBlock = `${this.alertBlock}.alert-success`;

    this.pageTitleCreate = 'Tags > Add new •';
    this.pageTitleEdit = () => 'Tags > Edit:';

    // Selectors
    this.nameInput = '#name';
    this.languageInput = '#id_lang';
    this.saveButton = '#tag_form_submit_btn';

    // Selectors (Product)
    this.productSelect = '#select_left';
    this.moveToLeftButton = '#move_to_left';
    this.moveToRightButton = '#move_to_right';
  }

  /* Methods */
  /**
     * Create/Edit tag
     * @param page {Page} Browser tab
     * @param tagData {FakerSearchTag} Data to set to tag form
     * @returns {Promise<string>}
     */
  async setTag(page: Page, tagData: FakerSearchTag): Promise<string> {
    await this.setValue(page, this.nameInput, tagData.name);
    await this.selectByVisibleText(page, this.languageInput, tagData.language);
    // Choose product
    await this.waitForSelectorAndClick(page, this.moveToLeftButton);
    await this.selectByVisibleText(page, this.productSelect, tagData.products);
    await this.waitForSelectorAndClick(page, this.moveToRightButton);

    await this.clickAndWaitForURL(page, this.saveButton);
    return this.getAlertSuccessBlockContent(page);
  }
}

const boTagsCreatePage = new BOTagsCreatePage();
export {boTagsCreatePage, BOTagsCreatePage};
