import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoCategoryPageInterface extends FOBasePagePageInterface {
    readonly messageAddedToWishlist: string;

    addToWishList(page: Page, idxProduct: number): Promise<string>;
    isAddedToWishlist(page: Page, idxProduct: number): Promise<boolean>;
    isCategoryPage(page: Page): Promise<boolean>;
}
