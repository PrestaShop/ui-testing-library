// Import pages
import type {BOProductsCreateTabPricingPageInterface} from '@interfaces/BO/catalog/products/create/tabPricing';
import {PricingTab} from '@versions/develop/pages/BO/catalog/products/create/tabPricing';

// Import data
import type FakerProduct from '@data/faker/product';

import type {Page} from 'playwright';

/**
 * Pricing tab in product page, contains functions that can be used on the page
 * @class
 * @extends PricingTab
 */
class PricingTabVersion extends PricingTab implements BOProductsCreateTabPricingPageInterface {
  /**
     * @constructs
     * Setting up texts and selectors to use on pricing tab
     */
  constructor() {
    super();

    this.pricingTabLink = '#tab_step2';
    this.taxRuleSpan = '#select2-form_step2_id_tax_rules_group-container';
    this.taxRuleList = '#select2-form_step2_id_tax_rules_group-results';
    this.retailPriceInputTaxExcl = '#form_step2_price';
    this.retailPriceInputTaxIncl = '#form_step2_price_ttc';
    this.pricingOnSaleCheckBox = '#form_step2_on_sale';
  }

  /**
     * Set product pricing
     * @param page {Page} Browser tab
     * @param productData {FakerProduct} Data to set in pricing form
     * @returns {Promise<void>}
     */
  async setProductPricing(page: Page, productData: FakerProduct): Promise<void> {
    await this.waitForSelectorAndClick(page, this.pricingTabLink);
    // Select tax rule by ID
    await Promise.all([
      this.waitForSelectorAndClick(page, this.taxRuleSpan),
      this.waitForVisibleSelector(page, this.taxRuleList),
    ]);
    await page.locator(`li:has-text('${productData.taxRule}')`).click();
    // We define the price after the tax because the tax impact the priceTaxIncluded
    await this.setRetailPrice(page, false, productData.price);
    if (productData.onSale) {
      await page.locator(this.pricingOnSaleCheckBox).click();
    }
  }
}

const pricingTab = new PricingTabVersion();
export {pricingTab, PricingTabVersion};
