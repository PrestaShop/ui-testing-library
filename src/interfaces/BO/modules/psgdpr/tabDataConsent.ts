import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {type Page} from '@playwright/test';

export interface ModulePsGdprBoTabDataConsentPageInterface extends ModuleConfigurationPageInterface {
  readonly saveFormMessage: string;

  saveForm(page: Page): Promise<string>;
  setAccountCreationMessage(page: Page, message: string): Promise<void>;
  setAccountCreationStatus(page: Page, status: boolean): Promise<void>;
  setContactFormMessage(page: Page, message: string): Promise<void>;
  setContactFormStatus(page: Page, status: boolean): Promise<void>;
  setCustomerAccountStatus(page: Page, status: boolean): Promise<void>;
  setCustomerAccountMessage(page: Page, message: string): Promise<void>;
  setMailAlertsMessage(page: Page, message: string, idLang?: number): Promise<void>;
  setMailAlertsStatus(page: Page, status: boolean): Promise<void>;
  setNewsletterMessage(page: Page, message: string): Promise<void>;
  setNewsletterStatus(page: Page, status: boolean): Promise<void>;
  setProductCommentsMessage(page: Page, message: string): Promise<void>;
  setProductCommentsStatus(page: Page, status: boolean): Promise<void>;
}
