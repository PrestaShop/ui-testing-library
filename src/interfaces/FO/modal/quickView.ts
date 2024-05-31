import {FOBasePagePageInterface} from '@interfaces/FO';

// Import data
import type {ProductAttribute, ProductDetails, ProductDetailsWithDiscount} from '@data/types/product';

import type {Page} from '@playwright/test';

export interface FoModalQuickViewPageInterface extends FOBasePagePageInterface {
    quickViewModalDiv: string;

    addToCartByQuickView(page: Page): Promise<void>;
    closeQuickViewModal(page: Page, clickOutside?: boolean): Promise<boolean>;
    getProductAttributesFromQuickViewModal(page: Page): Promise<ProductAttribute[]>;
    getProductAvailabilityText(page: Page): Promise<string>;
    getProductDetailsFromQuickViewModal(page: Page): Promise<ProductDetails>;
    getProductQuantityFromQuickViewModal(page: Page): Promise<number>;
    getProductWithDiscountDetailsFromQuickViewModal(page: Page): Promise<ProductDetailsWithDiscount>;
    getQuickViewCoverImage(page: Page): Promise<string | null>;
    getQuickViewImageMain(page: Page): Promise<string | null>;
    getSelectedAttributes(page: Page): Promise<ProductAttribute[]>;
    getSelectedAttributesFromQuickViewModal(page: Page, attribute: ProductAttribute): Promise<ProductAttribute[]>;
    getSocialSharingLink(page: Page, socialSharing: string): Promise<string>;
    isAddToCartButtonDisabled(page: Page): Promise<boolean>;
    isAddToCartButtonEnabled(page: Page): Promise<boolean>;
    isQuickViewProductModalVisible(page: Page): Promise<boolean>;
    selectThumbImage(page: Page, position: number): Promise<string>;
    setAttribute(page: Page, attributes: ProductAttribute): Promise<void>;
    setAttributes(page: Page, attributes: ProductAttribute[]): Promise<void>;
    setAttributesAndAddToCart(page: Page, attributes: ProductAttribute[], quantity: number): Promise<void>;
    setQuantity(page: Page, quantity: number | string): Promise<void>;
    setQuantityAndAddToCart(page: Page, quantityWanted?: number | string): Promise<void>;
    setQuantityByArrowUpDown(page: Page, quantityWanted: number, direction: string): Promise<void>;

}
