import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

import type FakerProduct from '@data/faker/product';
import type {ProductImageInformation} from '@data/types/product';

export interface BOProductsCreateTabDescriptionPageInterface extends BOBasePagePageInterface {
    readonly settingUpdatedMessage: string;

    addNewCategory(page: Page, categories: string[]): Promise<void>;
    addProductImages(page: Page, imagesPaths: any[]): Promise<void>;
    addRelatedProduct(page: Page, productName: string): Promise<void>;
    chooseBrand(page: Page, brandRow: number): Promise<void>;
    chooseDefaultCategory(page: Page, categoryRow: number): Promise<void>;
    clickOnMagnifyingGlass(page: Page): Promise<boolean>;
    closeImageZoom(page: Page): Promise<boolean>;
    deleteImage(page: Page): Promise<string|null>;
    getNumberOfImages(page: Page): Promise<number>;
    getProductIDImageCover(page: Page): Promise<number>;
    getProductImageInformation(page: Page, numImage: number): Promise<ProductImageInformation>;
    getSelectedCategories(page: Page): Promise<string>;
    getValue(page: Page, inputName: string, languageId?: string): Promise<string>;
    isDeleteCategoryIconVisible(page: Page, categoryRow: number): Promise<boolean>;
    replaceImageSelection(page: Page, image: string): Promise<string|null>;
    setDescription(page: Page, description: string): Promise<void>;
    setIframeInDescription(page: Page, description: string): Promise<void>;
    setProductDescription(page: Page, productData: FakerProduct): Promise<void>;
    setProductImageInformation(
        page: Page,
        numImage: number,
        useAsCoverImage: boolean | undefined,
        captionEn: string | undefined,
        captionFr: string | undefined,
        selectAll?: boolean | undefined,
        toSave?: boolean,
        toClose?: boolean,
    ): Promise<string | null>
    setValueOnTinymceInput(page: Page, selector: string, value: string): Promise<void>;
    uploadProductImages(page: Page, imagesPaths: any[]): Promise<void>;
}
