import {ModulePsFacetedsearchMainPageInterface} from '@interfaces/BO/modules/ps_facetedsearch';
import ModuleConfiguration from '@pages/BO/modules/moduleConfiguration';
import modPsFacetedsearchBoFilterTemplate from '@pages/BO/modules/ps_facetedsearch/filterTemplate';

import type {Page} from 'playwright';

/**
 * Module configuration page for module : ps_facetedsearch, contains selectors and functions for the page
 * @class
 * @extends ModuleConfiguration
 */
class PsFacetedSearch extends ModuleConfiguration implements ModulePsFacetedsearchMainPageInterface {
  public readonly pageSubTitle: string;

  public readonly msgSuccessfulCreation: (name: string) => string;

  public readonly msgSuccessfulDelete: string;

  public readonly settingsSavedMessage: string;

  public readonly settingsErrorMessage: string;

  private readonly gridPanel: string;

  private readonly gridTable: string;

  private readonly gridTableBody: string;

  private readonly gridTableBodyRows: string;

  private readonly gridTableBodyRow: (row: number) => string;

  private readonly gridTableBodyColumn: (row: number) => string;

  private readonly gridTableColumnActions: (row: number) => string;

  private readonly gridTableColumnActionsEditLink: (row: number) => string;

  private readonly gridTableColumnActionsDropdownBtn: (row: number) => string;

  private readonly gridTableColumnActionsDropdown: (row: number) => string;

  private readonly gridTableColumnActionsDeleteLink: (row: number) => string;

  private readonly gridPanelFooter: string;

  private readonly addTemplateLink: string;

  private readonly categoryFilterDepthInput: string;

  private readonly btnConfigurationSave: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on ps email subscription page
   */
  constructor() {
    super();

    // Override
    this.alertTextBlock = 'div.alert';

    this.pageSubTitle = 'Faceted search';
    this.msgSuccessfulCreation = (name: string) => `Your filter "${name}" was added successfully.`;
    this.msgSuccessfulDelete = 'Filter template deleted, categories updated (reverted to default Filter template).';
    this.settingsSavedMessage = 'Settings saved successfully';
    this.settingsErrorMessage = '';

    this.gridPanel = 'div.panel';
    this.gridTable = `${this.gridPanel} table.table`;
    this.gridTableBody = `${this.gridTable} tbody`;
    this.gridTableBodyRows = `${this.gridTableBody} tr`;
    this.gridTableBodyRow = (row: number) => `${this.gridTableBodyRows}:nth-child(${row})`;
    this.gridTableBodyColumn = (row: number) => `${this.gridTableBodyRow(row)} td`;
    this.gridTableColumnActions = (row: number) => `${this.gridTableBodyColumn(row)} .btn-group-action`;
    this.gridTableColumnActionsEditLink = (row: number) => `${this.gridTableColumnActions(row)} a.btn`;
    this.gridTableColumnActionsDropdownBtn = (row: number) => `${this.gridTableColumnActions(row)} button.dropdown-toggle`;
    this.gridTableColumnActionsDropdown = (row: number) => `${this.gridTableColumnActions(row)} ul.dropdown-menu`;
    this.gridTableColumnActionsDeleteLink = (row: number) => `${this.gridTableColumnActionsDropdown(row)} `
      + 'a[href*="&deleteFilterTemplate=1"]';
    this.gridPanelFooter = `${this.gridPanel} div.panel-footer`;
    this.addTemplateLink = `${this.gridPanelFooter} a[href*="&add_new_filters_template=1"]`;

    this.categoryFilterDepthInput = 'input[name="ps_layered_filter_category_depth"]';
    this.btnConfigurationSave = 'button[name="submitLayeredSettings"]';
  }

  /* Methods */
  /**
   * Edit a filter template
   * @param page {Page} Browser tab
   * @param row {number} Row number
   * @returns {Promise<number>}
   */
  async editFilterTemplate(page: Page, row: number): Promise<void> {
    await this.clickAndWaitForLoadState(page, this.gridTableColumnActionsEditLink(row));
    await this.elementVisible(page, modPsFacetedsearchBoFilterTemplate.submitFilter);
  }

  /**
   * Delete a filter template
   * @param page {Page} Browser tab
   * @param row {number} Row number
   * @returns {Promise<string>}
   */
  async deleteFilterTemplate(page: Page, row: number): Promise<string> {
    // Add listener to dialog to accept erase
    await this.dialogListener(page);

    await page.locator(this.gridTableColumnActionsDropdownBtn(row)).click();
    await this.elementVisible(page, this.gridTableColumnActionsDropdown(row));
    await page.locator(this.gridTableColumnActionsDeleteLink(row)).click();

    return this.getAlertSuccessBlockContent(page);
  }

  /**
   * Go to the "Add new template" page
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async goToAddNewTemplate(page: Page): Promise<void> {
    await page.locator(this.addTemplateLink).click();
  }

  /**
   * Returns the value of the field "Category filter depth"
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getCategoryFilterDepthValue(page: Page): Promise<number> {
    return parseInt(await this.getInputValue(page, this.categoryFilterDepthInput), 10);
  }

  /**
   * Define the value of the field "Category filter depth"
   * @param page {Page} Browser tab
   * @param value {string} Value of the field
   * @returns {Promise<string>}
   */
  async setCategoryFilterDepthValue(page: Page, value: string): Promise<string> {
    await this.setValue(page, this.categoryFilterDepthInput, value);
    await page.locator(this.btnConfigurationSave).click();

    return this.getAlertBlockContent(page);
  }
}

module.exports = new PsFacetedSearch();
