// Import FO pages
import {type FoCategoryPageInterface} from '@interfaces/FO/category';
import {CategoryPage as CategoryPageVersion} from '@versions/develop/pages/FO/classic/category';
import type {Page} from 'playwright';

/**
 * Cart page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class CategoryPage extends CategoryPageVersion implements FoCategoryPageInterface {
  private readonly searchFilterPriceSlider: string;

  private readonly searchFiltersLabel: string;

  private readonly filterTypeButton: (facetType: string) => string;

  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');

    this.headerNamePage = '#js-product-list-header h1';
    this.paginationText = 'div.pagination-number';
    this.productItemListDiv = 'div.products div.card';
    this.paginationNext = `${this.productListDiv} nav div.pagination-list-container a.next`;
    this.productArticle = (number: number) => `${this.productListDiv} article:nth-child(${number})`;
    this.productImg = (number: number) => `${this.productArticle(number)} img`;
    this.productPrice = (number: number) => `${this.productArticle(number)} span.product-miniature__price`;
    this.productQuickViewLink = (number: number) => `${this.productArticle(number)} .product-miniature__quickview `
      + 'button';

    // Categories SideBlock
    this.sideBlockCategories = '.category-tree';
    this.sideBlockCategoriesItem = (level?: number) => `${this.sideBlockCategories} ul.category-tree__list`
      + `${level === undefined ? '' : `[data-depth="${level}"]`} > li.category-tree__item`;
    this.sideBlockCategory = (text: string) => `${this.sideBlockCategoriesItem()} a:text("${text}")`;
    this.searchFilters = '#search-filters';
    this.filterTypeButton = (facetType: string) => `.facet.accordion-item button:text("${facetType}")`;
    this.searchFiltersLabel = `${this.searchFilters} label.form-check-label`;
    this.clearAllFiltersLink = `${this.searchFilters} button.js-search-filters-clear-all`;
    this.searchFilterPriceSlider = 'div.faceted-slider';
    this.closeOneFilter = (row: number) => `#js-active-search-filters ul li:nth-child(${row + 1}) a i`;

    // Pagination selectors
    this.pagesList = 'ul.pagination';

    // Filter selectors
    this.searchFiltersSlider = () => `${this.searchFilters} .faceted-slider`;
  }

  /**
   * Quick view product
   * @param page {Page} Browser tab
   * @param id {number} Product row in the list
   * @returns {Promise<void>}
   */
  async quickViewProduct(page: Page, id: number): Promise<void> {
    await page.locator(this.productImg(id)).hover().then(async () => {
      await this.waitForVisibleSelector(page, this.productQuickViewLink(id));
      await page.locator(this.productQuickViewLink(id)).click();
    });
  }

  /**
   * Go to product page
   * @param page {Page} Browser tab
   * @param id {number} Index of product in list of products
   * @returns {Promise<void>}
   */
  async goToProductPage(page: Page, id: number): Promise<void> {
    await this.clickAndWaitForURL(page, this.productImg(id));
  }

  /**
   * Filter by checkbox
   * @param page {Page} Browser tab
   * @param facetType {string} Type of filter
   * @param checkboxName {string} Checkbox name
   * @return {Promise<void>}
   */
  async filterByCheckbox(page: Page, facetType: string, checkboxName: string): Promise<void> {
    await page.locator(this.filterTypeButton(facetType)).click();
    await page.waitForTimeout(2000);
    if (facetType === 'Color') {
      await page.locator(`${this.searchFiltersLabel} span[style*="${checkboxName}"]`).click();
    } else {
      await page.locator(`${this.searchFiltersLabel} a[href*="${checkboxName}"]`).click();
    }
    await page.locator(this.filterTypeButton(facetType)).click();
    await page.waitForTimeout(2000);
  }

  /**
   * Filter by price
   * @param page {Page} Browser tab
   * @param minPrice {number} Minimum price in the slider
   * @param maxPrice {number} Maximum price in the slider
   * @param filterFrom {number} The minimum value to filter
   * @param filterTo {number} The maximum value to filter
   * @return {Promise<void>}
   */
  async filterByPrice(page: Page, minPrice: number, maxPrice: number, filterFrom: number, filterTo: number): Promise<void> {
    await page.locator(this.filterTypeButton('Price')).click();

    await super.filterByPrice(page, minPrice, maxPrice, filterFrom, filterTo);

    await page.locator(this.filterTypeButton('Price')).click();
    await page.waitForTimeout(2000);
  }

  /**
   * Get product href
   * @param page {Page} Browser tab
   * @param productRow {number} Product row
   * @return {Promise<string>}
   */
  async getProductHref(page: Page, productRow: number): Promise<string> {
    return this.getAttributeContent(page, `${this.productArticle(productRow)} div.card a.product-miniature__link`, 'href');
  }

  /**
   * Get maximum price from slider
   * @param page {Page} Browser tab
   * @return {Promise<number>}
   */
  async getMaximumPrice(page: Page): Promise<number> {
    await page.locator(this.filterTypeButton('Price')).click();

    return parseInt(await this.getAttributeContent(page, this.searchFilterPriceSlider, 'data-slider-max'), 10);
  }

  /**
   * Get minimum price from slider
   * @param page {Page} Browser tab
   * @return {Promise<number>}
   */
  async getMinimumPrice(page: Page): Promise<number> {
    return parseInt(await this.getAttributeContent(page, this.searchFilterPriceSlider, 'data-slider-min'), 10);
  }
}

module.exports = new CategoryPage();
