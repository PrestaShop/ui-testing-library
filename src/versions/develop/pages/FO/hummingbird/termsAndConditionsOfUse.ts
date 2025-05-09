import {type FOTermsAndConditionsOfUsePageInterface} from '@interfaces/FO/termsAndConditionsOfUse';
import {
  FOTermsAndConditionsOfUsePage as FOTermsAndConditionsOfUsePageClassic,
} from '@versions/develop/pages/FO/classic/termsAndConditionsOfUse';

/**
 * @class
 * @extends FOBasePage
 */
class FOTermsAndConditionsOfUsePage extends FOTermsAndConditionsOfUsePageClassic
  implements FOTermsAndConditionsOfUsePageInterface {
  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new FOTermsAndConditionsOfUsePage();
