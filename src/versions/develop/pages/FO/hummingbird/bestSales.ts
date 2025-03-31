import {type FoBestSalesPageInterface} from '@interfaces/FO/bestSales';
import {FoBestSalesPage as FoBestSalesPageClassic} from '@versions/develop/pages/FO/classic/bestSales';

/**
 * Contact Us page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FoBestSalesPage extends FoBestSalesPageClassic implements FoBestSalesPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new FoBestSalesPage();
