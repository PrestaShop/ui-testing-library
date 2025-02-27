import {type FoStoresPageInterface} from '@interfaces/FO/stores';
import {FoStoresPage as FoStoresPageClassic} from '@versions/develop/pages/FO/classic/stores';

/**
 * @class
 * @extends FOBasePage
 */
class FoStoresPage extends FoStoresPageClassic implements FoStoresPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new FoStoresPage();
