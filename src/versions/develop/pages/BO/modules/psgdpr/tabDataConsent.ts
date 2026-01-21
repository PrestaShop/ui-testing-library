import dataLanguages from '@data/demo/languages';
import {type ModulePsGdprBoTabDataConsentPageInterface} from '@interfaces/BO/modules/psgdpr/tabDataConsent';
import {ModuleConfigurationPage} from '@versions/develop/pages/BO/modules/moduleConfiguration';
import {type Page} from '@playwright/test';

/**
 * Module configuration page for module : psgdpr, contains selectors and functions for the page
 * @class
 * @extends ModuleConfiguration
 */
class ModulePsGdprBoTabDataConsentPage extends ModuleConfigurationPage implements ModulePsGdprBoTabDataConsentPageInterface {
  public readonly saveFormMessage: string;

  private readonly checkboxCreationForm: (status: boolean) => string;

  private readonly messageCreationForm: (idLang: number) => string;

  private readonly checkboxCustomerForm: (status: boolean) => string;

  private readonly messageCustomerForm: (idLang: number) => string;

  private readonly btnDropdownLangModuleForm: string;

  private readonly btnDropdownItemLangModuleForm: (idLang: number) => string;

  private readonly checkboxModuleForm: (status: boolean) => string;

  private readonly messageModuleForm: (nth: number, idLang: number) => string;

  private readonly saveButton: string;

  protected nthModuleContactForm: number;

  protected nthModuleMailAlerts: number;

  protected nthModuleNewsletterSubscription: number;

  protected nthModuleProductComments: number;

  /**
   * @constructs
   */
  constructor() {
    super();

    this.saveFormMessage = 'Saved with success!';

    this.checkboxCreationForm = (status: boolean) => `#switch_account_creation_${status ? 'on' : 'off'}`;
    this.messageCreationForm = (idLang: number) => `#psgdpr_creation_form_${idLang}_ifr`;
    this.checkboxCustomerForm = (status: boolean) => `#switch_account_customer_${status ? 'on' : 'off'}`;
    this.messageCustomerForm = (idLang: number) => `#psgdpr_customer_form_${idLang}_ifr`;
    this.btnDropdownLangModuleForm = 'div[id^="registered_module_message_"] div.translatable-field:not([style])'
      + ' button.dropdown-toggle';
    this.btnDropdownItemLangModuleForm = (idLang: number) => `div.open ul.dropdown-menu a[data-id="${idLang}"]`;
    this.checkboxModuleForm = (status: boolean) => `input[id^="switch_registered_module_"]${status ? '.yes' : '.no'}`;
    this.messageModuleForm = (nth: number, idLang: number) => `div:nth-child(${nth + 1} of [id^="registered_module_message"]) `
      + `div.translatable-field:not([style="display:none"]) iframe[id$="_${idLang}_ifr"]`;
    this.saveButton = '#submitDataConsent';

    this.nthModuleContactForm = 2;
    this.nthModuleMailAlerts = 0;
    this.nthModuleNewsletterSubscription = 3;
    this.nthModuleProductComments = 1;
  }

  /**
   * Enable/Disable the "Account Creation" RGPD Label
   * @param page {Page} Browser tab
   * @param status {boolean} Enable/Disable
   * @returns {Promise<void>}
   */
  async setAccountCreationStatus(page: Page, status: boolean): Promise<void> {
    await page.locator(this.checkboxCreationForm(status)).setChecked(true, {
      force: true,
    });
  }

  /**
   * Define the "Account Creation" RGPD Label
   * @param page {Page} Browser tab
   * @param message {string} Message
   * @returns {Promise<void>}
   */
  async setAccountCreationMessage(page: Page, message: string): Promise<void> {
    await this.setValueOnTinymceInput(page, this.messageCreationForm(dataLanguages.english.id), message, false);
  }

  /**
   * Enable/Disable the "Customer Account" RGPD Label
   * @param page {Page} Browser tab
   * @param status {boolean} Enable/Disable
   * @returns {Promise<void>}
   */
  async setCustomerAccountStatus(page: Page, status: boolean): Promise<void> {
    await page.locator(this.checkboxCustomerForm(status)).setChecked(true, {
      force: true,
    });
  }

  /**
   * Define the "Customer Account" RGPD Label
   * @param page {Page} Browser tab
   * @param message {string} Message
   * @returns {Promise<void>}
   */
  async setCustomerAccountMessage(page: Page, message: string): Promise<void> {
    await this.setValueOnTinymceInput(page, this.messageCustomerForm(dataLanguages.english.id), message, false);
  }

