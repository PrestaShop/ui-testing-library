import {BOCarriersCreatePageInterface} from '@interfaces/BO/shipping/carriers/create';
import {BOCarriersCreatePage as BOCarriersCreatePageVersion} from '@versions/8.2/pages/BO/shipping/carriers/create';

class BOCarriersCreatePage extends BOCarriersCreatePageVersion implements BOCarriersCreatePageInterface {
    constructor() {
        super();
        // Summary
        this.enableToggle = (toggle: string) => `#step_carrier_summary #active_${toggle}`;
    }
}

const boCarriersCreatePage = new BOCarriersCreatePage();
export {boCarriersCreatePage, BOCarriersCreatePage};
