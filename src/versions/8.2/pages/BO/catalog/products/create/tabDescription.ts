// Import pages
import type {BOProductsCreateTabDescriptionPageInterface} from '@interfaces/BO/catalog/products/create/tabDescription';
import {DescriptionTab} from '@versions/develop/pages/BO/catalog/products/create/tabDescription';

import type FakerProduct from '@data/faker/product';

import type {Page} from 'playwright';

/**
 * Bo product description tab, contains functions that can be used on the page
 * @class
 * @extends DescriptionTab
 */
class BOProductTabDescriptionVersion extends DescriptionTab implements BOProductsCreateTabDescriptionPageInterface {
    private readonly productShortDescriptionIframe: string;
    private readonly productDescriptionIframe: string;
    private productWithCombinationsInput: string;
    /**
     * @constructs
     * Setting up texts and selectors to use on description tab
     */
    constructor() {
        super();

        this.descriptionTabLink = '#product_description-tab-nav';
        this.productShortDescriptionIframe = '#product_description_description_short';
        this.productDescriptionIframe = '#product_description_description';
        this.productWithCombinationsInput = '#show_variations_selector div:nth-of-type(2) input';
    }
}

const descriptionTab = new BOProductTabDescriptionVersion();
export {descriptionTab, BOProductTabDescriptionVersion};
