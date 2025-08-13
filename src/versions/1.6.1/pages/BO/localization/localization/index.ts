import {type BOLocalizationPageInterface} from '@interfaces/BO/international/localization';
import {BOLocalizationPage as BOLocalizationPageVersion} from '@versions/1.7.7/pages/BO/international/localization';

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

        // Import localization pack selectors
        this.importlocalizationPackSelect = '#iso_localization_pack';
        this.importStatesCheckbox = '#selection[]_states';
        this.importTaxesCheckbox = '#selection[]_taxes';
        this.importCurrenciesCheckbox = '#selection[]_currencies';
        this.importLanguagesCheckbox = '#selection[]_languages';
        this.importUnitsCheckbox = '#selection[]_units';
        this.updatepriceDisplayForGroupsCHeckbox = '#selection[]_groups';
        this.downloadPackDataToggleInput = (toggle: number) => `#download_updated_pack_${toggle}`;
        this.importButton = 'button.btn.btn-primary:has-text("Import")';
    }
}

const boLocalizationPage = new BOLocalizationPage();
export {boLocalizationPage, BOLocalizationPage};