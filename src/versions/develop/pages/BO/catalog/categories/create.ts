import type FakerCategory from '@data/faker/category';
import {type BOCategoriesCreatePageInterface} from '@interfaces/BO/catalog/categories/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

class BOCategoriesCreatePage extends BOBasePage implements BOCategoriesCreatePageInterface {
  public readonly pageTitleCreate: string;

  public readonly pageTitleEdit: string;

  private readonly formCategory: string;

  private readonly nameInputEn: string;

  private readonly nameLanguageDropDown: string;

  private readonly nameLanguageButtonFr: string;

  private readonly nameInputFr: string;

  private readonly displayedToggleInput: (toggle: number) => string;

  private readonly descriptionIframeEn: string;

  private readonly descriptionIframeFR: string;

  private readonly categoryCoverImage: string;

  private readonly categoryCoverImageImg: string;

  private readonly categoryThumbnailImage: string;

  private readonly metaTitleInputEn: string;

  private readonly metaTitleInputFr: string;

  private readonly metaDescriptionTextareaEn: string;

  private readonly metaDescriptionTextareaFr: string;

  private readonly linkRewriteInputEn: string;

  private readonly redirectionWhenNotDisplayedSelect: string;

  private readonly redirectedCategory: string;

  private readonly selectAllGroupAccessCheckbox: string;

  private readonly saveCategoryButton: string;

  private readonly rootCategoryNameInput: string;

  private readonly rootCategoryDisplayedToggleInput: (toggle: number) => string;

  private readonly rootCategoryDescriptionIframe: string;

  private readonly rootCategoryCoverImage: string;

  private readonly rootCategoryMetaTitleInput: string;

  private readonly rootCategoryMetaDescriptionTextarea: string;

  constructor() {
    super();

    this.pageTitleCreate = `New category • ${global.INSTALL.SHOP_NAME}`;
    this.pageTitleEdit = 'Editing category ';

    // Selectors
    this.formCategory = '#main-div .content-div form';
    this.nameInputEn = '#category_name_1';
    this.nameInputFr = '#category_name_2';
    this.nameLanguageDropDown = '#category_name_dropdown';
    this.nameLanguageButtonFr = 'div.locale-dropdown-menu.show span[data-locale="fr"]';
    this.displayedToggleInput = (toggle: number) => `#category_active_${toggle}`;
    this.descriptionIframeEn = '#category_description_1_ifr';
    this.descriptionIframeFR = '#category_description_2_ifr';
    this.categoryCoverImage = '#category_cover_image';
    this.categoryCoverImageImg = 'label[for="category_cover_image"] + div.input-container figure img';
    this.categoryThumbnailImage = '#category_thumbnail_image';
    this.metaTitleInputEn = '#category_meta_title_1';
    this.metaTitleInputFr = '#category_meta_title_2';
    this.metaDescriptionTextareaEn = '#category_meta_description_1';
    this.metaDescriptionTextareaFr = '#category_meta_description_2';
    this.linkRewriteInputEn = '#category_link_rewrite_1';
    this.redirectionWhenNotDisplayedSelect = '#category_redirect_option_type';
    this.redirectedCategory = '#category_redirect_option_target_search_input';
    this.selectAllGroupAccessCheckbox = '.js-choice-table-select-all';
    this.saveCategoryButton = '#save-button';

    // Selectors fo root category
    this.rootCategoryNameInput = '#root_category_name_1';
    this.rootCategoryDisplayedToggleInput = (toggle: number) => `#root_category_active_${toggle}`;
    this.rootCategoryDescriptionIframe = '#root_category_description_1_ifr';
    this.rootCategoryCoverImage = '#root_category_cover_image';
    this.rootCategoryMetaTitleInput = '#root_category_meta_title_1';
    this.rootCategoryMetaDescriptionTextarea = '#root_category_meta_description_1';
  }

  /*
  Methods
   */
  /**
   * Returns the Identifier of the category
   * @param page {Page} Browser tab
   * @return {Promise<number>}
   */
  async getIDCategory(page: Page): Promise<number> {
    return parseInt(await page.locator(this.formCategory).getAttribute('data-id') ?? '', 10);
  }

