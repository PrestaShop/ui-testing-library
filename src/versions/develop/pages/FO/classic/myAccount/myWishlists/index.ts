import {type FoMyWishlistsPageInterface} from '@interfaces/FO/myAccount/myWishlists';
import FOBasePage from '@pages/FO/FOBasePage';
import foClassicMyWishlistsViewPage from '@pages/FO/classic/myAccount/myWishlists/view';
import {type Page} from '@playwright/test';

/**
 * My Wishlists page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class MyWishlistsPage extends FOBasePage implements FoMyWishlistsPageInterface {
  public readonly pageTitle: string;

  private readonly headerTitle: string;

  private readonly wishlistCreateButton: string;

  private readonly wishlistList: string;

  private readonly wishlistListItem: string;

  private readonly wishlistListItemNth: (nth: number) => string;

  private readonly wishlistListItemRight: (nth: number) => string;

  private readonly wishlistListItemNthLink: (nth: number) => string;

  public readonly wishlistListItemNthTitle: (nth: number) => string;

  private readonly wishlistListItemButton1: (nth: number) => string;

  private readonly wishlistListItemDropdown: (nth: number) => string;

  private readonly wishlistListItemDropdownItem: (nth: number, nthDropdown: number) => string;

  /**
   * @constructs
   * Setting up texts and selectors to use on My Wishlists page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.pageTitle = 'My wishlists';

    // Selectors
    this.headerTitle = '#content-wrapper h1';
    this.wishlistCreateButton = '.wishlist-container-header a.wishlist-add-to-new';
    this.wishlistList = '.wishlist-list';
    this.wishlistListItem = `${this.wishlistList} .wishlist-list-item`;
    this.wishlistListItemNth = (nth: number) => `${this.wishlistListItem}:nth-child(${nth})`;
    this.wishlistListItemNthLink = (nth: number) => `${this.wishlistListItemNth(nth)} a.wishlist-list-item-link`;
    this.wishlistListItemNthTitle = (nth: number) => `${this.wishlistListItemNth(nth)} p.wishlist-list-item-title`;
    this.wishlistListItemRight = (nth: number) => `${this.wishlistListItemNthLink(nth)} .wishlist-list-item-right`;
    this.wishlistListItemButton1 = (nth: number) => `${this.wishlistListItemRight(nth)} > button:nth-child(1)`;
    this.wishlistListItemDropdown = (nth: number) => `${this.wishlistListItemNth(nth)} .dropdown-menu`;
    this.wishlistListItemDropdownItem = (nth: number, nthDropdown: number) => `${this.wishlistListItemDropdown(nth)} button`
      + `:nth-child(${nthDropdown})`;
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
   * Returns the number of wishlists
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async countWishlists(page: Page): Promise<number> {
    return page.locator(this.wishlistListItem).count();
  }

  /**
   * Click and go to a specific wishlist
   * @param page {Page} Browser tab
   * @param nth {number} Nth of the wishlist
   * @returns {Promise<number>}
   */
  async goToWishlistPage(page: Page, nth: number): Promise<void> {
    await page.locator(this.wishlistListItemNthLink(nth)).click();

    if (await this.elementNotVisible(page, foClassicMyWishlistsViewPage.productListEmpty, 3000)) {
      await this.elementVisible(page, foClassicMyWishlistsViewPage.productListEmpty, 3000);
    }
  }

  /**
   * Returns the name of a specific wishlist
   * @param page {Page} Browser tab
   * @param nth {number} Nth of the wishlist
   * @returns {Promise<string>}
   */
  async getWishlistName(page: Page, nth: number): Promise<string> {
    const textContent = await this.getTextContent(page, this.wishlistListItemNthTitle(nth));

    return textContent
      .substring(
        0,
        textContent.search(/\(/),
      )
      .trim();
  }

  /**
   * Click on the share button
   * @param page {Page}
   * @returns Promise<void>
   */
  async clickShareWishlistButton(page: Page, nth: number): Promise<void> {
    await page.locator(this.wishlistListItemButton1(nth)).click();
    if (nth > 1) {
      await this.elementVisible(page, `${this.wishlistListItemDropdown(nth)}.show`, 3000);
      await page.locator(this.wishlistListItemDropdownItem(nth, 2)).click();
    }
  }

  /**
   * Click on the "Create new list" button
   * @param page {Page}
   * @returns Promise<void>
   */
  async clickCreateWishlistButton(page: Page): Promise<void> {
    await page.locator(this.wishlistCreateButton).click();
  }
}

const myWishlistsPage = new MyWishlistsPage();
export {myWishlistsPage, MyWishlistsPage};
