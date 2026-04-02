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

  public errorMessageValueLowerThanZero: string;

  public errorMessageMinPurchaseAmountNotnumber: string;

  public errorMessageExpirationDateBeforeStart: string;

  public errorMessageDiscountValue: (discountValue: string) => string;

  public readonly discountInformationBlock: string;

  private readonly discountTypeInput: string;

  public readonly discountNameInput: (languageId: number) => string;

  public readonly discountDescriptionTextarea: string;

  private readonly discountPeriodValidRangeFrom: string;

  private readonly discountPeriodValidRangeTo: string;

  private readonly discountPeriodValidNeverExpiresCheckbox: string;

  private readonly customerEligibilityRadio: string;

  public readonly specificProductRadioButton: string;

  public readonly noProductConditionRadioButton: string;

  public readonly specificProductInput: string;

  public readonly specificProductList: string;

  public readonly productSegmentRadioButton: string;

  public readonly discountConditionCartBlock: string;

  public readonly cartConditionRadio: string;

  protected minimumAmountValueInput: string;

  protected minimumAmountCurrencySelect: string;

  public readonly minimumAmountTaxSelect: string;

  public readonly minimumProductQuantityInput: string;

  public readonly discountValueBlock: string;

  protected discountValueInput: string;

  private readonly discountValueCurrencySelect: string;

  public readonly discountReductionTypeSelect: string;

  public readonly discountReductionIncludeTaxSelect: string;

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

  public readonly discountCompatibilityCheckboxButton: string;

  private readonly quantityTotalInput: string;

  private readonly quantityPerCustomerInput: string;
  public readonly generateCodeButton: string;

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
    this.errorMessageValueLowerThanZero = 'This value should be greater than 0.';
    this.errorMessageMinPurchaseAmountNotnumber = 'Please enter a valid money amount.';
    this.errorMessageDiscountValue = (discountValue: string) => `Reduction value "${discountValue}" is invalid. `
      + 'It must be greater than 0.';
    this.errorMessageExpirationDateBeforeStart = 'The expiration date must be after start date';

    // Selectors
    this.discountInformationBlock = '#discount_information';
    this.discountTypeInput = '#discount_information_discount_type';
    this.discountNameInput = (languageId: number) => `#discount_information_names_${languageId}`;
    this.discountDescriptionTextarea = '#discount_information_description';
    // Select period
    this.discountPeriodValidRangeFrom = '#discount_period_valid_date_range_from';
    this.discountPeriodValidRangeTo = '#discount_period_valid_date_range_to';
    this.discountPeriodValidNeverExpiresCheckbox = '#discount_period div.form-checkbox label';
    // Select customer eligibility
    this.customerEligibilityRadio = 'input[name="discount[customer_eligibility][eligibility][children_selector]"]';
    // Product conditions
    this.noProductConditionRadioButton = '#discount_conditions_product_children_selector_0';
    this.specificProductRadioButton = '#discount_conditions_product_children_selector_1';
    this.specificProductInput = '#discount_conditions_product_specific_products_search_input';
    this.specificProductList = '#discount_conditions_product_specific_products_0';
    this.productSegmentRadioButton = '#discount_conditions_product_children_selector_2';
    // Cart conditions
    this.discountConditionCartBlock = '#discount_conditions_cart';
    this.cartConditionRadio = 'input[name="discount[conditions][cart][children_selector]"]';
    this.minimumAmountValueInput = '#discount_conditions_cart_minimum_amount_value_amount';
    this.minimumAmountCurrencySelect = '#discount_conditions_cart_minimum_amount_value_currency';
    this.minimumAmountTaxSelect = '#discount_conditions_cart_minimum_amount_tax_included';
    this.minimumProductQuantityInput = '#discount_conditions_cart_minimum_product_quantity';
    // Choose a discount value
    this.discountValueBlock = '#discount_value';
    this.discountValueInput = '#discount_value_reduction_value_amount';
    this.discountValueCurrencySelect = '#discount_value_reduction_value_currency';
    this.discountReductionTypeSelect = '#discount_value_reduction_type';
    this.discountReductionIncludeTaxSelect = '#discount_value_reduction_include_tax';
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
    this.quantityTotalInput = '#discount_usability_quantity_total';
    this.quantityPerCustomerInput = '#discount_usability_quantity_per_customer';
    this.discountCompatibilityCheckboxButton = 'input[name="discount[usability][compatibility][]"]';
    this.generateCodeButton = '#discount_usability_mode button.js-generator-btn';
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
    await this.setValue(page, this.discountNameInput(dataLanguages.english.id), discountData.name);
    await this.setValue(page, this.discountDescriptionTextarea, discountData.description);
    if (discountData.dateFrom) {
      await this.setValue(page, this.discountPeriodValidRangeFrom, discountData.dateFrom!);
    }
    await page.keyboard.press('Enter');
    await this.setChecked(page, this.discountPeriodValidNeverExpiresCheckbox, discountData.neverExpires);
    if (discountData.dateTo) {
      await this.setValue(page, this.discountPeriodValidRangeTo, discountData.dateTo!);
    }
    // Select customer eligibility form
    await page.locator(`${this.customerEligibilityRadio}[value="all_customers"]`).setChecked(true);
    if (discountData.customerGroups) {
      await page.locator(`${this.customerEligibilityRadio}[value="customer_groups"]`).setChecked(true);
      // @todo
    }
    if (discountData.singleCustomer) {
      await page.locator(`${this.customerEligibilityRadio}[value="single_customer"]`).setChecked(true);
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
      await page.locator(`${this.cartConditionRadio}[value="minimum_amount"]`).setChecked(true);
      await this.setValue(page, this.minimumAmountValueInput, discountData.minimumAmountValue!);
      await this.selectByVisibleText(page, this.minimumAmountTaxSelect, discountData.minimumAmountTax!);
    } else if (discountData.minimumProductQuantity) {
      await page.locator(`${this.cartConditionRadio}[value="minimum_product_quantity"]`).setChecked(true);
      await this.setValue(page, this.minimumProductQuantityInput, discountData.productQuantity);
    } else {
      await page.locator(`${this.cartConditionRadio}[value="none"]`).setChecked(true);
    }
    // Choose a discount value
    if (await this.elementVisible(page, this.discountValueInput, 2000)) {
      await this.setValue(page, this.discountValueInput, discountData.discountValue);
      if (discountData.discountReductionType === '€') {
        await this.selectByVisibleText(page, this.discountReductionIncludeTaxSelect, discountData.discountTax!);
      }
    }
    // Free gift
    if (discountData.discountType === 'free_gift' && discountData.freeGift!.name !== ' ') {
      await this.setValue(page, this.freeGiftSearchInput, discountData.freeGift!.name);
      await this.waitForSelector(page, this.searchProductResult, 'visible', 2000);
      await page.waitForTimeout(2000);
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');
      await this.waitForSelector(page, this.freeGiftList, 'visible', 2000);
    }
    // *** Delivery conditions
    if (['free_gift', 'free_shipping'].includes(discountData.discountType!)) {
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
    if (discountData.discountCode.length > 0) {
      await this.setChecked(page, this.generateDiscountModeRadioButton);
      if (discountData.generateRandomCode) {
        await page.locator(this.generateCodeButton).click();
      } else {
        await this.setValue(page, this.discountCodeInput, discountData.discountCode!);
      }
    } else {
      await this.setChecked(page, this.createAutomaticDiscountRadioButton);
    }
    // Compatible with discounts
    for (let i: number = 0; i < discountData.discountCompatibilityTypes.length; i++) {
      await page
        .locator(`${this.discountCompatibilityCheckboxButton}[value="${discountData.discountCompatibilityTypes[i]}"]`)
        .setChecked(true);
    }

    // Priorty
    await page.locator(this.priorityInput).fill(discountData.priority.toString());

    // Save
    await page.locator(this.saveButton).click();

    return this.getAlertBlockContent(page);
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
      case 'product quantity':
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
   * Returns the value of a form element
   * @param page {Page}
   * @param inputName {string}
   * @param languageId {number | undefined}
   */
  async getValue(page: Page, inputName: string, languageId?: number): Promise<string> {
    switch (inputName) {
      case 'cartConditionType':
        return page.locator(`${this.cartConditionRadio}[checked]`).inputValue();
      case 'code':
        return page.locator(this.discountCodeInput).inputValue();
      case 'customerEligibilityType':
        return page.locator(`${this.customerEligibilityRadio}[checked]`).inputValue();
      case 'description':
        return page.locator(this.discountDescriptionTextarea).inputValue();
      case 'minimalAmount':
        return page.locator(this.minimumAmountValueInput).inputValue();
      case 'minimalAmountCurrency':
        return page.locator(this.minimumAmountCurrencySelect).evaluate((select: HTMLSelectElement) => select.value);
      case 'minimalAmountIncludeTax':
        return page.locator(this.minimumAmountTaxSelect).evaluate((select: HTMLSelectElement) => select.value);
      case 'minimalProductQuantity':
        return page.locator(this.minimumProductQuantityInput).inputValue();
      case 'names':
        return page.locator(this.discountNameInput(languageId!)).inputValue();
      case 'priority':
        return page.locator(this.priorityInput).inputValue();
      case 'quantityPerUser':
        return page.locator(this.quantityPerCustomerInput).inputValue();
      case 'reductionAmount':
        return page.locator(this.discountValueInput).inputValue();
      case 'reductionCurrency':
        return page.locator(this.discountValueCurrencySelect).evaluate((select: HTMLSelectElement) => select.value);
      case 'reductionIncludeTax':
        return page.locator(this.discountReductionIncludeTaxSelect).evaluate((select: HTMLSelectElement) => select.value);
      case 'reductionType':
        return page.locator(this.discountReductionTypeSelect).evaluate((select: HTMLSelectElement) => select.value);
      case 'totalQuantity':
        return page.locator(this.quantityTotalInput).inputValue();
      case 'type':
        return page.locator(this.discountTypeInput).inputValue();
      case 'validFrom':
        return page.locator(this.discountPeriodValidRangeFrom).inputValue();
      case 'validTo':
        return page.locator(this.discountPeriodValidRangeTo).inputValue();
      default:
        throw new Error(`Input ${inputName} was not found`);
    }
  }

  /**
   * Returns the values (if multiple) of a form element
   * @param page {Page}
   * @param inputName {string}
   * @param languageId {number | undefined}
   */
  async getValues(page: Page, inputName: string): Promise<string[]> {
    switch (inputName) {
      case 'compatibleDiscountTypeIds':
        return page
          .locator(`${this.discountCompatibilityCheckboxButton}[checked]`)
          .evaluateAll(
            (all: HTMLInputElement[]) => all.map((el: HTMLInputElement) => el.value),
          );
      default:
        throw new Error(`Input ${inputName} was not found`);
    }
  }

  /**
   * Get discount value
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async getDiscountCode(page: Page): Promise<string> {
    return this.getAttributeContent(page, this.discountCodeInput, 'value');
  }
}

const boDiscountsCreatePage = new BODiscountsCreatePage();
export {boDiscountsCreatePage, BODiscountsCreatePage};
