import ImportContent from '@data/types/localization';
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
        // await this.setHiddenCheckboxValue(page, this.importStatesCheckbox, contentToImport.importStates);
        await page.locator('input[value="states"]').setChecked(contentToImport.importStates as boolean);
        //await this.setHiddenCheckboxValue(page, this.importTaxesCheckbox, contentToImport.importTaxes);
        await page.locator('input[value="taxes"]').setChecked(contentToImport.importTaxes as boolean);
        //await this.setHiddenCheckboxValue(page, this.importCurrenciesCheckbox, contentToImport.importCurrencies);
        await page.locator('input[value="currencies"]').setChecked(contentToImport.importCurrencies as boolean);
        //await this.setHiddenCheckboxValue(page, this.importLanguagesCheckbox, contentToImport.importLanguages);
        await page.locator('input[value="languages"]').setChecked(contentToImport.importLanguages as boolean);
        //await this.setHiddenCheckboxValue(page, this.importUnitsCheckbox, contentToImport.importUnits);
        await page.locator('input[value="units"]').setChecked(contentToImport.importUnits as boolean);
        //await this.setHiddenCheckboxValue(page,this.updatepriceDisplayForGroupsCHeckbox, contentToImport.updatePriceDisplayForGroups);
        await page.locator('input[value="groups"]').setChecked(contentToImport.updatePriceDisplayForGroups as boolean);

        // Choose if we download pack of data
        await this.setChecked(page, this.downloadPackDataToggleInput(downloadPackData ? 1 : 0));

        // Import the pack
        await page.locator(this.importButton).click();

        return this.getAlertSuccessBlockParagraphContent(page, 20000);
    }
}

const boLocalizationPage = new BOLocalizationPage();
export {boLocalizationPage, BOLocalizationPage};