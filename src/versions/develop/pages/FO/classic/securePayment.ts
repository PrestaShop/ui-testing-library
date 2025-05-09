import {type FOSecurePaymentPageInterface} from '@interfaces/FO/securePayment';
import FOBasePage from '@pages/FO/FOBasePage';

/**
 * Secure payment page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FOSecurePaymentPage extends FOBasePage implements FOSecurePaymentPageInterface {
  public readonly pageTitle: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on secure payment page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.pageTitle = 'Secure payment';
  }
}

const foSecurePaymentPage = new FOSecurePaymentPage();
export {foSecurePaymentPage, FOSecurePaymentPage};
