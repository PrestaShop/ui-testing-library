import {type BOMerchandiseReturnsPageInterface} from '@interfaces/BO/customerService/merchandiseReturns';
import {type Page} from '@playwright/test';
import {
  BOMerchandiseReturnsPage as BOMerchandiseReturnsPageVersion,
} from '@versions/develop/pages/BO/customerService/merchandiseReturns';

/**
 * Merchandise returns page for PrestaShop 9.1 (legacy AdminReturnController), reassigns the legacy
 * selectors and behaviour on top of the Symfony-migrated develop page object.
 * @class
 * @extends BOMerchandiseReturnsPageVersion
 */
class BOMerchandiseReturnsPage extends BOMerchandiseReturnsPageVersion implements BOMerchandiseReturnsPageInterface {
  protected generalForm: string;

  protected enableOrderReturnLabel: (toggle: string) => string;

  protected legacySaveButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on the legacy merchandise return page
   */
  constructor() {
    super();

    this.successfulUpdateMessage = 'The settings have been successfully updated.';
    this.errorDeletionMessage = 'You need at least one product.';

    // Selectors
    // Merchandise returns table (legacy HelperList)
    this.gridTable = '#table-order_return';
    this.filterColumn = (filterBy: string) => `${this.gridTable} input[name='order_returnFilter_${filterBy}']`;
    this.filterSearchButton = `${this.gridTable} #submitFilterButtonorder_return`;
    this.filterResetButton = `${this.gridTable} button[name='submitResetorder_return']`;
    this.tableBody = `${this.gridTable} tbody`;
    this.tableRow = (row: number) => `${this.tableBody} tr:nth-child(${row})`;
    this.tableColumn = (row: number, column: string) => `${this.tableRow(row)} td.column-${column}`;

    // Options (legacy HelperOptions)
    this.generalForm = '#order_return_fieldset_general';
    this.enableOrderReturnLabel = (toggle: string) => `${this.generalForm} #PS_ORDER_RETURN_${toggle}`;
    this.returnsPrefixInput = '#conf_id_PS_RETURN_PREFIX input[name=\'PS_RETURN_PREFIX_1\']';
    this.legacySaveButton = `${this.generalForm} button[name='submitOptionsorder_return']`;
  }

  /*
    Methods
  */

  /**
   * Filter merchandise returns table
   * @param page {Page} Browser tab
   * @param filterBy {string} The column name to filter by
   * @param value {string} Value to filter with
   * @returns {Promise<void>}
   */
  async filterMerchandiseReturnsTable(page: Page, filterBy: string, value: string): Promise<void> {
    if (await this.elementVisible(page, this.filterColumn(filterBy), 2000)) {
      await this.setValue(page, this.filterColumn(filterBy), value);
      // click on search
      await this.clickAndWaitForURL(page, this.filterSearchButton);
    }
  }

  /**
   * Go to merchandise return page
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @returns {Promise<void>}
   */
  async goToMerchandiseReturnPage(page: Page, row: number = 1): Promise<void> {
    await this.clickAndWaitForURL(page, this.tableColumn(row, 'id_order_return'));
  }

  /**
   * Enable/Disable merchandise returns
   * @param page {Page} Browser tab
   * @param status {boolean} Status to set on the order return
   * @returns {Promise<string>}
   */
  async setOrderReturnStatus(page: Page, status: boolean = true): Promise<string> {
    await this.setChecked(page, this.enableOrderReturnLabel(status ? 'on' : 'off'));
    await this.clickAndWaitForLoadState(page, this.legacySaveButton);
    return this.getTextContent(page, this.alertSuccessBlock);
  }

  /**
   * Update returns prefix
   * @param page {Page} Browser tab
   * @param prefix {string} Value of prefix to set on return prefix input
   * @returns {Promise<string>}
   */
  async setReturnsPrefix(page: Page, prefix: string): Promise<string> {
    await this.setValue(page, this.returnsPrefixInput, prefix);
    await this.clickAndWaitForLoadState(page, this.legacySaveButton);
    return this.getTextContent(page, this.alertSuccessBlock);
  }
}

const boMerchandiseReturnsPage = new BOMerchandiseReturnsPage();
export {boMerchandiseReturnsPage, BOMerchandiseReturnsPage};
