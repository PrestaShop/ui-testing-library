import {type BOInformationPageInterface} from '@interfaces/BO/advancedParameters/information';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Information page
 * @class
 * @extends BOBasePage
 */
class BOInformationPage extends BOBasePage implements BOInformationPageInterface {
  public readonly pageTitle: string;

  private readonly messageNoOverridesFound: string;

  private readonly messageNoChangedFilesFound: string;

  private readonly cardConfigurationInformation: string;

  private readonly cardServerInformation: string;

  private readonly cardDatabaseInformation: string;

  private readonly cardStoreInformation: string;

  private readonly cardMailConfiguration: string;

  private readonly cardYourInformation: string;

  private readonly cardCheckYourConfiguration: string;

  private readonly cardListOverrides: string;

  private readonly alertListOverrides: string;

  private readonly cardListChangedFiles: string;

  private readonly alertListChangedFiles: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on Information page
   */
  constructor() {
    super();

    this.pageTitle = `Information • ${global.INSTALL.SHOP_NAME}`;

    // Messages
    this.messageNoOverridesFound = 'No overrides have been found.';
    this.messageNoChangedFilesFound = 'No change has been detected in your files.';

    // Selectors
    this.cardConfigurationInformation = 'div[data-block="configuration_information"]';
    this.cardServerInformation = 'div[data-block="server_information"]';
    this.cardDatabaseInformation = 'div[data-block="database_information"]';
    this.cardStoreInformation = 'div[data-block="store_information"]';
    this.cardMailConfiguration = 'div[data-block="mail_configuration"]';
    this.cardYourInformation = 'div[data-block="mail_configuration"]';
    this.cardCheckYourConfiguration = 'div#checkConfiguration';
    this.cardListOverrides = 'div[data-block="list_overrides"]';
    this.alertListOverrides = `${this.cardListOverrides} .card-body div.alert .alert-text`;
    this.cardListChangedFiles = 'div[data-block="list_changed_files"]';
    this.alertListChangedFiles = `${this.cardListChangedFiles} .card-body div.alert .alert-text`;
  }

  /**
   * Returns if the block "Configuration information" is visibe
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async isBlockConfigurationInformationVisible(page: Page): Promise<boolean> {
    return !(await this.elementNotVisible(page, this.cardConfigurationInformation, 2000));
  }

  /**
   * Returns if the block "Server information" is visibe
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async isBlockServerInformationVisible(page: Page): Promise<boolean> {
    return !(await this.elementNotVisible(page, this.cardServerInformation, 2000));
  }

  /**
   * Returns if the block "Database information" is visibe
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async isBlockDatabaseInformationVisible(page: Page): Promise<boolean> {
    return !(await this.elementNotVisible(page, this.cardDatabaseInformation, 2000));
  }

  /**
   * Returns if the block "Store information" is visibe
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async isBlockStoreInformationVisible(page: Page): Promise<boolean> {
    return !(await this.elementNotVisible(page, this.cardStoreInformation, 2000));
  }

  /**
   * Returns if the block "Mail configuration" is visibe
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async isBlockMailConfigurationVisible(page: Page): Promise<boolean> {
    return !(await this.elementNotVisible(page, this.cardMailConfiguration, 2000));
  }

  /**
   * Returns if the block "Your information" is visibe
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async isBlockYourInformationVisible(page: Page): Promise<boolean> {
    return !(await this.elementNotVisible(page, this.cardYourInformation, 2000));
  }

  /**
   * Returns if the block "Check your configuration" is visibe
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async isBlockCheckYourConfigurationVisible(page: Page): Promise<boolean> {
    return !(await this.elementNotVisible(page, this.cardCheckYourConfiguration, 2000));
  }

  /**
   * Returns if the block "List of overrides" is visibe
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async isBlockListOverridesVisible(page: Page): Promise<boolean> {
    return !(await this.elementNotVisible(page, this.cardListOverrides, 2000));
  }

  /**
   * Returns if the shop has overrides
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async hasOverrides(page: Page): Promise<boolean> {
    return (await this.getTextContent(page, this.alertListOverrides)) !== this.messageNoOverridesFound;
  }

  /**
   * Returns if the block "List of changed files" is visibe
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async isBlockListChangedFilesVisible(page: Page): Promise<boolean> {
    return !(await this.elementNotVisible(page, this.cardListChangedFiles, 2000));
  }

  /**
   * Returns if the shop has changed files
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async hasChangedFiles(page: Page): Promise<boolean> {
    // Wait for the check is done
    await this.elementVisible(page, this.alertListChangedFiles, 30000);

    return (await this.getTextContent(page, this.alertListChangedFiles)) !== this.messageNoChangedFilesFound;
  }
}

module.exports = new BOInformationPage();
