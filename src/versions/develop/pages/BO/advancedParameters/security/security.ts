import {type BOSecurityPageInterface} from '@interfaces/BO/advancedParameters/security';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Security page, contains functions that can be used on security page
 * @class
 * @extends BOBasePage
 */
class BOSecurityPage extends BOBasePage implements BOSecurityPageInterface {
  public readonly pageTitle: string;

  private readonly customerSessionsPage: string;

  private readonly employeeSessionsPage: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on security page
   */
  constructor() {
    super();

    this.pageTitle = 'Security •';

    // Header links
    this.customerSessionsPage = '#subtab-AdminSecuritySessionEmployee';
    this.employeeSessionsPage = '#subtab-AdminSecuritySessionEmployee';
  }

  /*
  Methods
   */

  // Tab methods
  /**
   * Go to Customer Sessions page
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToCustomerSessionsPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.customerSessionsPage);
  }

  /**
   * Go to Employee Sessions tab
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToEmployeeSessionsPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.employeeSessionsPage);
  }
}

module.exports = new BOSecurityPage();
