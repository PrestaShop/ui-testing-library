import {type BODesignEmailThemesPageInterface} from '@interfaces/BO/design/emailThemes';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Email theme page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BODesignEmailThemesPage extends BOBasePage implements BODesignEmailThemesPageInterface {
  public readonly pageTitle: string;

  public readonly pageTitleFR: string;

  public readonly emailThemeConfigurationSuccessfulMessage: string;

  private readonly defaultEmailThemeSelect: string;

  private readonly configurationFormSaveButton: string;

  private readonly emailThemeSelect: string;

  private readonly languageSelect: string;

  private readonly themeToOverwriteSelect: string;

  private readonly overwriteTemplateRadio: (toOverwrite: number) => string;

  private readonly generateEmailsButton: string;

  private readonly languageToTranslateSelect: string;

  private readonly translateEmailsButton: string;

  private readonly emailThemeTable: string;

  private readonly tableBody: string;

  private readonly tableRows: string;

  private readonly columnName: string;

  private readonly columnActionPreviewLink: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on email theme page
   */
  constructor() {
    super();

    this.pageTitle = `Email theme • ${global.INSTALL.SHOP_NAME}`;
    this.pageTitleFR = `Thème d'e-mail • ${global.INSTALL.SHOP_NAME}`;
    this.emailThemeConfigurationSuccessfulMessage = 'Email theme configuration saved successfully';

    // Configuration form selectors
    this.defaultEmailThemeSelect = '#form_defaultTheme';
    this.configurationFormSaveButton = '#save-configuration-form';

    // Generate emails form selectors
    this.emailThemeSelect = '#generate_mails_mailTheme';
    this.languageSelect = '#generate_mails_language';
    this.themeToOverwriteSelect = '#generate_mails_theme';
    this.overwriteTemplateRadio = (toOverwrite: number) => `#generate_mails_overwrite_${toOverwrite}`;
    this.generateEmailsButton = 'form[name="generate_mails"] div.card-footer button';

    // Translate emails form selectors
    this.languageToTranslateSelect = '#translate_mails_body_language';
    this.translateEmailsButton = 'form[name="translate_mails_body"] div.card-footer button';

    // Email Theme table selectors
    this.emailThemeTable = 'table.grid-table';
    this.tableBody = `${this.emailThemeTable} tbody`;
    this.tableRows = `${this.tableBody} tr`;
    this.columnName = 'td.column-name';
    this.columnActionPreviewLink = 'td.action-type a.preview-link';
  }

  /* Configuration form methods */

  /**
   * Choose default email theme and save configuration
   * @param page {Page} Browser tab
   * @param emailTheme {string} Value of email theme to select
   * @return {Promise<string>}
   */
  async selectDefaultEmailTheme(page: Page, emailTheme: string): Promise<string> {
    await this.selectByVisibleText(page, this.defaultEmailThemeSelect, emailTheme);
    await this.clickAndWaitForLoadState(page, this.configurationFormSaveButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /* Generate emails form methods */
  /**
   * Configure generate emails
   * @param page {Page} Browser tab
   * @param theme {string} Value of email theme to select
   * @param language {string} Language to select
   * @param themeToOvewrite {boolean} True if we need to overwrite template
   * @param overwrite
   */
  async configureGenerateEmails(page: Page, theme: string, language: string, themeToOvewrite: string, overwrite: boolean): Promise<string> {
    await this.selectByVisibleText(page, this.emailThemeSelect, theme);
    await this.selectByVisibleText(page, this.languageSelect, language);
    await this.selectByVisibleText(page, this.themeToOverwriteSelect, themeToOvewrite);
    await page.setChecked(this.overwriteTemplateRadio(overwrite ? 1 : 0), overwrite);
    await this.clickAndWaitForLoadState(page, this.generateEmailsButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /* Translate emails methods */
  /**
   * Select translate email language
   * @param page {Page} Browser tab
   * @param language {string} Language to select
   * @return {Promise<void>}
   */
  async selectTranslateEmailLanguage(page: Page, language: string): Promise<void> {
    await this.selectByVisibleText(page, this.languageToTranslateSelect, language);
    await this.clickAndWaitForLoadState(page, this.translateEmailsButton)
  }


  /* Email themes grid methods */
  /**
   * Preview email theme
   * @param page {Page} Browser tab
   * @param name {string} Value of theme to choose
   * @return {Promise<void>}
   */
  async previewEmailTheme(page: Page, name: string): Promise<void> {
    const rowLocator = page
      .locator(this.tableRows)
      .filter({hasText: name})
      .first();

    if ((await rowLocator.textContent()) === null) {
      throw Error(`${name} was not found in theme emails table`);
    }

    await Promise.all([
      rowLocator
        .locator(this.columnActionPreviewLink)
        .evaluate((el: HTMLElement) => el.click()),
      page.waitForURL('**/mail_theme/preview/**'),
    ]);
  }
}

module.exports = new BODesignEmailThemesPage();
