import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

export interface BOOptionsTabPageInterface extends BOBasePagePageInterface {
    chooseSupplier(page: Page, supplierRow: number): Promise<void>;
    getValue(page: Page, inputName: string): Promise<string>;
    isDefaultSupplierSectionVisible(page: Page): Promise<boolean>;
    isSupplierReferencesSectionVisible(page: Page): Promise<boolean>;
    setAvailableForOrder(page: Page, toEnable: boolean): Promise<void>;
    setShowPrice(page: Page, toEnable: boolean): Promise<void>;
    setVisibility(page: Page, visibility: string): Promise<void>;
    setWebOnly(page: Page, toEnable: boolean): Promise<void>;
}
