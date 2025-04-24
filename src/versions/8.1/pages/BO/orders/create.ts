// Import pages
import {BOOrdersCreatePageInterface} from '@interfaces/BO/orders/create';
import {BOOrderCreatePage as BOOrderCreatePageVersion} from '@versions/8.2/pages/BO/orders/create';

class BOOrderCreatePage extends BOOrderCreatePageVersion implements BOOrdersCreatePageInterface {
    /**
     * @constructs
     * Setting up texts and selectors to use in addresses create page
     */
    constructor() {
        super();
    }
}

const boOrderCreatePage = new BOOrderCreatePage();
export {boOrderCreatePage, BOOrderCreatePage};
