import {FoModalWishlistPageInterface} from '@interfaces/FO/modal/wishlist';
import FOBasePage from '@pages/FO/FOBasePage';
import {Page} from '@playwright/test';

class WishlistModalPage extends FOBasePage implements FoModalWishlistPageInterface {
  public readonly messageAddedToWishlist: string;

  public readonly messageLinkSharedWishlist: string;

  public readonly messageWishlistCreated: string;

  private readonly modalLogin: string;

  private readonly modalLoginBtnCancel: string;

  private readonly modalLoginBtnLogin: string;

  private readonly modalAddTo: string;

  private readonly modalAddToListItem: (nth: number) => string;

  public readonly modalShare: string;

  public readonly modalShareBtnCancel: string;

  public readonly modalShareBtnShare: string;

  public readonly modalCreate: string;

  public readonly modalCreateInputName: string;

  public readonly modalCreateBtnCancel: string;

  public readonly modalCreateBtnCreate: string;

  private readonly toastText: string;

  /**
     * @constructs
     * Setting up texts and selectors to use on wishlist modal
     */
  constructor(theme: string = 'classic') {
    super(theme);

    // Message
    this.messageAddedToWishlist = 'Product added';
    this.messageLinkSharedWishlist = 'Share link copied!';
    this.messageWishlistCreated = 'The list has been properly created';

    // Modal "Login"
    this.modalLogin = '.wishlist-login .wishlist-modal.show';
    this.modalLoginBtnCancel = `${this.modalLogin} div.modal-footer button[data-dismiss="modal"]`;
    this.modalLoginBtnLogin = `${this.modalLogin} div.modal-footer a`;

    // Modal "Add to"
    this.modalAddTo = '.wishlist-add-to .wishlist-modal.show';
    this.modalAddToListItem = (nth: number) => `${this.modalAddTo} ul.wishlist-list li.wishlist-list-item:nth-child(${nth})`;

    // Modal "Share"
    this.modalShare = '.wishlist-share .wishlist-modal.show';
    this.modalShareBtnCancel = `${this.modalShare} div.modal-footer button[data-dismiss="modal"]`;
    this.modalShareBtnShare = `${this.modalShare} div.modal-footer button.btn-primary`;

    // Modal "Create"
    this.modalCreate = '.wishlist-create .wishlist-modal.show';
    this.modalCreateInputName = `${this.modalCreate} div.modal-body #input2`;
    this.modalCreateBtnCancel = `${this.modalCreate} div.modal-footer button[data-dismiss="modal"]`;
    this.modalCreateBtnCreate = `${this.modalCreate} div.modal-footer button.btn-primary`;

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
   * @returns {Promise<string>}
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

  /**
   * Returns if the modal share is visible
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async hasModalShare(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.modalShare, 3000);
  }

  /**
   * Close the modal share and returns if the modal share is visible
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async clickCancelOnModalShare(page: Page): Promise<boolean> {
    await page.locator(this.modalShareBtnCancel).click();

    return this.hasModalShare(page);
  }

  /**
   * Close the modal share
   * @param page {Page}
   * @returns {Promise<string>}
   */
  async clickShareOnModalShare(page: Page): Promise<string> {
    await page.locator(this.modalShareBtnShare).click();
    // Wait for the toast
    await this.elementVisible(page, this.toastText, 3000);
    // Fetch the toast text
    const textContent = this.getTextContent(page, this.toastText);
    // Wait for the toast hidden
    await this.elementNotVisible(page, this.toastText, 6000);

    return textContent;
  }

  /**
   * Returns if the modal create is visible
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async hasModalCreate(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.modalCreate, 3000);
  }

  /**
   * Close the modal create and returns if the modal create is visible
   * @param page {Page}
   * @returns {Promise<boolean>}
   */
  async clickCancelOnModalCreate(page: Page): Promise<boolean> {
    await page.locator(this.modalCreateBtnCancel).click();

    return this.hasModalCreate(page);
  }

  /**
   * Set the wishlist name
   * @param page {Page}
   * @param wishlistName {string}
   * @returns {Promise<void>}
   */
  async setNameOnModalCreate(page: Page, wishlistName: string): Promise<void> {
    await page.locator(this.modalCreateInputName).fill(wishlistName);
  }

  /**
   * Close the modal create
   * @param page {Page}
   * @returns {Promise<string>}
   */
  async clickCreateOnModalCreate(page: Page): Promise<string> {
    await page.locator(this.modalCreateBtnCreate).click();
    // Wait for the toast
    await this.elementVisible(page, this.toastText, 3000);

    return this.getTextContent(page, this.toastText);
  }
}

module.exports = new WishlistModalPage();
