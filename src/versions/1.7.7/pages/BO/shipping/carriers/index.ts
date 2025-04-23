// Import pages
import {BOCarriersPageInterface} from '@interfaces/BO/shipping/carriers';
import {BOCarriersPage as BOCarriersPageVersion} from '@versions/1.7.8/pages/BO/shipping/carriers';

class BOCarriersPage extends BOCarriersPageVersion implements BOCarriersPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use in carriers page
   */
  constructor() {
    super();
    // Header links
    this.addNewCarrierLink = 'a#page-header-desc-carrier-new_carrier';
  }
}

const boCarriersPage = new BOCarriersPage();
export {boCarriersPage, BOCarriersPage};
