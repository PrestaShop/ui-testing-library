// Import pages
import ImportContent from '@data/types/localization';
import type {BOLocalizationPageInterface} from '@interfaces/BO/international/localization';
import {BOLocalizationPage} from '@versions/develop/pages/BO/international/localization';

import type {Page} from '@playwright/test';

/**
 * Bo create localization page, contains functions that can be used on the page
 * @class
 * @extends BOLocalizationPage
 */
class BOLocalizationPageVersion extends BOLocalizationPage implements BOLocalizationPageInterface {

  /**
     * @constructs
     * Setting up texts and selectors to use on create product page
     */
  constructor() {
    super();

    // Import localization pack selectors
    this.importButton = '.card-footer span';
  }

}

const boLocalizationPage = new BOLocalizationPageVersion();
export {boLocalizationPage, BOLocalizationPageVersion as BOLocalizationPage};
