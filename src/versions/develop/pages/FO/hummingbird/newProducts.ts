import {type FONewProductsPageInterface} from '@interfaces/FO/newProducts';
import {FONewProductsPage as FONewProductsPageClassic} from '@versions/develop/pages/FO/classic/newProducts';

/**
 * @class
 * @extends FOBasePage
 */
class FONewProductsPage extends FONewProductsPageClassic implements FONewProductsPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new FONewProductsPage();
