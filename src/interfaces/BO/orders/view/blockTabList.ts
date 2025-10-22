import type FakerOrderShipping from '@data/faker/orderShipping';
import {BOViewOrderBasePageInterface} from '@interfaces/BO/orders/view/viewOrderBasePage';
import {type Frame, type Page} from '@playwright/test';

export interface BOProductBlockTabListPageInterface extends BOViewOrderBasePageInterface {
  readonly alertTextInSplitModal: string;
  readonly alertTextInMergeModal: string;

  checkCarrierStatusInMergeModal(page:Page):Promise<number>;
  clickOnEditLink(page: Page): Promise<boolean>;
  clickOnEditShipmentLink(page:Page, row:number):Promise<boolean>;
  clickOnEnterPaymentButton(page: Page, row?: number): Promise<void>;
  clickOnMergeLink(page: Page, row: number): Promise<boolean>;
  clickOnMergeShipmentButton(page:Page):Promise<boolean>;
  clickOnSplitLink(page: Page, row: number): Promise<boolean>;
  clickOnSplitShipmentButton(page:Page):Promise<boolean>;
  clickOnUpdateStatus(page: Page): Promise<string>;
  closeMergeModal(page:Page):Promise<boolean>;
  closeOrderShippingModal(page: Page): Promise<boolean>;
  closeSplitModal(page:Page):Promise<boolean>;
  downloadDeliverySlip(page: Page): Promise<string | null>;
  downloadInvoice(page: Page, row?: number): Promise<string | null>;
  editShipment(page: Page, trackingNumber: string, carrier: string): Promise<boolean>;
  generateInvoice(page: Page): Promise<string>;
  getAlertTextFromMergeModal(page: Page): Promise<string>;
  getAlertTextFromSplitModal(page:Page):Promise<string>;
  getAllDocumentsName(page: Page): Promise<string[]>;
  getCarrierDetails(page: Page, row?: number): Promise<{
    date: string,
    carrier: string,
    shippingCost: string,
    weight: string,
    trackingNumber: string
  }>;
  getCarriersNumber(page: Page): Promise<number>;
  getDocumentDate(page: Page, rowChild?: number): Promise<string>;
  getDocumentsNumber(page: Page): Promise<number>;
  getDocumentType(page: Page, rowChild?: number): Promise<string>;
  getFileName(page: Page, rowChild?: number): Promise<string>;
  getGiftMessage(page: Page): Promise<string>;
  getMerchandiseReturnsDetails(page: Page, row?: number): Promise<{
    date: string
    type: string
    status: string
    number: string
  }>;
  getListOfCarriersInSplitShipment(page:Page):Promise<string>;
  getMerchandiseReturnsNumber(page: Page): Promise<number>;
  getNumberOfDocuments(page: Page): Promise<number>;
  getOrderNoteContent(page: Page): Promise<string>;
  getShipmentNumber(page:Page, row:number):Promise<number>;
  getShippingCarrierID(page: Page): Promise<number>;
  getStatusesNumber(page: Page): Promise<number>;
  getStatusNumber(page: Page | Frame): Promise<number>;
  getSuccessBadge(page: Page, numberOfBadges: number): Promise<string>;
  getTabName(page: Page, tabId: number): Promise<string>;
  getTextColumnFromDocumentsTable(page: Page, columnName: string, row: number): Promise<string>;
  getTextColumnFromHistoryTable(page: Frame | Page, columnName: string, row: number): Promise<string>;
  getTrackingNumber(page:Page, row:number):Promise<string>;
  goToCarriersTab(page: Page): Promise<boolean>;
  goToDocumentsTab(page: Page): Promise<boolean>;
  goToMerchandiseReturnsTab(page: Page): Promise<boolean>;
  goToShipmentsTab(page:Page):Promise<boolean>;
  hasBadgeGift(page: Page): Promise<boolean>;
  hasBadgeRecyclable(page: Page): Promise<boolean>;
  isAddDocumentNoteButtonVisible(page: Page, row?: number): Promise<boolean>;
  isEditDocumentNoteButtonVisible(page: Page, row?: number): Promise<boolean>;
  isEnterPaymentButtonVisible(page: Page, row?: number): Promise<boolean>;
  isGenerateInvoiceButtonVisible(page: Page): Promise<boolean>;
  isOrderNoteOpened(page: Page): Promise<boolean>;
  openOrderNoteTextarea(page: Page): Promise<boolean>;
  resendEmail(page: Page, row?: number): Promise<string>;
  selectCarrierInMergeShipment(page: Page, carrier: string): Promise<boolean>;
  selectCarrierInSplitShipment(page:Page, carrier:string):Promise<number>;
  selectProductAndQuantityInSplitShipment(page: Page, row: number, quantity?: number): Promise<void>;
  selectProductInMergeShipment(page: Page, row:number): Promise<void>;
  setDocumentNote(page: Page, note: string, row?: number): Promise<string>;
  setOrderNote(page: Page, orderNote: string): Promise<string>;
  setShippingDetails(page: Page, shippingData: FakerOrderShipping): Promise<string>;
  unselectProductInSplitShipment(page: Page, row: number): Promise<void>;
  updateOrderStatus(page: Page, status: string): Promise<string>;
}
