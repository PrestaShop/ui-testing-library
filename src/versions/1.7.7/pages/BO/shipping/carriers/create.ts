import {BOCarriersCreatePageInterface} from '@interfaces/BO/shipping/carriers/create';
import {BOCarriersCreatePage as BOCarriersCreatePageVersion} from '@versions/8.2/pages/BO/shipping/carriers/create';

class BOCarriersCreatePage extends BOCarriersCreatePageVersion implements BOCarriersCreatePageInterface {
    constructor() {
        super();

        // Shipping locations and costs
        //this.addHandlingCostsToggle = (toggle: string) => `#step_carrier_ranges #shipping_handling_${toggle}`;
        //this.freeShippingToggle = (toggle: string) => `#step_carrier_ranges #is_free_${toggle}`;
        // Summary
        //this.enableToggle = (toggle: string) => `#step_carrier_summary #active_${toggle}`;
    }
}

const boCarriersCreatePage = new BOCarriersCreatePage();
export {boCarriersCreatePage, BOCarriersCreatePage};
