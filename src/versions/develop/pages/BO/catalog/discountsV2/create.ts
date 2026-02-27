import type FakerDiscount from '@data/faker/discount';
import {type BODiscountsCreatePageInterface} from '@interfaces/BO/catalog/discountsV2/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add discount page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BODiscountsCreatePage extends BOBasePage implements BODiscountsCreatePageInterface {
  public readonly pageTitle: string;

  public readonly errorMessageNameRequired: string;

  public readonly errorMessageMinPurchaseAmount: string;

  public readonly errorMessageMinPurchaseAmountNotnumber: string;

  public readonly errorMessageDiscountValue: (discountValue: string) => string;

  public readonly discountNameInput: string;

  public readonly discountDescriptionTextarea: string;

  public readonly allCustomersRadioButton: string;

  public readonly customerGroupsRadioButton: string;

  public readonly singleCustomerRadioButton: string;

  public readonly singleProductRadioButton: string;

  public readonly noProductConditionRadioButton: string;

  public readonly specificProductInput: string;

  public readonly productSegmentRadioButton: string;

  public readonly noMinimumPurchaseRadioButton: string;

  public readonly minimumPurchaseAmountRadioButton: string;

  public readonly minimumAmountValueInput: string;

  public readonly minimumAmountCurrencySelect: string;

  public readonly minimumAmountTaxSelect: string;

  public readonly minimumProductQuantityRadioButton: string;

  public readonly minimumProductQuantityInput: string;

  public readonly discountValueInput: string;

  public readonly discountReductionTypeSelect: string;

  public readonly discountIncludTaxSelect: string;

  public readonly createAutomaticDiscountRadioButton: string;

  public readonly generateDiscountModeRadioButton: string;

  public readonly discountCodeInput: string;

  public readonly discountContabilityCheckboxButton: (row: number) => string;

  public readonly priorityInput: string;

  public readonly saveButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on add cart rule page
   */
  constructor() {
    super();

    this.pageTitle = `Discounts • ${global.INSTALL.SHOP_NAME}`;
    this.errorMessageNameRequired = 'The field names is required at least in your default language.';
    this.errorMessageMinPurchaseAmount = 'This value should be greater than 0.';
    this.errorMessageMinPurchaseAmountNotnumber = 'Please enter a valid money amount.';
    this.errorMessageDiscountValue = (discountValue: string) => `Reduction value "${discountValue}" is invalid. `
      + 'It must be greater than 0.';

    // Selectors
    this.discountNameInput = '#discount_information_names_1';
    this.discountDescriptionTextarea = '#discount_information_description';
    // Select customer eligibiliyty
    this.allCustomersRadioButton = '#discount_customer_eligibility_eligibility_children_selector_0';
    this.customerGroupsRadioButton = '#discount_customer_eligibility_eligibility_children_selector_1';
    this.singleCustomerRadioButton = '#discount_customer_eligibility_eligibility_children_selector_2';
    // Product conditions
    this.noProductConditionRadioButton = '#discount_conditions_product_children_selector_0';
    this.singleProductRadioButton = '#discount_conditions_product_children_selector_1';
    this.specificProductInput = '#discount_conditions_product_specific_products_search_input';
    this.productSegmentRadioButton = '#discount_conditions_product_children_selector_2';
    // Cart conditions
    this.noMinimumPurchaseRadioButton = '#discount_conditions_cart_children_selector_0';
    this.minimumPurchaseAmountRadioButton = '#discount_conditions_cart_children_selector_1';
    this.minimumAmountValueInput = '#discount_conditions_cart_minimum_amount_value';
    this.minimumAmountCurrencySelect = '#select2-discount_conditions_cart_minimum_amount_currency-container';
    this.minimumAmountTaxSelect = '#discount_conditions_cart_minimum_amount_tax_included';
    this.minimumProductQuantityRadioButton = '#discount_conditions_cart_children_selector_2';
    this.minimumProductQuantityInput = '#discount_conditions_cart_minimum_product_quantity';
    // Choose a discount value
    this.discountValueInput = '#discount_value_reduction_value';
    this.discountReductionTypeSelect = '#discount_value_reduction_type';
    this.discountIncludTaxSelect = '#discount_value_reduction_include_tax';
    // Usability cinditions
    this.createAutomaticDiscountRadioButton = '#discount_usability_mode_children_selector_0';
    this.generateDiscountModeRadioButton = '#discount_usability_mode_children_selector_1';
    this.discountCodeInput = '#discount_usability_mode_code';
    this.discountContabilityCheckboxButton = (row: number) => `#discount_usability_compatibility_${row}`;
    this.priorityInput = '#discount_usability_priority';
    this.saveButton = '#main-div button[type="submit"]';
  }

  /* Methods */
  /**
   * Create/Edit discount
   * @param page {Page} Browser tab
   * @param discountData {FakerDiscount} Data to create discount
   * @return {Promise<string>}
   */
  async createDiscount(page: Page, discountData: FakerDiscount): Promise<string> {
    await this.setValue(page, this.discountNameInput, discountData.name);
    await this.setValue(page, this.discountDescriptionTextarea, discountData.description);
    // Select customer eligibility form
    if (discountData.customerGroups) {
      await this.setChecked(page, this.customerGroupsRadioButton);
      // @todo
    }
    if (discountData.singleCustomer) {
      await this.setChecked(page, this.singleCustomerRadioButton);
      // @todo
    }
    // Select discount conditions
    // *** Product conditions
    if (discountData.singleProduct) {
      await this.setChecked(page, this.singleProductRadioButton);
      // @todo
    } else if (discountData.productSegment) {
      await this.setChecked(page, this.productSegmentRadioButton);
      // @todo
    } else {
      await this.setChecked(page, this.noProductConditionRadioButton);
    }
    // *** Cart condition
    if (discountData.minimumPurchaseAmount) {
      await this.setChecked(page, this.minimumPurchaseAmountRadioButton);
      await this.setValue(page, this.minimumAmountValueInput, discountData.minimumAmountValue!);
      await this.setValue(page, this.minimumAmountCurrencySelect, discountData.minimumAmountCurrency!);
      await this.setValue(page, this.minimumAmountTaxSelect, discountData.minimumAmountTax!);
    } else if (discountData.minimumProductQuantity) {
      await this.setChecked(page, this.minimumProductQuantityRadioButton);
      await this.setValue(page, this.minimumProductQuantityInput, discountData.productQuantity);
      // @todo
    } else {
      await this.setChecked(page, this.noProductConditionRadioButton);
    }
    // Choose a discount value
    await this.setValue(page, this.discountValueInput, discountData.discountValue);
    await this.selectByVisibleText(page, this.discountReductionTypeSelect, discountData.discountReductionType);
    if (discountData.discountReductionType === '€') {
      await this.selectByVisibleText(page, this.discountIncludTaxSelect, discountData.discountTax!);
    }
    // Usability conditions
    if (discountData.generateDiscountCode) {
      await this.setChecked(page, this.generateDiscountModeRadioButton);
      await this.setValue(page, this.discountCodeInput, discountData.discountCode!);
    } else {
      await this.setChecked(page, this.createAutomaticDiscountRadioButton);
    }
    // Save
    await page.locator(this.saveButton).click();

    return this.getAlertBlockContent(page);
  }
}

module.exports = new BODiscountsCreatePage();
