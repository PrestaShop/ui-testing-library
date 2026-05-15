// Import pages
import {BOAddressesCreatePageInterface} from '@interfaces/BO/customers/addresses/create';
import {BOAddressesCreatePage as BOAddressCreatePageVersion} from '@versions/1.7.8/pages/BO/customers/addresses/create';

class BOAddressesCreatePage extends BOAddressCreatePageVersion implements BOAddressesCreatePageInterface {
  /**
     * @constructs
     * Setting up texts and selectors to use in addresses create page
     */
  constructor() {
    super();
    // Header links
    this.saveAddressButton = '.card-footer button.btn-primary';
  }
}

const boAddressesCreatePage = new BOAddressesCreatePage();
export {boAddressesCreatePage, BOAddressesCreatePage};
