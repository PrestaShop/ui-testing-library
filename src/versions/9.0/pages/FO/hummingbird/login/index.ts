import {type FoLoginPageInterface} from '@interfaces/FO/login';
import {FoLoginPage as FoLoginPageVersion} from '@versions/develop/pages/FO/hummingbird/login';

/**
 * Login page, contains functions that can be used on the page
 * @class
 * @extends FoLoginPageVersion
 */
class FoLoginPage extends FoLoginPageVersion implements FoLoginPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super();

    this.passwordReminderLink = '.login__forgot-password a';
    this.showPasswordButton = '#login-form button[data-action=show-password]';
  }
}

const foLoginPage = new FoLoginPage();
export {foLoginPage, FoLoginPage};
