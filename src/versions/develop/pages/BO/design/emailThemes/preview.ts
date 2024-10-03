import {type BODesignEmailThemesPreviewPageInterface} from '@interfaces/BO/design/emailThemes/preview';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Preview theme page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BODesignEmailThemesPreviewPage extends BOBasePage implements BODesignEmailThemesPreviewPageInterface {
  public readonly pageTitle: string;

  public readonly pageTitleFR: string;

  public readonly successMessageSendEmail: (layout: string) => string;

  public readonly successMessageSendEmailFR: (layout: string) => string;

  public readonly errorMessageSendEmail: string;

  private readonly layoutBody: string;

  private readonly emailThemeTable: string;

  private readonly tableBody: string;

  private readonly tableRows: string;

  private readonly tableRow: (row: number) => string;

  private readonly tableColumns: (row: number) => string;

  private readonly tableActionColumn: (row: number) => string;

  private readonly tableActionColumnHTTPLink: (row: number) => string;

  private readonly tableActionColumnDropDownLink: (row: number) => string;

  private readonly tableActionColumnRawHtmlLink: (row: number) => string;

  private readonly tableActionColumnRawTextLink: (row: number) => string;

  private readonly tableActionColumnRawTestEmailLink: (row: number) => string;

  private readonly backToConfigurationLink: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on preview theme page
   */
  constructor() {
    super();

    this.pageTitle = 'Previewing theme';
    this.pageTitleFR = 'Prévisualisation du thème';
    this.successMessageSendEmail = (layout: string) => `Test email for layout ${layout} was successfully sent`;
    this.successMessageSendEmailFR = (layout: string) => `L'e-mail de test du format ${layout} a été envoyé à`;
    this.errorMessageSendEmail = 'Cannot send test email for theme';

    // Selectors
    this.layoutBody = 'body pre';
    this.emailThemeTable = 'table.grid-table';
    this.tableBody = `${this.emailThemeTable} tbody`;
    this.tableRows = `${this.tableBody} tr`;
    this.tableRow = (row: number) => `${this.tableRows}:nth-child(${row})`;
    this.tableColumns = (row: number) => `${this.tableRow(row)} td`;
    this.tableActionColumn = (row: number) => `${this.tableColumns(row)}.action-type`;
    this.tableActionColumnHTTPLink = (row: number) => `${this.tableActionColumn(row)} div a[href*='preview']`;
    this.tableActionColumnDropDownLink = (row: number) => `${this.tableActionColumn(row)} .dropdown-toggle`;
    this.tableActionColumnRawHtmlLink = (row: number) => `${this.tableActionColumn(row)} .raw-html-link`;
    this.tableActionColumnRawTextLink = (row: number) => `${this.tableActionColumn(row)} .raw-text-link`;
    this.tableActionColumnRawTestEmailLink = (row: number) => `${this.tableActionColumn(row)} a[href*='send-test-ma']`;
    this.backToConfigurationLink = '#back-to-configuration-link';
  }

  /* Methods */

  /**
   * Get number of layouts in grid
   * @param page {Page} Browser tab
   * @return {Promise<number>}
   */
  async getNumberOfLayoutInGrid(page: Page): Promise<number> {
    return page.locator(this.tableRows).count();
  }

  /**
   * Click on back to configuration button
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async goBackToEmailThemesPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.backToConfigurationLink);
  }

  /**
   * View HTTP link
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @return {Promise<Page>}
   */
  async viewHTTPLink(page: Page, row: number): Promise<Page> {
    return this.openLinkWithTargetBlank(page, this.tableActionColumnHTTPLink(row), 'body');
  }

  /**
   * View raw html
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @return {Promise<Page>}
   */
  async viewRawHtml(page: Page, row: number): Promise<Page> {
    // Click on dropdown
    await page.locator(this.tableActionColumnDropDownLink(row)).click();

    // Open link in new target and return URL
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator(this.tableActionColumnRawHtmlLink(row)).click(),
    ]);

    return newPage;
  }

  /**
   * View raw text
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @return {Promise<Page>}
   */
  async viewRawText(page: Page, row: number): Promise<Page> {
    // Click on dropdown
    await page.locator(this.tableActionColumnDropDownLink(row)).click();

    // Open link in new target and return URL
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator(this.tableActionColumnRawTextLink(row)).click(),
    ]);

    return newPage;
  }

  /**
   * Send test email
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @return {Promise<String>}
   */
  async sendTestEmail(page: Page, row: number): Promise<string> {
    // Click on dropdown
    await page.locator(this.tableActionColumnDropDownLink(row)).click();
    await page.locator(this.tableActionColumnRawTestEmailLink(row)).click();

    return this.getAlertBlockContent(page);
  }

  /**
   * Get text from view layout page
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async getTextFromViewLayoutPage(page: Page): Promise<string> {
    return this.getTextContent(page, this.layoutBody);
  }
}

module.exports = new BODesignEmailThemesPreviewPage();