  /**
   * Select all groups
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async selectAllGroups(page: Page): Promise<void> {
    if (!(await this.isChecked(page, this.selectAllGroupAccessCheckbox))) {
      const parentElement = await this.getParentElement(page, this.selectAllGroupAccessCheckbox);

      if (parentElement instanceof HTMLElement) {
        parentElement.click();
      }
    }
  }

  /**
   * Fill form for add/edit category
   * @param page {Page} Browser tab
   * @param categoryData {FakerCategory} Data to set on new/edit category form
   * @returns {Promise<string>}
   */
  async createEditCategory(page: Page, categoryData: FakerCategory): Promise<string> {
    // Wait for the TinyMCE is visible
    await this.waitForVisibleSelector(page, this.descriptionIframeEn, 30000);

    await this.setValue(page, this.nameInputEn, categoryData.name);
    await this.setChecked(page, this.displayedToggleInput(categoryData.displayed ? 1 : 0));
    await this.setValueOnTinymceInput(page, this.descriptionIframeEn, categoryData.description);
    if (categoryData.coverImage) {
      await this.uploadFile(page, this.categoryCoverImage, categoryData.coverImage);
    }
    if (categoryData.thumbnailImage) {
      await this.uploadFile(page, this.categoryThumbnailImage, categoryData.thumbnailImage);
    }
    await this.setValue(page, this.metaTitleInputEn, categoryData.metaTitle);
    await this.setValue(page, this.metaDescriptionTextareaEn, categoryData.metaDescription);
    await page.locator(this.redirectionWhenNotDisplayedSelect).selectOption({
      value: categoryData.redirectionWhenNotDisplayed,
    });
    if (categoryData.redirectedCategory && ['301', '302'].includes(categoryData.redirectionWhenNotDisplayed)) {
      await this.searchOptionTarget(page, categoryData.redirectedCategory.name);
    }
    await this.selectAllGroups(page);

    // Save Category
    await this.clickAndWaitForURL(page, this.saveCategoryButton);
    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Edit home category
   * @param page {Page} Browser tab
   * @param categoryData {FakerCategory} Data to set on edit home category form
   * @returns {Promise<string>}
   */
  async editHomeCategory(page: Page, categoryData: FakerCategory): Promise<string> {
    // Wait for the TinyMCE is visible
    await this.waitForVisibleSelector(page, this.rootCategoryDescriptionIframe, 30000);

    await this.setValue(page, this.rootCategoryNameInput, categoryData.name);
    await this.setChecked(page, this.rootCategoryDisplayedToggleInput(categoryData.displayed ? 1 : 0));
    await this.setValueOnTinymceInput(page, this.rootCategoryDescriptionIframe, categoryData.description);
    if (categoryData.coverImage) {
      await this.uploadFile(page, this.rootCategoryCoverImage, categoryData.coverImage);
    }
    await this.setValue(page, this.rootCategoryMetaTitleInput, categoryData.metaTitle);
    await this.setValue(page, this.rootCategoryMetaDescriptionTextarea, categoryData.metaDescription);
    await this.selectAllGroups(page);
    // Save Category
    await this.clickAndWaitForURL(page, this.saveCategoryButton);
    return this.getPageTitle(page);
  }

  /**
   * Search option target
   * @param page {Page} Browser tab
   * @param target {string} Target to search
   * @returns {Promise<void>}
   */
  private async searchOptionTarget(page: Page, target: string): Promise<void> {
    await page.locator(this.redirectedCategory).fill(target);
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
  }

  /**
   * Return input value
   * @param page {Page}
   * @param inputName {string}
   * @param language {string}
   */
  async getValue(page: Page, inputName: string, language: string = 'en'): Promise<string> {
    if (language === 'fr' && await this.elementVisible(page, this.nameInputEn)) {
      await page.locator(this.nameLanguageDropDown).click();
      await page.locator(this.nameLanguageButtonFr).click();
    }

    switch (inputName) {
      case 'friendlyUrl':
        return page.inputValue(this.linkRewriteInputEn);
      case 'cover_image':
        if (!(await this.elementNotVisible(page, this.categoryCoverImageImg, 3000))) {
          return this.getAttributeContent(page, this.categoryCoverImageImg, 'src');
        }
        return '';
      case 'name':
        return page.inputValue(
          language === 'fr' ? this.nameInputFr : this.nameInputEn,
        );
      case 'description':
        return this.getValueOnTinymceInput(
          page,
          language === 'fr' ? this.descriptionIframeFR : this.descriptionIframeEn,
        );
      case 'metaTitle':
        return page.inputValue(
          language === 'fr' ? this.metaTitleInputFr : this.metaTitleInputEn,
        );
      case 'metaDescription':
        return page.inputValue(
          language === 'fr'
            ? this.metaDescriptionTextareaFr
            : this.metaDescriptionTextareaEn,
        );
      case 'active':
        return (await page.isChecked(this.displayedToggleInput(0))) ? '0' : '1';
      default:
        throw new Error(`Input ${inputName} was not found`);
    }
  }
}

module.exports = new BOCategoriesCreatePage();
