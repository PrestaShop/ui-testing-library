import type FakerOrderShipping from '@data/faker/orderShipping';
import {type BOProductBlockTabListPageInterface} from '@interfaces/BO/orders/view/blockTabList';
import {type Frame, type Page} from '@playwright/test';
import {ViewOrderBasePage} from '@versions/develop/pages/BO/orders/view/viewOrderBasePage';

/**
 * Products block, contains functions that can be used on view/edit products block on view order page
 * @class
 * @extends ViewOrderBasePage
 */
class BOProductBlockTabListPage extends ViewOrderBasePage implements BOProductBlockTabListPageInterface {
  public readonly alertTextInSplitModal: string;

  public readonly alertTextInMergeModal: string;

  private readonly successBadge: string;

  private readonly successBadgeNth: (id: number) => string;

  private readonly successBadgeGift: string;

  private readonly successBadgeReclyclable: string;

  private readonly tabList: string;

  private readonly historyTabContent: string;

  private readonly secondOrderStatusesSelect: string;

  private readonly secondUpdateStatusButton: string;

  private readonly statusGridTable: string;

  private readonly statusTableBody: string;

  private readonly statusTableRow: (row: number) => string;

  private readonly statusTableColumn: (row: number, column: string) => string;

  private readonly resendEmailButton: (row: number) => string;

  private readonly orderNoteOpenButton: string;

  private readonly orderNoteCloseButton: string;

  private readonly orderNoteTextarea: string;

  private readonly orderNoteSaveButton: string;

  private readonly documentTab: string;

  private readonly orderDocumentTabContent: string;

  private readonly generateInvoiceButton: string;

  private readonly documentsTableGrid: string;

  private readonly documentsTableBody: string;

  private readonly documentsTableRow: (row: number) => string;

  private readonly documentsTableColumn: (row: number, column: string) => string;

  private readonly documentDate: (row: number) => string;

  private readonly documentNumberLink: (row: number) => string;

  private readonly documentType: (row: number) => string;

  private readonly addDocumentNoteButton: (row: number) => string;

  private readonly documentNoteInput: (row: number) => string;

  private readonly documentNoteSaveButton: (row: number) => string;

  private readonly editDocumentNoteButton: (row: number) => string;

  private readonly enterPaymentButton: (row: number) => string;

  private readonly carriersTab: string;

  private readonly orderShippingTabContent: string;

  private readonly carriersGridTable: string;

  private readonly carriersTableBody: string;

  private readonly carriersTableRow: (row: number) => string;

  private readonly carriersTableColumn: (row: number, column: string) => string;

  private readonly editLink: string;

  private readonly updateOrderShippingModal: string;

  private readonly updateOrderShippingModalDialog: string;

  private readonly trackingNumberInput: string;

  private readonly carrierSelect: string;

  private readonly carrierSelect2: string;

  private readonly carriersSelect2Result: string;

  private readonly carrierToSelect: (id: number) => string;

  private readonly updateCarrierButton: string;

  private readonly cancelCarrierButton: string;

  private readonly giftMessage: string;

  private readonly merchandiseReturnsTab: string;

  private readonly merchandisereturnCount: string;

  private readonly merchandiseReturnsGridTable: string;

  private readonly merchandiseReturnsTableBody: string;

  private readonly splitShipmentModal: string;

  private readonly splitShipmentCarrierSelect: string;

  private readonly splitShipmentSubmitButton: string;

  private readonly splitShipmentFormContainer: string;

  private readonly mergeShipmentFormContainer: string;

  private readonly mergeShipmentCarrierSelect: string;

  private readonly mergeShipmentSubmitButton: string;

  private readonly mergeShipmentModal: string;

  private readonly mergeShipmentWarningMessage: string;

  private readonly splitShipmentWarningMessage: string;

  private readonly mergeShipmentCloseButton: string;

  private readonly splitShipmentCloseButton: string;

  private readonly editShipmentModal: string;

  private readonly editShipmentSubmitButton: string;

  private readonly editShipmentCarrierSelect: string;

  private readonly editShipmentTrackingNumberInput: string;

  private readonly merchandiseReturnsTableRow: (row: number) => string;

  private readonly merchandiseReturnsTableColumn: (row: number, column: string) => string;

  private readonly shipmentsTab: string;

