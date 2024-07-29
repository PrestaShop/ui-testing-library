import {BOPerformancePageInterface} from '@interfaces/BO/advancedParameters/performance';
import BOBasePage from '@pages/BO/BOBasePage';

import type {Page} from 'playwright';

/**
 * Performance page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class PerformancePage extends BOBasePage implements BOPerformancePageInterface {
  public readonly clearCacheSuccessMessage: string;

  public readonly successUpdateMessage: string;

  public readonly pageTitle: string;

  private readonly clearCacheButton: string;

  private readonly saveDebugModeForm: string;

  private readonly debugModeButton: (toEnable: number) => string;

  private readonly formOptionalFeatures: string;

  private readonly combinationsButton: (toEnable: number) => string;

  private readonly customerGroupsButton: (toEnable: number) => string;

  private readonly featuresButton: (toEnable: number) => string;

  private readonly saveOptionalFeaturesForm: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on Performance page
   */
  constructor() {
    super();

    this.clearCacheSuccessMessage = 'All caches cleared successfully';
    this.successUpdateMessage = 'Update successful';

    this.pageTitle = 'Performance •';

    // Selectors
    // Form "Debug mode"
    this.clearCacheButton = '#page-header-desc-configuration-clear_cache';
    this.debugModeButton = (toEnable: number) => `#debug_mode_debug_mode_${toEnable}`;
    this.saveDebugModeForm = '#main-div form[name=debug_mode] div.card-footer button';

    // Form "Optional features"
    this.formOptionalFeatures = '#optional_features';
    this.combinationsButton = (toEnable: number) => `${this.formOptionalFeatures} #optional_features_combinations_${toEnable}`;
    this.customerGroupsButton = (toEnable: number) => `${this.formOptionalFeatures} #optional_features_customer_groups_${toEnable}`;
    this.featuresButton = (toEnable: number) => `${this.formOptionalFeatures} #optional_features_features_${toEnable}`;
    this.saveOptionalFeaturesForm = `${this.formOptionalFeatures} div.card-footer button`;
  }

  /*
  Methods
   */
  /**
   * Clear cache
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async clearCache(page: Page): Promise<string> {
    await this.clickAndWaitForLoadState(page, this.clearCacheButton);

    return this.getTextContent(page, this.alertSuccessBlockParagraph);
  }

  /**
   * Set debug mode
   * @param page {Page} Browser tab
   * @param toEnable {boolean} True if we need to enable debug mode
   * @returns {Promise<string>}
   */
  async setDebugMode(page: Page, toEnable: boolean): Promise<string> {
    await this.setChecked(page, this.debugModeButton(toEnable ? 1 : 0));
    await this.clickAndWaitForURL(page, this.saveDebugModeForm);

    return this.getTextContent(page, this.alertSuccessBlockParagraph);
  }

  /**
   * Is debug mode toggle visible
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async isDebugModeToggleVisible(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.debugModeToolbar, 1000);
  }

  /**
   * Set "Optional features" > "Combinations"
   * @param page {Page} Browser tab
   * @param toEnable {boolean} True if we need to enable Combinations
   * @returns {Promise<string>}
   */
  async setCombinations(page: Page, toEnable: boolean): Promise<string> {
    await this.setChecked(page, this.combinationsButton(toEnable ? 1 : 0));
    await this.clickAndWaitForURL(page, this.saveOptionalFeaturesForm);

    return this.getTextContent(page, this.alertSuccessBlockParagraph);
  }

  /**
   * Set "Optional features" > "Customer Groups"
   * @param page {Page} Browser tab
   * @param toEnable {boolean} True if we need to enable Customer Groups
   * @returns {Promise<string>}
   */
  async setCustomerGroups(page: Page, toEnable: boolean): Promise<string> {
    await this.setChecked(page, this.customerGroupsButton(toEnable ? 1 : 0));
    await this.clickAndWaitForURL(page, this.saveOptionalFeaturesForm);

    return this.getTextContent(page, this.alertSuccessBlockParagraph);
  }

  /**
   * Set "Optional features" > "Features"
   * @param page {Page} Browser tab
   * @param toEnable {boolean} True if we need to enable features
   * @returns {Promise<string>}
   */
  async setFeatures(page: Page, toEnable: boolean): Promise<string> {
    await this.setChecked(page, this.featuresButton(toEnable ? 1 : 0));
    await this.clickAndWaitForURL(page, this.saveOptionalFeaturesForm);

    return this.getTextContent(page, this.alertSuccessBlockParagraph);
  }
}

module.exports = new PerformancePage();
