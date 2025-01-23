import type FakerAddress from '@data/faker/address';
import {type BOProductBlockCustomersPageInterface} from '@interfaces/BO/orders/view/blockCustomers';
import boAddressesCreatePage from '@pages/BO/customers/addresses/create';
import {type Frame, type Page} from '@playwright/test';
import {ViewOrderBasePage} from '@versions/develop/pages/BO/orders/view/viewOrderBasePage';

/**
 * Products block, contains functions that can be used on view/edit products block on view order page
 * @class
 * @extends ViewOrderBasePage
 */
class BOProductBlockCustomersPage extends ViewOrderBasePage implements BOProductBlockCustomersPageInterface {
  private readonly customerInfoBlock: string;

  private readonly customerIDStrong: string;

  private readonly ViewAllDetailsLink: string;

  private readonly customerEmailLink: string;

  private readonly validatedOrders: string;

  private readonly shippingAddressBlock: string;

  private readonly shippingAddressToolTipLink: string;

  private readonly editShippingAddressButton: string;

  private readonly selectAnotherShippingAddressButton: string;

  private readonly changeOrderAddressSelect: string;

  private readonly submitAnotherAddressButton: string;

  private readonly editAddressIframe: string;

  private readonly invoiceAddressBlock: string;

  private readonly invoiceAddressToolTipLink: string;

  private readonly editInvoiceAddressButton: string;

  private readonly selectAnotherInvoiceAddressButton: string;

  private readonly privateNoteDiv: string;

  private readonly privateNoteTextarea: string;

  private readonly addNewPrivateNoteLink: string;

  private readonly privateNoteSaveButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on view/edit customer block
   */
  constructor() {
    super();

    // Customer block
    this.customerInfoBlock = '#customerInfo';
    this.customerIDStrong = '#customerId';
    this.ViewAllDetailsLink = '#viewFullDetails a';
    this.customerEmailLink = '#customerEmail a';
    this.validatedOrders = '#validatedOrders';
    this.shippingAddressBlock = '#addressShipping';
    this.shippingAddressToolTipLink = `${this.shippingAddressBlock} .tooltip-link`;
    this.editShippingAddressButton = '#js-delivery-address-edit-btn';
    this.selectAnotherShippingAddressButton = `${this.shippingAddressBlock} .js-update-customer-address-modal-btn`;
    this.changeOrderAddressSelect = '#change_order_address_new_address_id';
    this.submitAnotherAddressButton = '#change-address-submit-button';
    this.editAddressIframe = 'iframe.fancybox-iframe';
    this.invoiceAddressBlock = '#addressInvoice';
    this.invoiceAddressToolTipLink = `${this.invoiceAddressBlock} .tooltip-link`;
    this.editInvoiceAddressButton = '#js-invoice-address-edit-btn';
    this.selectAnotherInvoiceAddressButton = `${this.invoiceAddressBlock} .js-update-customer-address-modal-btn`;
    this.privateNoteDiv = '#privateNote';
    this.privateNoteTextarea = '#private_note_note';
    this.addNewPrivateNoteLink = '#privateNote a.js-private-note-toggle-btn';
    this.privateNoteSaveButton = `${this.privateNoteDiv} .js-private-note-btn`;
  }

  /*
  Methods
   */

  /**
   * Get Address frame
   * @param page {Page} Browser tab
   * @returns {Promise<Frame>}
   */
  async getAddressFrame(page: Page): Promise<Frame> {
    const addressFrame: Frame | null = await page.frame({url: /sell\/addresses\/order/gmi});

    if (addressFrame === null) {
      throw new Error('Create product frame was not found');
    }

    return addressFrame;
  }

  /**
   * Get customer information
   * @param page {Frame|Page} Browser tab
   * @returns {Promise<string>}
   */
  async getCustomerInfoBlock(page: Frame | Page): Promise<string> {
    return this.getTextContent(page, this.customerInfoBlock);
  }

  /**
   * Get customer ID
   * @param page {Frame|Page} Browser tab
   * @returns {Promise<number>}
   */
  async getCustomerID(page: Page): Promise<number> {
    return this.getNumberFromText(page, this.customerIDStrong);
  }

