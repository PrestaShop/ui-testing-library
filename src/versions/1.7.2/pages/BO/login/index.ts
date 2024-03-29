// Import pages
import type {LoginPageInterface} from '@interfaces/BO/login';
import {Page} from '@playwright/test';
import {LoginPage} from '@versions/1.7.8/pages/BO/login';

/**
 * Order confirmation page, contains functions that can be used on the page
 * @class
 * @extends OrderConfirmationPage
 */
class LoginPageVersion extends LoginPage implements LoginPageInterface {
  private readonly errorModalButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on order confirmation page
   */
  constructor() {
    super();

    this.submitLoginButton = 'form#login_form button[name="submitLogin"]';

    //
    this.errorModalButton = '#error-modal .modal-dialog .alert button[data-dismiss="modal"]'
  }

  /**
   * Fill login form and success login
   * @param page {Page} Browser tab
   * @param email {string} String of employee email
   * @param password {string} String of employee password
   * @returns {Promise<void>}
   */
  async successLogin(page: Page, email: string, password: string): Promise<void> {
    await super.successLogin(page, email, password);

    await page.locator(this.errorModalButton).click();
  }
}

module.exports = new LoginPageVersion();
