import {FOBasePagePageInterface} from '@interfaces/FO';
import {type Page} from '@playwright/test';

export interface FOPasswordReminderPageInterface extends FOBasePagePageInterface {
  readonly errorFillConfirmationMessage: string;
  readonly errorRegenerationMessage: string;
  readonly pageTitle: string;

  checkResetLinkSuccess(page: Page): Promise<string>;
  getEmailAddressToReset(page: Page): Promise<string>;
  getErrorMessage(page: Page): Promise<string>;
  openForgotPasswordPage(page: Page, emailBody: string): Promise<void>;
  sendResetPasswordLink(page: Page, email: string): Promise<void>;
  setNewPassword(page: Page, password: string, confirmationPassword?: string|null): Promise<void>;
}