  private readonly shipmentTableRow: (row: number) => string;

  private readonly shipmentTableActionColumn: (row: number) => string;

  private readonly shipmentTableDropdownLink: (row: number) => string;

  private readonly shipmentMergeButton: (row: number) => string;

  private readonly editShipmentLink: (row: number) => string;

  private readonly shipmentSplitButton: (row: number) => string;

  private readonly splitShipmentProductCheckbox: (row: number) => string;

  private readonly splitShipmentQuantityInput: (row: number) => string;

  private readonly shipmentTableShipmentNumber: (row: number) => string;

  private readonly shipmentTableTrackingNumber: (row: number) => string;

  private readonly mergeShipmentProductCheckbox: (row: number) => string;

  /**
   * @constructs
   * Setting up texts and selectors to use on status, documents, carriers and merchandise returns tabs
   */
  constructor() {
    super();

    this.successBadge = '.tab-content span.badge-success';
    this.successBadgeNth = (id: number) => `${this.successBadge}:nth-child(${id + 3})`;
    this.successBadgeGift = `${this.successBadge}[data-badge="gift"]`;
    this.successBadgeReclyclable = `${this.successBadge}[data-badge="recyclable"]`;
    this.alertTextInSplitModal = 'This shipment can\'t be modified because a tracking number has already been assigned,'
      + ' indicating that it has already been shipped.';
    this.alertTextInMergeModal = 'This shipment can\'t be merged because a tracking number has already been assigned,'
      + ' indicating that it has already been shipped.';

    this.tabList = '.nav-tabs[role="tablist"]';

    // Status tab
    this.historyTabContent = '#historyTabContent';
    this.secondOrderStatusesSelect = '#update_order_status_new_order_status_id';
    this.secondUpdateStatusButton = `${this.historyTabContent} .card-details-form button.btn-primary`;
    this.statusGridTable = 'table[data-role=\'history-grid-table\']';
    this.statusTableBody = `${this.statusGridTable} tbody`;
    this.statusTableRow = (row: number) => `${this.statusTableBody} tr:nth-child(${row})`;
    this.statusTableColumn = (row: number, column: string) => `${this.statusTableRow(row)} td[data-role='${column}-column']`;
    this.resendEmailButton = (row: number) => `${this.statusTableRow(row)} td form[action*='resend-email'] button`;
    this.orderNoteOpenButton = `${this.historyTabContent} a.js-order-notes-toggle-btn`;
    this.orderNoteCloseButton = `${this.orderNoteOpenButton}.is-opened`;
    this.orderNoteTextarea = '#internal_note_note';
    this.orderNoteSaveButton = 'button.js-order-notes-btn';

    // Documents tab
    this.documentTab = 'a#orderDocumentsTab';
    this.orderDocumentTabContent = '#orderDocumentsTabContent';
    this.generateInvoiceButton = `${this.orderDocumentTabContent} .btn.btn-primary`;
    this.documentsTableGrid = '#documents-grid-table';
    this.documentsTableBody = `${this.documentsTableGrid} tbody`;
    this.documentsTableRow = (row: number) => `${this.documentsTableBody} tr:nth-child(${row})`;
    this.documentsTableColumn = (row: number, column: string) => `${this.documentsTableRow(row)} td.${column}`;
    this.documentDate = (row: number) => `${this.documentsTableColumn(row, 'documents-table-column-date')}`;
    this.documentNumberLink = (row: number) => `${this.documentsTableColumn(row, 'documents-table-column-download-link')} a`;
    this.documentType = (row: number) => `${this.documentsTableColumn(row, 'documents-table-column-type')}`;
    this.addDocumentNoteButton = (row: number) => `${this.documentsTableRow(row)} td button.js-open-invoice-note-btn`;
    this.documentNoteInput = (row: number) => `${this.documentsTableRow(row)} td input.invoice-note`;
    this.documentNoteSaveButton = (row: number) => `${this.documentsTableRow(row)} td button.js-save-invoice-note-btn`;
    this.editDocumentNoteButton = (row: number) => `${this.documentsTableRow(row)} td button.btn-edit`;
    this.enterPaymentButton = (row: number) => `${this.documentsTableRow(row)} td button.js-enter-payment-btn`;

    // Carriers tab
    this.carriersTab = '#orderShippingTab';
    this.orderShippingTabContent = '#orderShippingTabContent';
    this.carriersGridTable = '#shipping-grid-table';
    this.carriersTableBody = `${this.carriersGridTable} tbody`;
    this.carriersTableRow = (row: number) => `${this.carriersTableBody} tr:nth-child(${row})`;
    this.carriersTableColumn = (row: number, column: string) => `${this.carriersTableRow(row)} td.${column}`;
    this.editLink = `${this.orderShippingTabContent} a.js-update-shipping-btn`;
    this.updateOrderShippingModal = '#updateOrderShippingModal';
    this.updateOrderShippingModalDialog = `${this.updateOrderShippingModal} div.modal-dialog`;
    this.trackingNumberInput = `${this.updateOrderShippingModalDialog} #update_order_shipping_tracking_number`;
    this.carrierSelect = '#update_order_shipping_new_carrier_id';
    this.carrierSelect2 = '#select2-update_order_shipping_new_carrier_id-container';
    this.carriersSelect2Result = '#select2-update_order_shipping_new_carrier_id-results';
    this.carrierToSelect = (id: number) => `${this.carriersSelect2Result} li:nth-child(${id})`;
    this.cancelCarrierButton = `${this.updateOrderShippingModalDialog} button.btn-outline-secondary`;
    this.updateCarrierButton = `${this.updateOrderShippingModalDialog} button.btn-primary`;
    this.giftMessage = '#gift-message';

    // Merchandise returns tab
    this.merchandiseReturnsTab = '#orderReturnsTab';
    this.merchandisereturnCount = `${this.merchandiseReturnsTab} span[data-role='count']`;
    this.merchandiseReturnsGridTable = 'table[data-role=\'merchandise-returns-grid-table\']';
    this.merchandiseReturnsTableBody = `${this.merchandiseReturnsGridTable} tbody`;
    this.merchandiseReturnsTableRow = (row: number) => `${this.merchandiseReturnsTableBody} tr:nth-child(${row})`;
    this.merchandiseReturnsTableColumn = (row: number, column: string) => `${this.merchandiseReturnsTableRow(row)}`
      + ` td[data-role='merchandise-${column}']`;

    // SHipments tab
    this.shipmentsTab = '#orderShipmentsTab';
    this.shipmentTableRow = (row: number) => `#shipment_grid_table tr:nth-child(${row})`;
    this.shipmentTableActionColumn = (row: number) => `${this.shipmentTableRow(row)} td.column-actions`;
    this.shipmentTableDropdownLink = (row: number) => `${this.shipmentTableActionColumn(row)} div.dropdown`;
    this.shipmentMergeButton = (row: number) => `${this.shipmentTableActionColumn(row)} a[data-target="#mergeShipmentModal"]`;
    this.editShipmentLink = (row: number) => `${this.shipmentTableActionColumn(row)} a.js-update-shipping-btn`;
    this.shipmentSplitButton = (row: number) => `${this.shipmentTableActionColumn(row)} a[data-show-modal="split-shipment"]`;
    this.splitShipmentModal = '#splitShipmentModal';
    this.splitShipmentProductCheckbox = (row: number) => `#split_shipment_products_${row}_selected`;
    this.splitShipmentQuantityInput = (row: number) => `#split_shipment_products_${row}_selected_quantity`;
    this.splitShipmentCarrierSelect = '#split_shipment_carrier';
    this.splitShipmentSubmitButton = 'button[id="submitSplitShipment"]';
    this.splitShipmentFormContainer = '#splitShipmentFormContainer';
    this.mergeShipmentFormContainer = '#mergeShipmentFormContainer';
    this.shipmentTableShipmentNumber = (row: number) => `${this.shipmentTableRow(row)} td.column-shipment_number`;
    this.shipmentTableTrackingNumber = (row: number) => `${this.shipmentTableRow(row)} td.column-tracking_number`;
    this.mergeShipmentProductCheckbox = (row: number) => `table.shipment-form__table tr:nth-child(${row})`
      + ' input[id*="merge_shipment_product"]';
    this.mergeShipmentCarrierSelect = '#merge_shipment_merge_to_shipment';
    this.mergeShipmentSubmitButton = 'button[id*="submitMergeShipment"]';
    this.mergeShipmentModal = '#mergeShipmentModal';
    this.mergeShipmentWarningMessage = '#merge_shipment div.alert-warning p.alert-text';
    this.splitShipmentWarningMessage = '#split_shipment div.alert-warning p.alert-text';
    this.mergeShipmentCloseButton = `${this.mergeShipmentModal} div.modal-header button.close`;
    this.splitShipmentCloseButton = `${this.splitShipmentModal} div.modal-header button.close`;
    this.editShipmentModal = '#editShipmentModal';
    this.editShipmentSubmitButton = '#submitEditShipment';
    this.editShipmentCarrierSelect = '#edit_shipment_carrier';
    this.editShipmentTrackingNumberInput = '#edit_shipment_tracking_number';
  }

