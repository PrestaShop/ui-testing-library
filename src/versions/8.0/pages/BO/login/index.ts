// Import pages
import type {LoginPageInterface} from '@interfaces/BO/login';
import {Page} from '@playwright/test';
import {LoginPage} from '@versions/8.1/pages/BO/login';

/**
 * Order confirmation page, contains functions that can be used on the page
 * @class
 * @extends OrderConfirmationPage
 */
class BOLoginVersion extends LoginPage implements LoginPageInterface {
  private readonly onboardingCloseButton: string;

  private readonly onboardingStopButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on order confirmation page
   */
  constructor() {
    super();

    // welcome module
    this.onboardingCloseButton = 'button.onboarding-button-shut-down';
    this.onboardingStopButton = 'a.onboarding-button-stop';
  }

  /**
   * Fill login form and success login
   * @param page {Page} Browser tab
   * @param email {string} String of employee email
   * @param password {string} String of employee password
   * @returns {Promise<void>}
   */
  async successLogin(page: Page, email: string, password: string, closeModal: boolean = true): Promise<void> {
    await super.successLogin(page, email, password);

    if (closeModal) {
      // closeOnboardingModal
      if (await this.elementVisible(page, this.onboardingCloseButton, 3000)) {
        // Close popup
        await page.locator(this.onboardingCloseButton).click();
        await this.waitForHiddenSelector(page, this.onboardingCloseButton);

        // Close menu block
        if (await this.elementVisible(page, this.onboardingStopButton, 3000)) {
          await page.locator(this.onboardingStopButton).click();
          await this.waitForHiddenSelector(page, this.onboardingStopButton);
        }
      }
    }
  }
}

const loginPage = new BOLoginVersion();
export {loginPage, BOLoginVersion as LoginPage};
