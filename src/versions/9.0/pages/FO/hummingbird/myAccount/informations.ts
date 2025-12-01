import {type FOMyInformationsPageInterface} from '@interfaces/FO/myAccount/informations';
import {FOMyInformationsPage as FOMyInformationsPageVersion} from '@versions/develop/pages/FO/hummingbird/myAccount/informations';

/**
 * Hummingbird 1
 * @class
 * @extends MyAccountPageVersion
 */
class FOMyInformationsPage extends FOMyInformationsPageVersion implements FOMyInformationsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on create products page
   */
  constructor() {
    super();

    // FOBasePage
    this.alertSuccessBlock = '.alert-success ul li';
  }
}

const foMyInformationsPage = new FOMyInformationsPage();
export {foMyInformationsPage, FOMyInformationsPage};
