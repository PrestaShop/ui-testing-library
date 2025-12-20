import {FoLoginPageInterface} from '@interfaces/FO/login';
import {LoginPage as FoLoginPageVersion} from '@versions/develop/pages/FO/classic/login';

/**
 * Login page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FoLoginPage extends FoLoginPageVersion implements FoLoginPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on login page
   */
  constructor() {
    super('hummingbird');

    this.displayRegisterFormLink = 'div a[data-link-action=\'display-register-form\']';
    this.passwordReminderLink = '#login-form div.buttons-wrapper a';
    this.showPasswordButton = '#login-form button[data-ps-action=toggle-password]';
    this.alertDangerTextBlock = '.login .help-block .alert.alert-danger';
  }
}

const foLoginPage = new FoLoginPage();
export {foLoginPage, FoLoginPage};
