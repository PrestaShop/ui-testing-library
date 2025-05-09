import {type FOGuestOrderTrackingPageInterface} from '@interfaces/FO/guestOrderTracking';
import {FOGuestOrderTrackingPage as FOGuestOrderTrackingPageClassic} from '@versions/develop/pages/FO/classic/guestOrderTracking';

/**
 * @class
 * @extends FOBasePage
 */
class FOGuestOrderTrackingPage extends FOGuestOrderTrackingPageClassic implements FOGuestOrderTrackingPageInterface {
  /**
    * @constructs
    */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new FOGuestOrderTrackingPage();
