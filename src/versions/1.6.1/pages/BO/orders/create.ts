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

    // Full results
    this.customerSearchFullResultsBlock = '#customers';
    this.customerResultsBlock = `${this.customerSearchFullResultsBlock}`;
    this.customerCardBlock = (pos: number) => `${this.customerSearchFullResultsBlock} div.customerCard:nth-child(${pos})`;
    this.customerCardNameTitle = (pos: number) => `${this.customerCardBlock(pos)} div.panel-heading`;
    this.customerCardBody = (pos: number) => `${this.customerCardBlock(pos)} panel span`;
    this.customerCardChooseButton = (pos: number) => `${this.customerCardBlock(pos)} button.setup-customer`;

    // Checkout history selectors
    this.checkoutHistoryBlock = '#carts';
    // Cart selectors
    this.productSearchInput = '#product-search';
  }
}

const boOrderCreatePage = new BOOrderCreatePage();
export {boOrderCreatePage, BOOrderCreatePage};