  /*
  Methods
   */
  /**
   * Get tab name
   * @param page {Page} Browser tab
   * @param tabId {number} Tab ID
   */
  async getTabName(page: Page, tabId: number): Promise<string> {
    return this.getTextContent(page, `${this.tabList} li:nth-child(${tabId})`);
  }

  /**
   * Get success badges
   * @param page {Page} Browser tab
   * @param numberOfBadges {number} Number of badges to get text content
   * @returns {Promise<string>}
   */
  async getSuccessBadge(page: Page, numberOfBadges: number): Promise<string> {
    let badge: string = '';

    for (let i = 1; i <= numberOfBadges; i++) {
      badge += await this.getTextContent(page, this.successBadgeNth(i));
    }

    return badge;
  }

  /**
   * Return if the badge "Gift" is present
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async hasBadgeGift(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.successBadgeGift);
  }

  /**
   Return if the badge "Recycled packaging" is present
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async hasBadgeRecyclable(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.successBadgeReclyclable);
  }

  // Methods for status tab
  /**
   * Get statuses number
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getStatusesNumber(page: Page): Promise<number> {
    return this.getNumberFromText(page, this.historyTabContent);
  }

  /**
   * Click on update status without select new status and get error message
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async clickOnUpdateStatus(page: Page): Promise<string> {
    await page.locator(this.secondUpdateStatusButton).click();

    return this.getAlertDangerBlockParagraphContent(page);
  }

  /**
   * Modify the order status from status tab
   * @param page {Page} Browser tab
   * @param status {string} Status to edit
   * @returns {Promise<string>}
   */
  async updateOrderStatus(page: Page, status: string): Promise<string> {
    await this.selectByVisibleText(page, this.secondOrderStatusesSelect, status);
    await page.locator(this.secondUpdateStatusButton).click();

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Get status number
   * @param page {Page|Frame} Browser tab
   * @returns {Promise<number>}
   */
  async getStatusNumber(page: Page | Frame): Promise<number> {
    return this.getNumberFromText(page, this.historyTabContent);
  }

  /**
   * Get text from Column on history table
   * @param page {Frame|Page} Browser tab
   * @param columnName {string} Column name on table
   * @param row {number} status row in table
   * @returns {Promise<string>}
   */
  async getTextColumnFromHistoryTable(page: Frame | Page, columnName: string, row: number): Promise<string> {
    return this.getTextContent(page, this.statusTableColumn(row, columnName));
  }

  /**
   * Is order note opened
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async isOrderNoteOpened(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.orderNoteCloseButton, 100);
  }

  /**
   * Open order note textarea
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async openOrderNoteTextarea(page: Page): Promise<boolean> {
    await this.waitForSelectorAndClick(page, this.orderNoteOpenButton);

    return this.isOrderNoteOpened(page);
  }

  /**
   * Set order note
   * @param page {Page} Browser tab
   * @param orderNote {String} Value of order note to set on textarea
   * @returns {Promise<string>}
   */
  async setOrderNote(page: Page, orderNote: string): Promise<string> {
    if (!(await this.isOrderNoteOpened(page))) {
      await this.openOrderNoteTextarea(page);
    }
    await this.setValue(page, this.orderNoteTextarea, orderNote);
    await this.waitForSelectorAndClick(page, this.orderNoteSaveButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Get order note content
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getOrderNoteContent(page: Page): Promise<string> {
    return this.getTextContent(page, this.orderNoteTextarea, false);
  }

  /**
   * Resend email to customer
   * @param page {Page} Browser tab
   * @param row {number} Value of row number of resend button
   * @returns {Promise<string>}
   */
  async resendEmail(page: Page, row: number = 1): Promise<string> {
    await this.waitForSelectorAndClick(page, this.resendEmailButton(row));

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  // Methods for documents tab
  /**
   * Go to documents tab
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async goToDocumentsTab(page: Page): Promise<boolean> {
    await page.locator(this.documentTab).click();
    return this.elementVisible(page, `${this.documentTab}.active`, 1000);
  }

  /**
   * Is generate invoice button visible
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async isGenerateInvoiceButtonVisible(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.generateInvoiceButton, 1000);
  }

  /**
   * Get documents number
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getDocumentsNumber(page: Page): Promise<number> {
    return this.getNumberFromText(page, `${this.documentTab} .count`);
  }

  /**
   * Get text from Column on documents table
   * @param page {Page} Browser tab
   * @param columnName {string} Column name on table
   * @param row {number} status row in table
   * @returns {Promise<string>}
   */
  async getTextColumnFromDocumentsTable(page: Page, columnName: string, row: number): Promise<string> {
    return this.getTextContent(page, this.documentsTableColumn(row, columnName));
  }

  /**
   * Click on generate invoice button
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async generateInvoice(page: Page): Promise<string> {
    await page.locator(this.generateInvoiceButton).click();

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Get file name
   * @param page {Page} Browser tab
   * @param rowChild {number} Document row on table
   * @returns {Promise<string>}
   */
  async getFileName(page: Page, rowChild: number = 1): Promise<string> {
    await this.goToDocumentsTab(page);

    const fileName = await this.getTextContent(page, this.documentNumberLink(rowChild));

    return fileName.replace('#', '').trim();
  }

  /**
   * Get document date
   * @param page {Page} Browser tab
   * @param rowChild {number} Document row on table
   * @returns {Promise<string>}
   */
  async getDocumentDate(page: Page, rowChild: number = 1): Promise<string> {
    await this.goToDocumentsTab(page);

    return this.getTextContent(page, this.documentDate(rowChild));
  }

  /**
   * Get document name
   * @param page {Page} Browser tab
   * @param rowChild {number} Document row on table
   * @returns {Promise<string>}
   */
  async getDocumentType(page: Page, rowChild: number = 1): Promise<string> {
    await this.goToDocumentsTab(page);

    return this.getTextContent(page, this.documentType(rowChild));
  }

  /**
   * Get all documents name
   * @param page {Page} Browser tab
   * @returns {Promise<string[]>}
   */
  async getAllDocumentsName(page: Page): Promise<string[]> {
    const numberOfDocuments: number = await this.getNumberOfDocuments(page);
    let columnNames: string[] = [];

    for (let i = 1; i <= numberOfDocuments + 1; i++) {
      if (i !== 2) {
        columnNames.push(await this.getTextContent(page, this.documentType(i)));
      }
    }

    return columnNames;
  }

  /**
   * Get number of documents
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getNumberOfDocuments(page: Page): Promise<number> {
    return page.locator(`${this.documentsTableBody} tr td.documents-table-column-type`).count();
  }

  /**
   * Download a document in document tab
   * @param page {Page} Browser tab
   * @param row {number} Document row on table
   * @return {Promise<string|null>}
   */
  async downloadDocument(page: Page, row: number): Promise<string | null> {
    return this.clickAndWaitForDownload(page, this.documentNumberLink(row));
  }

  /**
   * Download invoice
   * @param page {Page} Browser tab
   * @param row {number} Row of the invoice
   * @returns {Promise<string|null>}
   */
  async downloadInvoice(page: Page, row: number = 1): Promise<string | null> {
    await this.goToDocumentsTab(page);

    return this.downloadDocument(page, row);
  }

  /**
   * Set document note
   * @param page {Page} Browser tab
   * @param note {String} Text to set on note input
   * @param row {number} Row in documents table
   * @returns {Promise<string>}
   */
  async setDocumentNote(page: Page, note: string, row: number = 1): Promise<string> {
    await this.waitForSelectorAndClick(page, this.addDocumentNoteButton(row));
    await this.setValue(page, this.documentNoteInput(row + 1), note);
    await this.waitForSelectorAndClick(page, this.documentNoteSaveButton(row + 1));

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Is edit note button visible
   * @param page {Page} Browser tab
   * @param row {number} Row on table documents
   * @returns {Promise<boolean>}
   */
  async isEditDocumentNoteButtonVisible(page: Page, row: number = 1): Promise<boolean> {
    await this.goToDocumentsTab(page);

    return this.elementVisible(page, this.editDocumentNoteButton(row), 1000);
  }

  /**
   * Is add note button visible
   * @param page {Page} Browser tab
   * @param row {number} Row on table documents
   * @returns {Promise<boolean>}
   */
  async isAddDocumentNoteButtonVisible(page: Page, row: number = 1): Promise<boolean> {
    await this.goToDocumentsTab(page);

    return this.elementVisible(page, this.addDocumentNoteButton(row), 1000);
  }

  /**
   * Is enter payment button visible
   * @param page {Page} Browser tab
   * @param row {number} Row on table documents
   * @returns {Promise<boolean>}
   */
  async isEnterPaymentButtonVisible(page: Page, row: number = 1): Promise<boolean> {
    await this.goToDocumentsTab(page);

    return this.elementVisible(page, this.enterPaymentButton(row), 1000);
  }

  /**
   * Click on enter payment button
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @returns {Promise<void>}
   */
  async clickOnEnterPaymentButton(page: Page, row: number = 1): Promise<void> {
    await this.waitForSelectorAndClick(page, this.enterPaymentButton(row));
  }

  /**
   * Download delivery slip
   * @param page {Page} Browser tab
   * @returns {Promise<string|null>}
   */
  async downloadDeliverySlip(page: Page): Promise<string | null> {
    await this.goToDocumentsTab(page);

    // Delete the target because a new tab is opened when downloading the file
    return this.downloadDocument(page, 3);
  }

  /**
   * Get carriers number
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getCarriersNumber(page: Page): Promise<number> {
    return this.getNumberFromText(page, `${this.carriersTab} .count`);
  }

  /**
   * Go to carriers tab
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async goToCarriersTab(page: Page): Promise<boolean> {
    await this.waitForSelectorAndClick(page, this.carriersTab);

    return this.elementVisible(page, `${this.carriersTab}.active`, 1000);
  }

  /**
   * Get gift message
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getGiftMessage(page: Page): Promise<string> {
    if (await this.elementVisible(page, this.giftMessage, 1000)) {
      return this.getTextContent(page, this.giftMessage);
    }
    return '';
  }

  /**
   * Get carrier details
   * @param page {Page} Browser tab
   * @param row {number} Row on carriers table
   * @returns {Promise<{date: string, carrier: string, shippingCost: string, weight: string, trackingNumber: string}>}
   */
  async getCarrierDetails(page: Page, row: number = 1): Promise<{
    date: string,
    carrier: string,
    shippingCost: string,
    weight: string,
    trackingNumber: string
  }> {
    return {
      date: await this.getTextContent(page, this.carriersTableColumn(row, 'date')),
      carrier: await this.getTextContent(page, this.carriersTableColumn(row, 'carrier-name')),
      weight: await this.getTextContent(page, this.carriersTableColumn(row, 'carrier-weight')),
      shippingCost: await this.getTextContent(page, this.carriersTableColumn(row, 'carrier-price')),
      trackingNumber: await this.getTextContent(page, this.carriersTableColumn(row, 'carrier-tracking-number')),
    };
  }

  /**
   * Click on edit link and check if the modal is visible
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async clickOnEditLink(page: Page): Promise<boolean> {
    await this.waitForSelectorAndClick(page, this.editLink);

    return this.elementVisible(page, this.updateOrderShippingModalDialog, 1000);
  }

  /**
   * Click on cancel button and check if the modal is not visible
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async closeOrderShippingModal(page: Page): Promise<boolean> {
    await page.locator(this.cancelCarrierButton).click();

    return this.elementNotVisible(page, this.updateOrderShippingModalDialog, 3000);
  }

  /**
   * Set shipping details
   * @param page {Page} Browser tab
   * @param shippingData {FakerOrderShipping} Data to set on shipping form
   * @returns {Promise<string>}
   */
  async setShippingDetails(page: Page, shippingData: FakerOrderShipping): Promise<string> {
    await this.setValue(page, this.trackingNumberInput, shippingData.trackingNumber);
    await page.locator(this.carrierSelect2).click();
    await this.waitForSelectorAndClick(page, this.carrierToSelect(shippingData.carrierID));
    await page.locator(this.updateCarrierButton).click();

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Get shipping carrier ID
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getShippingCarrierID(page: Page): Promise<number> {
    return parseInt(await this.getAttributeContent(page, `${this.carrierSelect} option[selected='selected']`, 'value'), 10);
  }

  // Methods for Merchandise returns tab
  /**
   * Go to merchandise returns tab
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async goToMerchandiseReturnsTab(page: Page): Promise<boolean> {
    await this.waitForSelectorAndClick(page, this.merchandiseReturnsTab);

    return this.elementVisible(page, `${this.merchandiseReturnsTab}.active`, 1000);
  }

  /**
   * Get merchandise returns number
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getMerchandiseReturnsNumber(page: Page): Promise<number> {
    return this.getNumberFromText(page, this.merchandisereturnCount);
  }

  /**
   * Get merchandise returns details
   * @param page {Page} Browser tab
   * @param row {number} Row on table merchandise returns
   * @returns {Promise<{date: string, type: string, status: string, number: string}>}
   */
  async getMerchandiseReturnsDetails(page: Page, row: number = 1): Promise<{
    date: string
    type: string
    status: string
    number: string
  }> {
    return {
      date: await this.getTextContent(page, this.merchandiseReturnsTableColumn(row, 'return-date')),
      type: await this.getTextContent(page, this.merchandiseReturnsTableColumn(row, 'return-type')),
      status: await this.getTextContent(page, this.merchandiseReturnsTableColumn(row, 'return-state')),
      number: await this.getTextContent(page, this.merchandiseReturnsTableColumn(row, 'return-id')),
    };
  }

  // Methods for shipments tab
  /**
   * Go to shipments tab
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async goToShipmentsTab(page: Page): Promise<boolean> {
    await page.locator(this.shipmentsTab).click();
    return this.elementVisible(page, `${this.shipmentsTab}.active`, 1000);
  }

  /**
   * Click on split link
   * @param page {Page} Browser tab
   * @param row {number} Row in the list
   * @returns {Promise<boolean>}
   */
  async clickOnSplitLink(page: Page, row: number): Promise<boolean> {
    await this.waitForSelectorAndClick(page, this.shipmentTableDropdownLink(row));
    await this.waitForSelectorAndClick(page, this.shipmentSplitButton(row));

    return this.elementVisible(page, this.splitShipmentModal, 2000);
  }

  /**
   * Select product and quantity in split shipment modal
   * @param page {Page} Browser tab
   * @param row {number} Row in the list
   * @param quantity {number} Quantity of product
   * @returns {Promise<void>}
   */
  async selectProductAndQuantityInSplitShipment(page: Page, row: number, quantity: number = 1): Promise<void> {
    await page.locator(this.splitShipmentProductCheckbox(row - 1)).check();
    await this.setValue(page, this.splitShipmentQuantityInput(row - 1), quantity);
    await page.waitForTimeout(2000);
  }

  /**
   * Unselect product in split shipment modal
   * @param page {Page} Browser tab
   * @param row {number} Row in the list
   * @returns {Promise<void>}
   */
  async unselectProductInSplitShipment(page: Page, row: number): Promise<void> {
    await this.setChecked(page, this.splitShipmentProductCheckbox(row - 1), false);
  }

  /**
   * Select carrier in split shipment modal
   * @param page {Page} Browser tab
   * @param carrier {string} Carrier name to select
   * @returns {Promise<number>}
   */
  async selectCarrierInSplitShipment(page: Page, carrier: string): Promise<number> {
    await page.locator(this.splitShipmentCarrierSelect).selectOption({label: carrier});

    return page.locator(`${this.splitShipmentSubmitButton}[disabled]`).count();
  }

  /**
   * Get list of carriers in split shipment modal
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getListOfCarriersInSplitShipment(page: Page): Promise<string> {
    return this.getTextContent(page, this.splitShipmentCarrierSelect, false);
  }

  /**
   * Click on split shipment button
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async clickOnSplitShipmentButton(page: Page): Promise<boolean> {
    await page.locator(this.splitShipmentSubmitButton).click();

    return this.elementNotVisible(page, this.splitShipmentFormContainer, 2000);
  }

  /**
   * Click on merge link
   * @param page {Page} Browser tab
   * @param row {number} Row in the list
   * @returns {Promise<boolean>}
   */
  async clickOnMergeLink(page: Page, row: number): Promise<boolean> {
    await this.waitForSelectorAndClick(page, this.shipmentTableDropdownLink(row));
    await this.waitForSelectorAndClick(page, this.shipmentMergeButton(row));

    return this.elementVisible(page, this.mergeShipmentFormContainer, 2000);
  }

  /**
   * Get shipment number
   * @param page {Page} Browser tab
   * @param row {number} Row in the list
   * @returns {Promise<number>}
   */
  async getShipmentNumber(page: Page, row: number): Promise<number> {
    return parseInt(await this.getTextContent(page, this.shipmentTableShipmentNumber(row)), 10);
  }

  /**
   * Select product in merge shipment modal
   * @param page {Page} Browser tab
   * @param row {number} Row in the list
   * @returns {Promise<void>}
   */
  async selectProductInMergeShipment(page: Page, row: number = 1): Promise<void> {
    await page.locator(this.mergeShipmentProductCheckbox(row)).check();
  }

  /**
   * Select carrier in merge shipment modal
   * @param page {Page} Browser tab
   * @param carrier {string} The carrier name to select
   * @returns {Promise<boolean>}
   */
  async selectCarrierInMergeShipment(page: Page, carrier: string): Promise<boolean> {
    await page.locator(this.mergeShipmentCarrierSelect).selectOption({label: carrier});

    return this.elementNotVisible(page, `${this.mergeShipmentSubmitButton}[disabled]`);
  }

  /**
   * Click on merge shipment button
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async clickOnMergeShipmentButton(page: Page): Promise<boolean> {
    await page.locator(this.mergeShipmentSubmitButton).click();

    return this.elementNotVisible(page, this.mergeShipmentModal, 2000);
  }

  /**
   * Click on edit shipment link
   * @param page {Page} Browser tab
   * @param row {number} Row of shipment to edit from the table
   * @returns {Promise<boolean>}
   */
  async clickOnEditShipmentLink(page: Page, row: number): Promise<boolean> {
    await page.locator(this.editShipmentLink(row)).click();

    return this.elementVisible(page, this.editShipmentModal, 2000);
  }

  /**
   * Edit shipment
   * @param page {Page} Browser tab
   * @param trackingNumber {string} Tracking number to set in the input
   * @param carrier {string} Carrier name to set in the input
   * @returns {Promise<boolean>}
   */
  async editShipment(page: Page, trackingNumber: string, carrier: string): Promise<boolean> {
    await page.locator(this.editShipmentTrackingNumberInput).fill(trackingNumber);
    await page.locator(this.editShipmentCarrierSelect).selectOption({label: carrier});
    await page.locator(this.editShipmentSubmitButton).click();

    return this.elementNotVisible(page, this.editShipmentModal, 2000);
  }

  /**
   * Get tracking number from the shipping table
   * @param page {Page} Browser tab
   * @param row {number} Row of shipment to edit from the table
   * @returns {Promise<string>}
   */
  async getTrackingNumber(page: Page, row: number): Promise<string> {
    return this.getTextContent(page, this.shipmentTableTrackingNumber(row));
  }

  /**
   * Get alert test from split modal
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getAlertTextFromSplitModal(page: Page): Promise<string> {
    return this.getTextContent(page, this.splitShipmentWarningMessage);
  }

  /**
   * Close split modal
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async closeSplitModal(page: Page): Promise<boolean> {
    await page.locator(this.splitShipmentCloseButton).click();

    return this.elementNotVisible(page, this.splitShipmentModal, 2000);
  }

  /**
   * Check carrier status in merge table
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async checkCarrierStatusInMergeModal(page: Page): Promise<number> {
    return page.locator(`${this.mergeShipmentCarrierSelect} option[disabled]`).count();
  }

  /**
   * Close merge modal
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async closeMergeModal(page: Page): Promise<boolean> {
    await page.locator(this.mergeShipmentCloseButton).click();

    return this.elementNotVisible(page, this.mergeShipmentModal, 2000);
  }

  /**
   * Get alert text from merge modal
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getAlertTextFromMergeModal(page: Page): Promise<string> {
    return this.getTextContent(page, this.mergeShipmentWarningMessage);
  }
}

module.exports = new BOProductBlockTabListPage();
