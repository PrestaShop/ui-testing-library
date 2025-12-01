import {type FoContactUsPageInterface} from '@interfaces/FO/contactUs';
import {FoContactUsPage as FoContactUsPageVersion} from '@versions/develop/pages/FO/hummingbird/contactUs';

/**
 * Cart page, contains functions that can be used on the page
 * @class
 * @extends CartPageClassic
 */
class FoContactUsPage extends FoContactUsPageVersion implements FoContactUsPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super();

    // Form selectors
    this.sendButton = '#content input[name=\'submitMessage\']';
  }
}

const foContactUsPage = new FoContactUsPage();
export {foContactUsPage, FoContactUsPage};
