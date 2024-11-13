// Import pages
import type {FoLoginPageInterface} from '@interfaces/FO/login';
import {LoginPage} from '@versions/develop/pages/FO/classic/login';

/**
 * FO login page, contains functions that can be used on the page
 * @class
 * @extends ProductsPage
 */
class FoLoginVersion extends LoginPage implements FoLoginPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on login page
   */
  constructor() {
    super();

    this.signInButton = `${this.loginForm} button[type='submit']`;
  }
}

const loginPage = new FoLoginVersion();
export {loginPage, FoLoginVersion as LoginPage};