  /**
   * Enable/Disable the "Newsletter" RGPD Label
   * @param page {Page} Browser tab
   * @param status {boolean} Enable/Disable
   * @returns {Promise<void>}
   */
  async setNewsletterStatus(page: Page, status: boolean): Promise<void> {
    await page.locator(this.checkboxModuleForm(status)).nth(this.nthModuleNewsletterSubscription).setChecked(true, {
      force: true,
    });
  }

  /**
   * Define the "Newsletter" RGPD Label
   * @param page {Page} Browser tab
   * @param message {string} Message
   * @returns {Promise<void>}
   */
  async setNewsletterMessage(page: Page, message: string): Promise<void> {
    await this.setTinyMCEInputValue(
      page.locator(this.messageModuleForm(this.nthModuleNewsletterSubscription, dataLanguages.english.id)).contentFrame(),
      message,
    );
  }

  /**
   * Enable/Disable the "Contact Form" RGPD Label
   * @param page {Page} Browser tab
   * @param status {boolean} Enable/Disable
   * @returns {Promise<void>}
   */
  async setContactFormStatus(page: Page, status: boolean): Promise<void> {
    await page.locator(this.checkboxModuleForm(status)).nth(this.nthModuleContactForm).setChecked(true, {
      force: true,
    });
  }

  /**
   * Define the "Contact" RGPD Label
   * @param page {Page} Browser tab
   * @param message {string} Message
   * @returns {Promise<void>}
   */
  async setContactFormMessage(page: Page, message: string): Promise<void> {
    await this.setTinyMCEInputValue(
      page.locator(this.messageModuleForm(this.nthModuleContactForm, dataLanguages.english.id)).contentFrame(),
      message,
    );
  }

  /**
   * Enable/Disable the "Product Comments" RGPD Label
   * @param page {Page} Browser tab
   * @param status {boolean} Enable/Disable
   * @returns {Promise<void>}
   */
  async setProductCommentsStatus(page: Page, status: boolean): Promise<void> {
    await page.locator(this.checkboxModuleForm(status)).nth(this.nthModuleProductComments).setChecked(true, {
      force: true,
    });
  }

  /**
   * Define the "Product Comments" RGPD Label
   * @param page {Page} Browser tab
   * @param message {string} Message
   * @returns {Promise<void>}
   */
  async setProductCommentsMessage(page: Page, message: string): Promise<void> {
    await this.setTinyMCEInputValue(
      page.locator(this.messageModuleForm(this.nthModuleProductComments, dataLanguages.english.id)).contentFrame(),
      message,
    );
  }

  /**
   * Enable/Disable the "Mail Alerts" RGPD Label
   * @param page {Page} Browser tab
   * @param status {boolean} Enable/Disable
   * @returns {Promise<void>}
   */
  async setMailAlertsStatus(page: Page, status: boolean): Promise<void> {
    await page.locator(this.checkboxModuleForm(status)).nth(this.nthModuleMailAlerts).setChecked(true, {
      force: true,
    });
  }

  /**
   * Define the "Mail Alerts" RGPD Label
   * @param page {Page} Browser tab
   * @param message {string} Message
   * @param idLang {number} Lang ID
   * @returns {Promise<void>}
   */
  async setMailAlertsMessage(page: Page, message: string, idLang: number = dataLanguages.english.id): Promise<void> {
    await page.locator(this.btnDropdownLangModuleForm).nth(this.nthModuleMailAlerts).click();
    await page.locator(this.btnDropdownItemLangModuleForm(idLang)).click();
    await this.waitForVisibleSelector(page, this.messageModuleForm(this.nthModuleMailAlerts, idLang), 10000);
    await this.setTinyMCEInputValue(
      page.locator(this.messageModuleForm(this.nthModuleMailAlerts, idLang)).contentFrame(),
      message,
    );
  }

  /**
   * Save the form
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async saveForm(page: Page): Promise<string> {
    await page.locator(this.saveButton).click();

    return this.getAlertSuccessBlockContent(page);
  }
}

const modulePsGdprBoTabDataConsentPage = new ModulePsGdprBoTabDataConsentPage();
export {modulePsGdprBoTabDataConsentPage, ModulePsGdprBoTabDataConsentPage};
