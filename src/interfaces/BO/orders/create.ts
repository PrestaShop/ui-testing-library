import type FakerCustomer from '@data/faker/customer';
import type FakerOrder from '@data/faker/order';
import type FakerOrderStatus from '@data/faker/orderStatus';
import type FakerProduct from '@data/faker/product';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Frame, type Page} from '@playwright/test';

export interface BOOrdersCreatePageInterface extends BOBasePagePageInterface {
  readonly cartRuleAlreadyExistErrorText: string;
  readonly emailSendSuccessMessage: string;
  readonly noCustomerFoundText: string;
  readonly noProductFoundText: string;
  readonly noVoucherFoudErrorMessage: string;
  readonly pageTitle: string;
  readonly voucherDisabledErrorMessage: string;

  addNewCustomer(page: Page, customerData: FakerCustomer): Promise<string>;
  addProductQuantity(page: Page, quantity: number, row: number): Promise<void>;
  addProductToCartAndGetAlert(
    page: Page,
    productToSearch: string,
    productToSelect: string,
    quantity?: number,
  ): Promise<string>
  addProductToCart(
    page: Page,
    productToSearch: FakerProduct,
    productToSelect: string,
    quantity?: number,
    customizedValue?: string,
  ): Promise<void>;
  chooseCustomer(page: Page, cardPosition?: number): Promise<boolean>;
  chooseDeliveryAddress(page: Page, deliveryAddress: string): Promise<string>;
  chooseInvoiceAddress(page: Page, invoiceAddress: string): Promise<string>;
  clickOnAddNewAddressButton(page: Page): Promise<boolean>;
  clickOnAddVoucherButton(page: Page): Promise<boolean>;
  clickOnCartDetailsButton(page: Page, row?: number): Promise<boolean>;
  clickOnCartUseButton(page: Page, row?: number): Promise<boolean>;
  clickOnCreateOrderButton(page: Page, waitForNavigation?: boolean): Promise<boolean>;
  clickOnDetailsButton(page: Page): Promise<boolean>;
  clickOnEditDeliveryAddressButton(page: Page): Promise<boolean>;
  clickOnEditInvoiceAddressButton(page: Page): Promise<boolean>;
  clickOnOrderDetailsButton(page: Page, row?: number): Promise<boolean>;
  clickOnOrdersTab(page: Page): Promise<boolean>;
  clickOnOrderUseButton(page: Page, row?: number): Promise<boolean>;
  closeIframe(page: Page): Promise<boolean>;
  createOrder(page: Page, orderToMake: FakerOrder, isNewCustomer?: boolean): Promise<void>;
  getAddAddressIframe(page: Page): Frame | null;
  getCartRuleErrorText(page: Page): Promise<string>;
  getCreateVoucherIframe(page: Page): Frame | null;
  getCustomerCardBody(page: Page, cardPosition?: number): Promise<string>;
  getCustomerIframe(page: Page, customerID: number): Frame | null;
  getCustomerNameFromResult(page: Page, cardPosition?: number): Promise<string>;
  getCustomersSearchNumber(page: Page): Promise<number>;
  getDeliveryAddressDetails(page: Page): Promise<string>;
  getDeliveryAddressList(page: Page): Promise<string>;
  getDeliveryOption(page: Page): Promise<string>;
  getDeliveryOptions(page: Page): Promise<string>;
  getEditAddressIframe(page: Page): Frame | null;
  getInvoiceAddressDetails(page: Page): Promise<string>;
  getNoCustomerFoundError(page: Page): Promise<string>;
  getOrderIframe(page: Page, orderID: number): Frame | null;
  getOrdersNumber(page: Page): Promise<number>;
  getProductDetailsFromTable(page: Page, row?: number): Promise<{
    reference: string,
    image: string,
    quantityMax: number,
    price: number,
    description: string,
    quantityMin: number,
  }>;
  getProductGiftDetailsFromTable(page: Page, row?: number): Promise<{
    reference: string,
    image: string,
    quantity: number,
    price: string,
    description: string,
    basePrice: string,
  }>
  getShippingCost(page: Page): Promise<string>;
  getShoppingCartIframe(page: Page, cartId: number): Frame | null;
  getSummaryDetails(page: Page): Promise<{
    totalTaxIncluded: string,
    totalVouchers: string,
    totalTaxes: string,
    totalProducts: string,
    totalTaxExcluded: string,
    totalShipping: string,
  }>;
  getTextColumnFromCartsTable(page: Page, column: string, row?: number): Promise<string>;
  getTextFromOrdersTable(page: Page, column: string, row?: number): Promise<string>;
  getTextWhenCartsTableIsEmpty(page: Page): Promise<string>;
  getTotal(page: Page): Promise<string>;
  getVoucherDetailsFromTable(page: Page, row?: number): Promise<{name: string, description: string, value: number}>;
  isProductNotVisibleInCart(page: Page, row: number): Promise<boolean>;
  isProductTableRowNotVisible(page: Page, row: number): Promise<boolean>;
  isShippingBlockVisible(page: Page): Promise<boolean>;
  isSummaryBlockVisible(page: Page): Promise<boolean>;
  isVouchersTableNotVisible(page: Page): Promise<boolean>;
  removeProduct(page: Page, row?: number): Promise<boolean>;
  removeVoucher(page: Page, row?: number): Promise<void>;
  searchCustomer(page: Page, customer: string): Promise<void>;
  searchProductAndGetAlert(page: Page, productName: string): Promise<string>;
  searchVoucher(page: Page, voucherName: string): Promise<string>;
  selectAnotherCurrency(page: Page, currency: string): Promise<void>;
  selectAnotherLanguage(page: Page, language: string): Promise<void>;
  setDeliveryOption(page: Page, deliveryOptionName: string, isFreeShipping?: boolean): Promise<string>;
  setFreeShipping(page: Page, isEnabled: boolean): Promise<void>;
  setGift(page: Page, isEnabled: boolean): Promise<void>;
  setGiftMessage(page: Page, giftMessage: string): Promise<void>;
  setMoreActionsPreFilledOrder(page: Page): Promise<string>;
  setMoreActionsProceedToCheckout(page: Page): Promise<Page>;
  setOrderMessage(page: Page, message: string): Promise<void>;
  setOrderStatus(page: Page, orderStatus: FakerOrderStatus): Promise<void>;
  setPaymentMethod(page: Page, paymentMethodModuleName: string): Promise<void>;
  setRecycledPackaging(page: Page, isEnabled: boolean): Promise<void>;
  setSummaryAndCreateOrder(page: Page, paymentMethodModuleName: string, orderStatus: FakerOrderStatus): Promise<void>;
  waitForVisibleProductImage(page: Page, row: number, image: string): Promise<void>;
}
