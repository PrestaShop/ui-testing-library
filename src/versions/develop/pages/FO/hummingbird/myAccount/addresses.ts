import {type FoMyAddressesPageInterface} from '@interfaces/FO/myAccount/addresses';
import {
  FoMyAddressesPage as FoMyAddressesPageClassic,
} from '@versions/develop/pages/FO/classic/myAccount/addresses';

/**
 * Create account page, contains functions that can be used on the page
 * @class
 * @extends FoMyAddressesPageClassic
 */
class FoMyAddressesPage extends FoMyAddressesPageClassic implements FoMyAddressesPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on create account page
   */
  constructor() {
    super('hummingbird');

    this.createNewAddressLink = '#content a.addresses__new-address';
    this.addressBodyTitle = 'article.address .card-body p';
  }
}

module.exports = new FoMyAddressesPage();
