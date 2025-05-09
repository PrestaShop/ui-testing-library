import {type FOSecurePaymentPageInterface} from '@interfaces/FO/securePayment';
import {FOSecurePaymentPage as FOSecurePaymentPageClassic} from '@versions/develop/pages/FO/classic/securePayment';

/**
 * @class
 * @extends FOBasePage
 */
class FOSecurePaymentPage extends FOSecurePaymentPageClassic implements FOSecurePaymentPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new FOSecurePaymentPage();
