import {type FoMyAddressesCreatePageInterface} from '@interfaces/FO/myAccount/addresses/create';
import {
  FoMyAddressesCreatePage as FoMyAddressesCreatePageVersion,
} from '@versions/develop/pages/FO/hummingbird/myAccount/addresses/create';

/**
 * @class
 * @extends FOBasePage
 */
class FoMyAddressesCreatePage extends FoMyAddressesCreatePageVersion implements FoMyAddressesCreatePageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on create account page
   */
  constructor() {
    super();

    // Override FOBasePage
    this.alertSuccessBlock = '.alert-success ul li';

    this.pageHeaderTitle = '#content-wrapper div h1';
  }
}

const foMyAddressesCreatePage = new FoMyAddressesCreatePage();
export {foMyAddressesCreatePage, FoMyAddressesCreatePage};
