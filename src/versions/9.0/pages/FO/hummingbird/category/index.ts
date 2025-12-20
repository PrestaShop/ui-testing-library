import {type FoCategoryHummingbirdPageInterface} from '@interfaces/FO/category';
import {Page} from '@playwright/test';
import {FoCategoryPage as FoCategoryPageVersion} from '@versions/develop/pages/FO/hummingbird/category';

/**
 * @class
 * @extends FoCategoryPageVersion
 */
class FoCategoryPage extends FoCategoryPageVersion implements FoCategoryHummingbirdPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super();

    // Selectors
    this.totalProducts = '#js-product-list-top .total-products > p';
    this.productItemListDiv = 'div.products div.card';
    this.sortByDiv = `${this.productsSection} div.sort-by-row`;
    this.sortByButton = `${this.sortByDiv} button.select-title`;
    this.valueToSortBy = (sortBy: string) => `${this.productListTop} .products-sort-order .dropdown-menu a[href*='${sortBy}']`;

    // Products list
    this.paginationNext = `${this.productListDiv} nav div.pagination-list-container a.next`;
    this.paginationPrevious = `${this.productListDiv} nav div.pagination-list-container a.previous`;
    this.productPrice = (number: number) => `${this.productArticle(number)} span.product-miniature__price`;
    this.productQuickViewLink = (number: number) => `${this.productArticle(number)} .product-miniature__quickview `
      + 'button';

    // Categories SideBlock
    this.filterTypeButton = (facetType: string) => `.facet.accordion-item button:text("${facetType}")`;
    this.searchFilterPriceSlider = 'div.faceted-slider';

    // Pagination selectors
    this.paginationText = 'div.pagination-number';

    this.sideBlockCollapseIcon = (text: string) => `${this.sideBlockCategory(text)} + div`;

    // Filter selectors
    this.searchFiltersSlider = () => `${this.searchFilters} .faceted-slider`;
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
}

const foCategoryPage = new FoCategoryPage();
export {foCategoryPage, FoCategoryPage};
