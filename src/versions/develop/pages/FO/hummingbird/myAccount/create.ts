import {FoCreateAccountPageInterface} from '@interfaces/FO/myAccount/create';
import {FoCreateAccountPage as FoCreateAccountPageVersion} from '@versions/develop/pages/FO/classic/myAccount/create';

/**
 * Create account page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FoCreateAccountPage extends FoCreateAccountPageVersion implements FoCreateAccountPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on create account page
   */
  constructor() {
    super('hummingbird');

    this.pageHeaderTitle = '#wrapper .page-header h1';
    this.psgdprLabel = `${this.createAccountForm} label[for="field-psgdpr"] + div > span.custom-checkbox > label`;
  }
}

const foCreateAccountPage = new FoCreateAccountPage();
export {foCreateAccountPage, FoCreateAccountPage};
