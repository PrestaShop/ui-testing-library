// Import pages
import type FakerOrder from '@data/faker/order';
import {BOOrdersCreatePageInterface} from '@interfaces/BO/orders/create';
import type {Page} from '@playwright/test';
import {BOOrderCreatePage as BOOrderCreatePageVersion} from '@versions/1.7.8/pages/BO/orders/create';
import {modPsGdprBoMain} from '../../../../../index';

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
}

const boOrderCreatePage = new BOOrderCreatePage();
export {boOrderCreatePage, BOOrderCreatePage};
