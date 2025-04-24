// Import pages
import {BOOrdersCreatePageInterface} from '@interfaces/BO/orders/create';
import type {Page} from '@playwright/test';
import {BOOrderCreatePage as BOOrderCreatePageVersion} from '@versions/1.7.8/pages/BO/orders/create';

class BOOrderCreatePage extends BOOrderCreatePageVersion implements BOOrdersCreatePageInterface {
  /**
     * @constructs
     * Setting up texts and selectors to use in addresses create page
     */
  constructor() {
    super();
  }

    /**
     * Choose addresses in form
     * @param page {Page} Browser tab
     * @param deliveryAddress {string} Delivery address to choose
     * @param invoiceAddress {string} Invoice address to choose
     * @returns {Promise<void>}
     */
    async chooseAddresses(page: Page, deliveryAddress: string, invoiceAddress: string): Promise<void> {
        console.log(deliveryAddress);
        await this.selectByVisibleText(page, this.deliveryAddressSelect, deliveryAddress);
        await this.selectByVisibleText(page, this.invoiceAddressSelect, invoiceAddress);
    }
}

const boOrderCreatePage = new BOOrderCreatePage();
export {boOrderCreatePage, BOOrderCreatePage};
