import {type ModulePsGdprBoTabHelpPageInterface} from '@interfaces/BO/modules/psgdpr/tabHelp';
import ModuleConfiguration from '@pages/BO/modules/moduleConfiguration';
import {type Page} from '@playwright/test';

/**
 * Module configuration page for module : psgdpr, contains selectors and functions for the page
 * @class
 * @extends ModuleConfiguration
 */
class PsGdprTabHelpPage extends ModuleConfiguration implements ModulePsGdprBoTabHelpPageInterface {
  private readonly tabRight: string;

  private readonly linkDocumentation: string;

  private readonly faqPanel: string;

  private readonly faqGroup: (text:string) => string;

  private readonly faqQuestion: string;

  private readonly faqQuestionNth: (nth: number) => string;

  private readonly faqAnswer: (nth: number) => string;

  /**
   * @constructs
   */
  constructor() {
    super();

    this.tabRight = '.helpContentRight .helpContentRight-sub';

    this.linkDocumentation = `${this.tabRight} > a`;

    this.faqPanel = `${this.tabRight} #faq`;

    this.faqGroup = (text: string) => `${this.faqPanel} span.faq-h1:text("${text}")`;

    this.faqQuestion = 'ul > li';

    this.faqQuestionNth = (nth: number) => `${this.faqQuestion}:nth-child(${nth}) span.faq-h2`;

    this.faqAnswer = (nth: number) => `${this.faqQuestion}:nth-child(${nth}) p.faq-text`;
  }

  /**
   * Click on the nth question of a group and returns if the answer is visible
   *
   * @param page {Page}
   * @param groupName {string}
   * @param nthQuestion {number}
   * @returns {Promise<boolean>}
   */
  async clickQuestion(page: Page, groupName: string, nthQuestion: number): Promise<boolean> {
    const questionNth = await page.locator(`${this.faqGroup(groupName)} + ${this.faqQuestionNth(nthQuestion)}`);
    const isOpened = (await questionNth.getAttribute('class') ?? '').includes('faq-open');
    questionNth.click();

    await page.locator(`${this.faqGroup(groupName)} + ${this.faqAnswer(nthQuestion)}`).waitFor({
      state: isOpened ? 'hidden' : 'visible',
      timeout: 10000,
    });
    return !isOpened;
  }

  /**
   * Returns the number of questions in a group
   * @param page {Page}
   * @param groupName {string}
   * @returns {Promise<number>}
   */
  async getCountQuestions(page: Page, groupName: string): Promise<number> {
    return page.locator(`${this.faqGroup(groupName)} + ${this.faqQuestion}`).count();
  }

  /**
   * Download the documentation
   * @param page {Page}
   * @returns {Promise<string|null>}
   */
  async downloadDocumentation(page: Page): Promise<string|null> {
    await page.$eval(this.linkDocumentation, (el: HTMLLinkElement) => el.setAttribute('download', 'download'),
    );
    return this.clickAndWaitForDownload(page, this.linkDocumentation, true);
  }
}

module.exports = new PsGdprTabHelpPage();
