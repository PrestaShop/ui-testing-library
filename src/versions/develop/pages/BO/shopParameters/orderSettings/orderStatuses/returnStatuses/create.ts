import type FakerOrderReturnStatus from '@data/faker/orderReturnStatus';
import {
  type BOReturnStatusesCreatePageInterface,
} from '@interfaces/BO/shopParameters/orderSettings/orderStatuses/returnStatuses/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add order return status page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class BOReturnStatusesCreatePage extends BOBasePage implements BOReturnStatusesCreatePageInterface {
  public readonly pageTitleCreate: string;

  public readonly pageTitleEdit: (name: string) => string;

  private readonly nameInput: string;

  private readonly colorInput: string;

  private readonly saveButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on add order return status page
   */
  constructor() {
    super();

    this.pageTitleCreate = `New return status • ${global.INSTALL.SHOP_NAME}`;
    this.pageTitleEdit = (name: string) => `Editing return status ${name} • ${global.INSTALL.SHOP_NAME}`;

    // Form selectors
    this.nameInput = '#order_return_state_name_1';
    this.colorInput = '#order_return_state_color';
    this.saveButton = '#save-button';
  }

  /* Methods */

  /**
   * Fill order return status form
   * @param page {Page} Browser tab
   * @param orderReturnStatusData {FakerOrderReturnStatus} Data to set on order return status form
   * @return {Promise<string>}
   */
  async setOrderReturnStatus(page: Page, orderReturnStatusData: FakerOrderReturnStatus): Promise<string> {
    await this.setValue(page, this.nameInput, orderReturnStatusData.name);

    // Set color
    await this.setInputValue(page, this.colorInput, orderReturnStatusData.color);

    // Save order return status
    await this.clickAndWaitForURL(page, this.saveButton);

    // Return successful message
    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

module.exports = new BOReturnStatusesCreatePage();
