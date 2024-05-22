import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoProductPageInterface extends FOBasePagePageInterface {
    hasProductsBlock(page: Page, blockName: 'categoryproducts'): Promise<boolean>;
}
