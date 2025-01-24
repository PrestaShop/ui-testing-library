import {type BOCustomerSessionsPageInterface} from '@interfaces/BO/advancedParameters/security/customerSessions';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Customer sessions page, contains functions that can be used on customer sessions page
 * @class
 * @extends BOBasePage
 */
class BOCustomerSessionsPage extends BOBasePage implements BOCustomerSessionsPageInterface {
  public readonly pageTitle: string;

  private readonly securityPage: string;

  private readonly employeeSessionsPage: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on customer sessions page
   */
  constructor() {
    super();

    this.pageTitle = 'Customer sessions •';

    // Header links
    this.securityPage = '#subtab-AdminSecurity';
    this.employeeSessionsPage = '#subtab-AdminSecuritySessionEmployee';
  }

  /*
  Methods
   */

  // Tab methods
  /**
   * Go to Employee Sessions page
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToEmployeeSessionsPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.employeeSessionsPage);
  }

  /**
   * Go back to Security tab
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToSecurityPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.securityPage);
  }
}

module.exports = new BOCustomerSessionsPage();
