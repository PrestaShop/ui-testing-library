import {FoLoginPageInterface} from '@interfaces/FO/login';
import {LoginPage as LoginPageVersion} from '@versions/develop/pages/FO/classic/login';

/**
 * Login page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class LoginPage extends LoginPageVersion implements FoLoginPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on login page
   */
  constructor() {
    super('hummingbird');

    this.displayRegisterFormLink = 'div a[data-link-action=\'display-register-form\']';
    this.passwordReminderLink = '.login__forgot-password a';
    this.alertDangerTextBlock = '.login .help-block .alert.alert-danger';
  }
}

module.exports = new LoginPage();
