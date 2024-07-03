import {FOBasePagePageInterface} from '@interfaces/FO';
// Import data
import type {CartProductDetails} from '@data/types/cart';
import type {ProductAttribute} from '@data/types/product';

import type {Page} from '@playwright/test';

export interface FoHomePageInterface extends FOBasePagePageInterface {
    readonly pageTitle: string;
    readonly successAddToCartMessage: string;

    addProductToCartByQuickView(page: Page, id: number, quantityWanted?: number): Promise<string>;
    addToCartByQuickView(page: Page): Promise<void>;
    changeAttributes(page: Page, attributes: ProductAttribute): Promise<void>;
    changeAttributesAndAddToCart(page: Page, attributes: ProductAttribute[], quantity: number): Promise<void>;
    changeQuantity(page: Page, quantity: number): Promise<void>;
    clickOnLeftOrRightArrow(page: Page, direction: string): Promise<void>;
    closeBlockCartModal(page: Page): Promise<boolean>;
    closeQuickViewModal(page: Page): Promise<boolean>;
    continueShopping(page: Page): Promise<boolean>;
    getBlockTitle(page: Page, blockID?: number): Promise<string>;
    getProductAttributesFromBlockCartModal(page: Page): Promise<ProductAttribute[]>;
    getProductAttributesFromQuickViewModal(page: Page): Promise<ProductAttribute[]>;
    getProductAvailabilityText(page: Page): Promise<string>;
    getProductDetailsFromBlockCartModal(page: Page): Promise<CartProductDetails>;
    getProductDetailsFromQuickViewModal(page: Page): Promise<object>;
    getProductWithDiscountDetailsFromQuickViewModal(page: Page): Promise<object>;
    getProductsBlockNumber(page: Page, blockID?: number): Promise<number>;
    getProductsNumber(page: Page): Promise<number>
    getSelectedAttributesFromQuickViewModal(page: Page, attribute: ProductAttribute): Promise<ProductAttribute[]>;
    getSliderURL(page: Page): Promise<string>;
    getSocialSharingLink(page: Page, socialSharing: string): Promise<string>;
    goToAllProductsBlockPage(page: Page, blockID?: number): Promise<void>;
    goToAllProductsPage(page: Page): Promise<void>;
    goToProductPage(page: Page, id: number): Promise<void>;
    hasProductsBlock(page: Page, blockName: 'bestsellers' | 'newproducts' | 'onsale' | 'popularproducts'): Promise<boolean>;
    isAddToCartButtonDisabled(page: Page): Promise<boolean>;
    isAddToCartButtonEnabled(page: Page): Promise<boolean>;
    isBannerVisible(page: Page): Promise<boolean>;
    isBlockCartModalVisible(page: Page): Promise<boolean>;
    isCustomTextBlockVisible(page: Page): Promise<boolean>;
    isHomePage(page: Page): Promise<boolean>;
    isNewFlagVisible(page: Page, id?: number): Promise<boolean>;
    isPriceVisible(page: Page, id?: number): Promise<boolean>;
    isQuickViewProductModalVisible(page: Page): Promise<boolean>;
    isSliderVisible(page: Page, position: number): Promise<boolean>;
    proceedToCheckout(page: Page): Promise<void>;
    quickViewProduct(page: Page, id: number): Promise<void>;
    selectProductColor(page: Page, id: number, color: string): Promise<void>;
    subscribeToNewsletter(page: Page, email: string): Promise<string>;
}
