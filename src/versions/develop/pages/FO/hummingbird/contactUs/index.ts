import {type FoContactUsPageInterface} from '@interfaces/FO/contactUs';
import {FoContactUsPage as FoContactUsPageVersion} from '@versions/develop/pages/FO/classic/contactUs';

/**
 * Contact Us page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FoContactUsPage extends FoContactUsPageVersion implements FoContactUsPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');

    // Form selectors
    this.attachmentLabel = 'input[name="fileUpload"]';
    this.sendButton = '#content button[name=\'submitMessage\']';
    this.gdprLabel = '#content #gdpr_consent label.psgdpr_consent_message';
  }
}

const foContactUsPage = new FoContactUsPage();
export {foContactUsPage, FoContactUsPage};
