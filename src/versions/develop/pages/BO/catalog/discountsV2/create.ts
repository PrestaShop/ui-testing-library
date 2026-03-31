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

  public readonly pageTitleEdit: string;

  public errorMessage: string;

  public errorMessageNameRequired: string;

  public errorMessageFreeGiftRequired: string;

  public errorMessageMinPurchaseAmount: string;

  public errorMessageMinPurchaseAmountNotnumber: string;

  public errorMessageExpirationDateBeforeStart: string;

  public errorMessageDiscountValue: (discountValue: string) => string;

  public readonly discountInformationBlock: string;

  public readonly discountNameInput: string;

  public readonly discountDescriptionTextarea: string;

  public readonly discountPeriodBlock: string;

  public readonly startDateInput: string;

  public readonly endDateInput: string;

  public readonly neverExpiresCheckbox: string;

  public readonly allCustomersRadioButton: string;

  public readonly customerGroupsRadioButton: string;

  public readonly singleCustomerRadioButton: string;

  public readonly specificProductRadioButton: string;

  public readonly noProductConditionRadioButton: string;

  public readonly specificProductInput: string;

  public readonly specificProductList: string;

  public readonly productSegmentRadioButton: string;

  public readonly discountConditionCartBlock: string;

  public readonly noMinimumPurchaseRadioButton: string;

  public readonly minimumPurchaseAmountRadioButton: string;

  protected minimumAmountValueInput: string;

  protected minimumAmountCurrencySelect: string;

  public readonly minimumAmountTaxSelect: string;

  public readonly minimumProductQuantityRadioButton: string;

  public readonly minimumProductQuantityInput: string;

  public readonly discountValueBlock: string;

  protected discountValueInput: string;

  public readonly discountReductionTypeSelect: string;

  public readonly discountIncludTaxSelect: string;

  private readonly deliveryConditionNoneRadio: string;

  private readonly deliveryConditionSpecificCountriesRadio: string;

  private readonly deliveryConditionSpecificCountriesInput: string;

  public readonly freeGiftErrorMessage: string;

  public readonly discountFreeGiftRow: (row: number) => string;

  public readonly freeGiftDeleteIcon: (row: number) => string;

  public readonly modalConfirmRemove: string;

  public readonly modalConfirmRemoveSubmitButton: string;

  public readonly freeGiftSearchInput: string;

  public readonly searchProductResult: string;

  public readonly freeGiftList: string;

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
    this.pageTitleEdit = `Discounts • ${global.INSTALL.SHOP_NAME}`;
    // @todo
    this.errorMessage = 'The form contains errors. Please fix them and save again.';
    this.errorMessageNameRequired = 'The field names is required at least in your default language.';
    this.errorMessageFreeGiftRequired = 'This value should not be blank.';
    this.errorMessageMinPurchaseAmount = 'This value should be greater than 0.';
    this.errorMessageMinPurchaseAmountNotnumber = 'Please enter a valid money amount.';
    this.errorMessageDiscountValue = (discountValue: string) => `Reduction value "${discountValue}" is invalid. `
      + 'It must be greater than 0.';
    this.errorMessageExpirationDateBeforeStart = 'The expiration date must be after start date';

    // Selectors
    this.discountInformationBlock = '#discount_information';
    this.discountNameInput = '#discount_information_names_1';
    this.discountDescriptionTextarea = '#discount_information_description';
    // Select period
    this.discountPeriodBlock = '#discount_period';
    this.startDateInput = '#discount_period_valid_date_range_from';
    this.endDateInput = '#discount_period_valid_date_range_to';
    this.neverExpiresCheckbox = '#discount_period div.form-checkbox label';
    // Select customer eligibility
    this.allCustomersRadioButton = '#discount_customer_eligibility_eligibility_children_selector_0';
    this.customerGroupsRadioButton = '#discount_customer_eligibility_eligibility_children_selector_1';
    this.singleCustomerRadioButton = '#discount_customer_eligibility_eligibility_children_selector_2';
    // Product conditions
    this.noProductConditionRadioButton = '#discount_conditions_product_children_selector_0';
    this.specificProductRadioButton = '#discount_conditions_product_children_selector_1';
    this.specificProductInput = '#discount_conditions_product_specific_products_search_input';
    this.specificProductList = '#discount_conditions_product_specific_products_0';
    this.productSegmentRadioButton = '#discount_conditions_product_children_selector_2';
    // Cart conditions
    this.discountConditionCartBlock = '#discount_conditions_cart';
    this.noMinimumPurchaseRadioButton = '#discount_conditions_cart_children_selector_0';
    this.minimumPurchaseAmountRadioButton = '#discount_conditions_cart_children_selector_1';
    this.minimumAmountValueInput = '#discount_conditions_cart_minimum_amount_value_amount';
    this.minimumAmountCurrencySelect = '#discount_conditions_cart_minimum_amount_value_currency';
    this.minimumAmountTaxSelect = '#discount_conditions_cart_minimum_amount_tax_included';
    this.minimumProductQuantityRadioButton = '#discount_conditions_cart_children_selector_2';
    this.minimumProductQuantityInput = '#discount_conditions_cart_minimum_product_quantity';
    // Choose a discount value
    this.discountValueBlock = '#discount_value';
    this.discountValueInput = '#discount_value_reduction_value_amount';
    this.discountReductionTypeSelect = '#discount_value_reduction_type';
    this.discountIncludTaxSelect = '#discount_value_reduction_include_tax';
    // Delivery conditions
    this.deliveryConditionNoneRadio = 'input[name="discount[conditions][delivery][children_selector]"][value="none"]';
    this.deliveryConditionSpecificCountriesRadio = 'input[name="discount[conditions][delivery][children_selector]"]'
      + '[value="country"]';
    this.deliveryConditionSpecificCountriesInput = 'div.toggle-children-choice-child[data-toggle-name="country"] input'
      + '.select2-search__field';
    // Free gift
    this.freeGiftSearchInput = '#discount_free_gift_search_input';
    this.searchProductResult = '.tt-menu.tt-open';
    this.freeGiftList = '#discount_free_gift_list';
    this.freeGiftErrorMessage = 'div.form-group .alert-danger';
    this.discountFreeGiftRow = (row: number) => `#discount_free_gift_${row}`;
    this.freeGiftDeleteIcon = (row: number) => `${this.discountFreeGiftRow(row)} div.media-body.media-middle i`;
    this.modalConfirmRemove = '#modal-confirm-remove-entity';
    this.modalConfirmRemoveSubmitButton = `${this.modalConfirmRemove} button.btn-confirm-submit`;
    // Usability conditions
    this.createAutomaticDiscountRadioButton = '#discount_usability_mode_children_selector_0';
    this.generateDiscountModeRadioButton = '#discount_usability_mode_children_selector_1';
    this.discountCodeInput = '#discount_usability_mode_code';
    this.discountContabilityCheckboxButton = (row: number) => `#discount_usability_compatibility_${row}`;
    this.priorityInput = '#discount_usability_priority';
    this.saveButton = '#main-div button[type="submit"]';
  }

  /* Methods */

  /**
   * Get discount date start and end
   * @param page {Page} Browser tab
   * @param period {string} Start or end
   * @return {Promise<string>}
   */
  async getDiscountDate(page: Page, period: string): Promise<string> {
    switch (period) {
      case 'start':
        return this.getAttributeContent(page, this.startDateInput, 'value');
      case 'end':
        return this.getAttributeContent(page, this.endDateInput, 'value');
      default:
        throw new Error(`Field ${period} was not found`);
    }
  }

  /**
   * Create/Edit discount
   * @param page {Page} Browser tab
   * @param discountData {FakerDiscount} Data to create discount
   * @return {Promise<string>}
   */
  async createDiscount(page: Page, discountData: FakerDiscount): Promise<string> {
    await this.setValue(page, this.discountNameInput, discountData.name);
    await this.setValue(page, this.discountDescriptionTextarea, discountData.description);
    await this.setValue(page, this.startDateInput, discountData.dateFrom!);
    await this.setValue(page, this.endDateInput, discountData.dateTo!);
    await page.keyboard.press('Enter');
    await this.setChecked(page, this.neverExpiresCheckbox, discountData.neverExpires);
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
    if (discountData.singleProduct && discountData.specificProduct!.name !== ' ') {
      await this.setChecked(page, this.specificProductRadioButton);
      await page.locator(this.specificProductInput).focus();
      await this.setValue(page, this.specificProductInput, discountData.specificProduct!.name);
      await this.waitForVisibleSelector(page, this.searchProductResult, 2000);
      await page.waitForTimeout(2000);
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');
      await this.waitForVisibleSelector(page, this.specificProductList, 2000);
    } else if (discountData.productSegment) {
      await this.setChecked(page, this.productSegmentRadioButton);
      // @todo
    } else if (discountData.noProductCondition) {
      await this.setChecked(page, this.noProductConditionRadioButton);
    }
    // *** Cart condition
    if (discountData.minimumPurchaseAmount) {
      await this.setChecked(page, this.minimumPurchaseAmountRadioButton);
      await this.setValue(page, this.minimumAmountValueInput, discountData.minimumAmountValue!);
      await this.selectByVisibleText(page, this.minimumAmountTaxSelect, discountData.minimumAmountTax!);
    } else if (discountData.minimumProductQuantity) {
      await this.setChecked(page, this.minimumProductQuantityRadioButton);
      await this.setValue(page, this.minimumProductQuantityInput, discountData.productQuantity);
    } else {
      await this.setChecked(page, this.noMinimumPurchaseRadioButton);
    }
    // Choose a discount value
    if (await this.elementVisible(page, this.discountValueInput, 2000)) {
      await this.setValue(page, this.discountValueInput, discountData.discountValue);
      if (discountData.discountReductionType === '€') {
        await this.selectByVisibleText(page, this.discountIncludTaxSelect, discountData.discountTax!);
      }
    }
    // Free gift
    if (discountData.discountType === 'Free gift' && discountData.freeGift!.name !== ' ') {
      await this.setValue(page, this.freeGiftSearchInput, discountData.freeGift!.name);
      await this.waitForSelector(page, this.searchProductResult, 'visible', 2000);
      await page.waitForTimeout(2000);
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');
      await this.waitForSelector(page, this.freeGiftList, 'visible', 2000);
    }
    // *** Delivery conditions
    if (['Free gift', 'On free shipping'].includes(discountData.discountType!)) {
      await this.setChecked(page, this.deliveryConditionNoneRadio);
      if (discountData.deliveryConditionsCountries.length > 0) {
        await this.setChecked(page, this.deliveryConditionSpecificCountriesRadio);
        await this.elementVisible(page, this.deliveryConditionSpecificCountriesInput);
        for (let inc = 0; inc < discountData.deliveryConditionsCountries.length; inc++) {
          await page.locator(this.deliveryConditionSpecificCountriesInput).fill(
            discountData.deliveryConditionsCountries[inc].name,
          );
          await page.keyboard.press('Enter');
        }
      }
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

  /**
   * Get error message invalid input
   * @param page {Page} Browser tab
   * @param input {string} The invalid input to get his error message
   * @return {Promise<string>}
   */
  async getErrorMessageInvalidInput(page: Page, input: string): Promise<string> {
    let selector: string = '';

    switch (input) {
      case 'name':
        selector = this.discountInformationBlock;
        break;
      case 'amount':
        selector = this.discountConditionCartBlock;
        break;
      case 'value':
        selector = this.discountValueBlock;
        break;
      case 'freeGift':
        selector = this.freeGiftErrorMessage;
        break;
      case 'date':
        selector = this.freeGiftErrorMessage;
        break;
      default:
      // Do nothing
    }

    return this.getTextContent(page, `${selector} .alert-text`);
  }

  /**
   * Delete free gift
   * @param page {Page} Browser tab
   * @param row {number} The free gift to delete
   * @return {Promise<boolean>}
   */
  async deleteFreeGift(page: Page, row: number = 1): Promise<boolean> {
    await page.locator(this.freeGiftDeleteIcon(row - 1)).click();
    await this.waitForVisibleSelector(page, this.modalConfirmRemove);
    await page.locator(this.modalConfirmRemoveSubmitButton).click();

    return this.elementNotVisible(page, this.discountFreeGiftRow(row - 1), 2000);
  }
}

const boDiscountsCreatePage = new BODiscountsCreatePage();
export {boDiscountsCreatePage, BODiscountsCreatePage};
