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
    this.sideBlockCollapseIcon = (text: string) => `${this.sideBlockCategory(text)} + div`;
    this.filterTypeButton = (facetType: string) => `.facet.accordion-item button:text("${facetType}")`;
    this.searchFilterPriceSlider = 'div.faceted-slider';

    // SubCategories List
    this.subCategoriesList = '#subcategories ul.subcategories-list';
    this.subCategoriesItem = `${this.subCategoriesList} li`;
    this.subCategoriesItemLink = (title: string) => `${this.subCategoriesItem} a[title="${title}"]`;

    // Pagination selectors
    this.paginationText = 'div.pagination-number';

    this.categoryDescription = '#category-description';

    // Filter
    this.searchFilters = '#search-filters';
    this.searchFilter = (facetType: string, facetLabel: string) => `${this.searchFilters} section[data-type="${facetType}"]`
      + `${facetLabel === '' ? '' : `[data-name="${facetLabel}"]`} ul[id^="facet"]`;
    this.searchFiltersCheckbox = (facetType: string, facetLabel: string) => `${this.searchFilter(facetType, facetLabel)} `
      + 'label.facet-label input[type="checkbox"]';
    this.searchFiltersRadio = (facetType: string, facetLabel: string) => `${this.searchFilter(facetType, facetLabel)} `
      + 'label.facet-label input[type="radio"]';
    this.searchFiltersDropdown = (facetType: string, facetLabel: string) => `${this.searchFilter(facetType, facetLabel)
    } .facet-dropdown`;
    this.searchFiltersSlider = () => `${this.searchFilters} .faceted-slider`;
    this.searchFilterPriceValues = (facetType: string, facetLabel: string) => `${this.searchFilter(facetType, facetLabel)} `
      + '[id*=facet_label]';
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
