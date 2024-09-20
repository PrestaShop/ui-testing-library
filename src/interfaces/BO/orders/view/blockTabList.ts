import type FakerOrderShipping from '@data/faker/orderShipping';
import {BOViewOrderBasePageInterface} from '@interfaces/BO/orders/view/viewOrderBasePage';
import {type Frame, type Page} from '@playwright/test';

export interface BOProductBlockTabListPageInterface extends BOViewOrderBasePageInterface {
  clickOnEditLink(page: Page): Promise<boolean>;
  clickOnEnterPaymentButton(page: Page, row?: number): Promise<void>;
  clickOnUpdateStatus(page: Page): Promise<string>;
  closeOrderShippingModal(page: Page): Promise<boolean>;
  downloadDeliverySlip(page: Page): Promise<string | null>;
  downloadInvoice(page: Page, row?: number): Promise<string | null>;
  generateInvoice(page: Page): Promise<string>;
  getCarrierDetails(page: Page, row?: number): Promise<{
    date: string,
    carrier: string,
    shippingCost: string,
    weight: string,
    trackingNumber: string
  }>;
  getCarriersNumber(page: Page): Promise<number>;
  getDocumentDate(page: Page, rowChild?: number): Promise<string>;
  getDocumentType(page: Page, rowChild?: number): Promise<string>;
  getDocumentsNumber(page: Page): Promise<number>;
  getFileName(page: Page, rowChild?: number): Promise<string>;
  getGiftMessage(page: Page): Promise<string>;
  getMerchandiseReturnsDetails(page: Page, row?: number): Promise<{
    date: string
    type: string
    status: string
    number: string
  }>;
  getMerchandiseReturnsNumber(page: Page): Promise<number>;
  getOrderNoteContent(page: Page): Promise<string>;
  getShippingCarrierID(page: Page): Promise<number>;
  getStatusNumber(page: Page | Frame): Promise<number>;
  getStatusesNumber(page: Page): Promise<number>;
  getSuccessBadge(page: Page, numberOfBadges: number): Promise<string>;
  getTextColumnFromDocumentsTable(page: Page, columnName: string, row: number): Promise<string>;
  getTextColumnFromHistoryTable(page: Frame | Page, columnName: string, row: number): Promise<string>;
  goToCarriersTab(page: Page): Promise<boolean>;
  goToDocumentsTab(page: Page): Promise<boolean>;
  goToMerchandiseReturnsTab(page: Page): Promise<boolean>;
  hasBadgeGift(page: Page): Promise<boolean>;
  hasBadgeRecyclable(page: Page): Promise<boolean>;
  isAddDocumentNoteButtonVisible(page: Page, row?: number): Promise<boolean>;
  isEditDocumentNoteButtonVisible(page: Page, row?: number): Promise<boolean>;
  isEnterPaymentButtonVisible(page: Page, row?: number): Promise<boolean>;
  isGenerateInvoiceButtonVisible(page: Page): Promise<boolean>;
  isOrderNoteOpened(page: Page): Promise<boolean>;
  openOrderNoteTextarea(page: Page): Promise<boolean>;
  resendEmail(page: Page, row?: number): Promise<string>;
  setDocumentNote(page: Page, note: string, row?: number): Promise<string>;
  setOrderNote(page: Page, orderNote: string): Promise<string>;
  setShippingDetails(page: Page, shippingData: FakerOrderShipping): Promise<string>;
  updateOrderStatus(page: Page, status: string): Promise<string>;
}
