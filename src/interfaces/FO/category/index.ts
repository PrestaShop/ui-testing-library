import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoCategoryPageInterface extends FOBasePagePageInterface {
    readonly messageAddedToWishlist: string;

    addToWishList(page: Page, idxProduct: number): Promise<string>;
    getNThChildFromIDProduct(page: Page, idProduct: number): Promise<number | null>;
    goToNextPage(page: Page): Promise<void>;
    goToProductPage(page: Page, id: number): Promise<void>;
    isAddedToWishlist(page: Page, idxProduct: number): Promise<boolean>;
    isCategoryPage(page: Page): Promise<boolean>;
}
