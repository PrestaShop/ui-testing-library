// Import pages
import type {BOProductsPageInterface} from '@interfaces/BO/catalog/products';
import {ProductsPage} from '@versions/develop/pages/BO/catalog/products';

import type {Page} from 'playwright';

/**
 * Bo products page, contains functions that can be used on the page
 * @class
 * @extends ProductsPage
 */
class BOProductsVersion extends ProductsPage implements BOProductsPageInterface {
  private readonly productListForm: string;

  private readonly paginationLimitSelect: string;

  private readonly paginationLabel: string;

  private readonly productListfooterRow: string;

  private readonly productNumberBloc: string;

  private readonly productsListTableColumnStatusInput: (row: number) => string;

  /**
     * @constructs
     * Setting up texts and selectors to use on products page
     */
  constructor() {
    super();

    this.successfulDeleteMessage = 'Product successfully deleted.';

    this.newProductButton = '#page-header-desc-configuration-add';

    // Products table selectors
    this.productListForm = '#product_catalog_list';
    this.productGridTable = '#product_catalog_list table';
    this.productTableFilterLine = `${this.productGridTable} tr.column-filters`;
    this.selectAllProductsCheckbox = `${this.productTableFilterLine} #bulk_action_select_all`;

    // Filters input
    this.productFilterIDMinInput = '#filter_column_id_product_min';
    this.productFilterIDMaxInput = '#filter_column_id_product_max';
    this.productFilterNameInput = 'input[name="filter_column_name"]';
    this.productFilterReferenceInput = 'input[name="filter_column_reference"]';
    this.productFilterCategoryInput = 'input[name="filter_column_name_category"]';
    this.productFilterPriceMinInput = '#filter_column_price_min';
    this.productFilterPriceMaxInput = '#filter_column_price_max';
    this.productFilterQuantityMinInput = '#filter_column_sav_quantity_min';
    this.productFilterQuantityMaxInput = '#filter_column_sav_quantity_max';
    this.productFilterSelectStatus = 'select[name="filter_column_active"]';
    this.filterSearchButton = `${this.productTableFilterLine} button[name="products_filter_submit"]`;
    this.filterResetButton = `${this.productTableFilterLine} button[name="products_filter_reset"]`;

    // Products list
    this.productRow = `${this.productGridTable} tbody tr`;
    this.productsListTableRow = (row: number) => `${this.productRow}:nth-child(${row})`;
    this.productsListTableColumnID = (row: number) => `${this.productsListTableRow(row)}[data-product-id]`;
    this.productsListTableColumnName = (row: number) => `${this.productsListTableRow(row)} td:nth-child(4) a`;
    this.productsListTableColumnReference = (row: number) => `${this.productsListTableRow(row)} td:nth-child(5)`;
    this.productsListTableColumnCategory = (row: number) => `${this.productsListTableRow(row)} td:nth-child(6)`;
    this.productsListTableColumnPriceTExc = (row: number) => `${this.productsListTableRow(row)} td:nth-child(7)`;
    this.productsListTableColumnPriceATI = (row: number) => `${this.productsListTableRow(row)} td:nth-child(8)`;
    this.productsListTableColumnQuantity = (row: number) => `${this.productsListTableRow(row)} td.product-sav-quantity`;
    this.productsListTableColumnStatus = (row: number) => `${this.productsListTableRow(row)} td:nth-child(10) .ps-switch`;
    this.productsListTableColumnStatusInput = (row: number) => `${this.productsListTableColumnStatus(row)} input`;
    this.productListTableDropDownList = (row: number) => `${this.productsListTableRow(row)} button.dropdown-toggle`;
    this.productListTableDeleteButton = (row: number) => `${this.productsListTableRow(row)} a[onclick*='delete']`;

    // Modal dialog
    this.modalDialog = '.modal.show div.modal-dialog';
    this.modalDialogFooter = `${this.modalDialog} div.modal-footer`;
    this.modalDialogConfirmButton = `${this.modalDialogFooter} button[value="confirm"]`;

    // Bulk actions
    this.selectAllProductsCheckbox = `${this.productListForm} .column-filters .md-checkbox label`;
    this.productBulkMenuButton = '#product_bulk_menu:not([disabled])';
    this.bulkActionsDropDownMenu = 'div.bulk-catalog div.dropdown-menu.show';
    this.bulkActionsSelectionLink = (action: string) => `${this.bulkActionsDropDownMenu} a[onclick*=${action}]`;
    this.modalBulkActionsProducts = (action: string) => `#catalog_${action}_modal`;
    this.modalBulkActionsProductsBody = (action: string) => `${this.modalBulkActionsProducts(action)} div.modal-body`;
    this.modalBulkActionsProductsFooter = (action: string) => `${this.modalBulkActionsProducts(action)} div.modal-footer`;
    this.modalDialogBulkActionButton = (action: string) => `${this.modalBulkActionsProductsFooter(action)} `
        + 'button[value="confirm"]';

    // Pagination selectors
    this.paginationLimitSelect = '#paginator_select_page_limit';
    this.paginationLabel = `${this.productListForm} .col-form-label`;
    this.paginationNextLink = `${this.productListForm} [data-role=next-page-link]`;
    this.paginationPreviousLink = `${this.productListForm} [data-role='previous-page-link']`;
    this.productListfooterRow = `${this.productListForm} div.pagination-block`;
    this.productNumberBloc = `${this.productListfooterRow} label.col-form-label`;
  }

