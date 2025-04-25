// Import pages
import {BOOrdersCreatePageInterface} from '@interfaces/BO/orders/create';
import {BOOrderCreatePage as BOOrderCreatePageVersion} from '@versions/1.7.8/pages/BO/orders/create';
// Imports from playwright
import type {Page} from '@playwright/test';

class BOOrderCreatePage extends BOOrderCreatePageVersion implements BOOrdersCreatePageInterface {
  /**
     * @constructs
     * Setting up texts and selectors to use in addresses create page
     */
  constructor() {
    super();
  }

    /**
     * Create order with existing customer
     * @param page {Page} Browser tab
     * @param orderToMake {FakerOrder} Order data to create
     * @param isNewCustomer {boolean} True if the customer is new
     * @returns {Promise<void>}
     */
    async createOrder(page: Page, orderToMake: FakerOrder, isNewCustomer: boolean = false): Promise<void> {
        // Choose customer
        // If it's a new customer, the creation of customer should be done in test
        // with add customer page
        if (!isNewCustomer) {
            await this.searchCustomer(page, orderToMake.customer.email);
        }

        // Choose customer after search or creation
        await this.chooseCustomer(page, 1);

        // Add products to carts
        for (let i = 0; i < orderToMake.products.length; i++) {
            await this.addProductToCart(
                page, orderToMake.products[i].product, orderToMake.products[i].product.name, orderToMake.products[i].quantity);
        }

        // Choose address
        await this.chooseAddresses(page, orderToMake.deliveryAddress.alias, orderToMake.invoiceAddress.alias);

        // Choose delivery options
        await this.setDeliveryOption(page, orderToMake.deliveryOption.name, orderToMake.deliveryOption.freeShipping);

        // Choose payment method
        await this.setPaymentMethod(page, orderToMake.paymentMethod.moduleName);

        // Set order status
        await this.setOrderStatus(page, orderToMake.status);

        // Create the order
        await this.clickAndWaitForURL(page, this.createOrderButton);
    }

    /**
     * Set payment method
     * @param page {Page} Browser tab
     * @param paymentMethodModuleName {string} Payment method to choose
     * @returns {Promise<void>}
     */
    async setPaymentMethod(page: Page, paymentMethodModuleName: string): Promise<void> {
        await page.locator(this.paymentMethodSelect).selectOption(paymentMethodModuleName);
    }
}

const boOrderCreatePage = new BOOrderCreatePage();
export {boOrderCreatePage, BOOrderCreatePage};
