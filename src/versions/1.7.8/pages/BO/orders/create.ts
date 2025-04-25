// Import pages
import {BOOrdersCreatePageInterface} from '@interfaces/BO/orders/create';
import type {Page} from '@playwright/test';
import {BOOrderCreatePage as BOOrderCreatePageVersion} from '@versions/8.0/pages/BO/orders/create';

class BOOrderCreatePage extends BOOrderCreatePageVersion implements BOOrdersCreatePageInterface {
  /**
     * @constructs
     * Setting up texts and selectors to use in addresses create page
     */
    constructor() {
        super();

        // Summary selectors
        this.paymentMethodSelect = `${this.summaryBlock} #cart_summary_payment_module`;
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
