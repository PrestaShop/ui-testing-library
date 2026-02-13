import type FakerSearchTag from '@data/faker/searchTag';
import {type BOTagsCreatePageInterface} from '@interfaces/BO/shopParameters/search/tags/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add tag page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class BOTagsCreatePage extends BOBasePage implements BOTagsCreatePageInterface {
  public pageTitleCreate: string;

  public pageTitleEdit: (name: string) => string;

  protected nameInput: string;

  protected languageInput: string;

  protected saveButton: string;

  private readonly productSearchInput: string;

  private readonly productSearchInputAutocomplete: string;

  private readonly productSearchInputAutocompleteNth: (nth: number) => string;

  private readonly productList: string;

  private readonly productListItem: (nth: number) => string;

  private readonly productListItemDelete: (nth: number) => string;

  private readonly productModalRemove: string;

  private readonly productModalRemoveConfirmBtn: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on add tag page
   */
  constructor() {
    super();

    this.alertSuccessBlock = 'div.alert[role=alert] div.alert-text';

    this.pageTitleCreate = `New tag • ${global.INSTALL.SHOP_NAME}`;
    this.pageTitleEdit = (name: string) => `Editing tag "${name}" • ${global.INSTALL.SHOP_NAME}`;

    // Selectors
    this.nameInput = '#tag_name';
    this.languageInput = '#tag_language';
    this.saveButton = 'form[name="tag"] #save-button';

    // Selectors (Product)
    this.productSearchInput = '#tag_products_search_input';
    this.productSearchInputAutocomplete = `${this.productSearchInput} ~ .tt-menu.tt-open`;
    this.productSearchInputAutocompleteNth = (nth: number) => `${this.productSearchInputAutocomplete} div.tt-dataset `
      + `div.search-suggestion:nth-child(${nth})`;
    this.productList = '#tag_products_list';
    this.productListItem = (nth: number) => `${this.productList} #tag_products_${nth}`;
    this.productListItemDelete = (nth: number) => `${this.productListItem(nth)} i.entity-item-delete`;
    this.productModalRemove = '#modal-confirm-remove-entity';
    this.productModalRemoveConfirmBtn = `${this.productModalRemove} button.btn-confirm-submit`;
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
    if (await page.locator(this.productListItem(0)).count() > 0) {
      await page.locator(this.productListItemDelete(0)).click();
      await page.waitForSelector(this.productModalRemove, {
        state: 'visible',
      });
      await page.locator(this.productModalRemoveConfirmBtn).click();
      await page.waitForSelector(this.productModalRemove, {
        state: 'hidden',
      });
    }
    await page.locator(this.productSearchInput).fill(tagData.products);
    await page.waitForSelector(this.productSearchInputAutocomplete, {
      state: 'visible',
    });
    await page.locator(this.productSearchInputAutocompleteNth(1)).click();
    await page.waitForSelector(this.productListItem(0), {
      state: 'visible',
    });

    await this.clickAndWaitForURL(page, this.saveButton);
    return this.getAlertSuccessBlockContent(page);
  }
}

const boTagsCreatePage = new BOTagsCreatePage();
export {boTagsCreatePage, BOTagsCreatePage};
