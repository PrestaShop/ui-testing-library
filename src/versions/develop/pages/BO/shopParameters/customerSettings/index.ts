import {type BOCustomerSettingsPageInterface} from '@interfaces/BO/shopParameters/customerSettings';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Customer settings page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOCustomerSettingsPage extends BOBasePage implements BOCustomerSettingsPageInterface {
  public readonly OPTION_CART_LOGIN: string = 'Redisplay cart at login';

  public readonly OPTION_EMAIL_REGISTRATION: string = 'Email after registration';

  public readonly OPTION_B2B: string = 'B2B mode';

  public readonly OPTION_BIRTH_DATE: string = 'Ask for birth date';

  public readonly OPTION_PARTNER_OFFER: string = 'Partner offers';

  public readonly pageTitle: string;

  private readonly titlesSubtab: string;

  private readonly groupsSubtab: string;

  private readonly redisplayCartAtLoginToggleInput: (toggle: number) => string;

  private readonly enablePartnerOfferToggleInput: (toggle: number) => string;

  private readonly sendEmailAfterRegistrationToggleInput: (toggle: number) => string;

  private readonly askForBirthDateToggleInput: (toggle: number) => string;

  private readonly enableB2BModeToggle: (toggle: number) => string;

  private readonly passwordResetDelayInput: string;

  private readonly saveGeneralFormButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on customer settings page
   */
  constructor() {
    super();

    this.pageTitle = `Customer settings • ${global.INSTALL.SHOP_NAME}`;
    this.successfulUpdateMessage = 'Update successful';

    // Header selectors
    this.titlesSubtab = '#subtab-AdminGenders';
    this.groupsSubtab = '#subtab-AdminGroups';

    // Form selectors
    this.redisplayCartAtLoginToggleInput = (toggle: number) => `#form_redisplay_cart_at_login_${toggle}`;
    this.enablePartnerOfferToggleInput = (toggle: number) => `#form_enable_offers_${toggle}`;
    this.sendEmailAfterRegistrationToggleInput = (toggle: number) => `#form_send_email_after_registration_${toggle}`;
    this.askForBirthDateToggleInput = (toggle: number) => `#form_ask_for_birthday_${toggle}`;
    this.enableB2BModeToggle = (toggle: number) => `#form_enable_b2b_mode_${toggle}`;
    this.passwordResetDelayInput = '#form_password_reset_delay';
    this.saveGeneralFormButton = '#form-general-save-button';
  }

  /*
    Methods
  */

  /**
   * Click on tab titles
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async goToTitlesPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.titlesSubtab);
  }

  /**
   * Click on tab groups
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async goToGroupsPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.groupsSubtab);
  }

  /**
   * Set option status
   * @param page {Page} Browser tab
   * @param option {string} Option to enable or disable
   * @param toEnable {boolean} True if we need to enable status
   * @return {Promise<string>}
   */
  async setOptionStatus(page: Page, option: string, toEnable: boolean = true): Promise<string> {
    let selector;

    switch (option) {
      case this.OPTION_B2B:
        selector = this.enableB2BModeToggle;
        break;
      case this.OPTION_PARTNER_OFFER:
        selector = this.enablePartnerOfferToggleInput;
        break;
      case this.OPTION_BIRTH_DATE:
        selector = this.askForBirthDateToggleInput;
        break;
      case this.OPTION_EMAIL_REGISTRATION:
        selector = this.sendEmailAfterRegistrationToggleInput;
        break;
      case this.OPTION_CART_LOGIN:
        selector = this.redisplayCartAtLoginToggleInput;
        break;
      default:
        throw new Error(`${option} was not found`);
    }
    await this.setChecked(page, selector(toEnable ? 1 : 0));
    await page.locator(this.saveGeneralFormButton).click();
    await this.elementNotVisible(page, selector(!toEnable ? 1 : 0));

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Returns th value of the field "Password reset delay" in minutes
   * @param page {Page} Browser tab
   * @return {Promise<number>}
   */
  async getPasswordResetDelayValue(page: Page): Promise<number> {
    return parseInt(await this.getInputValue(page, this.passwordResetDelayInput), 10);
  }
}

module.exports = new BOCustomerSettingsPage();
