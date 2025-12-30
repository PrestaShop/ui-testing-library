import type {FoHomeHummingbirdPageInterface} from '@interfaces/FO/home';
import {type Page} from '@playwright/test';
import {FoHomePage} from '@versions/develop/pages/FO/hummingbird/home';

/**
 * Hummingbird 1
 * @class
 * @extends FoHomePage
 */
class FoHomePageVersion extends FoHomePage implements FoHomeHummingbirdPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on create products page
   */
  constructor() {
    super();

    // FOBasePage
    this.categoryMenu = (id) => `#top-menu #category-${id} > a`;

    this.successAddToCartMessage = 'Product successfully added to your shopping cart';

    // Selectors of slider
    this.carouselSliderId = 'div.carousel.slide';
    this.carouselControlDirectionLink = (direction: string) => `${this.carouselSliderId} button.carousel-control-${direction}`;
    this.carouselSliderInnerList = `${this.carouselSliderId} div.carousel-inner`;
    this.carouselSliderInnerListItem = (position: number) => `${this.carouselSliderInnerList} li:nth-child(${position})`;
    this.carouselSliderURL = `${this.carouselSliderInnerList} li[aria-hidden='false'] a`;

    // selectors for home page content
    this.homePageSection = 'section#content.page-home';

    // Selectors for banner and custom text
    this.customTextBlock = '#custom-text';

    // Newsletter form
    this.newsletterFormField = '#footer div.email-subscription__content__right input[name="email"]';
    this.newsletterSubmitButton = '.email-subscription__content__inputs [name="submitNewsletter"][value="Subscribe"]';
    this.subscriptionAlertMessage = '#footer div.email-subscription__content__infos p.alert';

    // Products section
    this.productsBlockDiv = (blockName: number | string) => `#content section.${blockName} div.products div.card`;
    this.allProductsBlockLink = (blockName: number | string) => `#content div.${blockName}-footer a`;
    this.productArticle = (number: number) => `#content section.featured-products article:nth-child(${number})`;
    this.productImg = (number: number) => `${this.productArticle(number)} img`;
    this.productQuickViewLink = (number: number) => `${this.productArticle(number)} .product-miniature__quickview `
      + 'button';
  }

  /**
   * Go to all products
   * @param page {Page} Browser tab
   * @param blockName {string} The block name in the page
   * @return {Promise<void>}
   */
  async goToAllProductsPage(page: Page, blockName: string = 'featured-products'): Promise<void> {
    await this.clickAndWaitForURL(page, this.allProductsBlockLink(blockName));
  }
}

const foHomePage = new FoHomePageVersion();
export {foHomePage, FoHomePageVersion as FoHomePage};
