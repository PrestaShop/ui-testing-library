// Import pages
import {BOAddressesCreatePageInterface} from '@interfaces/BO/customers/addresses/create';
import {BOAddressesCreatePage as BOAddressCreatePageVersion} from '@versions/1.7.7/pages/BO/customers/addresses/create';

class BOAddressesCreatePage extends BOAddressCreatePageVersion implements BOAddressesCreatePageInterface {
  /**
     * @constructs
     * Setting up texts and selectors to use in addresses create page
     */
  constructor() {
    super();
    this.pageTitleCreate = `Addresses > Add new • ${global.INSTALL.SHOP_NAME}`;

    // Selectors
    this.customerEmailInput = '#email';
    this.customerAddressdniInput = '#dni';
    this.customerAddressAliasInput = '#alias';
    this.customerAddressFirstNameInput = '#firstname';
    this.customerLastNameInput = '#lastname';
    this.customerAddressCompanyInput = '#company';
    this.customerAddressVatNumberInput = '#vat_number';
    this.customerAddressInput = '#address1';
    this.customerAddressPostCodeInput = '#postcode';
    this.customerSecondAddressInput = '#address2';
    this.customerAddressCityInput = '#city';
    this.customerAddressCountrySelect = '#id_country';
    this.customerAddressPhoneInput = '#phone';
    this.saveAddressButton = '#address_form_submit_btn';
  }
}

const boAddressesCreatePage = new BOAddressesCreatePage();
export {boAddressesCreatePage, BOAddressesCreatePage};
