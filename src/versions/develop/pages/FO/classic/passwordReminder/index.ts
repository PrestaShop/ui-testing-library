import {type FOPasswordReminderPageInterface} from '@interfaces/FO/passwordReminder';
import FOBasePage from '@pages/FO/FOBasePage';
import {type Page} from '@playwright/test';

/**
 * Password reminder page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class PasswordReminderPage extends FOBasePage implements FOPasswordReminderPageInterface {
  public readonly pageTitle: string;

  public readonly errorRegenerationMessage: string;

  public readonly errorFillConfirmationMessage: string;

  private readonly emailFormField: string;

  private readonly backToLoginLink: string;

  private readonly sendResetLinkButton: string;

  protected emailAddressText: string;

  private readonly newPasswordInput: string;

  private readonly confirmationPasswordInput: string;

  private readonly submitButton: string;

  protected sendResetLinkSuccessAlert: string;

  protected errorMessageAlert: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on password reminder page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.pageTitle = 'Forgot your password';
    this.errorRegenerationMessage = 'You can regenerate your password only every 360 minute(s)';
    this.errorFillConfirmationMessage = 'The confirmation is empty: please fill in the password confirmation as well';

    // Selectors
    this.emailFormField = '#email';
    this.backToLoginLink = '#back-to-login';
    this.sendResetLinkButton = '#send-reset-link';
    this.emailAddressText = 'section.renew-password .email';
    this.newPasswordInput = 'section.renew-password input[name=passwd]';
    this.confirmationPasswordInput = 'section.renew-password input[name=confirmation]';
    this.submitButton = 'section.renew-password button[name=submit]';

    // Success message
    this.sendResetLinkSuccessAlert = '.ps-alert-success';
    // Error message
    this.errorMessageAlert = '.ps-alert-error';
  }

  /*
  Methods
   */

  /**
   * Fill the reset password email form field and click "send reset link" button
   * @param page {Page} Browser tab
   * @param email {string} Account's email to fill on input
   * @returns {Promise<void>}
   */
  async sendResetPasswordLink(page: Page, email: string): Promise<void> {
    await this.setValue(page, this.emailFormField, email);
    await this.clickAndWaitForLoadState(page, this.sendResetLinkButton);
    await this.elementNotVisible(page, this.sendResetLinkButton, 2000);
  }

  /**
   * Check that the success alert message is visible
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async checkResetLinkSuccess(page: Page): Promise<string> {
    return this.getTextContent(page, this.sendResetLinkSuccessAlert);
  }

  /**
   * Open forgot password link
   * @param page {Page} Browser tab
   * @param emailBody {string} Text body in the mail
   * @returns {Promise<void>}
   */
  async openForgotPasswordPage(page: Page, emailBody: string): Promise<void> {
    // To get reset email password from received email
    const resetPasswordURL = emailBody.split(/(.*)(http.*password-recovery\\?.*)/)[2];
    await page.goto(resetPasswordURL);
  }

  /**
   * Get email address to reset
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getEmailAddressToReset(page: Page): Promise<string> {
    return this.getTextContent(page, this.emailAddressText);
  }

  /**
   * Set new password
   * @param page {Page} Browser tab
   * @param password {string} New password to set
   * @param confirmationPassword {string|null} Confirmation password to set (if null, use password parameter)
   * @returns {Promise<void>}
   */
  async setNewPassword(page: Page, password: string, confirmationPassword: string|null = null): Promise<void> {
    await this.setValue(page, this.newPasswordInput, password);
    await this.setValue(page, this.confirmationPasswordInput, confirmationPassword === null ? password : confirmationPassword);
    await page.locator(this.submitButton).click();
  }

  /**
   * Get error message
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getErrorMessage(page: Page): Promise<string> {
    return this.getTextContent(page, this.errorMessageAlert);
  }
}

const passwordReminderPage = new PasswordReminderPage();
export {passwordReminderPage, PasswordReminderPage};
