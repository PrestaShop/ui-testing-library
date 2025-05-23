import {type FOMyGDPRPersonalDataPageInterface} from '@interfaces/FO/myAccount/gdprPersonalData';
import FOBasePage from '@pages/FO/FOBasePage';
import {type Page} from '@playwright/test';

/**
 * GDPR personal data page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FOMyGDPRPersonalDataPage extends FOBasePage implements FOMyGDPRPersonalDataPageInterface {
  public readonly pageTitle: string;

  private readonly headerTitle: string;

  private readonly exportDataToPDFButton: string;

  protected contactUsHyperLink: string;

  private readonly exportDataToCSVButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on gdpr personal data page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.pageTitle = 'GDPR - Personal data';

    // Selectors
    this.headerTitle = '#content-wrapper h1';
    this.exportDataToPDFButton = '#exportDataToPdf';
    this.contactUsHyperLink = '#content section.page_content a[href*=\'contact-us\']';
    this.exportDataToCSVButton = '#exportDataToCsv';
  }

  /*
  Methods
   */
  /**
   * @override
   * Get the page title from the main section
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getPageTitle(page: Page): Promise<string> {
    return this.getTextContent(page, this.headerTitle);
  }

  /**
   * Export data to PDF
   * @param page {Page} Browser tab
   * @returns {Promise<string|null>}
   */
  async exportDataToPDF(page: Page): Promise<string | null> {
    return this.clickAndWaitForDownload(page, this.exportDataToPDFButton);
  }

  /**
   * Go to contact us page
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToContactUsPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.contactUsHyperLink);
  }

  /**
   * Export data to CSV
   * @param page {Page} Browser tab
   * @returns {Promise<string|null>}
   */
  async exportDataToCSV(page: Page): Promise<string | null> {
    return this.clickAndWaitForDownload(page, this.exportDataToCSVButton);
  }
}

const foMyGDPRPersonalDataPage = new FOMyGDPRPersonalDataPage();
export {foMyGDPRPersonalDataPage, FOMyGDPRPersonalDataPage};
