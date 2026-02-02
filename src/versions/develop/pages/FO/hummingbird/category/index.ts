// Import FO pages
import {type FoCategoryPageInterface} from '@interfaces/FO/category';
import {CategoryPage as CategoryPageVersion} from '@versions/develop/pages/FO/classic/category';
import type {Page} from 'playwright';

/**
 * Cart page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FoCategoryPage extends CategoryPageVersion implements FoCategoryPageInterface {
  protected searchFilterPriceSlider: string;

  private readonly searchFiltersLabel: string;

  protected filterTypeButton: (facetType: string) => string;

  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');

    this.headerNamePage = '#js-product-list-header h1';
    this.totalProducts = '#js-product-list-top .products__count > span';
    this.productItemListDiv = '#js-product-list article.product-miniature';
    this.sortByDiv = `${this.productsSection} div.products__sort-dropdown`;
    this.sortByButton = `${this.sortByDiv} button#sort_dropdown_button`;
    this.valueToSortBy = (sortBy: string) => `${this.sortByDiv} .dropdown-menu a[href*='${sortBy}']`;

    // Products list
    this.paginationText = 'div.pagination-number';
    this.paginationNext = `${this.productListDiv} nav ul.pagination button.next`;
    this.paginationPrevious = `${this.productListDiv} nav ul.pagination button.previous`;
    this.productArticle = (number: number) => `${this.productListDiv} article:nth-child(${number})`;
    this.productImg = (number: number) => `${this.productArticle(number)} img`;
    this.productPrice = (number: number) => `${this.productArticle(number)} div.product-miniature__price`;
    this.productQuickViewLink = (number: number) => `${this.productArticle(number)} button`
      + '.product-miniature__quickview-button';

    // Categories SideBlock
    this.sideBlockCategories = '.category-tree';
    this.sideBlockCategoriesItem = (level?: number) => `${this.sideBlockCategories} ul.category-tree__list`
      + `${level === undefined ? '' : `[data-depth="${level}"]`} > li.category-tree__item`;
    this.sideBlockCategory = (text: string) => `${this.sideBlockCategoriesItem()} a:text("${text}")`;
    this.sideBlockCollapseIcon = (text: string) => `${this.sideBlockCategory(text)} + button`;
    this.searchFilters = '#search-filters';
    this.filterTypeButton = (facetType: string) => `section.accordion-item button:text("${facetType}")`;
    this.searchFiltersLabel = `${this.searchFilters} label.form-check-label`;
    this.clearAllFiltersLink = `${this.searchFilters} button.js-search-filters-clear-all`;
    this.searchFilterPriceSlider = 'div.search-filters__slider';
    this.closeOneFilter = (row: number) => `#js-active-search-filters ul li:nth-child(${row + 1}) a i`;

    // SubCategories List
    this.subCategoriesList = 'div.subcategory div.subcategory__list';
    this.subCategoriesItem = `${this.subCategoriesList} a.subcategory__link`;
    this.subCategoriesItemLink = (title: string) => `${this.subCategoriesItem}[title="${title}"]`;

    // Pagination selectors
    this.pagesList = 'ul.pagination';
    this.paginationText = `${this.productListDiv} .products__pagination div.pagination__number`;

    this.categoryDescription = 'div.category__description';

    // Filter
    this.searchFilters = '#search_filters_wrapper';
    this.searchFilter = (facetType: string, facetLabel: string) => `${this.searchFilters} section[data-type="${facetType}"]`
      + `${facetLabel === '' ? '' : `[data-name="${facetLabel}"]`} div[id^="facet"]`;
    this.searchFiltersCheckbox = (facetType: string, facetLabel: string) => `${this.searchFilter(facetType, facetLabel)} `
      + 'input[type="checkbox"]';
    this.searchFiltersRadio = (facetType: string, facetLabel: string) => `${this.searchFilter(facetType, facetLabel)} `
      + 'input[type="radio"]';
    this.searchFiltersDropdown = (facetType: string, facetLabel: string) => `${this.searchFilter(facetType, facetLabel)
    } .facet-dropdown`;
    this.searchFiltersSlider = (facetType: string, facetLabel: string) => `${this.searchFilter(facetType, facetLabel)
    } .search-filters__slider`;
    this.searchFilterPriceValues = (facetType: string, facetLabel: string) => `${this.searchFilter(facetType, facetLabel)} `
      + '[id*=facet_label]';
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
    return this.getAttributeContent(page, `${this.productArticle(productRow)} a.product-miniature__title`, 'href');
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

const foCategoryPage = new FoCategoryPage();
export {foCategoryPage, FoCategoryPage};
