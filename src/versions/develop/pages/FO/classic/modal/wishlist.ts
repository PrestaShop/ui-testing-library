import {FoModalWishlistPageInterface} from '@interfaces/FO/modal/wishlist';
import FOBasePage from '@pages/FO/FOBasePage';
import {Page} from '@playwright/test';

class WishlistModalPage extends FOBasePage implements FoModalWishlistPageInterface {
  public readonly messageAddedToWishlist: string;

  private readonly modalLogin: string;

  private readonly modalLoginBtnCancel: string;

  private readonly modalLoginBtnLogin: string;

  private readonly modalAddTo: string;

  private readonly modalAddToListItem: (nth: number) => string;

  private readonly toastText: string;

  /**
     * @constructs
     * Setting up texts and selectors to use on home page
     */
  constructor(theme: string = 'classic') {
    super(theme);

    // Message
    this.messageAddedToWishlist = 'Product added';

    // Modal "Login"
    this.modalLogin = '.wishlist-login .wishlist-modal.show';
    this.modalLoginBtnCancel = `${this.modalLogin} div.modal-footer button[data-dismiss="modal"]`;
    this.modalLoginBtnLogin = `${this.modalLogin} div.modal-footer a`;

    // Modal "Add to"
    this.modalAddTo = '.wishlist-add-to .wishlist-modal.show';
    this.modalAddToListItem = (nth: number) => `${this.modalAddTo} ul.wishlist-list li.wishlist-list-item:nth-child(${nth})`;

    // Toast
    this.toastText = '.wishlist-toast .wishlist-toast-text';
  }

  /**
   * Returns if the modal login is visible
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async hasModalLogin(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.modalLogin, 3000);
  }

  /**
   * Close the modal login and returns if the modal login is visible
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async clickCancelOnModalLogin(page: Page): Promise<boolean> {
    await page.locator(this.modalLoginBtnCancel).click();

    return this.hasModalLogin(page);
  }

  /**
   * Close the modal login
   * @param page {Page}
   * @returns {Promise<void>}
   */
  async clickLoginOnModalLogin(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.modalLoginBtnLogin);
  }

  /**
   * Add to a wishlist
   * @param page {Page}
   * @param nth {number}
   * @returns {Promise<void>}
   */
  async addWishlist(page: Page, nth: number): Promise<string> {
    // Wait for the modal
    await this.elementVisible(page, this.modalAddTo, 3000);
    // Click on the first wishlist
    await page.locator(this.modalAddToListItem(nth)).click();
    // Wait for the toast
    await this.elementVisible(page, this.toastText, 3000);

    return this.getTextContent(page, this.toastText);
  }
}

module.exports = new WishlistModalPage();
