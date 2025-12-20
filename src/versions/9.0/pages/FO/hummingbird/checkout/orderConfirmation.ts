import {type FoCheckoutOrderConfirmationPageInterface} from '@interfaces/FO/checkout/orderConfirmation';
import {
  FoCheckoutOrderConfirmationPage as FoCheckoutOrderConfirmationPageVersion,
} from '@versions/develop/pages/FO/hummingbird/checkout/orderConfirmation';

/**
 * @class
 * @extends FoCheckoutOrderConfirmationPageVersion
 */
class FoCheckoutOrderConfirmationPage extends FoCheckoutOrderConfirmationPageVersion
  implements FoCheckoutOrderConfirmationPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super();

    // Selectors
    this.orderConfirmationCardSection = '#content-wrapper .alert';
    this.orderConfirmationCardTitleH3 = `${this.orderConfirmationCardSection} h1.alert-heading`;
    this.customerSupportLink = 'div.card .card-footer a.alert-link';
    this.subTotalRow = 'div.order-confirmation__subtotals div:nth-child(1) div.text-end';
    this.shippingRow = 'div.order-confirmation__subtotals div:nth-child(2) div.text-end';
    this.orderDetailsTable = 'div.order-confirmation__details ul.order-details';
    this.orderReferenceValue = `${this.orderDetailsTable} li:nth-child(1)`;
    this.totalRow = 'div.order-confirmation__totals div:nth-child(1) div.text-end';
    this.paymentMethodRow = `${this.orderDetailsTable} li:nth-child(2)`;
    this.shippingMethodRow = `${this.orderDetailsTable} li:nth-child(3)`;
    this.paymentInformationBody = '#content-wrapper div:nth-child(2) div.card-body';
    this.orderDetails = 'div.order-confirmation__details ul.order-details';
    this.productRow = 'div.order-confirmation__items div.item';
    this.customizationButton = '#content-wrapper div.order-confirmation__details div.order-confirmation__items button';
    this.productRowNth = (row: number) => `${this.productRow}:nth-child(${row})`;
    this.productRowImage = (row: number) => `${this.productRowNth(row)} div.item__image img`;
    this.productRowDetails = (row: number) => `${this.productRowNth(row)} div.item__details`;
    this.productRowPrices = (row: number) => `${this.productRowNth(row)} div.item__prices`;

    // Popular products section
    this.productsBlock = '#content-wrapper section.featured-products';
    this.productsBlockTitle = `${this.productsBlock} h2`;
    this.productsBlockDiv = `${this.productsBlock} div.products div.card`;
    this.allProductsLink = `${this.productsBlock} div.featured-products-footer a`;
    this.productArticle = (number: number) => `${this.productsBlock} article:nth-child(${number})`;
    this.productImg = (number: number) => `${this.productArticle(number)} img`;
    this.productQuickViewLink = (number: number) => `${this.productArticle(number)} .product-miniature__quickview `
      + 'button';
  }
}

const foCheckoutOrderConfirmationPage = new FoCheckoutOrderConfirmationPage();
export {foCheckoutOrderConfirmationPage, FoCheckoutOrderConfirmationPage};
