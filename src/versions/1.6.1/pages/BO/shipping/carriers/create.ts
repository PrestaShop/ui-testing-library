import {BOCarriersCreatePageInterface} from '@interfaces/BO/shipping/carriers/create';
import {BOCarriersCreatePage as BOCarriersCreatePageVersion} from '@versions/8.2/pages/BO/shipping/carriers/create';

class BOCarriersCreatePage extends BOCarriersCreatePageVersion implements BOCarriersCreatePageInterface {
    constructor() {
        super();

    }
}

const boCarriersCreatePage = new BOCarriersCreatePage();
export {boCarriersCreatePage, BOCarriersCreatePage};
