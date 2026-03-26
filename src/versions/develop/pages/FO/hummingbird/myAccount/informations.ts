import {type FOMyInformationsPageInterface} from '@interfaces/FO/myAccount/informations';
import {FOMyInformationsPage as FOMyInformationsPageClassic} from '@versions/develop/pages/FO/classic/myAccount/informations';

/**
 * @class
 * @extends FOBasePage
 */
class FOMyInformationsPage extends FOMyInformationsPageClassic implements FOMyInformationsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new FOMyInformationsPage();
