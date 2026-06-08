import {type BOMerchandiseReturnsEditPageInterface} from '@interfaces/BO/customerService/merchandiseReturns/edit';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Edit merchandise returns page (Symfony migrated controller), contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class BOMerchandiseReturnsEditPage extends BOBasePage implements BOMerchandiseReturnsEditPageInterface {
  public pageTitle: string;

  protected form: string;

  protected statusSelect: string;

  protected saveButton: string;

  protected saveAndStayButton: string;

  protected cancelButton: string;

  protected downloadPdfButton: string;

  protected productsTable: string;

  protected productsTableRow: (row: number) => string;

  protected productDeleteButton: (row: number) => string;

  protected deleteProductModal: string;

  protected deleteProductModalConfirmButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on edit merchandise return page
   */
  constructor() {
    super();

    this.pageTitle = 'Return merchandise authorization (RMA)';
    this.successfulUpdateMessage = 'Update successful';

    // Selectors. The form element carries name="order_return" (its inner widget wrapper uses
    // id="order_return", but the footer buttons and products table live outside that wrapper).
    this.form = 'form[name=\'order_return\']';
    this.statusSelect = '#order_return_order_return_state';
    this.saveButton = `${this.form} .card-footer button.btn-primary`;
    this.saveAndStayButton = `${this.form} button[name='submitAddorder_returnAndStay']`;
    this.cancelButton = `${this.form} .card-footer a.btn-outline-secondary:not([data-role])`;
    this.downloadPdfButton = `${this.form} a[data-role='order-return-download-pdf']`;

    // Returned products table (deferred deletion — Issue #27628)
    this.productsTable = `${this.form} table[data-role='order-return-products']`;
    this.productsTableRow = (row: number) => `${this.productsTable} tbody tr:nth-child(${row})`;
    this.productDeleteButton = (row: number) => `${this.productsTableRow(row)} [data-role='order-return-delete-product']`;
    this.deleteProductModal = '#orderReturnDeleteProductModal';
    this.deleteProductModalConfirmButton = `${this.deleteProductModal} [data-role='order-return-confirm-delete-product']`;
  }

  /*
    Methods
  */

  /**
   * Set merchandise return status
   * @param page {Page} Browser tab
   * @param status {string} Status to select
   * @param saveAndStay {boolean} True if we need to click on save and stay button
   * @returns {Promise<string>}
   */
  async setStatus(page: Page, status: string, saveAndStay: boolean = false): Promise<string> {
    // The option labels are prefixed ("{id} - {name}"), so match by the status name then select by value
    const value = await page.locator(`${this.statusSelect} option`).filter({hasText: status}).first().getAttribute('value');
    await this.selectByValue(page, this.statusSelect, value ?? '');
    if (saveAndStay) {
      await this.clickAndWaitForLoadState(page, this.saveAndStayButton, 'networkidle');
    } else {
      await this.clickAndWaitForLoadState(page, this.saveButton, 'networkidle');
    }
    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Get file name. In the migrated page the merchant-facing PDF is exposed as a footer button that
   * is only rendered when the return is "Waiting for package"; we map that to the legacy semantics
   * ("Print out" when the PDF is available, "--" otherwise).
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getFileName(page: Page): Promise<string> {
    const isVisible = await this.elementVisible(page, this.downloadPdfButton, 2000);

    return isVisible ? 'Print out' : '--';
  }

  /**
   * Download PDF
   * @param page {Page} Browser tab
   * @returns {Promise<string | null>}
   */
  async downloadPDF(page: Page): Promise<string | null> {
    return this.clickAndWaitForDownload(page, this.downloadPdfButton);
  }

  /**
   * Click on cancel button
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async clickOnCancelButton(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.cancelButton);
  }

  /**
   * Stage a returned product for deletion through the confirmation modal (no server call yet)
   * @param page {Page} Browser tab
   * @param row {number} Row in products table
   * @returns {Promise<void>}
   */
  private async stageProductDeletion(page: Page, row: number): Promise<void> {
    await this.waitForVisibleSelector(page, this.productDeleteButton(row));
    // The deferred-deletion handler is bound on DOM-ready; right after a "Save and stay" reload the
    // first click can fire before it is bound and the modal never opens, so retry the trigger.
    for (let attempt = 0; attempt < 3; attempt++) {
      await this.waitForSelectorAndClick(page, this.productDeleteButton(row));
      try {
        await this.waitForVisibleSelector(page, this.deleteProductModalConfirmButton, 3000);
        break;
      } catch (error) {
        if (attempt === 2) {
          throw error;
        }
      }
    }
    await this.waitForSelectorAndClick(page, this.deleteProductModalConfirmButton);
    await this.waitForHiddenSelector(page, this.deleteProductModal);
  }

  /**
   * Try to delete the last returned product and return the resulting error message. Staging then
   * saving a return with no products left triggers the "at least one product" guard server-side.
   * @param page {Page} Browser tab
   * @param row {number} Row in products table
   * @returns {Promise<string>}
   */
  async clickOnDeleteLastProductButton(page: Page, row: number = 1): Promise<string> {
    await this.stageProductDeletion(page, row);
    await this.clickAndWaitForLoadState(page, this.saveAndStayButton, 'networkidle');

    return this.getAlertDangerBlockParagraphContent(page);
  }

  /**
   * Delete a returned product (stage it then persist via "Save and stay" so we remain on the edit page)
   * @param page {Page} Browser tab
   * @param row {number} Row in products table
   * @returns {Promise<string>}
   */
  async deleteProduct(page: Page, row: number = 1): Promise<string> {
    await this.stageProductDeletion(page, row);
    await this.clickAndWaitForLoadState(page, this.saveAndStayButton, 'networkidle');

    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

const boMerchandiseReturnsEditPage = new BOMerchandiseReturnsEditPage();
export {boMerchandiseReturnsEditPage, BOMerchandiseReturnsEditPage};
