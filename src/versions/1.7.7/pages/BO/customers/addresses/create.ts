// Import pages
import {BOAddressesCreatePageInterface} from '@interfaces/BO/customers/addresses/create';
import {BOAddressesCreatePage as BOAddressCreatePageVersion} from '@versions/develop/pages/BO/customers/addresses/create';


class BOAddressesCreatePage extends BOAddressCreatePageVersion implements BOAddressesCreatePageInterface {
    /**
     * @constructs
     * Setting up texts and selectors to use in orders page
     */
    constructor() {
        super();
        // Header links
        this.saveAddressButton = '.form-horizontal button';
    }
}

module.exports = new BOAddressesCreatePage();
