import dataLanguages from '@data/demo/languages';
import {type ModulePsGdprBoTabDataConsentPageInterface} from '@interfaces/BO/modules/psgdpr/tabDataConsent';
import {ModuleConfigurationPage} from '@versions/develop/pages/BO/modules/moduleConfiguration';
import {type Page} from '@playwright/test';
import {createConnection, type RowDataPacket} from 'mysql2/promise';

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

  private readonly btnDropdownLangModuleForm: (idModule: number) => string;

  private readonly btnDropdownItemLangModuleForm: (idLang: number) => string;

  private readonly checkboxModuleForm: (idModule: number, status: boolean) => string;

  private readonly messageModuleForm: (idModule: number, idLang: number) => string;

  private readonly saveButton: string;

  private idModuleContactForm: number|null;

  private idModuleMailAlerts: number|null;

  private idModuleNewsletterSubscription: number|null;

  private idModuleProductComments: number|null;

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
    this.btnDropdownLangModuleForm = (idModule: number) => `div#registered_module_message_${idModule} `
      + 'div.translatable-field:not([style]) button.dropdown-toggle';
    this.btnDropdownItemLangModuleForm = (idLang: number) => `div.open ul.dropdown-menu a[data-id="${idLang}"]`;
    this.checkboxModuleForm = (
      idModule: number,
      status: boolean,
    ) => `input#switch_registered_module_${idModule}_${status ? 'on' : 'off'}`;
    this.messageModuleForm = (idModule: number, idLang: number) => `div#registered_module_message_${idModule} `
      + `div.translatable-field:not([style="display:none"]) iframe[id$="_${idLang}_ifr"]`;
    this.saveButton = '#submitDataConsent';

    this.idModuleContactForm = null;
    this.idModuleMailAlerts = null;
    this.idModuleNewsletterSubscription = null;
    this.idModuleProductComments = null;
  }

  private async fetchModulesSelectors() : Promise<void> {
    if (this.idModuleContactForm) {
      return;
    }

    interface IModule extends RowDataPacket {
      id_module: number
    }

    const dbConnection = await createConnection({
      user: global.INSTALL.DB_USER,
      password: global.INSTALL.DB_PASSWD,
      host: 'localhost',
      port: 3306,
      database: global.INSTALL.DB_NAME,
      connectionLimit: 5,
      //debug: true,
    });

    const [rowsContactForm] = await dbConnection.query<IModule[]>({
      sql: `SELECT id_module FROM ${global.INSTALL.DB_PREFIX}module WHERE name = ?`,
      values: [
        'contactform',
      ],
    });
    this.idModuleContactForm = rowsContactForm[0].id_module;

    const [rowsProductComments] = await dbConnection.query<IModule[]>({
      sql: `SELECT id_module FROM ${global.INSTALL.DB_PREFIX}module WHERE name = ?`,
      values: [
        'productcomments',
      ],
    });
    this.idModuleProductComments = rowsProductComments[0].id_module;

    const [rowsPSEmailAlerts] = await dbConnection.query<IModule[]>({
      sql: `SELECT id_module FROM ${global.INSTALL.DB_PREFIX}module WHERE name = ?`,
      values: [
        'ps_emailalerts',
      ],
    });
    this.idModuleMailAlerts = rowsPSEmailAlerts[0].id_module;

    const [rowsPSEMailSubscription] = await dbConnection.query<IModule[]>({
      sql: `SELECT id_module FROM ${global.INSTALL.DB_PREFIX}module WHERE name = ?`,
      values: [
        'ps_emailsubscription',
      ],
    });
    this.idModuleNewsletterSubscription = rowsPSEMailSubscription[0].id_module;

    await dbConnection.end();
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
    await this.fetchModulesSelectors();
    await page.locator(this.checkboxModuleForm(this.idModuleNewsletterSubscription!, status)).setChecked(true, {
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
    await this.fetchModulesSelectors();
    await this.setTinyMCEInputValue(
      page.locator(this.messageModuleForm(this.idModuleNewsletterSubscription!, dataLanguages.english.id)).contentFrame(),
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
    await this.fetchModulesSelectors();
    await page.locator(this.checkboxModuleForm(this.idModuleContactForm!, status)).setChecked(true, {
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
    await this.fetchModulesSelectors();
    await this.setTinyMCEInputValue(
      page.locator(this.messageModuleForm(this.idModuleContactForm!, dataLanguages.english.id)).contentFrame(),
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
    await this.fetchModulesSelectors();
    await page.locator(this.checkboxModuleForm(this.idModuleProductComments!, status)).setChecked(true, {
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
    await this.fetchModulesSelectors();
    await this.setTinyMCEInputValue(
      page.locator(this.messageModuleForm(this.idModuleProductComments!, dataLanguages.english.id)).contentFrame(),
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
    await this.fetchModulesSelectors();
    await page.locator(this.checkboxModuleForm(this.idModuleMailAlerts!, status)).setChecked(true, {
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
    await this.fetchModulesSelectors();
    await page.locator(this.btnDropdownLangModuleForm(this.idModuleMailAlerts!)).click();
    await page.locator(this.btnDropdownItemLangModuleForm(idLang)).click();
    await this.waitForVisibleSelector(page, this.messageModuleForm(this.idModuleMailAlerts!, idLang), 10000);
    await this.setTinyMCEInputValue(
      page.locator(this.messageModuleForm(this.idModuleMailAlerts!, idLang)).contentFrame(),
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
