import {type BOAddressesPageInterface} from '@interfaces/BO/customers/addresses';
import {BOAddressesPage as BOAddressesPageVersion} from '@versions/8.2/pages/BO/customers/addresses';

/**
 * Addresses page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOAddressesPage extends BOAddressesPageVersion implements BOAddressesPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on addresses page
   */
  constructor() {
    super();
  }
}

const boAddressesPage = new BOAddressesPage();
export {boAddressesPage, BOAddressesPage};
