import {type FoMyAddressesCreatePageInterface} from '@interfaces/FO/myAccount/addresses/create';
import {
  FoMyAddressesCreatePage as FoMyAddressesCreatePageClassic,
} from '@versions/develop/pages/FO/classic/myAccount/addresses/create';

/**
 * @class
 * @extends FOBasePage
 */
class FoMyAddressesCreatePage extends FoMyAddressesCreatePageClassic implements FoMyAddressesCreatePageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on create account page
   */
  constructor() {
    super('hummingbird');

    // Override FOBasePage
    this.alertSuccessBlock = '#notifications .container .alert-success';

    this.pageHeaderTitle = '#wrapper div h1';
  }
}

const foMyAddressesCreatePage = new FoMyAddressesCreatePage();
export {foMyAddressesCreatePage, FoMyAddressesCreatePage};
