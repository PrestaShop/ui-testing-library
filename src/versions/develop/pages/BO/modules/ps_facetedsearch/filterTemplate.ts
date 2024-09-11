import {ModulePsFacetedsearchFilterTemplatePageInterface} from '@interfaces/BO/modules/ps_facetedsearch/filterTemplate';
import ModuleConfiguration from '@pages/BO/modules/moduleConfiguration';

import type {Page} from 'playwright';

/**
 * Module configuration page for module : ps_facetedsearch, contains selectors and functions for the page
 * @class
 * @extends ModuleConfiguration
 */
class PsFacetedSearchFilterTemplate extends ModuleConfiguration implements ModulePsFacetedsearchFilterTemplatePageInterface {
  public readonly title: string;

  private readonly panel: string;

  private readonly panelTitle: string;

  private readonly templateNameInput: string;

  private readonly templateControllerCheckbox: (controller: string) => string;

  public readonly submitFilter: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on ps email subscription page
   */
  constructor() {
    super();

    this.title = 'New filters template';

    // Selectors
    this.panel = '#content .panel';
    this.panelTitle = `${this.panel} h3`;
    this.templateNameInput = `${this.panel} #layered_tpl_name`;
    this.templateControllerCheckbox = (controller: string) => `${this.panel} #fs_controller_${controller}`;
    this.submitFilter = '#submit-filter';
  }

  /* Methods */
  /**
   * Returns the panel title
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getPanelTitle(page: Page): Promise<string> {
    return this.getTextContent(page, this.panelTitle);
  }

  /**
   * Set the template name
   * @param page {Page} Browser tab
   * @param name {string} Name of the template
   * @returns {Promise<void>}
   */
  async setTemplateName(page: Page, name: string): Promise<void> {
    await page.locator(this.templateNameInput).fill(name);
  }

  /**
   * Set the template name
   * @param page {Page} Browser tab
   * @param controllers {string[]} Controllers
   * @returns {Promise<void>}
   */
  async setTemplatePages(page: Page, controllers: string[]): Promise<void> {
    for (let c = 0; c < controllers.length; c++) {
      const controller: string = controllers[c];

      await page.locator(this.templateControllerCheckbox(controller)).setChecked(true);
    }
  }

  /**
   * Set filters
   * @param page {Page} Browser tab
   * @param filterName {string} Filter Name
   * @param status {boolean} Status
   * @param filterType {string} Filter Type (checkbox, radio, dropdown)
   * @param filterLimit {string} Filter Limit (No Limit or a number)
   * @returns {Promise<void>}
   */
  async setTemplateFilterForm(
    page: Page,
    filterName: string,
    status: boolean,
    filterType: string = '',
    filterLimit: string = '',
  ): Promise<void> {
    const selectorStatus: string = this.getSelectorStatus(filterName);
    let selectorFilterType: string;

    await this.setChecked(page, `#${selectorStatus}`, status);

    if (filterType !== '') {
      switch (filterType) {
        case 'checkbox':
          selectorFilterType = 'Checkbox';
          break;
        case 'radio':
          selectorFilterType = 'Radio button';
          break;
        case 'dropdown':
          selectorFilterType = 'Drop-down list';
          break;
        default:
          throw new Error(`The filter type "${filterType}" has no defined selector.`);
      }
      await this.selectByVisibleText(page, `select[name="${selectorStatus}_filter_type"]`, selectorFilterType);
    }

    if (filterLimit !== '') {
      await this.selectByValue(page, `select[name="${selectorStatus}_filter_show_limit"]`, filterLimit);
    }
  }

  /**
   * Returns if the template filter is enabled
   * @param page {Page} Browser tab
   * @param filterName {string} Filter Name
   * @returns {Promise<boolean>}
   */
  async isTemplateFilterEnabled(page: Page, filterName: string): Promise<boolean> {
    return this.isChecked(page, `#${this.getSelectorStatus(filterName)}`);
  }

  /**
   * Returns the selector depending on the filter name
   * @param filterName {string} Filter Name
   * @returns {string}
   */
  private getSelectorStatus(filterName: string): string {
    let selectorStatus: string;

    switch (filterName) {
      case 'Attribute group: Dimension':
        selectorStatus = 'layered_selection_ag_3';
        break;
      case 'Attribute group: Paper Type':
        selectorStatus = 'layered_selection_ag_4';
        break;
      case 'Attribute group: Size':
        selectorStatus = 'layered_selection_ag_1';
        break;
      case 'Product brand filter':
        selectorStatus = 'layered_selection_manufacturer';
        break;
      case 'Product condition filter':
        selectorStatus = 'layered_selection_condition';
        break;
      case 'Product price filter':
        selectorStatus = 'layered_selection_price_slider';
        break;
      case 'Product stock filter':
        selectorStatus = 'layered_selection_stock';
        break;
      case 'Sub-categories filter':
        selectorStatus = 'layered_selection_subcategories';
        break;
      default:
        throw new Error(`The filter "${filterName}" has no defined selector.`);
    }

    return selectorStatus;
  }

  /**
   * Returns the panel title
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async saveTemplate(page: Page): Promise<string> {
    await this.clickAndWaitForURL(page, this.submitFilter);

    return this.getAlertSuccessBlockContent(page);
  }
}

module.exports = new PsFacetedSearchFilterTemplate();
