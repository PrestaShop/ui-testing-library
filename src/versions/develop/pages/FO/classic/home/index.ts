import {FoHomePageInterface} from '@interfaces/FO/home';
import FOBasePage from '@pages/FO/FOBasePage';
import {type Page} from '@playwright/test';
import {foModalQuickViewPage as foClassicModalQuickViewPage} from '@versions/develop/pages/FO/classic/modal/quickView';

/**
 * Home page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FoHomePage extends FOBasePage implements FoHomePageInterface {
  public readonly pageTitle: string;

  public readonly successAddToCartMessage: string;

  protected carouselSliderId: string;

  protected carouselControlDirectionLink: (direction: string) => string;

  protected carouselSliderInnerList: string;

  private readonly carouselSliderInnerListItems: string;

  protected carouselSliderURL: string;

  protected carouselSliderInnerListItem: (position: number) => string;

  private readonly homePageSection: string;

  protected productsBlockNth: (blockNth: number) => string;

  protected productsBlockNthTitle: (blockNth: number) => string;

  protected productsBlockNthDiv: (blockNth: number) => string;

  protected productsBlock: (blockId: string) => string;

  protected productsBlockTitle: (blockId: string) => string;

  protected productsBlockDiv: (blockId: string) => string;

  public productArticle: (row: number) => string;

  protected productImg: (row: number) => string;

  private readonly productDescriptionDiv: (row: number) => string;

  protected productQuickViewLink: (row: number) => string;

  private readonly productColors: (row: number) => string;

  private readonly productColorLink: (row: number, color: string) => string;

  protected allProductsBlockLink: (blockId: number | string) => string;

  private readonly productPrice: (row: number) => string;

  private readonly newFlag: (row: number) => string;

  private readonly bannerImg: string;

  private readonly customTextBlock: string;

  private readonly newsletterBlock: string;

  protected newsletterFormField: string;

  private readonly newsletterRGPDBlock: string;

  private readonly newsletterRGPDBlockCheckbox: string;

  private readonly newsletterRGPDBlockLabel: string;

  protected newsletterSubmitButton: string;

  protected subscriptionAlertMessage: string;

  public readonly successSubscriptionMessage: string;

  public readonly successSendVerificationEmailMessage: string;

  public readonly successSendConfirmationEmailMessage: string;

  public readonly alreadyUsedEmailMessage: string;

  private readonly productAddToWishlist: (number: number) => string;

  /**
   * @constructs
   * Setting up texts and selectors to use on home page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.pageTitle = global.INSTALL.SHOP_NAME;
    this.successAddToCartMessage = 'Product successfully added to your shopping cart';

    // Newsletter subscription messages
    this.successSubscriptionMessage = 'You have successfully subscribed to this newsletter.';
    this.successSendVerificationEmailMessage = 'A verification email has been sent. Please check your inbox.';
    this.successSendConfirmationEmailMessage = 'A confirmation email has been sent. Please check your inbox.';
    this.alreadyUsedEmailMessage = 'This email address is already registered.';

    // Selectors of slider
    this.carouselSliderId = '#carousel';
    this.carouselControlDirectionLink = (direction: string) => `${this.carouselSliderId} a.${direction}.carousel-control`;
    this.carouselSliderInnerList = `${this.carouselSliderId} ul.carousel-inner`;
    this.carouselSliderInnerListItems = `${this.carouselSliderInnerList} li`;
    this.carouselSliderURL = `${this.carouselSliderInnerListItems} a`;
    this.carouselSliderInnerListItem = (position: number) => `${this.carouselSliderInnerListItems}:nth-child(${position})`;

    // selectors for home page content
    this.homePageSection = 'section#content.page-home';

    // Selectors for products block
    this.productsBlockNth = (blockNth: number) => `#content section:nth-child(${blockNth})`;
    this.productsBlockNthTitle = (blockNth: number) => `${this.productsBlockNth(blockNth)} h2`;
    this.productsBlockNthDiv = (blockNth: number) => `${this.productsBlockNth(blockNth)} div.products div.js-product`;
    this.productsBlock = (blockName: string) => `#content section[data-type="${blockName}"]`;
    this.productsBlockTitle = (blockName: string) => `${this.productsBlock(blockName)} h2`;
    this.productsBlockDiv = (blockName: string) => `${this.productsBlock(blockName)} div.products div.js-product`;
    this.allProductsBlockLink = (blockId: number | string) => `#content section:nth-child(${blockId}) a.all-product-link`;

    // Selectors for list of products
    this.productArticle = (row: number) => `${this.productsBlock('popularproducts')} .products `
      + `div:nth-child(${row}) article`;
    this.productImg = (row: number) => `${this.productArticle(row)} img`;
    this.productDescriptionDiv = (row: number) => `${this.productArticle(row)} div.product-description`;
    this.productQuickViewLink = (row: number) => `${this.productArticle(row)} a.quick-view`;
    this.productColors = (row: number) => `${this.productArticle(row)} .variant-links`;
    this.productColorLink = (row: number, color: string) => `${this.productArticle(row)} .variant-links`
      + ` a[aria-label='${color}']`;
    this.productPrice = (row: number) => `${this.productArticle(row)} span[aria-label="Price"]`;
    this.newFlag = (row: number) => `${this.productArticle(row)} .product-flag.new`;

    // Selectors for banner and custom text
    this.bannerImg = '.banner img';
    this.customTextBlock = '#custom-text';

    // Newsletter Subscription selectors
    this.newsletterBlock = '.block_newsletter';
    this.newsletterFormField = `${this.newsletterBlock} [name=email]`;
    this.newsletterRGPDBlock = `${this.newsletterBlock} div[class^="gdpr_consent gdpr_module_"]`;
    this.newsletterRGPDBlockCheckbox = `${this.newsletterRGPDBlock} label.psgdpr_consent_message input[type="checkbox"]`;
    this.newsletterRGPDBlockLabel = `${this.newsletterRGPDBlock} label.psgdpr_consent_message span:nth-of-type(2)`;
    this.newsletterSubmitButton = `${this.newsletterBlock} [name="submitNewsletter"][value="Subscribe"]`;
    this.subscriptionAlertMessage = '.block_newsletter_alert';

    // Wishlist selectors
    this.productAddToWishlist = (number: number) => `${this.productArticle(number)} button.wishlist-button-add`;
  }

  // Methods in home page
  /**
   * Check is home page
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async isHomePage(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.homePageSection, 3000);
  }

  // Methods to check slider
  /**
   * Click on right/left arrow of the slider
   * @param page {Page} Browser tab
   * @param direction {string} Direction to click on
   * @returns {Promise<void>}
   */
  async clickOnLeftOrRightArrow(page: Page, direction: string): Promise<void> {
    await page.locator(this.carouselControlDirectionLink(direction)).click();
  }

  /**
   * Is slider visible
   * @param page {Page} Browser tab
   * @param position {number} The slider position
   * @returns {Promise<boolean>}
   */
  async isSliderVisible(page: Page, position: number): Promise<boolean> {
    await this.waitForVisibleSelector(page, this.carouselSliderId);

    return this.elementVisible(page, this.carouselSliderInnerListItem(position), 1000);
  }

  /**
   * Click on slider number
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getSliderURL(page: Page): Promise<string> {
    return this.getAttributeContent(page, this.carouselSliderURL, 'href');
  }

  // Methods to check list of products
  /**
   * Go to the product page
   * @param page {Page} Browser tab
   * @param id {number} Product id
   * @returns {Promise<void>}
   */
  async goToProductPage(page: Page, id: number): Promise<void> {
    await this.clickAndWaitForURL(page, this.productImg(id));
  }

  /**
   * Check product price
   * @param page {Page} Browser tab
   * @param id {number} index of product in list of products
   * @return {Promise<boolean>}
   */
  async isPriceVisible(page: Page, id: number = 1): Promise<boolean> {
    return this.elementVisible(page, this.productPrice(id), 1000);
  }

  /**
   * Get product price
   * @param page {Page} Browser tab
   * @param id {number} index of product in list of products
   * @return {Promise<string>}
   */
  async getProductPrice(page:Page, id: number = 1): Promise<string> {
    return this.getTextContent(page, this.productPrice(id));
  }

  /**
   * Check new flag
   * @param page {Page} Browser tab
   * @param id {number} Index of product in list of products
   * @returns {Promise<boolean>}
   */
  async isNewFlagVisible(page: Page, id: number = 1): Promise<boolean> {
    return this.elementVisible(page, this.newFlag(id), 1000);
  }

  /**
   * Go to home category page by clicking on all products
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async goToAllProductsPage(page: Page): Promise<void> {
    await this.goToAllProductsBlockPage(page, 1);
  }

  /**
   * Get products block title
   * @param page {Page} Browser tab
   * @param blockName {'bestsellers'|'newproducts'|'onsale'|'popularproducts'| string} The block name in the page
   * @returns {Promise<string>}
   */
  async getBlockTitle(
    page: Page,
    blockName: 'bestsellers' | 'newproducts' | 'onsale' | 'popularproducts' | string): Promise<string> {
    return this.getTextContent(page, this.productsBlockTitle(blockName));
  }

  /**
   * Get products block number
   * @param blockName {'bestsellers'|'newproducts'|'onsale'|'popularproducts'} The block name in the page
   * @param page {Page} Browser tab
   * @return {Promise<number>}
   */
  async getProductsBlockNumber(
    page: Page,
    blockName: 'bestsellers' | 'newproducts' | 'onsale' | 'popularproducts' | string): Promise<number> {
    return page.locator(this.productsBlockDiv(blockName)).count();
  }

  /**
   * Has products block
   * @param blockName {'bestsellers'|'newproducts'|'onsale'|'popularproducts'} The block name in the page
   * @param page {Page} Browser tab
   * @return {Promise<boolean>}
   */
  async hasProductsBlock(page: Page, blockName: 'bestsellers' | 'newproducts' | 'onsale' | 'popularproducts'): Promise<boolean> {
    return (await page.locator(this.productsBlock(blockName)).count()) > 0;
  }

  /**
   * Go to all products
   * @param page {Page} Browser tab
   * @param blockID {number} The block number in the page
   * @return {Promise<void>}
   */
  async goToAllProductsBlockPage(page: Page, blockID: number = 1): Promise<void> {
    let columnSelector: string;

    switch (blockID) {
      case 1:
        columnSelector = this.allProductsBlockLink(2);
        break;

      case 2:
        columnSelector = this.allProductsBlockLink(5);
        break;

      case 3:
        columnSelector = this.allProductsBlockLink(6);
        break;

      case 4:
        columnSelector = this.allProductsBlockLink(7);
        break;

      default:
        throw new Error(`Block ${blockID} was not found`);
    }

    await this.clickAndWaitForURL(page, columnSelector);
  }

  /**
   * Is banner visible
   * @param page {Page} Browser tab
   * @return {Promise<boolean>}
   */
  async isBannerVisible(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.bannerImg, 1000);
  }

  /**
   * Is custom text block visible
   * @param page {Page} Browser tab
   * @return {Promise<boolean>}
   */
  async isCustomTextBlockVisible(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.customTextBlock, 1000);
  }

  /**
   * Is quickView link visible
   * @param page {Page} Browser tab
   * @param row {number} Row of product to quick view
   * @return {Promise<boolean>}
   */
  async isQuickViewLinkVisible(page: Page, row: number): Promise<boolean> {
    await page.locator(this.productImg(row)).hover();

    return this.elementVisible(page, this.productQuickViewLink(row), 1000);
  }

  /**
   * Is colored boxes visible
   * @param page {Page} Browser tab
   * @param row {number} Row of product to quick view
   * @return {Promise<boolean>}
   */
  async isColoredBoxesVisible(page: Page, row: number): Promise<boolean> {
    await page.locator(this.productImg(row)).hover();

    return this.elementVisible(page, this.productColors(row), 1000);
  }

  /**
   * Quick view product
   * @param page {Page} Browser tab
   * @param id {number} Row of product to quick view
   * @return {Promise<void>}
   */
  async quickViewProduct(page: Page, id: number): Promise<void> {
    await page.locator(this.productImg(id)).hover();
    let displayed: boolean = false;

    /* eslint-disable no-await-in-loop */
    // Only way to detect if element is displayed is to get value of computed style 'product description' after hover
    // and compare it with value 'block'
    for (let i = 0; i < 10 && !displayed; i++) {
      /* eslint-env browser */
      displayed = await page.evaluate(
        (selector: string): boolean => {
          const element = document.querySelector(selector);

          if (!element) {
            return false;
          }
          return window.getComputedStyle(element, ':after').getPropertyValue('display') === 'block';
        },
        this.productDescriptionDiv(id),
      );
      await page.waitForTimeout(100);
    }
    /* eslint-enable no-await-in-loop */
    await Promise.all([
      this.waitForVisibleSelector(page, foClassicModalQuickViewPage.quickViewModalDiv),
      page.locator(this.productQuickViewLink(id)).evaluate((el: HTMLElement) => el.click()),
    ]);
  }

  /**
   * Select product color
   * @param page {Page} Browser tab
   * @param row {number} Row of the selected product
   * @param color {string} The color to select
   * @returns {Promise<void>}
   */
  async selectProductColor(page: Page, row: number, color: string): Promise<void> {
    await page.locator(this.productImg(row)).hover();
    let displayed = false;

    /* eslint-disable no-await-in-loop */
    // Only way to detect if element is displayed is to get value of computed style 'product description' after hover
    // and compare it with value 'block'
    for (let i = 0; i < 10 && !displayed; i++) {
      /* eslint-env browser */
      displayed = await page.evaluate(
        (selector: string): boolean => {
          const element = document.querySelector(selector);

          if (!element) {
            return false;
          }
          return window.getComputedStyle(element, ':after').getPropertyValue('display') === 'block';
        },
        this.productDescriptionDiv(row),
      );
      await page.waitForTimeout(100);
    }
    /* eslint-enable no-await-in-loop */

    await this.clickAndWaitForURL(page, this.productColorLink(row, color));
  }

  // Subscribe to newsletter methods
  /**
   * Subscribe to the newsletter from the FO homepage
   * @param page {Page} Browser tab
   * @param email {string} Email to set on input
   * @returns {Promise<string>}
   */
  async subscribeToNewsletter(page: Page, email: string): Promise<string> {
    await this.setValue(page, this.newsletterFormField, email);
    if (await this.hasSubscribeNewsletterRGPD(page)) {
      await this.setChecked(page, this.newsletterRGPDBlockCheckbox, true);
    }
    await this.waitForSelectorAndClick(page, this.newsletterSubmitButton);

    return this.getTextContent(page, this.subscriptionAlertMessage);
  }

  /**
   * Returns if the block RGPD for the newsletter is visible
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async hasSubscribeNewsletterRGPD(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.newsletterRGPDBlock, 3000);
  }

  /**
   * Returns the label of the block RGPD for the newsletter
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getSubscribeNewsletterRGPDLabel(page: Page): Promise<string> {
    return this.getTextContent(page, this.newsletterRGPDBlockLabel);
  }

  /**
   * Add a product (based on its index) to the first wishlist
   * @param page {Page} Browser tab
   * @param idxProduct {number} Id of product
   * @returns Promise<void>
   */
  async clickAddWishListProduct(page: Page, idxProduct: number): Promise<void> {
    // Click on the heart
    await page.locator(this.productAddToWishlist(idxProduct)).click();
  }
}

const foHomePage = new FoHomePage();
export {foHomePage, FoHomePage};