  /**
   * Click on new product button
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async clickOnNewProductButton(page: Page): Promise<boolean> {
    await this.clickAndWaitForURL(page, this.newProductButton);

    return this.elementVisible(page, '#form', 1000);
  }

  /**
     * Get number of products displayed in list
     * @param page {Page} Browser tab
     * @returns {Promise<number>}
     */
  async getNumberOfProductsFromList(page: Page):Promise<number> {
    const found = await this.elementVisible(page, this.paginationNextLink, 1000);

    // In case we filter products and there is only one page, link next from pagination does not appear
    if (!found) {
      return (await page.$$(this.productRow)).length;
    }

    const footerText = await this.getTextContent(page, this.productNumberBloc);

    // @ts-ignore
    return parseInt(/\d+/g.exec(footerText.match(/out of ([0-9]+)/)).toString(), 10);
  }

  /**
   * Get Product Status
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @returns {Promise<boolean>}
   */
  async getProductStatusFromList(page: Page, row: number): Promise<boolean> {
    const inputValue = await this.getAttributeContent(
      page,
      `${this.productsListTableColumnStatusInput(row)}[checked]`,
      'value',
    );

    return inputValue !== '0';
  }

  /**
   * Bulk select products
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async bulkSelectProducts(page: Page): Promise<boolean> {
    // @ts-ignore
    await page.$eval(this.selectAllProductsCheckbox, (el) => el.click());

    return this.elementNotVisible(page, `${this.productBulkMenuButton}[disabled]`, 1000);
  }

  /**
   * Click on bulk action products
   * @param page {Page} Browser tab
   * @param action {string} Enable/disable/duplicate or delete
   * @returns {Promise<string>}
   */
  async clickOnBulkActionsProducts(page: Page, action: string): Promise<string> {
    let modalBulkAction :string = action;

    if (action === 'delete') {
      modalBulkAction = 'deletion';
    }
    await Promise.all([
      this.waitForVisibleSelector(page, `${this.productBulkMenuButton}[aria-expanded='true']`),
      page.locator(this.productBulkMenuButton).click(),
    ]);

    const bulkActionsSelectionLink = this.bulkActionsSelectionLink(
      (action === 'enable' || action === 'disable') ? `${action}_all` : `${action}`,
    );

    const modalBulkActionsProducts = this.modalBulkActionsProducts(
      (action === 'enable' || action === 'disable') ? `${action}_all` : `${modalBulkAction}`,
    );
    const modalBulkActionsProductsBody = this.modalBulkActionsProductsBody(
      (action === 'enable' || action === 'disable') ? `${action}_all` : `${modalBulkAction}`,
    );
    await this.waitForSelectorAndClick(page, bulkActionsSelectionLink);
    await this.waitForVisibleSelector(page, modalBulkActionsProducts);

    return this.getTextContent(page, modalBulkActionsProductsBody);
  }

  /**
   * Bulk actions products
   * @param page {Page} Browser tab
   * @param action {string} Enable/disable/duplicate or delete
   * @returns {Promise<string>}
   */
  async bulkActionsProduct(page: Page, action: string): Promise<string> {
    const actionSelector: string = (action === 'enable' || action === 'disable') ? `${action}_all` : `${action}`;
    await this.clickAndWaitForURL(page, this.modalDialogBulkActionButton(actionSelector));

    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

const productsPage = new BOProductsVersion();
export {productsPage, BOProductsVersion as ProductsPage};
