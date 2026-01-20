import {type ProductOrderConfirmation} from '@data/types/product';
import {type FoCheckoutOrderConfirmationPageInterface} from '@interfaces/FO/checkout/orderConfirmation';
import {type Page} from '@playwright/test';
import {
  OrderConfirmationPage as OrderConfirmationPageClassic,
} from '@versions/develop/pages/FO/classic/checkout/orderConfirmation';

/**
 * Order confirmation page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FoCheckoutOrderConfirmationPage extends OrderConfirmationPageClassic implements FoCheckoutOrderConfirmationPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');

    // Selectors
    this.orderConfirmationCardSection = '#wrapper .alert';
    this.orderConfirmationCardTitleH3 = `${this.orderConfirmationCardSection} h1.page-title-section`;
    this.orderDetailsTable = 'ul.order-confirmation__details-list';
    this.orderReferenceValue = `${this.orderDetailsTable} li:nth-child(1)`;
    this.customerSupportLink = '#center-column div.card dIv.card-footer a[href*="contact-us"]';
    this.subTotalRow = 'div.order-confirmation__subtotals div:nth-child(1) div.order-confirmation__line-value';
    this.shippingRow = 'div.order-confirmation__subtotals div:nth-child(2) div.order-confirmation__line-value';
    this.totalRow = 'div.order-confirmation__totals div:nth-child(1) div.order-confirmation__line-value';
    this.giftWrappingRow = 'div.order-confirmation__subtotals div:nth-child(3) div.order-confirmation__line-value';
    this.paymentMethodRow = `${this.orderDetailsTable} li:nth-child(2)`;
    this.shippingMethodRow = `${this.orderDetailsTable} li:nth-child(3)`;
    this.paymentInformationBody = '#center-column > .card:nth-of-type(2) .card-body';
    this.orderDetails = 'div.order-confirmation__details ul.order-confirmation__details-list';
    this.productRow = 'div.order-confirmation__products div.order-confirmation__product';
    this.customizationButton = '#wrapper div.order-confirmation__details div.order-confirmation__product '
      + 'div.product-customization-modal__content > button';
    this.customizationModal = 'div[id*="product-customization-modal"]';
    this.customizationModalBody = `${this.customizationModal} div.modal-body`;
    this.customizationModalCloseButton = `${this.customizationModal} div.modal-header button`;
    this.productRowNth = (row: number) => `${this.productRow}:nth-child(${row})`;
    this.productRowImage = (row: number) => `${this.productRowNth(row)} div.order-confirmation__product-image img`;
    this.productRowDetails = (row: number) => `${this.productRowNth(row)} div.order-confirmation__product-details`;
    this.productRowPrices = (row: number) => `${this.productRowNth(row)} div.order-confirmation__product-prices`;

    // Popular products section
    this.productsBlock = '#wrapper section.ps-featuredproducts';
    this.productsBlockTitle = `${this.productsBlock} h2`;
    this.productsBlockDiv = `${this.productsBlock} div.module-products__list article.product-miniature`;
    this.allProductsLink = `${this.productsBlock} div.module-products__buttons a`;
    this.productArticle = (number: number) => `${this.productsBlockDiv}:nth-child(${number})`;
    this.productImg = (number: number) => `${this.productArticle(number)} img.product-miniature__image`;
    this.productQuickViewLink = (number: number) => `${this.productArticle(number)} .product-miniature__quickview-button`;
  }

  /**
   * Get product details in row
   * @param page {Page} Browser tab
   * @param row {number} Row of product
   * @returns {Promise<ProductOrderConfirmation>}
   */
  async getProductDetailsInRow(page: Page, row: number): Promise<ProductOrderConfirmation> {
    return {
      image: await this.getAttributeContent(page, this.productRowImage(row), 'srcset'),
      details: await this.getTextContent(page, this.productRowDetails(row)),
      prices: await this.getTextContent(page, this.productRowPrices(row)),
    };
  }

  /**
   * Quick view product
   * @param page {Page} Browser tab
   * @param id {number} Product row in the list
   * @return {Promise<void>}
   */
  async quickViewProduct(page: Page, id: number): Promise<void> {
    await page.locator(this.productImg(id)).hover();
    await this.waitForVisibleSelector(page, this.productQuickViewLink(id));
    await page.locator(this.productQuickViewLink(id)).click();
  }
}

const foCheckoutOrderConfirmationPage = new FoCheckoutOrderConfirmationPage();
export {foCheckoutOrderConfirmationPage, FoCheckoutOrderConfirmationPage};
