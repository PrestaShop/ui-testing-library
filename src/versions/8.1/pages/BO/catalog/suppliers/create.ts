// Import pages
import type {BOSuppliersCreatePageInterface} from '@interfaces/BO/catalog/suppliers/create';
import {CreateSupplier} from '@versions/develop/pages/BO/catalog/suppliers/create';
import type FakerSupplier from '@data/faker/supplier';

import type {Page} from 'playwright';

/**
 * Bo create supplier page, contains functions that can be used on the page
 * @class
 * @extends CreateProduct
 */
class BOCreateSupplierVersion extends CreateSupplier implements BOSuppliersCreatePageInterface {
  /**
   * Create or edit Supplier
   * @param page {Page} Browser tab
   * @param supplierData {FakerSupplier} Data to set on new/edit supplier form
   * @return {Promise<string>}
   */
  async createEditSupplier(page: Page, supplierData: FakerSupplier): Promise<string> {
    // Fill Name
    await this.setValue(page, this.nameInput, supplierData.name);

    // Fill Address information
    await this.setValue(page, this.homePhoneInput, supplierData.homePhone);
    await this.setValue(page, this.mobilePhoneInput, supplierData.mobilePhone);
    await this.setValue(page, this.addressInput, supplierData.address);
    await this.setValue(page, this.secondaryAddressInput, supplierData.secondaryAddress);
    await this.setValue(page, this.postalCodeInput, supplierData.postalCode);
    await this.setValue(page, this.cityInput, supplierData.city);
    // Select country
    await page.locator(this.selectCountryList).click();
    await this.setValue(page, this.searchCountryInput, supplierData.country);
    await this.waitForSelectorAndClick(page, this.countrySearchResult);

    // Add logo
    await this.uploadFile(page, this.logoFileInput, supplierData.logo);

    // Fill Description, meta title, meta description and meta keywords in english
    await this.changeLanguageForSelectors(page, 'en');
    await this.setValueOnTinymceInput(page, this.descriptionIFrame(1), supplierData.description);
    await this.setValue(page, this.metaTitleInput(1), supplierData.metaTitle);
    await this.setValue(page, this.metaDescriptionTextarea(1), supplierData.metaDescription);

    // delete Keywords and other new ones
    await this.deleteKeywords(page, 'en');
    await this.addKeywords(page, supplierData.metaKeywords, 1);

    // Fill Description, meta title, meta description and meta keywords in french
    await this.changeLanguageForSelectors(page, 'fr');
    await this.setValueOnTinymceInput(page, this.descriptionIFrame(2), supplierData.descriptionFr);
    await this.setValue(page, this.metaTitleInput(2), supplierData.metaTitleFr);
    await this.setValue(page, this.metaDescriptionTextarea(2), supplierData.metaDescriptionFr);

    // delete Keywords and other new ones
    await this.deleteKeywords(page, 'fr');
    await this.addKeywords(page, supplierData.metaKeywords, 2);

    // Set status value
    await this.setChecked(page, this.statusToggleInput(supplierData.enabled ? 1 : 0));

    // Save Supplier
    await this.clickAndWaitForURL(page, this.saveButton);
    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

const createSupplier = new BOCreateSupplierVersion();
export {createSupplier, BOCreateSupplierVersion};
