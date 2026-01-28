import {FoHomeHummingbirdPageInterface} from '@interfaces/FO/home';
import {type Page} from '@playwright/test';
import {FoHomePage as FoHomePageClassic} from '@versions/develop/pages/FO/classic/home';

/**
 * Home page, contains functions that can be used on the page
 * @class
 * @extends HomePage
 */
class FoHomePage extends FoHomePageClassic implements FoHomeHummingbirdPageInterface {
  private readonly addToCartIcon: (number: number) => string;

  private readonly productColor: (number: number, color: string) => string;

  /**
   * @constructs
   * Setting up texts and selectors to use on home page
   */
  constructor() {
    super('hummingbird');

    // FOBasePage
    this.categoryMenu = (id) => `#top-menu .type-category[data-id="category-${id}"] .ps-mainmenu__tree-item-wrapper > a`;

    this.successAddToCartMessage = 'Added to your cart';

    // Selectors of slider
    this.carouselSliderId = 'div#ps_imageslider';
    this.carouselControlDirectionLink = (direction: string) => `${this.carouselSliderId} button.carousel-control-${direction}`;
    this.carouselSliderInnerList = `${this.carouselSliderId} div.carousel-inner`;
    this.carouselSliderInnerListItem = (position: number) => `${this.carouselSliderInnerList} div.carousel-item`
      + `:nth-child(${position})`;
    this.carouselSliderURL = `${this.carouselSliderInnerList} div.carousel-item.active a`;

    // selectors for home page content
    this.homePageSection = '#content.page-content--home';

    // Selectors for banner and custom text
    this.customTextBlock = 'section.ps-customtext';

    // Newsletter form
    this.newsletterBlock = '#footer section.ps-emailsubscription';
    this.newsletterFormField = `${this.newsletterBlock} [name=email]`;
    this.newsletterRGPDBlock = `${this.newsletterBlock} .gdpr-consent`;
    this.newsletterRGPDBlockCheckbox = `${this.newsletterRGPDBlock} input[type="checkbox"]`;
    this.newsletterRGPDBlockLabel = `${this.newsletterRGPDBlockCheckbox} + label`;
    this.newsletterSubmitButton = `${this.newsletterBlock} [name="submitNewsletter"][value="Subscribe"]`;
    this.subscriptionAlertMessage = `${this.newsletterBlock} div.alert`;

    // Products section
    this.productsBlockTitle = (blockName: number | string) => `#content section.${blockName} h2`;
    this.productsBlockDiv = (blockName: number | string) => `#content section.${blockName} div.products article`;
    this.allProductsBlockLink = (blockName: number | string) => `#content section.${blockName} div.module-products__buttons a`;
    this.productArticle = (number: number) => `#wrapper section.ps-featuredproducts article:nth-child(${number})`;
    this.productImg = (number: number) => `${this.productArticle(number)} img`;
    this.productQuickViewLink = (number: number) => `${this.productArticle(number)} .product-miniature__quickview-button`;
    this.productPrice = (row: number) => `${this.productArticle(row)} div[aria-label="Price"]`;
    this.newFlag = (row: number) => `${this.productArticle(row)} .product-flags .badge.new`;

    // Products list
    this.addToCartIcon = (number: number) => `${this.productArticle(number)} button[data-button-action='add-to-cart']`;
    this.productColor = (number: number, color: string) => `${this.productArticle(number)} div.product-miniature__variants`
      + ` a[title='${color}']`;
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
  async goToAllProductsPage(page: Page, blockName: string = 'ps-featuredproducts'): Promise<void> {
    await this.clickAndWaitForURL(page, this.allProductsBlockLink(blockName));
  }

  /**
   * Quick view product
   * @param page {Page} Browser tab
   * @param id {number} Product row in the list
   * @return {Promise<void>}
   */
  async quickViewProduct(page: Page, id: number): Promise<void> {
    await page.locator(this.productArticle(id)).hover().then(async () => {
      await this.waitForVisibleSelector(page, this.productQuickViewLink(id));
      await page.locator(this.productQuickViewLink(id)).click();
    });
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
  async selectProductColor(page: Page, nthProduct: number, color: string): Promise<void> {
    await this.clickAndWaitForURL(page, this.productColor(nthProduct, color));
  }
}

const foHomePage = new FoHomePage();
export {foHomePage, FoHomePage};
