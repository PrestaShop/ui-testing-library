// Import pages
import type FakerAddress from '@data/faker/address';
import {BOAddressesCreatePageInterface} from '@interfaces/BO/customers/addresses/create';
import type {Frame, Page} from '@playwright/test';
import testContext from '@utils/test';
import {BOAddressesCreatePage as BOAddressCreatePageVersion} from '@versions/1.7.7/pages/BO/customers/addresses/create';
import semver from 'semver';

class BOAddressesCreatePage extends BOAddressCreatePageVersion implements BOAddressesCreatePageInterface {
  private readonly customerAddressMobilePhoneInput: string;
  /**
     * @constructs
     * Setting up texts and selectors to use in addresses create page
     */
  constructor() {
    super();
    this.pageTitleCreate = `Addresses > Add new • ${global.INSTALL.SHOP_NAME}`;

    // Selectors
    this.customerEmailInput = '#email';
    this.customerAddressdniInput = '#dni';
    this.customerAddressAliasInput = '#alias';
    this.customerAddressFirstNameInput = '#firstname';
    this.customerLastNameInput = '#lastname';
    this.customerAddressCompanyInput = '#company';
    this.customerAddressVatNumberInput = '#vat_number';
    this.customerAddressInput = '#address1';
    this.customerAddressPostCodeInput = '#postcode';
    this.customerSecondAddressInput = '#address2';
    this.customerAddressCityInput = '#city';
    this.customerAddressCountrySelect = '#id_country';
    this.customerAddressPhoneInput = '#phone';
    this.customerAddressMobilePhoneInput = '#phone_mobile';
    this.saveAddressButton = '#address_form_submit_btn';
  }

  /**
   * Fill form for add/edit address
   * @param page {Frame|Page} Browser tab
   * @param addressData {FakerAddress} Data to set on new address form
   * @param save {boolean} True if we need to save the new address, false if not
   * @param waitForNavigation {boolean} True if we need to wait for navigation after save, false if not
   * @returns {Promise<?string>}
   */
  async createEditAddress(
      page: Frame|Page,
      addressData: FakerAddress,
      save: boolean = true,
      waitForNavigation: boolean = true,
  ): Promise<string|null> {
    if (await this.elementVisible(page, this.customerEmailInput, 2000)) {
      await this.setValue(page, this.customerEmailInput, addressData.email);
    }
    await this.setValue(page, this.customerAddressdniInput, addressData.dni);
    await this.setValue(page, this.customerAddressAliasInput, addressData.alias);
    await this.setValue(page, this.customerAddressFirstNameInput, addressData.firstName);
    await this.setValue(page, this.customerLastNameInput, addressData.lastName);
    await this.setValue(page, this.customerAddressCompanyInput, addressData.company);
    await this.setValue(page, this.customerAddressVatNumberInput, addressData.vatNumber);
    await this.setValue(page, this.customerAddressInput, addressData.address);
    await this.setValue(page, this.customerSecondAddressInput, addressData.secondAddress);
    await this.setValue(page, this.customerAddressPostCodeInput, addressData.postalCode);
    await this.setValue(page, this.customerAddressCityInput, addressData.city);
    await this.selectByVisibleText(page, this.customerAddressCountrySelect, addressData.country);
    await this.setValue(page, this.customerAddressPhoneInput, addressData.phone);
    await this.setValue(page, this.customerAddressMobilePhoneInput, addressData.phone);
    await this.setValue(page, this.customerAddressOtherInput, addressData.other);

    if (await this.elementVisible(page, this.customerAddressStateSelect, 1000)) {
      await page.locator(this.customerAddressStateSelect).click();
      await this.setValue(page, this.searchStateInput, addressData.state);
      await this.waitForSelectorAndClick(page, this.searchResultState);
    }

    // Save and return successful message
    if (save) {
      if (waitForNavigation) {
        return this.saveAddress(page);
      }

      await page.locator(this.saveAddressButton).click();
    }

    return null;
  }
}

const boAddressesCreatePage = new BOAddressesCreatePage();
export {boAddressesCreatePage, BOAddressesCreatePage};
