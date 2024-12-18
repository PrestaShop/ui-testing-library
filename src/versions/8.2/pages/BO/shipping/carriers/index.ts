import {BOCarriersPageInterface} from '@interfaces/BO/shipping/carriers';
import {BOCarriersPage as BOCarriersPageVersion} from '@versions/develop/pages/BO/shipping/carriers';
import type {Page} from 'playwright';

class BOCarriersPage extends BOCarriersPageVersion implements BOCarriersPageInterface {
  constructor() {
    super();

    // Header links
    this.addNewCarrierLink = 'a[data-role=page-header-desc-carrier-link]';

    // Form selectors
    this.gridForm = '#form-carrier';
    this.gridTableHeaderTitle = `${this.gridForm} .panel-heading`;
    this.gridTableNumberOfTitlesSpan = `${this.gridTableHeaderTitle} span.badge`;

    // Table selectors
    this.gridTable = '#table-carrier';

    // Filter selectors
    this.filterRow = `${this.gridTable} tr.filter`;
    this.filterColumn = (filterBy: string) => `${this.filterRow} [name='carrierFilter_${filterBy}']`;
    this.filterSearchButton = '#submitFilterButtoncarrier';
    this.filterResetButton = 'button[name=\'submitResetcarrier\']';

    // Table body selectors
    this.tableBody = `${this.gridTable} tbody`;
    this.tableBodyRows = `${this.tableBody} tr`;
    this.tableBodyRow = (row: number) => `${this.tableBodyRows}:nth-child(${row})`;
    this.tableBodyColumn = (row: number) => `${this.tableBodyRow(row)} td`;
    //this.tableBodyColumnNth = (column: number) => `${this.tableBodyRows} td:nth-child(${column})`;

    // Columns selectors
    this.tableColumnId = (row: number) => `${this.tableBodyColumn(row)}:nth-child(2)`;
    this.tableColumnName = (row: number) => `${this.tableBodyColumn(row)}:nth-child(3)`;
    this.tableColumnDelay = (row: number) => `${this.tableBodyColumn(row)}:nth-child(5)`;
    //this.tableColumnActive = (row: number) => `${this.tableBodyColumn(row)}:nth-child(6) a`;
    //this.enableColumnValidIcon = (row: number) => `${this.tableColumnActive(row)} i.icon-check`;
    //this.tableColumnIsFree = (row: number) => `${this.tableBodyColumn(row)}:nth-child(7) a`;
    //this.tableColumnIsFreeIcon = (row: number) => `${this.tableColumnIsFree(row)} i.icon-check`;
    //this.tableColumnPosition = (row: number) => `${this.tableBodyColumn(row)}:nth-child(8)`;

    // Row actions selectors
    this.tableColumnActions = (row: number) => `${this.tableBodyColumn(row)} .btn-group-action`;
    this.tableColumnActionsEditLink = (row: number) => `${this.tableColumnActions(row)} a.edit`;
    this.tableColumnActionsToggleButton = (row: number) => `${this.tableColumnActions(row)} button.dropdown-toggle`;
    this.tableColumnActionsDropdownMenu = (row: number) => `${this.tableColumnActions(row)} .dropdown-menu`;
    this.tableColumnActionsDeleteLink = (row: number) => `${this.tableColumnActionsDropdownMenu(row)} a.delete`;

    // Confirmation modal
    this.deleteModalButtonYes = '#popup_ok';
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
   * Delete carrier from row
   * @param page {Page} Browser tab
   * @param row {number} Row index in the table
   * @return {Promise<string>}
   */
  async deleteCarrier(page: Page, row: number): Promise<string> {
    await Promise.all([
      page.locator(this.tableColumnActionsToggleButton(row)).click(),
      this.waitForVisibleSelector(page, this.tableColumnActionsDeleteLink(row)),
    ]);

    await page.locator(this.tableColumnActionsDeleteLink(row)).click();

    // Confirm delete action
    await this.clickAndWaitForURL(page, this.deleteModalButtonYes);

    // Get successful message
    return this.getAlertSuccessBlockContent(page);
  }
}

module.exports = new BOCarriersPage();
