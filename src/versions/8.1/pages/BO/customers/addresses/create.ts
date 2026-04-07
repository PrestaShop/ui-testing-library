// Import pages
import {BOAddressesCreatePageInterface} from '@interfaces/BO/customers/addresses/create';
import {BOAddressesCreatePage as BOAddressCreatePageVersion} from '@versions/8.2/pages/BO/customers/addresses/create';

class BOAddressesCreatePage extends BOAddressCreatePageVersion implements BOAddressesCreatePageInterface {
}

const boAddressesCreatePage = new BOAddressesCreatePage();
export {boAddressesCreatePage, BOAddressesCreatePage};
