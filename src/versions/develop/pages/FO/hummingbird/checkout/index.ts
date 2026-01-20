import {type ProductDetailsBasic} from '@data/types/product';
import {type FoCheckoutPageInterface} from '@interfaces/FO/checkout';
import {type Page} from '@playwright/test';
import {CheckoutPage as FoCheckoutPageClassic} from '@versions/develop/pages/FO/classic/checkout';

/**
 * Cart page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FoCheckoutPage extends FoCheckoutPageClassic implements FoCheckoutPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');

    // Selectors
    this.successAlert = '#notifications div.alert-success';
    this.stepFormSuccess = '.checkout-steps__step--success';
    this.personalInformationEditLink = '#wrapper ul.checkout-steps__list'
      + ' button[data-bs-target="#checkout-personal-information-step"]';

    // Personal information form
    this.personalInformationStepForm = 'li[data-step="checkout-personal-information-step"]';
    this.personalInformationCustomerIdentity = '#checkout-personal-information-step a[href*="identity"]';

    // Sign in selectors
    this.signInHyperLink = '#checkout-personal-information-step div.step__content '
      + '#personal-information-tabs button[data-bs-target="#checkout-login-form"]';
    this.forgetPasswordLink = '#login-form a[href*=password-recovery]';
    this.personalInformationContinueButton = '#login-form button[data-link-action="sign-in"]';
    this.loginErrorMessage = `${this.checkoutLoginForm} div.alert-danger`;

    // Addresses step selectors
    this.addressStepSection = 'li[data-step="checkout-addresses-step"]';
    this.addressStepCountrySelect = 'select[name="id_country"]';
    this.stateInput = 'select[name="id_state"]';
    this.addressStepEditButton = `${this.addressStepSection} button`;
    this.addAddressButton = '.js-address-form a[href*="?newAddress=delivery"]';
    this.addInvoiceAddressButton = '.js-address-form a[href*="?newAddress=invoice"]';

    // Shipping method selectors
    this.deliveryStepSection = 'li[data-step="checkout-delivery-step"]';
    this.deliveryStepEditButton = `${this.deliveryStepSection} button`;
    this.deliveryStepCarriersList = '#checkout-delivery-step .delivery-options__container';
    this.deliveryStepCarriersListError = `${this.deliveryStepCarriersList} .alert-danger`;
    this.deliveryOptionAllNamesSpan = '#js-delivery .delivery-options__list span.delivery-option__carrier-name';
    this.deliveryOptionAllPricesSpan = '#js-delivery .delivery-options__list div.delivery-option__price';
    this.deliveryAddressPosition = (position) => `#delivery-addresses article:nth-child(${position})`;
    this.invoiceAddressPosition = (position) => `#invoice-addresses article:nth-child(${position})`;
    this.deliveryAddressEditButton = (addressID: number) => `#id_address_delivery-address-${addressID} a.address-card__edit`;
    this.deliveryAddressDeleteButton = (addressID: number) => `#id_address_delivery-address-${addressID} a.address-card__delete`;
    this.deliveryOptions = '#js-delivery .delivery-options__list';
    this.deliveryOptionLabel = (id: number) => `${this.deliveryOptions} input#delivery_option_${id}`;
    this.deliveryOption = (carrierID: number) => `${this.deliveryOptions} label[for="delivery_option_${carrierID}"]`;
    this.deliveryStepCarrierName = (carrierID: number) => `${this.deliveryOption(carrierID)} span.delivery-option__carrier-name`;
    this.deliveryStepCarrierDelay = (carrierID: number) => `${this.deliveryOption(carrierID)} div.delivery-option__content`;
    this.deliveryStepCarrierPrice = (carrierID: number) => `${this.deliveryOption(carrierID)} div.delivery-option__price`;

    // Payment methods selectors
    this.paymentOptionAlertDanger = '.payment-options__list p.alert-danger';
    this.termsOfServiceModalDiv = '#checkout-modal .modal-body';
    this.noPaymentNeededElement = `${this.paymentStepSection} .step__content .payment-options__free`;

    // Checkout summary selectors
    this.checkoutSummary = '#js-checkout-summary';
    this.checkoutPromoBlock = `${this.checkoutSummary} div.cart-summary__voucher`;
    this.checkoutHavePromoCodeButton = `${this.checkoutPromoBlock} button.cart-voucher__accordion-button`;
    this.promoCodeArea = '#promo-code';
    this.checkoutHavePromoInputArea = `${this.promoCodeArea} input.js-voucher-input`;
    this.shippingValueSpan = '#cart-subtotal-shipping span.cart-summary__value';
    this.discountValueSpan = '#cart-subtotal-discount span.cart-summary__value';
    this.cartTotalATI = 'div.cart-summary__total span.cart-summary__value';
    // Promo code selectors
    this.checkoutPromoBlock = '.js-cart-voucher';
    this.cartSummaryLine = (line: number) => `${this.checkoutPromoBlock} li:nth-child(${line}).cart-summary__line`;
    this.cartRuleName = (line: number) => `${this.cartSummaryLine(line)} span.cart-summary__label`;
    this.discountValue = (line: number) => `${this.cartSummaryLine(line)} div.cart-summary__value`;
    this.checkoutRemoveDiscountLink = (row: number) => `${this.cartSummaryLine(row)} a.cart-voucher__remove`;

    // Cart details selectors
    this.itemsNumber = `${this.checkoutSummary} div.cart-summary__products .cart-summary__products-number`;
    this.showDetailsLink = `${this.checkoutSummary} div.cart-summary__products-accordion button.accordion-button`;
    this.productRowLink = (productRow: number) => `${this.productList} div.cart-summary__products-list > `
      + `div:nth-child(${productRow})`;
    this.productDetailsImage = (productRow: number) => `${this.productRowLink(productRow)} div.cart-summary-product__image a img`;
    this.productDetailsName = (productRow: number) => `${this.productRowLink(productRow)} a.cart-summary-product__link`;
    this.productDetailsQuantity = (productRow: number) => `${this.productRowLink(productRow)} `
      + 'div.cart-summary-product__quantity span.value';
    this.productDetailsPrice = (productRow: number) => `${this.productRowLink(productRow)} div.cart-summary-product__total`;
    this.productDetailsAttributes = (productRow: number) => `${this.productRowLink(productRow)} div`
      + '.cart-summary-product__attribute';

    // Gift selectors
    this.cartSubtotalGiftWrappingValueSpan = `${this.cartSubtotalGiftWrappingDiv} span.cart-summary__value`;
  }

  /**
   * Get product details
   * @param page {Page} Browser tab
   * @param productRow {number} Product row in details block
   * @returns {Promise<ProductDetailsBasic>}
   */
  async getProductDetails(page: Page, productRow: number): Promise<ProductDetailsBasic> {
    return {
      image: await this.getAttributeContent(page, this.productDetailsImage(productRow), 'srcset') ?? '',
      name: await this.getTextContent(page, this.productDetailsName(productRow)),
      quantity: parseInt((await this.getTextContent(page, this.productDetailsQuantity(productRow))).replace('x', ''), 10),
      price: await this.getPriceFromText(page, this.productDetailsPrice(productRow)),
    };
  }

  /**
   * Check if the Addresses Step is displayed
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async isAddressesStep(page: Page): Promise<boolean> {
    return this.elementVisible(page, `${this.addressStepSection}.checkout-steps__step--current`, 1000);
  }
}

const foCheckoutPage = new FoCheckoutPage();
export {foCheckoutPage, FoCheckoutPage};
