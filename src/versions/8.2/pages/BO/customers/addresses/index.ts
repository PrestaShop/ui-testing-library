import {type BOAddressesPageInterface} from '@interfaces/BO/customers/addresses';
import {BOAddressesPage as BOAddressesPageVersion} from '@versions/develop/pages/BO/customers/addresses';

/**
 * Addresses page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOAddressesPage extends BOAddressesPageVersion implements BOAddressesPageInterface {
}

const boAddressesPage = new BOAddressesPage();
export {boAddressesPage, BOAddressesPage};
