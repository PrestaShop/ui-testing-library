import {FoHomeHummingbirdPageInterface} from '@interfaces/FO/home';
import {type Page} from '@playwright/test';
import {FoHomePage as FoHomePageVersion} from '@versions/develop/pages/FO/classic/home';

/**
 * Home page, contains functions that can be used on the page
 * @class
 * @extends HomePage
 */
class FoHomePage extends FoHomePageVersion implements FoHomeHummingbirdPageInterface {
  private readonly addToCartIcon: (number: number) => string;

  private readonly productColor: (number: number, color: string) => string;

  /**
   * @constructs
   * Setting up texts and selectors to use on home page
   */
  constructor() {
    super('hummingbird');

    // Selectors of slider
    this.carouselSliderId = 'div.carousel.slide';
    this.carouselControlDirectionLink = (direction: string) => `${this.carouselSliderId} button.carousel-control-${direction}`;
    this.carouselSliderInnerList = `${this.carouselSliderId} div.carousel-inner`;
    this.carouselSliderInnerListItem = (position: number) => `${this.carouselSliderInnerList} li:nth-child(${position})`;
    this.carouselSliderURL = `${this.carouselSliderInnerList} li[aria-hidden='false'] a`;

    // Products list
    this.productArticle = (number: number) => `#content section.featured-products div.container div article:nth-child(${number})`;
    this.addToCartIcon = (number: number) => `${this.productArticle(number)} button[data-button-action='add-to-cart']`;
    this.productColor = (number: number, color: string) => `${this.productArticle(number)} div.product-miniature__variants`
      + ` a[title='${color}']`;

    // Newsletter form
    this.newsletterFormField = '#footer div.email-subscription__content__right input[name="email"]';
    this.newsletterSubmitButton = '.email-subscription__content__inputs [name="submitNewsletter"][value="Subscribe"]';
    this.subscriptionAlertMessage = '#footer div.email-subscription__content__infos p.alert';

    // Products section
    this.productsBlockTitle = (blockName: number | string) => `#content section.${blockName} h2`;
    this.productsBlockDiv = (blockName: number | string) => `#content section.${blockName} div.products div.card`;
    this.allProductsBlockLink = (blockName: number | string) => `#content div.${blockName}-footer a`;
    this.productArticle = (number: number) => `#content section.featured-products article:nth-child(${number})`;
    this.productImg = (number: number) => `${this.productArticle(number)} img`;
    this.productQuickViewLink = (number: number) => `${this.productArticle(number)} .product-miniature__quickview `
      + 'button';
  }

  /**
   * Is add to cart button visible
   * @param page {Page} Browser tab
   * @param nthProduct {number} nth of product
   * @returns Promise<boolean>
   */
  async isAddToCartButtonVisible(page: Page, nthProduct: number = 1): Promise<boolean> {
    return this.elementVisible(page, this.addToCartIcon(nthProduct), 1000);
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

  /**
   * Add product to cart
   * @param page {Page} Browser tab
   * @param nthProduct {number} Product row in the list
   */
  async addProductToCart(page: Page, nthProduct: number): Promise<void> {
    await this.waitForSelectorAndClick(page, this.addToCartIcon(nthProduct));
  }

  /**
   * Select product color
   * @param page {Page} Browser tab
   * @param nthProduct {number} Product row in the list
   * @param color {string} Color to select
   * @return {Promise<void>}
   */
  async selectProductColor(page: Page, nthProduct: number, color: string) {
    await this.clickAndWaitForURL(page, this.productColor(nthProduct, color));
  }
}

module.exports = new FoHomePage();
