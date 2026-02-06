// Import pages
import type {LoginPageInterface} from '@interfaces/BO/login';
import {LoginPage} from '@versions/8.0/pages/BO/login';

/**
 * Bo login page, contains functions that can be used on the page
 * @class
 * @extends ProductsPage
 */
class BOLoginVersion extends LoginPage implements LoginPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on login page
   */
  constructor() {
    super();

    this.submitLoginButton = 'button[name="submitLogin"]:nth-child(1)';
  }
}

const loginPage = new BOLoginVersion();
export {loginPage, BOLoginVersion as LoginPage};
