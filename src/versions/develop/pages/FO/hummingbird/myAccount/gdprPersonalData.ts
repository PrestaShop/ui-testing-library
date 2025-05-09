import {type FOMyGDPRPersonalDataPageInterface} from '@interfaces/FO/myAccount/gdprPersonalData';
import {
  FOMyGDPRPersonalDataPage as FOMyGDPRPersonalDataPageClassic,
} from '@versions/develop/pages/FO/classic/myAccount/gdprPersonalData';

/**
 * @class
 * @extends FOBasePage
 */
class FOMyGDPRPersonalDataPage extends FOMyGDPRPersonalDataPageClassic implements FOMyGDPRPersonalDataPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on GDPR personal data page
   */
  constructor() {
    super('hummingbird');

    // Selectors
    this.contactUsHyperLink = 'section.page-content a[href*=\'contact-us\']';
  }
}

module.exports = new FOMyGDPRPersonalDataPage();
