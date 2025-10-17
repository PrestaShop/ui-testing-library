import {type BOAddressesPageInterface} from '@interfaces/BO/customers/addresses';
import {BOAddressesPage as BOAddressesPageVersion} from '@versions/1.7.7/pages/BO/customers/addresses';

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
    this.successfulCreationMessage = '× Successful creation';
    this.pageTitle = `Addresses • ${global.INSTALL.SHOP_NAME}`;
    // Header links
    this.addNewAddressLink = '#page-header-desc-address-new_address';
  }
}

const boAddressesPage = new BOAddressesPage();
export {boAddressesPage, BOAddressesPage};
