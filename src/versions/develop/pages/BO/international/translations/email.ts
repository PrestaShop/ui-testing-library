import {type BOTranslationsEmailPageInterface} from '@interfaces/BO/international/translations/email';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Translations page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOTranslationsEmailPage extends BOBasePage implements BOTranslationsEmailPageInterface {
  public readonly pageTitle: (locale: string) => string;

  constructor() {
    super();

    this.pageTitle = (locale: string) => `Email body templates — ${locale} • ${global.INSTALL.SHOP_NAME}`;
  }

  /**
   * Search translation
   * @param page {Page} Browser tab
   * @param expression {string} Expression to set on search input
   * @returns {Promise<void>}
   */
  async searchTranslation(page: Page, expression: string): Promise<void> {
    await this.setValue(page, this.searchInput, expression);
    await page.locator(this.searchButton).click();
    await this.waitForAttachedSelector(page, this.translationTextarea);
    await page.waitForTimeout(2000);
  }
}

const boTranslationsEmailPage = new BOTranslationsEmailPage();
export {boTranslationsEmailPage, BOTranslationsEmailPage}
