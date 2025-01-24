import {type BOEmployeeSessionsPageInterface} from '@interfaces/BO/advancedParameters/security/employeeSessions';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Employee sessions page, contains functions that can be used on employee sessions page
 * @class
 * @extends BOBasePage
 */
class BOEmployeeSessionsPage extends BOBasePage implements BOEmployeeSessionsPageInterface {
  public readonly pageTitle: string;

  private readonly customerSessionsPage: string;

  private readonly securityPage: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on security page
   */
  constructor() {
    super();

    this.pageTitle = 'Employee sessions •';

    // Header links
    this.customerSessionsPage = '#subtab-AdminSecuritySessionCustomer';
    this.securityPage = '#subtab-AdminSecurity';
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
   * Go back to Security tab
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToSecurityPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.securityPage);
  }
}

module.exports = new BOEmployeeSessionsPage();
