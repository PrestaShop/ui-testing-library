import BOBasePage from '@pages/BO/BOBasePage';

import {LoginPageInterface} from '@interfaces/BO/login';

import type {Page} from 'playwright';

/**
 * BO login page, contains texts, selectors and functions to use on the page.
 * @class
 * @extends BOBasePage
 */
class LoginPage extends BOBasePage implements LoginPageInterface {
  public readonly pageTitle: string;

  public readonly loginErrorText: string;

  public readonly resetPasswordSuccessText: string;

  private readonly loginBackShopLink: string;

  private readonly loginFooter: string;

  private readonly allRightsReservedLink: string;

  private readonly twitterLink: string;

  private readonly facebookLink: string;

  private readonly githubLink: string;

  private readonly emailInput: string;

  private readonly passwordInput: string;

  private readonly submitLoginButton: string;

  protected alertDangerDiv: string;

  private readonly alertDangerTextBlock: string;

  private readonly forgotPasswordLink: string;

  protected resetPasswordEmailFormField: string;

  protected resetPasswordButton: string;

  protected resetPasswordSuccessConfirmationText: string;

  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super();

    this.pageTitle = global.INSTALL.SHOP_NAME;
    this.loginErrorText = 'The employee does not exist, or the password provided is incorrect.';
    this.resetPasswordSuccessText = 'Please, check your mailbox.';

    this.loginBackShopLink = '#login-panel span.login-back-shop';
    this.loginFooter = '#login-footer';
    this.allRightsReservedLink = `${this.loginFooter} .text-muted a`;
    this.twitterLink = `${this.loginFooter} a.link-social.link-twitter`;
    this.facebookLink = `${this.loginFooter} a.link-social.link-facebook`;
    this.githubLink = `${this.loginFooter} a.link-social.link-github`;
    this.shopVersion = '#login-header div.text-center';
    this.emailInput = '#email';
    this.passwordInput = '#passwd';
    this.submitLoginButton = '#submit_login';
    this.alertDangerDiv = '.alert-danger .alert-text';
    this.alertDangerTextBlock = `${this.alertDangerDiv} p`;
    // reset password selectors
    this.forgotPasswordLink = '#forgot-password-link';
    this.resetPasswordEmailFormField = '#request_password_reset_email_forgot';
    this.resetPasswordButton = '#request_password_reset_buttons_submit_login';
    this.resetPasswordSuccessConfirmationText = '.alert-info .alert-text p';
  }

  /*
  Methods
   */

  /**
   * Click on Back to shop name link
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async clickOnBackToShopNameLink(page: Page): Promise<void> {
    return this.clickAndWaitForURL(page, this.loginBackShopLink);
  }

  /**
   * Click on all rights reserved link
   * @param page {Page} Browser tab
   * @return {Promise<Page>}
   */
  async clickOnAllRightsReservedLink(page: Page): Promise<Page> {
    return this.openLinkWithTargetBlank(page, this.allRightsReservedLink, 'body header');
  }

  /**
   * Click on twitter link
   * @param page {Page} Browser tab
   * @return {Promise<Page>}
   */
  async clickOnTwitterLink(page: Page): Promise<Page> {
    return this.openLinkWithTargetBlank(page, this.twitterLink, 'body');
  }

  /**
   * Click on facebook link
   * @param page {Page} Browser tab
   * @return {Promise<Page>}
   */
  async clickOnFacebookLink(page: Page): Promise<Page> {
    return this.openLinkWithTargetBlank(page, this.facebookLink, 'body');
  }

  /**
   * Click on github link
   * @param page {Page} Browser tab
   * @return {Promise<Page>}
   */
  async clickOnGithubLink(page: Page): Promise<Page> {
    return this.openLinkWithTargetBlank(page, this.githubLink, 'body');
  }

  /**
   * Fill email input
   * @param page {Page} Browser tab
   * @param email {string} String of employee email
   * @return {Promise<void>}
   */
  async fillEmailInput(page: Page, email: string): Promise<void> {
    await this.setValue(page, this.emailInput, email);
  }

  /**
   * Fill password input
   * @param page {Page} Browser tab
   * @param password {string} String of employee password
   * @return {Promise<void>}
   */
  async fillPasswordInput(page: Page, password: string): Promise<void> {
    await this.setValue(page, this.passwordInput, password);
  }

  /**
   * Enter credentials for login form
   * @param page {Page} Browser tab
   * @param email {string} String of employee email
   * @param password {string} String of employee password
   * @return {Promise<void>}
   */
  async fillForm(page: Page, email: string, password: string): Promise<void> {
    await this.fillEmailInput(page, email);
    await this.fillPasswordInput(page, password);
  }

  /**
   * Click on login button
   * @param page {Page} Browser tab
   * @param waitForNavigation {boolean} true to wait for navigation after the click on button
   * @return {Promise<void>}
   */
  async clickOnLoginButton(page: Page, waitForNavigation: boolean): Promise<void> {
    // Wait for navigation if the login is successful
    if (waitForNavigation) {
      await this.clickAndWaitForURL(page, this.submitLoginButton);
    } else {
      await page.locator(this.submitLoginButton).click();
    }
  }

  /**
   * Fill login form and success login
   * @param page {Page} Browser tab
   * @param email {string} String of employee email
   * @param password {string} String of employee password
   * @returns {Promise<void>}
   */
  async successLogin(page: Page, email: string, password: string): Promise<void> {
    await this.fillForm(page, email, password);
    await this.clickOnLoginButton(page, true);
  }

  /**
   * Fill login form and submit without waiting for success
   * @param page {Page} Browser tab
   * @param email {string} String of employee email
   * @param password {string} String of employee password
   * @return {Promise<void>}
   */
  async failedLogin(page: Page, email: string, password: string): Promise<void> {
    await this.fillForm(page, email, password);
    await this.clickOnLoginButton(page, false);
  }

  /**
   * Get login error
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async getLoginError(page: Page): Promise<string> {
    return this.getTextContent(page, this.alertDangerTextBlock);
  }

  // Reset password functions
  /**
   * Go to forgot password view
   * @param page
   * @return {Promise<void>}
   */
  async goToForgotPasswordView(page: Page): Promise<void> {
    await page.locator(this.forgotPasswordLink).click();
    await this.waitForVisibleSelector(page, this.resetPasswordButton);
  }

  /**
   * Fill reset password email field
   * @param page {Page} Browser tab
   * @param email {string} String of employee email
   * @return {Promise<void>}
   */
  async fillResetPasswordEmailInput(page: Page, email: string): Promise<void> {
    await this.setValue(page, this.resetPasswordEmailFormField, email);
  }

  /**
   * Go to password reset page and send reset password link
   * @param page {Page} Browser tab
   * @param email {string} String of employee email
   * @returns {Promise<void>}
   */
  async sendResetPasswordLink(page: Page, email: string): Promise<void> {
    await this.goToForgotPasswordView(page);
    await this.fillResetPasswordEmailInput(page, email);
    await page.locator(this.resetPasswordButton).click();
  }

  /**
   * Get and return reset password success message text
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getResetPasswordSuccessMessage(page: Page): Promise<string> {
    return this.getTextContent(page, this.resetPasswordSuccessConfirmationText);
  }
}

const loginPage = new LoginPage();
export {loginPage, LoginPage};
