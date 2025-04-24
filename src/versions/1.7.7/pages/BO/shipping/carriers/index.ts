// Import pages
import {BOCarriersPageInterface} from '@interfaces/BO/shipping/carriers';
import {BOCarriersPage as BOCarriersPageVersion} from '@versions/8.2/pages/BO/shipping/carriers';

class BOCarriersPage extends BOCarriersPageVersion implements BOCarriersPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use in orders page
   */
  constructor() {
    super();
    // Header links
    this.addNewCarrierLink = 'a#page-header-desc-carrier-new_carrier';
  }
}

module.exports = new BOCarriersPage();
