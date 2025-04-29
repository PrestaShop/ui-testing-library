// Import pages
import {BOOrdersCreatePageInterface} from '@interfaces/BO/orders/create';
import {BOOrderCreatePage as BOOrderCreatePageVersion} from '@versions/1.7.7/pages/BO/orders/create';

class BOOrderCreatePage extends BOOrderCreatePageVersion implements BOOrdersCreatePageInterface {
  /**
     * @constructs
     * Setting up texts and selectors to use in addresses create page
     */
  constructor() {
    super();
    // Customer selectors
    this.addCustomerLink = 'a.fancybox_customer';
    this.customerSearchInput = '#customer';
  }
}

const boOrderCreatePage = new BOOrderCreatePage();
export {boOrderCreatePage, BOOrderCreatePage};
