import dataZones from '@data/demo/zones';
import FakerCarrier from '@data/faker/carrier';
import FakerGroup from '@data/faker/group';
import {CarrierRange} from '@data/types/carrier';
import {type BOCarriersCreatePageInterface} from '@interfaces/BO/shipping/carriers/create';
import BOBasePage from '@pages/BO/BOBasePage';
import type {Page} from '@playwright/test';

/**
 * Add carrier page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class BOCarriersCreatePage extends BOBasePage implements BOCarriersCreatePageInterface {
  public pageTitleCreate: string;

  public pageTitleEdit: string;

  protected carrierForm: string;

  private readonly tabGeneralSettings: string;

  protected nameInput: string;

  protected transitTimeInput: string;

  protected speedGradeInput: string;

  protected logoInput: string;

  protected trackingURLInput: string;

  private readonly tabShippingSettings: string;

  protected addHandlingCostsToggle: (toggle: string) => string;

  protected freeShippingToggle: (toggle: string) => string;

  protected billingPriceRadioButton: string;

  protected billingWeightButton: string;

  protected taxRuleSelect: string;

  protected rangeBehaviorSelect: string;

  private readonly zonesWidget: string;

  private readonly zonesRemoveButton: string;

  private readonly zonesSelect2: string;

  private readonly zonesSelect2Input: string;

  private readonly rangesButton: string;

  private readonly rangesModal: string;

  private readonly rangesRemoveButton: string;

  private readonly rangesRow: (nth: number) => string;

  private readonly rangesRowInputFrom: (nth: number) => string;

  private readonly rangesRowInputTo: (nth: number) => string;

  private readonly rangesAddButton: string;

  private readonly rangesApplyButton: string;

  private readonly costsBlock: string;

  private readonly costsZoneBlock: (zoneId: number) => string;

  private readonly costsPriceInput: (zoneId: number, from: number, to: number) => string;

  private readonly tabSizeWeightSettings: string;

  protected maxWidthInput: string;

  protected maxHeightInput: string;

  protected maxDepthInput: string;

  protected maxWeightInput: string;

  protected groupAccessInputAll: string;

  protected groupAccessInput: string;

  protected groupAccessIdInput: (groupAccessId: number) => string;

  protected enableToggle: (toggle: string) => string;

  private readonly submitButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on add carrier page
   */
  constructor() {
    super();

    this.pageTitleCreate = `New Carrier • ${global.INSTALL.SHOP_NAME}`;
    this.pageTitleEdit = `Editing carrier`;

    this.carrierForm = 'form[name="carrier"]';
    // General settings
    this.tabGeneralSettings = '#carrier_general_settings-tab-nav a';
    this.nameInput = '#carrier_general_settings_name';
    this.transitTimeInput = '#carrier_general_settings_localized_delay_1';
    this.enableToggle = (toggle: string) => `${this.carrierForm} #carrier_general_settings_active_${toggle}`;
    this.speedGradeInput = '#carrier_general_settings_grade';
    this.logoInput = '#carrier_general_settings_logo';
    this.trackingURLInput = '#carrier_general_settings_tracking_url';
    this.groupAccessInputAll = 'input.js-choice-table-select-all';
    this.groupAccessInput = 'input[name="carrier[general_settings][group_access][]"]';
    this.groupAccessIdInput = (groupAccessId: number) => `${this.groupAccessInput}[value="${groupAccessId}"]`;

    // Shipping locations and costs
    this.tabShippingSettings = '#carrier_shipping_settings-tab-nav a';
    this.addHandlingCostsToggle = (toggle: string) => `${this.carrierForm
    } #carrier_shipping_settings_has_additional_handling_fee_${toggle}`;
    this.freeShippingToggle = (toggle: string) => `${this.carrierForm} #carrier_shipping_settings_is_free_${toggle}`;
    this.billingPriceRadioButton = `${this.carrierForm} #carrier_shipping_settings_shipping_method_0`;
    this.billingWeightButton = `${this.carrierForm} #carrier_shipping_settings_shipping_method_1`;
    this.taxRuleSelect = `${this.carrierForm} #carrier_shipping_settings_id_tax_rule_group`;
    this.rangeBehaviorSelect = `${this.carrierForm} #carrier_shipping_settings_range_behavior`;
    /// Zones
    this.zonesWidget = `${this.carrierForm} .multiple_zone_choice-widget`;
    this.zonesRemoveButton = `${this.zonesWidget} .select2-selection__choice__remove`;
    this.zonesSelect2 = `${this.zonesWidget} .select2-selection`;
    this.zonesSelect2Input = `${this.zonesSelect2} .select2-search__field`;
    /// Ranges
    this.rangesButton = `${this.carrierForm} #carrier_shipping_settings_ranges_show_modal`;
    this.rangesModal = '#carrier_shipping_settings_ranges-app .modal-content';
    this.rangesRemoveButton = `${this.rangesModal} .modal-body button.btn-delete`;
    this.rangesRow = (nth: number) => `${this.rangesModal} .modal-body tr[data-row="${nth}"]`;
    this.rangesRowInputFrom = (nth: number) => `${this.rangesRow(nth)} input.form-from`;
    this.rangesRowInputTo = (nth: number) => `${this.rangesRow(nth)} input.form-to`;
    this.rangesAddButton = `${this.rangesModal} .modal-body .table-container > button:not(.btn-delete)`;
    this.rangesApplyButton = `${this.rangesModal} .modal-footer button.btn-primary`;
    /// Costs
    this.costsBlock = '#carrier_shipping_settings_ranges_costs';
    this.costsZoneBlock = (zoneId: number) => `${this.costsBlock} .js-carrier-zone-row[data-zone-id="${zoneId}"]`;
    this.costsPriceInput = (zoneId: number, from: number, to: number) => `${this.costsZoneBlock(zoneId)} input.form-control`
      + `[data-from="${from}"][data-to="${to}"]`;

    // Size, weight and group access
    this.tabSizeWeightSettings = '#carrier_size_weight_settings-tab-nav a';
    this.maxWidthInput = '#carrier_size_weight_settings_max_width';
    this.maxHeightInput = '#carrier_size_weight_settings_max_height';
    this.maxDepthInput = '#carrier_size_weight_settings_max_depth';
    this.maxWeightInput = '#carrier_size_weight_settings_max_weight';

    this.submitButton = '#carrier__footer_buttons_submit';
  }

  /* Methods */

  /**
   * Fill carrier form in create or edit page and save
   * @param page {Page} Browser tab
   * @param carrierData {FakerCarrier} Carrier information
   * @return {Promise<string>}
   */
  async createEditCarrier(page: Page, carrierData: FakerCarrier): Promise<string> {
    // Tab generat settings
    await page.locator(this.tabGeneralSettings).click();
    // Set general settings
    await this.setValue(page, this.nameInput, carrierData.name);
    await this.setValue(page, this.transitTimeInput, carrierData.transitName);
    await this.setHiddenCheckboxValue(page, this.enableToggle('1'), carrierData.enable);
    await this.setValue(page, this.speedGradeInput, carrierData.speedGrade);
    await this.uploadFile(page, this.logoInput, `${carrierData.name}.jpg`);
    await this.setValue(page, this.trackingURLInput, carrierData.trackingURL);

    if (carrierData.groupAccesses.length) {
      await this.setCheckedWithIcon(page, this.groupAccessInputAll, false);

      for (let idxGroupAccess: number = 0; idxGroupAccess < carrierData.groupAccesses.length; idxGroupAccess++) {
        const groupAccess: FakerGroup = carrierData.groupAccesses[idxGroupAccess];
        await this.setCheckedWithIcon(page, this.groupAccessIdInput(groupAccess.id), true);
      }
    }

    // Tab shipping locations and costs
    await page.locator(this.tabShippingSettings).click();
    // Set shipping locations and costs
    /// Zones - START
    // Remove all zones
    const numZonesRemoveButton = await page.locator(this.zonesRemoveButton).count();

    if (numZonesRemoveButton > 0) {
      for (let i: number = 0; i < numZonesRemoveButton; i++) {
        await page.locator(this.zonesRemoveButton).nth(0).click();
      }

      await page.mouse.click(5, 5);
    }

    // Add zones
    if (carrierData.ranges.length > 0) {
      const carrierRange: CarrierRange = carrierData.ranges[0];

      for (let idxZone: number = 0; idxZone < carrierRange.zones.length; idxZone++) {
        const carrierRangeZone = carrierRange.zones[idxZone].zone;
        await page.locator(this.zonesSelect2).click();
        await this.waitForVisibleSelector(page, `${this.zonesSelect2}[aria-expanded='true']`);
        if (typeof carrierRangeZone === 'string') {
          // eslint-disable-next-line no-restricted-syntax
          for (const zone of Object.values(dataZones)) {
            await this.setValue(page, this.zonesSelect2Input, zone.name);
            await page.keyboard.press('Enter');
          }
        } else {
          await this.setValue(page, this.zonesSelect2Input, carrierRangeZone.name!);
          await page.keyboard.press('Enter');
        }
      }
    }
    /// Zones - END

    await this.setHiddenCheckboxValue(page, this.freeShippingToggle('1'), carrierData.freeShipping);
    if (!carrierData.freeShipping) {
      await this.setChecked(page, this.addHandlingCostsToggle('1'), carrierData.handlingCosts, true);
      await this.selectByVisibleText(page, this.taxRuleSelect, carrierData.taxRule);
      if (carrierData.billing === 'According to total price') {
        await page.locator(this.billingPriceRadioButton).click();
      } else {
        await page.locator(this.billingWeightButton).click();
      }
      await this.selectByVisibleText(page, this.rangeBehaviorSelect, carrierData.outOfRangeBehavior);

      /// Ranges - START
      await page.locator(this.rangesButton).click();
      await this.waitForVisibleSelector(page, this.rangesModal);
      // Remove all ranges
      const numRangesRemoveButton = await page.locator(this.rangesRemoveButton).count();

      for (let i: number = 0; i < numRangesRemoveButton; i++) {
        await page.locator(this.rangesRemoveButton).nth(0).click();
      }
      // Add ranges
      for (let idxRange: number = 0; idxRange < carrierData.ranges.length; idxRange++) {
        const carrierRange: CarrierRange = carrierData.ranges[idxRange];

        await this.setValue(page, this.rangesRowInputFrom(idxRange), carrierRange.weightMin!);
        await this.setValue(page, this.rangesRowInputTo(idxRange), carrierRange.weightMax!);

        // Click on the "Add new range" button
        if (idxRange < (carrierData.ranges.length - 1)) {
          await page.locator(this.rangesAddButton).click();
        }
      }
      await page.locator(this.rangesApplyButton).click();
      await this.waitForHiddenSelector(page, this.rangesModal);
      /// Ranges - END

      /// Prices - START
      for (let idxRange: number = 0; idxRange < carrierData.ranges.length; idxRange++) {
        const carrierRange: CarrierRange = carrierData.ranges[idxRange];

        for (let idxZone: number = 0; idxZone < carrierRange.zones.length; idxZone++) {
          const carrierRangeZone = carrierRange.zones[idxZone].zone;
          const carrierRangePrice = carrierRange.zones[idxZone].price;

          if (typeof carrierRangeZone === 'string') {
            // eslint-disable-next-line no-restricted-syntax
            for (const zone of Object.values(dataZones)) {
              await this.setValue(
                page,
                this.costsPriceInput(zone.id, carrierRange.weightMin!, carrierRange.weightMax!),
                carrierRangePrice!,
              );
            }
          } else {
            await this.setValue(
              page,
              this.costsPriceInput(carrierRangeZone.id!, carrierRange.weightMin!, carrierRange.weightMax!),
              carrierRangePrice!,
            );
          }
        }
      }
    }
    /// Ranges - END

    // Tab size, weight
    await page.locator(this.tabSizeWeightSettings).click();
    // Set size, weight
    await this.setValue(page, this.maxWidthInput, carrierData.maxWidth);
    await this.setValue(page, this.maxHeightInput, carrierData.maxHeight);
    await this.setValue(page, this.maxDepthInput, carrierData.maxDepth);
    await this.setValue(page, this.maxWeightInput, carrierData.maxWeight);

    // Summary
    await page.locator(this.submitButton).click();

    // Return successful message
    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Set handling cost
   * @param page {Page} Browser tab
   * @param toEnable {Boolean} Handling cost toggle button value
   * @returns {Promise<string>}
   */
  async setHandlingCosts(page: Page, toEnable: boolean = true): Promise<string> {
    await page.locator(this.tabShippingSettings).click();
    await this.setChecked(page, this.addHandlingCostsToggle('1'), toEnable, true);

    await page.locator(this.submitButton).click();

    // Return successful message
    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

const boCarriersCreatePage = new BOCarriersCreatePage();
export {boCarriersCreatePage, BOCarriersCreatePage};
