import {type BOLocalizationPageInterface} from '@interfaces/BO/international/localization';
import {BOLocalizationPage as BOLocalizationPageVersion} from '@versions/develop/pages/BO/international/localization';

/**
 * Addresses page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOLocalizationPage extends BOLocalizationPageVersion implements BOLocalizationPageInterface {
  /**
     * @constructs
     * Setting up texts and selectors to use on addresses page
     */
  constructor() {
    super();

    this.importButton = 'button.btn.btn-primary:has-text("Import")';
  }
}

const boLocalizationPage = new BOLocalizationPage();
export {boLocalizationPage, BOLocalizationPage};
