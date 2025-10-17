// Import pages
import type {LoginPageInterface} from '@interfaces/BO/login';
import {LoginPage} from '@versions/1.7.2/pages/BO/login';

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
  }
}

module.exports = new BOLoginVersion();
