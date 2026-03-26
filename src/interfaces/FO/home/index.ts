import {FOBasePagePageInterface} from '@interfaces/FO';
import {type Page} from '@playwright/test';

export interface FoHomePageInterface extends FOBasePagePageInterface {
  readonly alreadyUsedEmailMessage: string;
  readonly pageTitle: string;
  readonly successAddToCartMessage: string;
  readonly successSendVerificationEmailMessage: string;
  readonly successSubscriptionMessage: string;

  clickAddWishListProduct(page: Page, idxProduct: number): Promise<void>;
  clickOnLeftOrRightArrow(page: Page, direction: string): Promise<void>;
  getBlockTitle(page: Page, blockName: 'bestsellers' | 'newproducts' | 'onsale' | 'popularproducts' | string): Promise<string>;
  getProductsBlockNumber(
    page: Page,
    blockName: 'bestsellers' | 'newproducts' | 'onsale' | 'popularproducts' | string,
  ): Promise<number>;
  getProductPrice(page: Page, id: number): Promise<string>;
  getSliderURL(page: Page): Promise<string>;
  getSubscribeNewsletterRGPDLabel(page: Page): Promise<string>;
  goToAllProductsBlockPage(page: Page, blockID?: number): Promise<void>;
  goToAllProductsPage(page: Page, blockName?: string): Promise<void>;
  goToProductPage(page: Page, id: number): Promise<void>;
  hasProductsBlock(page: Page, blockName: 'bestsellers' | 'newproducts' | 'onsale' | 'popularproducts'): Promise<boolean>;
  hasSubscribeNewsletterRGPD(page: Page): Promise<boolean>;
  isBannerVisible(page: Page): Promise<boolean>;
  isColoredBoxesVisible(page: Page, row: number): Promise<boolean>;
  isCustomTextBlockVisible(page: Page): Promise<boolean>;
  isHomePage(page: Page): Promise<boolean>;
  isNewFlagVisible(page: Page, id?: number): Promise<boolean>;
  isPriceVisible(page: Page, id?: number): Promise<boolean>;
  isQuickViewLinkVisible(page: Page, row: number): Promise<boolean>;
  isSliderVisible(page: Page, position: number): Promise<boolean>;
  quickViewProduct(page: Page, id: number): Promise<void>;
  selectProductColor(page: Page, id: number, color: string): Promise<void>;
  subscribeToNewsletter(page: Page, email: string): Promise<string>;
}

//@todo : Move methods in FoHomePageInterface
export interface FoHomeHummingbirdPageInterface extends FoHomePageInterface {
  addProductToCart(page: Page, nthProduct: number): Promise<void>;
  isAddToCartButtonVisible(page: Page, nthProduct?: number): Promise<boolean>;
}
