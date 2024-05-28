import {FOBasePagePageInterface} from '@interfaces/FO';

// Import data
import FakerProductReview from '@data/faker/productReview';
import type {
  ProductAttribute, ProductImageUrls, ProductInformations,
} from '@data/types/product';

import type {Page} from '@playwright/test';

export interface FoProductPageInterface extends FOBasePagePageInterface {
    readonly messageAlertNotificationAlreadyRegistered:string;
    readonly messageAlertNotificationEmailInvalid: string;
    readonly messageAlertNotificationSaved: string;
    readonly messageNotVisibleToCustomers: string;

    addProductReview(page: Page, productReviewData: FakerProductReview): Promise<boolean>;
    addProductToTheCart(
        page: Page,
        quantity: number | string,
        combination: ProductAttribute[],
        proceedToCheckout: boolean | null,
        customizedText: string)
        : Promise<void>
    clickAddReviewButton(page: Page): Promise<void>;
    clickOnAddToCartButton(page: Page): Promise<void>;
    clickOnSocialSharingLink(page: Page, socialSharing: string): Promise<Page>;
    clickProductInPackList(page: Page, productInList: number): Promise<void>;
    closeProductModal(page: Page): Promise<boolean>;
    closeProductReviewModal(page: Page): Promise<boolean>;
    getBlockMailAlertGDPRLabel(page: Page): Promise<string>;
    getBlockMailAlertNotification(page: Page): Promise<string>;
    getCoverImage(page: Page): Promise<string | null>;
    getCoverImageFromProductModal(page: Page): Promise<string | null>;
    getCustomizationImage(page: Page, customizationRow: number): Promise<string>;
    getCustomizationsMessages(page: Page, customizationRow: number): Promise<string>;
    getDeliveryInformationText(page: Page): Promise<string>;
    getDiscountAmount(page: Page): Promise<string>;
    getDiscountColumnTitle(page: Page): Promise<string>;
    getDiscountPercentage(page: Page): Promise<string>;
    getDiscountValue(page: Page): Promise<string>;
    getMinimalProductQuantityLabel(page: Page): Promise<string>;
    getNumberOfComments(page: Page): Promise<number>;
    getPackProductsPrice(page: Page): Promise<number>;
    getProductAttributes(page: Page): Promise<ProductAttribute[]>;
    getProductAvailabilityLabel(page: Page): Promise<string>;
    getProductCondition(page: Page): Promise<string>;
    getProductFeaturesList(page: Page): Promise<string>;
    getProductImageUrls(page: Page): Promise<ProductImageUrls>;
    getProductInPackList(page: Page, productInList: number): Promise<object>;
    getProductInformation(page: Page): Promise<ProductInformations>;
    getProductPageURL(page: Page): Promise<string>;
    getProductPrice(page: Page): Promise<string>;
    getProductQuantity(page: Page): Promise<number>;
    getProductReviewGDPRLabel(page: Page): Promise<string>;
    getProductTag(page: Page): Promise<string>;
    getProductUnitPrice(page: Page): Promise<string>;
    getProductsAttributesFromUl(page: Page, ulSelector: string): Promise<Array<string | null>>;
    getQuantityDiscountValue(page: Page): Promise<number>;
    getRegularPrice(page: Page): Promise<string>;
    getReviewRating(page: Page, row: number): Promise<number>;
    getReviewTextContent(page: Page, row: number): Promise<string>;
    getReviewTitle(page: Page, row: number): Promise<string>;
    getSavedValue(page: Page): Promise<string>;
    getSelectedAttribute(page: Page, variantItem: number, type: string): Promise<string>;
    getSelectedAttributeText(page: Page, variantItem: number): Promise<string>;
    getSocialSharingLink(page: Page, socialSharing: string): Promise<string>;
    getURLInProductDescription(page: Page): Promise<string>;
    getWarningMessage(page: Page): Promise<string>;
    hasBlockMailAlert(page: Page): Promise<boolean>;
    hasBlockMailAlertGDPRLabel(page: Page): Promise<boolean>;
    hasProductFlag(page: Page, name: string): Promise<boolean>;
    hasProductReviewGDPRLabel(page: Page): Promise<boolean>;
    hasProductsBlock(page: Page, blockName:string): Promise<boolean>;
    isAddToCartButtonEnabled(page: Page): Promise<boolean>;
    isAvailabilityQuantityDisplayed(page: Page): Promise<boolean>;
    isCustomizationBlockVisible(page: Page): Promise<boolean>;
    isCustomizationImageVisible(page: Page, customizationRow: number): Promise<boolean>;
    isCustomizationMessageVisible(page: Page, customizationRow: number): Promise<boolean>;
    isDeliveryInformationVisible(page: Page): Promise<boolean>;
    isDeliveryTimeDisplayed(page: Page): Promise<boolean>;
    isFeaturesBlockVisible(page: Page): Promise<boolean>;
    isIframeVisibleInProductDescription(page: Page): Promise<boolean>;
    isPriceDisplayed(page: Page): Promise<boolean>;
    isProductTagVisible(page: Page): Promise<boolean>;
    isQuantityDisplayed(page: Page): Promise<boolean>;
    isUnavailableProductColorDisplayed(page: Page, color: string): Promise<boolean>;
    isUnavailableProductSizeDisplayed(page: Page, size: string): Promise<boolean>;
    notifyEmailAlert(page: Page, email: string | null): Promise<string>;
    sAddToCartButtonDisplayed(page: Page): Promise<boolean>;
    scrollBoxArrowsImages(page: Page, direction: string): Promise<void>;
    selectAttributes(page: Page, type: string, attributes: ProductAttribute[], itemNumber: number): Promise<void>;
    selectDefaultAttributes(page: Page, attributes: ProductAttribute[]): Promise<void>;
    selectThumbImage(page: Page, imageRow: number): Promise<string>;
    selectThumbImageFromProductModal(page: Page, imageRow: number): Promise<string>;
    setProductCustomizations(page: Page, customizedTexts: string[], save: boolean): Promise<void>;
    setProductFileCustomizations(page: Page, customizedFiles: string[], row: number, save: boolean): Promise<void>;
    setQuantity(page: Page, quantity: number | string): Promise<void>;
    setQuantityByArrowUpDown(page: Page, quantityWanted: number, direction: string): Promise<void>;
    zoomCoverImage(page: Page): Promise<boolean>;
}
