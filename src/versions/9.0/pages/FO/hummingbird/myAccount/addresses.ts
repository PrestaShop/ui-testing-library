import {type FoMyAddressesPageInterface} from '@interfaces/FO/myAccount/addresses';
import {FoMyAddressesPage as FoMyAddressesPageVersion} from '@versions/develop/pages/FO/hummingbird/myAccount/addresses';

/**
 * Hummingbird 1
 * @class
 * @extends FoMyAddressesPageVersion
 */
class FoMyAddressesPage extends FoMyAddressesPageVersion implements FoMyAddressesPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on create products page
   */
  constructor() {
    super();

    this.createNewAddressLink = '#content a.addresses__new-address';
    this.addressBodyTitle = 'article.address .card-body p';
  }
}

const foMyAddressesPage = new FoMyAddressesPage();
export {foMyAddressesPage, FoMyAddressesPage};
