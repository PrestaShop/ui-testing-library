import {FoSearchResultsPageInterface} from '@interfaces/FO/searchResults';
import {SearchResultsPage as FoSearchResultsPageClassic} from '@versions/develop/pages/FO/classic/searchResults';
import type {Page} from 'playwright';

/**
 * Password Reminder page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FoSearchResultsPage extends FoSearchResultsPageClassic implements FoSearchResultsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on my account page
   */
  constructor() {
    super('hummingbird');

    // Selectors for search Results page
    this.totalProduct = `${this.productListTopDiv} .products__count span`;
    this.productPrice = '#js-product-list article.product-miniature div.product-miniature__price';
    this.productArticle = (number: number) => `#js-product-list .products article:nth-child(${number})`;
    this.productImg = (number: number) => `${this.productArticle(number)} img`;
    this.productQuickViewLink = (number: number) => `${this.productArticle(number)} button.product-miniature__quickview-button`;
    this.productNoMatches = '#content.page-content--not-found';
    this.sortDropDownMenu = '.dropdown-menu.show';
    // Selectors for sort button
    this.sortButton = `${this.productListTopDiv} button#sort_dropdown_button`;
  }

  /**
   * Click on Quick view Product
   * @param page {Page} Browser tab
   * @param id {number} Index of product in list of products
   * @return {Promise<void>}
   */
  async quickViewProduct(page: Page, id: number): Promise<void> {
    await page.locator(this.productImg(id)).first().hover();
    await this.waitForVisibleSelector(page, this.productQuickViewLink(id));
    await page.locator(this.productQuickViewLink(id)).first().click();
  }
}

const foSearchResultsPage = new FoSearchResultsPage();
export {foSearchResultsPage, FoSearchResultsPage};
