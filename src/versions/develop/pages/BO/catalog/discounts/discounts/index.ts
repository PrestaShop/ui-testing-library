import BOBasePage from '@pages/BO/BOBasePage';
import {
  type Page,
} from '@playwright/test';
import type {BODiscountsPageInterface} from '@interfaces/BO/catalog/discounts/discounts';

class BODiscountsPage extends BOBasePage implements BODiscountsPageInterface {
  public readonly pageTitle: string;

  protected readonly addNewDiscountButton: string;

  protected readonly newDiscountForm: string;

  protected readonly discountTypeOption: (discountType: string) => string;

  protected readonly discountTypeSubmit: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on cart rules page
   */
  constructor() {
    super();

    this.pageTitle = 'Discounts •';

    // Selectors
    this.newDiscountForm = '#discount_type_selector';
    this.addNewDiscountButton = '#page-header-desc-configuration-add_discount';
    this.discountTypeOption = (discountType: string) => `${this.newDiscountForm} .form-check-radio:has(`
      + '[name="discount_type_selector[discount_type_selector]"]'
      + `[value="${discountType}"])`;
    this.discountTypeSubmit = '#discountTypeSubmit';
  }

  /**
   * Open modal select type and create new discount by type
   *
   * @param page {Page} Browser tab
   * @param discountType {string} Discount to select (cart_level, product_level, ...)
   * @returns {Promise<void>}
   */
  async addNewDiscountByType(page: Page, discountType: string): Promise<void> {
    await this.waitForSelectorAndClick(page, this.addNewDiscountButton);
    await this.waitForSelectorAndClick(page, this.discountTypeOption(discountType));
    await this.waitForSelectorAndClick(page, this.discountTypeSubmit);
  }
}

module.exports = new BODiscountsPage();
