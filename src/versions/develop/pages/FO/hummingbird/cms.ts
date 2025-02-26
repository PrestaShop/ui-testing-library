import {type FoCmsPageInterface} from '@interfaces/FO/cms';
import {FoCmsPage as FoCmsPageClassic} from '@versions/develop/pages/FO/classic/cms';

/**
 * @class
 * @extends FOBasePage
 */
class FoCmsPage extends FoCmsPageClassic implements FoCmsPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new FoCmsPage();
