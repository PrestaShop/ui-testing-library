import {type FOGuestOrderTrackingPageInterface} from '@interfaces/FO/guestOrderTracking';
import FOBasePage from '@pages/FO/FOBasePage';

/**
 * Guest order tracking page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FOGuestOrderTrackingPage extends FOBasePage implements FOGuestOrderTrackingPageInterface {
  public readonly pageTitle: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on Guest order tracking page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.pageTitle = 'Guest tracking';

    // Selectors for the page
  }
}

const foGuestOrderTrackingPage = new FOGuestOrderTrackingPage();
export {foGuestOrderTrackingPage, FOGuestOrderTrackingPage};
