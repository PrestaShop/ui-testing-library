import {type FODeliveryPageInterface} from '@interfaces/FO/delivery';
import {FODeliveryPage as FODeliveryPageClassic} from '@versions/develop/pages/FO/classic/delivery';

/**
 * Contact Us page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FODeliveryPage extends FODeliveryPageClassic implements FODeliveryPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new FODeliveryPage();
