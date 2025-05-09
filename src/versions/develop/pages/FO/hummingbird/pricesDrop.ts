import {type FOPricesDropPageInterface} from '@interfaces/FO/pricesDrop';
import {FOPricesDropPage as FOPricesDropPageClassic} from '@versions/develop/pages/FO/classic/pricesDrop';

/**
 * @class
 * @extends FOBasePage
 */
class FOPricesDropPage extends FOPricesDropPageClassic implements FOPricesDropPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new FOPricesDropPage();
