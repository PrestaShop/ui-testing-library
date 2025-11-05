// Import pages
import ImportContent from '@data/types/localization';
import type {BOLocalizationPageInterface} from '@interfaces/BO/international/localization';
import {BOLocalizationPage} from '@versions/develop/pages/BO/international/localization';

import type {Page} from 'playwright';

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
    this.importlocalizationPackSelect = '#import_localization_pack_iso_localization_pack';
    this.importStatesCheckbox = '#import_localization_pack_content_to_import_0';
    this.importTaxesCheckbox = '#import_localization_pack_content_to_import_1';
    this.importCurrenciesCheckbox = '#import_localization_pack_content_to_import_2';
    this.importLanguagesCheckbox = '#import_localization_pack_content_to_import_3';
    this.importUnitsCheckbox = '#import_localization_pack_content_to_import_4';
    this.updatepriceDisplayForGroupsCHeckbox = '#import_localization_pack_content_to_import_5';
    this.downloadPackDataToggleInput = (toggle: number) => `#import_localization_pack_download_pack_data_${toggle}`;
    this.importButton = '.card-footer span';
  }

}

const boLocalizationPage = new BOLocalizationPageVersion();
export {boLocalizationPage, BOLocalizationPageVersion as BOLocalizationPage};
