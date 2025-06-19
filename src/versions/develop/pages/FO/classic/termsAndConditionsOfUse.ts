import {type FOTermsAndConditionsOfUsePageInterface} from '@interfaces/FO/termsAndConditionsOfUse';
import FOBasePage from '@pages/FO/FOBasePage';

/**
 * Terms and conditions of use page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FOTermsAndConditionsOfUsePage extends FOBasePage implements FOTermsAndConditionsOfUsePageInterface {
  public readonly pageTitle: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on terms and conditions of use page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.pageTitle = 'Terms and conditions of use';
  }
}

const foTermsAndConditionsOfUsePage = new FOTermsAndConditionsOfUsePage();
export {foTermsAndConditionsOfUsePage, FOTermsAndConditionsOfUsePage};
