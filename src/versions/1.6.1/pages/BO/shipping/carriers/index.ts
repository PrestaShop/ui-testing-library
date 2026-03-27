// Import pages
import {BOCarriersPageInterface} from '@interfaces/BO/shipping/carriers';
import type {Page} from '@playwright/test';
import {BOCarriersPage as BOCarriersPageVersion} from '@versions/1.7.7/pages/BO/shipping/carriers';

class BOCarriersPage extends BOCarriersPageVersion implements BOCarriersPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use in carriers page
   */
  constructor() {
    super();
  }

  /*
Methods
 */
  /**
   * Go to add new carrier page
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToAddNewCarrierPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.addNewCarrierLink);
    await page.locator('#configuration_form .btn').click();
  }
}

const boCarriersPage = new BOCarriersPage();
export {boCarriersPage, BOCarriersPage};
