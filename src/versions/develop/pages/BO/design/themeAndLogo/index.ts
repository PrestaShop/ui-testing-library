import {type BOThemeAndLogoPageInterface} from '@interfaces/BO/design/themeAndLogo';
import BOThemeAndLogoBasePage from '@pages/BO/design/themeAndLogo/base';
import {type Page} from '@playwright/test';

/**
 * Theme & logo page, contains functions that can be used on the page
 * @class
 * @extends themeAndLogoBasePage
 */
class ThemeAndLogoPage extends BOThemeAndLogoBasePage implements BOThemeAndLogoPageInterface {
  public readonly pageTitle: string;

  public readonly successExportMessage: string;

  private readonly addNewThemeButton: string;

  private readonly exportCurrentThemeButton: string;

  private readonly themeCardContainer: string;

  private readonly useSpecificThemeButton: (name: string) => string;

  private readonly removeSpecificThemeButton: (name: string) => string;

  private readonly removeThemeModalDialog: string;

  private readonly removeThemeModalDialogYesButton: string;

  private readonly chooseLayoutsButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on theme & logo page
   */
  constructor() {
    super();

    this.pageTitle = `Theme & Logo • ${global.INSTALL.SHOP_NAME}`;
    this.successExportMessage = 'Your theme has been correctly exported:';

    this.addNewThemeButton = '#page-header-desc-configuration-add';
    this.exportCurrentThemeButton = '#page-header-desc-configuration-export';
    this.themeCardContainer = '#themes-logo-page .theme-card-container';
    this.useSpecificThemeButton = (name: string) => `${this.themeCardContainer}[data-role="${name}"] `
      + 'button.js-display-use-theme-modal';
    this.removeSpecificThemeButton = (name: string) => `${this.themeCardContainer}[data-role="${name}"] `
      + 'button.js-display-delete-theme-modal';
    this.removeThemeModalDialog = '#delete_theme_modal .modal-dialog';
    this.removeThemeModalDialogYesButton = `${this.removeThemeModalDialog} .js-submit-delete-theme`;
    this.chooseLayoutsButton = '.layout-configuration a.choose-layouts-button';
  }

  /**
   * Export current theme button
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async exportCurrentTheme(page: Page): Promise<string> {
    await this.clickAndWaitForLoadState(page, this.exportCurrentThemeButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Go to "Add new theme" page
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToNewThemePage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.addNewThemeButton);
  }

  /**
   * Returns the number of themes
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getNumberOfThemes(page: Page): Promise<number> {
    return page.locator(this.themeCardContainer).count();
  }

  /**
   * Enable a specific theme
   * @param page {Page} Browser tab
   * @param themeName {string} Theme name
   * @returns {Promise<String>}
   */
  async enableTheme(page: Page, themeName: string): Promise<string> {
    await page.locator(this.useSpecificThemeButton(themeName)).evaluate((el: HTMLElement) => el.click());
    await this.waitForSelectorAndClick(page, this.useThemeModalDialogYesButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Remove a specific theme
   * @param page {Page} Browser tab
   * @param themeName {string} Theme name
   * @returns {Promise<String>}
   */
  async removeTheme(page: Page, themeName: string): Promise<string> {
    await page.locator(this.removeSpecificThemeButton(themeName)).evaluate((el: HTMLElement) => el.click());
    await this.waitForSelectorAndClick(page, this.removeThemeModalDialogYesButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Go to "Choose Layouts" page
   * @param page {Page} Browser tab
   * @returns {Promise<String>}
   */
  async goToChooseLayoutsPage(page: Page): Promise<void> {
    await page.locator(this.chooseLayoutsButton).click();
  }
}

module.exports = new ThemeAndLogoPage();
