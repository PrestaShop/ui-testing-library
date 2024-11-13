// Import pages
import type {BOProductsPageInterface} from '@interfaces/BO/catalog/products';
import {ProductsPage} from '@versions/1.7.3/pages/BO/catalog/products';
import {type Page} from '@playwright/test';

/**
 * Bo products page, contains functions that can be used on the page
 * @class
 * @extends ProductsPage
 */
class BOProductsVersion extends ProductsPage implements BOProductsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on products page
   */
  constructor() {
    super();

    this.alertSuccessBlock = `${this.alertBlock}.flash-message-list.alert-success`;

    // Products list
    this.productListTableDropDownList = (row: number) => `${this.productsListTableRow(row)} td div.btn-group-action `
      + 'a[data-toggle="dropdown"]';

    // Modal dialog
    this.modalDialog = '.modal[style*="display"]';
    this.modalDialogFooter = `${this.modalDialog} div.modal-footer`;
    this.modalDialogConfirmButton = `${this.modalDialogFooter} button[value="confirm"]`;

    // Bulk actions
    this.bulkActionsDropDownMenu = 'div.dropup.open div.dropdown-menu';
  }

  /**
   * Confirm dialog product
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async clickOnConfirmDialogButton(page: Page): Promise<string> {
    await this.waitForSelectorAndClick(page, this.modalDialogConfirmButton);

    return this.getAlertSuccessBlockContent(page);
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

    return this.getAlertSuccessBlockContent(page);
  }
}

const productsPage = new BOProductsVersion();
export {productsPage, BOProductsVersion as ProductsPage};
