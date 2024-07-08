import {type BOLocalizationBasePageInterface} from '@interfaces/BO/international/localization/base';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

export default class BOLocalizationBasePage extends BOBasePage implements BOLocalizationBasePageInterface {
  private readonly localizationNavItemLink: string;

  private readonly languagesNavItemLink: string;

  private readonly currenciesNavItemLink: string;

  private readonly geolocationNavItemLink: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on localization page
   */
  constructor() {
    super();

    this.localizationNavItemLink = '#subtab-AdminLocalization';
    this.languagesNavItemLink = '#subtab-AdminLanguages';
    this.currenciesNavItemLink = '#subtab-AdminCurrencies';
    this.geolocationNavItemLink = '#subtab-AdminGeolocation';
  }

  /* Header Methods */
  /**
   * Go to Localization tab
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async goToSubTabLocalizations(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.localizationNavItemLink);
  }

  /**
   * Go to Languages tab
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async goToSubTabLanguages(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.languagesNavItemLink);
  }

  /**
   * Go to Currencies tab
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async goToSubTabCurrencies(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.currenciesNavItemLink);
  }

  /**
   * Go to Geolocation tab
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async goToSubTabGeolocation(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.geolocationNavItemLink);
  }
}

module.exports = BOLocalizationBasePage;
