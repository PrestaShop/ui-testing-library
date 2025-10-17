// Import pages
import {BOAddressesCreatePageInterface} from '@interfaces/BO/customers/addresses/create';
import {BOAddressesCreatePage as BOAddressCreatePageVersion} from '@versions/develop/pages/BO/customers/addresses/create';

class BOAddressesCreatePage extends BOAddressCreatePageVersion implements BOAddressesCreatePageInterface {
  /**
     * @constructs
     * Setting up texts and selectors to use in addresses create page
     */
  constructor() {
    super();
    // Title and messages
    this.pageTitleCreate = `Addresses • ${global.INSTALL.SHOP_NAME}`;
  }
}

const boAddressesCreatePage = new BOAddressesCreatePage();
export {boAddressesCreatePage, BOAddressesCreatePage};
