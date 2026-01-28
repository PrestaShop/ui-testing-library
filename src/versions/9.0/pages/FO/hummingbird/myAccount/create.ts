import {type FoCreateAccountPageInterface} from '@interfaces/FO/myAccount/create';
import {FoCreateAccountPage as FoCreateAccountPageVersion} from '@versions/develop/pages/FO/hummingbird/myAccount/create';

/**
 * Hummingbird 1
 * @class
 * @extends FoMyAddressesPageVersion
 */
class FoCreateAccountPage extends FoCreateAccountPageVersion implements FoCreateAccountPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on create products page
   */
  constructor() {
    super();

    this.psgdprLabel = `${this.createAccountForm} label[for="field-psgdpr"] + div > span.custom-checkbox > label`;
  }
}

const foCreateAccountPage = new FoCreateAccountPage();
export {foCreateAccountPage, FoCreateAccountPage};
