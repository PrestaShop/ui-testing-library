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

    this.pageHeaderTitle = '#content-wrapper div h1';
  }
}

module.exports = new FoMyAddressesCreatePage();
