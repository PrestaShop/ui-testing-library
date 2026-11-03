import type FakerStore from '@data/faker/store';
import {type BOStoresPageInterface} from '@interfaces/BO/shopParameters/stores';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Stores page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class BOStoresPage extends BOBasePage implements BOStoresPageInterface {
  public readonly pageTitle: string;

  public readonly contactFormSuccessfulUpdateMessage: string;

  private readonly newStoreLink: string;

  private readonly gridPanel: string;

  private readonly gridTableHeaderTitle: string;

  private readonly gridTableNumberOfTitlesSpan: string;

  private readonly gridTable: string;

  private readonly tableHead: string;

  private readonly sortColumnDiv: (column: string) => string;

  private readonly sortColumnDirectionDiv: (column: string, direction: string) => string;

  private readonly filterRow: string;

  private readonly filterColumn: (filterBy: string) => string;

  private readonly filterSearchButton: string;

  private readonly filterResetButton: string;

  private readonly tableBody: string;

  private readonly tableBodyRows: string;

  private readonly tableBodyRow: (row: number) => string;

  private readonly tableBodyColumn: (row: number) => string;

  private readonly tableColumn: (row: number, column: string) => string;

  private readonly tableColumnStatus: (row: number) => string;

  private readonly tableColumnStatusChecked: (row: number) => string;

  private readonly tableColumnActions: (row: number) => string;

  private readonly tableColumnActionsEditLink: (row: number) => string;

  private readonly tableColumnActionsToggleButton: (row: number) => string;

  private readonly tableColumnActionsDropdownMenu: (row: number) => string;

  private readonly tableColumnActionsDeleteLink: (row: number) => string;

  private readonly deleteModalButtonYes: string;

  private readonly bulkActionBlock: string;

  private readonly bulkActionMenuButton: string;

  private readonly bulkActionMenuButtonEnabled: string;

  private readonly bulkActionDropdownMenu: string;

  private readonly selectAllCheckbox: string;

  private readonly bulkEnableLink: string;

  private readonly bulkDisableLink: string;

  private readonly bulkDeleteLink: string;

  private readonly paginationDiv: string;

  private readonly paginationActiveLabel: string;

  private readonly paginationLimitSelect: string;

  private readonly paginationPreviousLink: string;

  private readonly paginationNextLink: string;

  private readonly nameInput: string;

  private readonly emailInput: string;

  private readonly registrationNumberTextarea: string;

  private readonly address1Input: string;

  private readonly address2Input: string;

  private readonly postcodeInput: string;

  private readonly cityInput: string;

  private readonly countrySelect: string;

  private readonly phoneInput: string;

  private readonly faxInput: string;

  private readonly saveButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on stores page
   */
  constructor() {
    super();

    this.pageTitle = `Stores • ${global.INSTALL.SHOP_NAME}`;
    this.contactFormSuccessfulUpdateMessage = 'The settings have been successfully updated.';
    this.successfulMultiDeleteMessage = 'The selection has been successfully deleted.';

    // Header selectors
    this.newStoreLink = '#page-header-desc-configuration-add_store';

    // Grid selectors
    this.gridPanel = '#store_grid_panel';
    this.gridTableHeaderTitle = `${this.gridPanel} .card-header`;
    this.gridTableNumberOfTitlesSpan = `${this.gridTableHeaderTitle} .card-header-title`;
    this.gridTable = '#store_grid_table';

    // Sort selectors
    this.tableHead = `${this.gridTable} thead`;
    this.sortColumnDiv = (column: string) => `${this.tableHead} div.ps-sortable-column[data-sort-col-name="${column}"]`;
    this.sortColumnDirectionDiv = (column: string, direction: string) => `${this.sortColumnDiv(column)}`
      + `[data-sort-direction="${direction}"]`;

    // Filter selectors
    this.filterRow = `${this.gridTable} tr.column-filters`;
    this.filterColumn = (filterBy: string) => `${this.filterRow} [name="store[${filterBy}]"]`;
    this.filterSearchButton = `${this.filterRow} button.grid-search-button`;
    this.filterResetButton = `${this.filterRow} button.grid-reset-button`;

    // Table body selectors
    this.tableBody = `${this.gridTable} tbody`;
    this.tableBodyRows = `${this.tableBody} tr`;
    this.tableBodyRow = (row: number) => `${this.tableBodyRows}:nth-child(${row})`;
    this.tableBodyColumn = (row: number) => `${this.tableBodyRow(row)} td`;
    this.tableColumn = (row: number, column: string) => `${this.tableBodyColumn(row)}.column-${column}`;
    this.tableColumnStatus = (row: number) => `${this.tableColumn(row, 'active')} .ps-switch`;
    this.tableColumnStatusChecked = (row: number) => `${this.tableColumnStatus(row)} input:checked`;

    // Row actions selectors
    this.tableColumnActions = (row: number) => `${this.tableColumn(row, 'actions')}`;
    this.tableColumnActionsEditLink = (row: number) => `${this.tableColumnActions(row)} a.grid-edit-row-link`;
    this.tableColumnActionsToggleButton = (row: number) => `${this.tableColumnActions(row)} a.dropdown-toggle`;
    this.tableColumnActionsDropdownMenu = (row: number) => `${this.tableColumnActions(row)} .dropdown-menu`;
    this.tableColumnActionsDeleteLink = (row: number) => `${this.tableColumnActionsDropdownMenu(row)} a.grid-delete-row-link`;

    // Confirmation modal
    this.deleteModalButtonYes = '#store-grid-confirm-modal button.btn-confirm-submit';

    // Bulk actions selectors
    this.bulkActionBlock = '#store_grid .btn-group';
    this.bulkActionMenuButton = `${this.bulkActionBlock} button.js-bulk-actions-btn`;
    this.bulkActionMenuButtonEnabled = `${this.bulkActionMenuButton}:not([disabled])`;
    this.bulkActionDropdownMenu = `${this.bulkActionBlock} div.dropdown-menu.show`;
    this.selectAllCheckbox = `${this.filterRow} td[data-type="bulk_action"] #store_grid_bulk_action_select_all`;
    this.bulkEnableLink = `${this.bulkActionDropdownMenu} #store_grid_bulk_action_store_bulk_enable`;
    this.bulkDisableLink = `${this.bulkActionDropdownMenu} #store_grid_bulk_action_store_bulk_disable`;
    this.bulkDeleteLink = `${this.bulkActionDropdownMenu} #store_grid_bulk_action_delete_selection`;

    // Pagination selectors
    this.paginationDiv = `${this.gridPanel} .pagination-block`;
    this.paginationActiveLabel = `${this.paginationDiv} ul.pagination + div .col-form-label`;
    this.paginationLimitSelect = `${this.paginationDiv} #paginator_select_page_limit`;
    this.paginationPreviousLink = `${this.gridPanel} a[data-role="previous-page-link"]`;
    this.paginationNextLink = `${this.gridPanel} a[data-role="next-page-link"]`;

    // Contact details form
    this.nameInput = '#stores-contact-details_name';
    this.emailInput = '#stores-contact-details_email';
    this.registrationNumberTextarea = '#stores-contact-details_registration_number';
    this.address1Input = '#stores-contact-details_address1';
    this.address2Input = '#stores-contact-details_address2';
    this.postcodeInput = '#stores-contact-details_postcode';
    this.cityInput = '#stores-contact-details_city';
    this.countrySelect = '#stores-contact-details_id_country';
    this.phoneInput = '#stores-contact-details_phone';
    this.faxInput = '#stores-contact-details_fax';
    this.saveButton = '#save-contact-details-button';
  }

  /* Header methods */
  /**
   * Go to new store page
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async goToNewStorePage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.newStoreLink);
  }

  /* Filter methods */
  /**
   * Get Number of stores
   * @param page {Page} Browser tab
   * @return {Promise<number>}
   */
  async getNumberOfElementInGrid(page: Page): Promise<number> {
    return this.getNumberFromText(page, this.gridTableNumberOfTitlesSpan);
  }

  /**
   * Reset all filters
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async resetFilter(page: Page): Promise<void> {
    if (!(await this.elementNotVisible(page, this.filterResetButton, 2000))) {
      await this.clickAndWaitForURL(page, this.filterResetButton);
    }
    await this.waitForVisibleSelector(page, this.filterSearchButton, 2000);
  }

  /**
   * Reset and get number of stores
   * @param page {Page} Browser tab
   * @return {Promise<number>}
   */
  async resetAndGetNumberOfLines(page: Page): Promise<number> {
    await this.resetFilter(page);
    return this.getNumberOfElementInGrid(page);
  }

  /**
   * Filter stores
   * @param page {Page} Browser tab
   * @param filterType {string} Type of filter (input/select)
   * @param filterBy {string} Column to filter with
   * @param value {string} Value to filter
   * @return {Promise<void>}
   */
  async filterTable(page: Page, filterType: string, filterBy: string, value: string): Promise<void> {
    switch (filterType) {
      case 'input':
        await this.setValue(page, this.filterColumn(filterBy), value.toString());
        break;

      case 'select':
        await this.selectByVisibleText(page, this.filterColumn(filterBy), value === '1' ? 'Yes' : 'No');
        break;

      default:
        throw new Error(`Filter ${filterBy} was not found`);
    }

    await this.clickAndWaitForURL(page, this.filterSearchButton);
  }

  /* Column methods */
  /**
   * Get text from column in table
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @param columnName {string} Column id of the value to return
   * @return {Promise<string>}
   */
  async getTextColumn(page: Page, row: number, columnName: string): Promise<string> {
    return this.getTextContent(page, this.tableColumn(row, columnName));
  }

  /**
   * Get column content from all rows
   * @param page {Page} Browser tab
   * @param columnName {string} Column id of the value to return
   * @return {Promise<Array<string>>}
   */
  async getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]> {
    const rowsNumber = await page.locator(this.tableBodyRows).count();
    const allRowsContentTable: string[] = [];

    for (let i = 1; i <= rowsNumber; i++) {
      allRowsContentTable.push(await this.getTextColumn(page, i, columnName));
    }

    return allRowsContentTable;
  }

  /**
   * Get Store status
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @return {Promise<boolean>}
   */
  async getStoreStatus(page: Page, row: number): Promise<boolean> {
    const inputValue = await this.getAttributeContent(page, this.tableColumnStatusChecked(row), 'value');

    return inputValue === '1';
  }

  /**
   * Set store status by clicking on column status
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @param wantedStatus {boolean} True if we need to enable status
   * @return {Promise<void>}
   */
  async setStoreStatus(page: Page, row: number, wantedStatus: boolean): Promise<void> {
    if (await this.getStoreStatus(page, row) !== wantedStatus) {
      await this.clickAndWaitForURL(page, this.tableColumnStatus(row));
    }
  }

  /**
   * Go to edit store page
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @return {Promise<void>}
   */
  async gotoEditStorePage(page: Page, row: number): Promise<void> {
    // Special case where we wait for networkidle because the list of states in the select is loaded by ajax
    await this.clickAndWaitForURL(page, this.tableColumnActionsEditLink(row), 'networkidle');
  }

  /**
   * Delete store from row
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @return {Promise<string>}
   */
  async deleteStore(page: Page, row: number): Promise<string> {
    await Promise.all([
      page.locator(this.tableColumnActionsToggleButton(row)).click(),
      this.waitForVisibleSelector(page, this.tableColumnActionsDeleteLink(row)),
    ]);

    await page.locator(this.tableColumnActionsDeleteLink(row)).click();
    await this.waitForVisibleSelector(page, this.deleteModalButtonYes);
    await this.clickAndWaitForURL(page, this.deleteModalButtonYes);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /* Bulk actions methods */
  /**
   * Select all rows and open the bulk actions menu
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  private async openBulkActionsMenu(page: Page): Promise<void> {
    await page.locator(this.selectAllCheckbox).click();
    await page.locator(this.bulkActionMenuButtonEnabled).waitFor({state: 'visible'});
    await page.locator(this.bulkActionMenuButton).click();
    await this.waitForVisibleSelector(page, this.bulkActionDropdownMenu);
  }

  /**
   * Enable / disable stores by bulk actions
   * @param page {Page} Browser tab
   * @param statusWanted {boolean} True if we need to enable status
   * @return {Promise<void>}
   */
  async bulkUpdateStoreStatus(page: Page, statusWanted: boolean): Promise<void> {
    await this.openBulkActionsMenu(page);
    await this.clickAndWaitForURL(page, statusWanted ? this.bulkEnableLink : this.bulkDisableLink);
  }

  /**
   * Bulk delete stores
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async bulkDeleteStores(page: Page): Promise<string> {
    await this.openBulkActionsMenu(page);
    await page.locator(this.bulkDeleteLink).click();
    await this.waitForVisibleSelector(page, this.deleteModalButtonYes);
    await this.clickAndWaitForURL(page, this.deleteModalButtonYes);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /* Sort functions */
  /**
   * Sort table by clicking on column name
   * @param page {Page} Browser tab
   * @param sortBy {string} Column id to sort with
   * @param sortDirection {string} Sort direction by asc or desc
   * @return {Promise<void>}
   */
  async sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void> {
    const sortColumnDiv = this.sortColumnDirectionDiv(sortBy, sortDirection);

    let i: number = 0;
    while (await this.elementNotVisible(page, sortColumnDiv, 2000) && i < 2) {
      await this.clickAndWaitForURL(page, this.sortColumnDiv(sortBy));
      i += 1;
    }

    await this.waitForVisibleSelector(page, sortColumnDiv, 20000);
  }

  /* Form functions */
  /**
   * Set contact details
   * @param page {Page} Browser tab
   * @param storeContactData {FakerStore} Store contact data to set on contact detail form
   * @returns {Promise<string>}
   */
  async setContactDetails(page: Page, storeContactData: FakerStore): Promise<string> {
    await this.setValue(page, this.nameInput, storeContactData.name);
    await this.setValue(page, this.emailInput, storeContactData.email);
    await this.setValue(page, this.registrationNumberTextarea, storeContactData.registrationNumber);
    await this.setValue(page, this.address1Input, storeContactData.address1);
    await this.setValue(page, this.address2Input, storeContactData.address2);
    await this.setValue(page, this.postcodeInput, storeContactData.postcode);
    await this.setValue(page, this.cityInput, storeContactData.city);
    await this.selectByVisibleText(page, this.countrySelect, storeContactData.country);
    await this.setValue(page, this.phoneInput, storeContactData.phone);
    await this.setValue(page, this.faxInput, storeContactData.fax);

    await this.clickAndWaitForURL(page, this.saveButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /* Pagination methods */
  /**
   * Get pagination label
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async getPaginationLabel(page: Page): Promise<string> {
    return this.getTextContent(page, this.paginationActiveLabel);
  }

  /**
   * Select pagination limit
   * @param page {Page} Browser tab
   * @param number {number} Pagination limit number to select
   * @returns {Promise<string>}
   */
  async selectPaginationLimit(page: Page, number: number): Promise<string> {
    const currentUrl: string = page.url();

    await Promise.all([
      page.waitForURL((url: URL): boolean => url.toString() !== currentUrl),
      page.locator(this.paginationLimitSelect).selectOption({label: number.toString()}),
    ]);

    return this.getPaginationLabel(page);
  }

  /**
   * Click on next
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async paginationNext(page: Page): Promise<string> {
    await this.clickAndWaitForURL(page, this.paginationNextLink);

    return this.getPaginationLabel(page);
  }

  /**
   * Click on previous
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async paginationPrevious(page: Page): Promise<string> {
    await this.clickAndWaitForURL(page, this.paginationPreviousLink);

    return this.getPaginationLabel(page);
  }
}

module.exports = new BOStoresPage();