  /**
   * Go to view full details page
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToViewFullDetails(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.ViewAllDetailsLink);
  }

  /**
   * Get customer email
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getCustomerEmail(page: Page): Promise<string> {
    return this.getAttributeContent(page, this.customerEmailLink, 'href');
  }

  /**
   * Get shipping address from customer card
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getShippingAddress(page: Page): Promise<string> {
    return this.getTextContent(page, this.shippingAddressBlock);
  }

  /**
   * Get invoice address from customer card
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getInvoiceAddress(page: Page): Promise<string> {
    return this.getTextContent(page, this.invoiceAddressBlock);
  }

  /**
   * Get validated orders number
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getValidatedOrdersNumber(page: Page): Promise<number> {
    return this.getNumberFromText(page, this.validatedOrders);
  }

  /**
   * Edit existing shipping address
   * @param page {Page} Browser tab
   * @param addressData {AddressData} Shipping address data to edit
   * @returns {Promise<string>}
   */
  async editExistingShippingAddress(page: Page, addressData: FakerAddress): Promise<string> {
    await this.waitForSelectorAndClick(page, this.shippingAddressToolTipLink);
    await this.waitForSelectorAndClick(page, this.editShippingAddressButton);

    await this.waitForVisibleSelector(page, this.editAddressIframe);

    const addressFrame = await this.getAddressFrame(page);

    await boAddressesCreatePage.createEditAddress(addressFrame, addressData, true, false);

    await this.waitForHiddenSelector(page, this.editAddressIframe);

    return this.getShippingAddress(page);
  }

  /**
   * Select another shipping address
   * @param page {Page} Browser tab
   * @param address {string} Shipping address to select
   * @returns {Promise<string>}
   */
  async selectAnotherShippingAddress(page: Page, address: string): Promise<string> {
    await this.waitForSelectorAndClick(page, this.shippingAddressToolTipLink);
    await this.waitForSelectorAndClick(page, this.selectAnotherShippingAddressButton);

    await this.selectByVisibleText(page, this.changeOrderAddressSelect, address);
    await this.waitForSelectorAndClick(page, this.submitAnotherAddressButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Edit existing shipping address
   * @param page {Page} Browser tab
   * @param addressData {AddressData} Invoice address data to edit
   * @returns {Promise<string>}
   */
  async editExistingInvoiceAddress(page: Page, addressData: FakerAddress): Promise<string> {
    await this.waitForSelectorAndClick(page, this.invoiceAddressToolTipLink);
    await this.waitForSelectorAndClick(page, this.editInvoiceAddressButton);

    await this.waitForVisibleSelector(page, this.editAddressIframe);

    const addressFrame = await this.getAddressFrame(page);

    await boAddressesCreatePage.createEditAddress(addressFrame!, addressData, true, false);

    await this.waitForHiddenSelector(page, this.editAddressIframe);

    return this.getInvoiceAddress(page);
  }

  /**
   * Select another shipping address
   * @param page {Page} Browser tab
   * @param address {string} Invoice address to select
   * @returns {Promise<string>}
   */
  async selectAnotherInvoiceAddress(page: Page, address: string): Promise<string> {
    await this.waitForSelectorAndClick(page, this.invoiceAddressToolTipLink);
    await this.waitForSelectorAndClick(page, this.selectAnotherInvoiceAddressButton);

    await this.selectByVisibleText(page, this.changeOrderAddressSelect, address);
    await this.waitForSelectorAndClick(page, this.submitAnotherAddressButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Is private note textarea visible
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async isPrivateNoteTextareaVisible(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.privateNoteTextarea, 2000);
  }

  /**
   * Click on add new private note link
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async clickAddNewPrivateNote(page: Page): Promise<void> {
    await page.locator(this.addNewPrivateNoteLink).click();
    await this.waitForVisibleSelector(page, this.privateNoteTextarea);
  }

  /**
   * Set private note
   * @param page {Page} Browser tab
   * @param note {string} Private note to set
   * @returns {Promise<string>}
   */
  async setPrivateNote(page: Page, note: string): Promise<string> {
    await this.setValue(page, this.privateNoteTextarea, note);
    await page.locator(this.privateNoteSaveButton).click();

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Get private note content
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getPrivateNoteContent(page: Page): Promise<string> {
    return this.getTextContent(page, this.privateNoteTextarea);
  }
}

module.exports = new BOProductBlockCustomersPage();
