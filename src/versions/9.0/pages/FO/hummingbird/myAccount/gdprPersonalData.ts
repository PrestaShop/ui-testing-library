import {type FOMyGDPRPersonalDataPageInterface} from '@interfaces/FO/myAccount/gdprPersonalData';
import {
  FOMyGDPRPersonalDataPage as FOMyGDPRPersonalDataPageVersion,
} from '@versions/develop/pages/FO/hummingbird/myAccount/gdprPersonalData';

/**
 * @class
 * @extends FOBasePage
 */
class FOMyGDPRPersonalDataPage extends FOMyGDPRPersonalDataPageVersion implements FOMyGDPRPersonalDataPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on GDPR personal data page
   */
  constructor() {
    super();

    // Selectors
    this.headerTitle = '#content-wrapper h1';
  }
}

const foMyGDPRPersonalDataPage = new FOMyGDPRPersonalDataPage();
export {foMyGDPRPersonalDataPage, FOMyGDPRPersonalDataPage};
