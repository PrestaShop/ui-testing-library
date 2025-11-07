// Import base page
import FOBasePage from '@pages/FO/FOBasePage';

// Import data
import { CartProductDetails } from '@data/types/cart';

import type { Page } from 'playwright';
/**
 * Block cart modal — only handles product quantity
 * @class
 * @extends FOBasePage
 */
class FoModalBlockCartPage extends FOBasePage {
    private readonly blockCartModalDiv: string;

    private readonly cartModalProductNameBlock: string;

    private readonly cartModalProductPriceBlock: string;

    private readonly cartModalProductQuantityBlock: string;

    private readonly cartContentBlock: string;

    protected cartModalProductsCountBlock: string;

    protected cartModalShippingBlock: string;

    protected cartModalSubtotalBlock: string;

    protected cartModalProductTaxInclBlock: string;

    constructor(theme: string = 'classic') {
        super(theme);

        // Selectors
        this.blockCartModalDiv = '#blockcart-modal';
        this.cartModalProductNameBlock = `${this.blockCartModalDiv} .product-name`;
        this.cartModalProductPriceBlock = `${this.blockCartModalDiv} .product-price`;
        this.cartModalProductQuantityBlock = `${this.blockCartModalDiv} span strong`;
        this.cartContentBlock = `${this.blockCartModalDiv} .cart-content`;
        this.cartModalProductsCountBlock = `${this.cartContentBlock} .cart-products-count`;
        this.cartModalShippingBlock = `${this.cartContentBlock} .shipping.value`;
        this.cartModalSubtotalBlock = `${this.cartContentBlock} .subtotal.value`;
        this.cartModalProductTaxInclBlock = `${this.cartContentBlock} .product-total .value`;
    }

    /**
     * Get product quantity from block cart modal
     * @param page {Page} Browser tab
     * @returns {Promise<number>}
     */
    async getProductDetailsFromBlockCartModal(page: Page): Promise<CartProductDetails> {
        return {
            name: await this.getTextContent(page, this.cartModalProductNameBlock),
            price: parseFloat((await this.getTextContent(page, this.cartModalProductPriceBlock)).replace('€', '')),
            quantity: await this.getQuantity(page),
            cartProductsCount: await this.getNumberFromText(page, this.cartModalProductsCountBlock),
            cartSubtotal: parseFloat((await this.getTextContent(page, this.cartModalSubtotalBlock)).replace('€', '')),
            cartShipping: await this.getTextContent(page, this.cartModalShippingBlock),
            totalTaxIncl: parseFloat((await this.getTextContent(page, this.cartModalProductTaxInclBlock)).replace('€', '')),
        };
    }

    async getQuantity(page: Page) {
        const text = await page.locator(this.cartModalProductQuantityBlock).last();
        const number = (/-?[\d.]+/g.exec(text) ?? '').toString();

        return parseFloat(number);
    }
}

const foModalBlockCartPage = new FoModalBlockCartPage();
export { foModalBlockCartPage, FoModalBlockCartPage };
