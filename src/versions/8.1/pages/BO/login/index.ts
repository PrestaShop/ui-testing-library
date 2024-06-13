// Import pages
import type {LoginPageInterface} from '@interfaces/BO/login';
import {LoginPage} from '@versions/develop/pages/BO/login';

/**
 * Login page, contains functions that can be used on the page
 * @class
 * @extends LoginPage
 */
class LoginVersion extends LoginPage implements LoginPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on order confirmation page
   */
  constructor() {
    super();

    this.alertDangerDiv = '#error';
    this.resetPasswordEmailFormField = '#email_forgot';
    this.resetPasswordButton = '#reset-password-button';
    this.resetPasswordSuccessConfirmationText = '#forgot_confirm_name';
  }
}

const loginPage = new LoginVersion();
export {loginPage, LoginVersion as LoginPage};
