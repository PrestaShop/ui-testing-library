import {type BOMerchandiseReturnsPageInterface} from '@interfaces/BO/customerService/merchandiseReturns';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Merchandise returns page (Symfony migrated controller), contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class BOMerchandiseReturnsPage extends BOBasePage implements BOMerchandiseReturnsPageInterface {
  public readonly pageTitle: string;

  public errorDeletionMessage: string;

  protected gridPanel: string;

  protected gridTable: string;

  protected gridHeaderTitle: string;

  protected filterColumn: (filterBy: string) => string;

  protected filterSearchButton: string;

  protected filterResetButton: string;

  protected tableBody: string;

  protected tableRow: (row: number) => string;

  protected tableColumn: (row: number, column: string) => string;

  protected actionsColumn: (row: number) => string;

  protected editRowLink: (row: number) => string;

  protected optionsForm: string;

  protected enableReturnsToggleInput: (toggle: string) => string;

  protected returnsPeriodInput: string;

  protected returnsPrefixInput: string;

  protected optionsSaveButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on merchandise return page
   */
  constructor() {
    super();

    this.pageTitle = 'Merchandise Returns •';
    this.successfulUpdateMessage = 'Update successful';
    this.errorDeletionMessage = 'A merchandise return must contain at least one product.';

    // Selectors
    // Merchandise returns grid
    this.gridPanel = '#merchandise_return_grid_panel';
    this.gridTable = '#merchandise_return_grid_table';
    this.gridHeaderTitle = `${this.gridPanel} h3.card-header-title`;
    this.filterColumn = (filterBy: string) => `${this.gridTable} #merchandise_return_${filterBy}`;
    this.filterSearchButton = `${this.gridTable} .grid-search-button`;
    this.filterResetButton = `${this.gridTable} .grid-reset-button`;
    this.tableBody = `${this.gridTable} tbody`;
    this.tableRow = (row: number) => `${this.tableBody} tr:nth-child(${row})`;
    this.tableColumn = (row: number, column: string) => `${this.tableRow(row)} td.column-${column}`;
    this.actionsColumn = (row: number) => this.tableColumn(row, 'actions');
    this.editRowLink = (row: number) => `${this.actionsColumn(row)} a.grid-edit-row-link`;

    // Options form (Merchandise return (RMA) options block at the bottom of the page).
    // Rendered with the default form name "form" (scoped here by its submit action).
    this.optionsForm = 'form[action*=\'merchandise-return/options\']';
    this.enableReturnsToggleInput = (toggle: string) => `#form_enable_order_return_${toggle === 'on' ? '1' : '0'}`;
    this.returnsPeriodInput = '#form_order_return_period_in_days';
    this.returnsPrefixInput = '#form_order_return_prefix_1';
    this.optionsSaveButton = `${this.optionsForm} .card-footer button.btn-primary`;
  }

  /*
    Methods
  */

  /**
   * Filter merchandise returns table
   * @param page {Page} Browser tab
   * @param filterBy {string} The column name to filter by
   * @param value {string} Value to filter with
   * @returns {Promise<void>}
   */
  async filterMerchandiseReturnsTable(page: Page, filterBy: string, value: string): Promise<void> {
    await this.setValue(page, this.filterColumn(filterBy), value);
    // click on search
    await this.clickAndWaitForURL(page, this.filterSearchButton);
  }

  /**
   * Get text column from merchandise returns table
   * @param page {Page} Browser tab
   * @param columnName {string} Column name on the table
   * @param row {number} Row on the table
   * @returns {Promise<string>}
   */
  async getTextColumnFromMerchandiseReturnsTable(page: Page, columnName: string, row: number = 1): Promise<string> {
    return this.getTextContent(page, this.tableColumn(row, columnName));
  }

  /**
   * Go to merchandise return edit page
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @returns {Promise<void>}
   */
  async goToMerchandiseReturnPage(page: Page, row: number = 1): Promise<void> {
    await this.clickAndWaitForURL(page, this.editRowLink(row));
  }

  /**
   * Enable/Disable merchandise returns
   * @param page {Page} Browser tab
   * @param status {boolean} Status to set on the order return
   * @returns {Promise<string>}
   */
  async setOrderReturnStatus(page: Page, status: boolean = true): Promise<string> {
    // The slide-button overlays the hidden radio, so click the underlying input directly
    await page.locator(this.enableReturnsToggleInput(status ? 'on' : 'off')).evaluate((el) => (el as HTMLElement).click());
    await this.clickAndWaitForLoadState(page, this.optionsSaveButton, 'networkidle');
    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Update returns prefix
   * @param page {Page} Browser tab
   * @param prefix {string} Value of prefix to set on return prefix input
   * @returns {Promise<string>}
   */
  async setReturnsPrefix(page: Page, prefix: string): Promise<string> {
    await this.setValue(page, this.returnsPrefixInput, prefix);
    await this.clickAndWaitForLoadState(page, this.optionsSaveButton, 'networkidle');
    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

const boMerchandiseReturnsPage = new BOMerchandiseReturnsPage();
export {boMerchandiseReturnsPage, BOMerchandiseReturnsPage};
