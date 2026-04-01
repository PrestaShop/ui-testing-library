import {type FoContactUsPageInterface} from '@interfaces/FO/contactUs';
import {FoContactUsPage as FoContactUsPageVersion} from '@versions/develop/pages/FO/hummingbird/contactUs';

/**
 * Contact us page, contains functions that can be used on the page
 * @class
 * @extends FoContactUsPageVersion
 */
class FoContactUsPage extends FoContactUsPageVersion implements FoContactUsPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super();

    // Form selectors
    this.sendButton = '#content input[name=\'submitMessage\']';
    this.gdprLabel = '#content .gdpr_consent label.psgdpr_consent_message span:nth-of-type(2)';
  }
}

const foContactUsPage = new FoContactUsPage();
export {foContactUsPage, FoContactUsPage};
