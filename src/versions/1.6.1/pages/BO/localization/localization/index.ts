import {type BOLocalizationPageInterface} from '@interfaces/BO/international/localization';
import {BOLocalizationPage as BOLocalizationPageVersion} from '@versions/1.7.7/pages/BO/international/localization';
import type {Page} from 'playwright';

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

  /* Methods */
  /**
     * Import a localization pack
     * @param page {Page} Browser tab
     * @param country {string} Country to select
     * @param contentToImport {ImportContent} Data of content to import to choose
     * @param downloadPackData {boolean} True if we need to download pack data
     * @return {Promise<string>}
     */
  async importLocalizationPack(
    page: Page,
    country: string,
    contentToImport: ImportContent,
    downloadPackData: boolean = true,
  ): Promise<string> {
    // Choose which country to import
    await page.locator('#iso_localization_pack_chosen').click();
    await page.locator('#iso_localization_pack_chosen').getByRole('textbox').fill(country);
    await page.locator('ul.chosen-results li').filter({hasText: country}).click();

    // Set content import checkboxes
    await page.locator('input[value="states"]').setChecked(contentToImport.importStates as boolean);
    await page.locator('input[value="taxes"]').setChecked(contentToImport.importTaxes as boolean);
    await page.locator('input[value="currencies"]').setChecked(contentToImport.importCurrencies as boolean);
    await page.locator('input[value="languages"]').setChecked(contentToImport.importLanguages as boolean);
    await page.locator('input[value="units"]').setChecked(contentToImport.importUnits as boolean);
    await page.locator('input[value="groups"]').setChecked(contentToImport.updatePriceDisplayForGroups as boolean);

    // Choose if we download pack of data
    await this.setChecked(page, this.downloadPackDataToggleInput(downloadPackData ? 'yes' : 'no'));

    // Import the pack
    await page.locator('button[name="submitLocalizationPack"]').click();

    return this.getAlertSuccessBlockParagraphContent(page, 20000);
  }
}

const boLocalizationPage = new BOLocalizationPage();
export {boLocalizationPage, BOLocalizationPage};
