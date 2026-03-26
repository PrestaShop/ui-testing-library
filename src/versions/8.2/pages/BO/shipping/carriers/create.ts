import type FakerCarrier from '@data/faker/carrier';
import type FakerGroup from '@data/faker/group';
import {type CarrierRange} from '@data/types/carrier';
import {BOCarriersCreatePageInterface} from '@interfaces/BO/shipping/carriers/create';
import {BOCarriersCreatePage as BOCarriersCreatePageVersion} from '@versions/develop/pages/BO/shipping/carriers/create';
import type {Page} from 'playwright';

class BOCarriersCreatePage extends BOCarriersCreatePageVersion implements BOCarriersCreatePageInterface {
  private readonly zonesTable: string;

  private readonly rangeInfInput: (numColumn: number) => string;

  private readonly rangeSupInput: (numColumn: number) => string;

  private readonly allZonesRadioButton: string;

  private readonly allZonesValueInput: (numColumn: number) => string;

  private readonly rangeZoneCheckbox: string;

  private readonly rangeZoneIDCheckbox: (zoneID: string) => string;

  private readonly rangePriceInput: (numColumn: number, zoneID: string) => string;

  private readonly addNewRangeButton: string;

  private readonly deleteRangeButton: string;

  private readonly nextButton: string;

  private readonly finishButton: string;

  constructor() {
    super();

    this.pageTitleCreate = `Carriers > View • ${global.INSTALL.SHOP_NAME}`;
    this.pageTitleEdit = 'Carriers >';

    this.alertSuccessBlockParagraph = '.alert-success';

    // General settings
    this.carrierForm = '#carrier_wizard';
    this.nameInput = '#name';
    this.transitTimeInput = '#delay_1';
    this.speedGradeInput = '#grade';
    this.logoInput = '#carrier_logo_input';
    this.trackingURLInput = '#url';

    // Shipping locations and costs
    this.addHandlingCostsToggle = (toggle: string) => `${this.carrierForm} #shipping_handling_${toggle}`;
    this.freeShippingToggle = (toggle: string) => `${this.carrierForm} #is_free_${toggle}`;
    this.billingPriceRadioButton = '#billing_price';
    this.billingWeightButton = '#billing_weight';
    this.taxRuleSelect = '#id_tax_rules_group';
    this.rangeBehaviorSelect = '#range_behavior';
    this.zonesTable = '#zones_table';
    this.rangeInfInput = (numColumn: number) => `${this.zonesTable} tr.range_inf td:nth-child(${numColumn + 3}) `
      + 'input[name^=\'range_inf\']';
    this.rangeSupInput = (numColumn: number) => `${this.zonesTable} tr.range_sup td:nth-child(${numColumn + 3}) `
      + 'input[name^=\'range_sup\']';
    this.allZonesRadioButton = `${this.zonesTable} tr.fees_all input[onclick*='checkAllZones']`;
    this.allZonesValueInput = (numColumn: number) => `${this.zonesTable} tr.fees_all td:nth-child(${numColumn + 3})`
      + ' .input-group input';
    this.rangeZoneCheckbox = `${this.zonesTable} input.input_zone`;
    this.rangeZoneIDCheckbox = (zoneID: string) => `${this.rangeZoneCheckbox}#zone_${zoneID}`;
    this.rangePriceInput = (numColumn: number, zoneID: string) => `${this.zonesTable} td:nth-child(${numColumn + 3})`
      + ` input[name^="fees[${zoneID}]"]`;
    this.addNewRangeButton = '#add_new_range';
    this.deleteRangeButton = `${this.zonesTable} tr.delete_range td button`;

    // Size, weight and group access
    this.maxWidthInput = '#max_width';
    this.maxHeightInput = '#max_height';
    this.maxDepthInput = '#max_depth';
    this.maxWeightInput = '#max_weight';
    this.groupAccessInput = 'input[name="groupBox[]"]';
    this.groupAccessIdInput = (groupAccessId: number) => `${this.groupAccessInput}#groupBox_${groupAccessId}`;

    // Summary
    this.enableToggle = (toggle: string) => `${this.carrierForm} #active_${toggle}`;

    this.nextButton = `${this.carrierForm} .buttonNext`;
    this.finishButton = `${this.carrierForm} .buttonFinish`;
  }

  /**
   * Fill carrier form in create or edit page and save
   * @param page {Page} Browser tab
   * @param carrierData {FakerCarrier} Carrier information
   * @return {Promise<string>}
   */
  async createEditCarrier(page: Page, carrierData: FakerCarrier): Promise<string> {
    // Set general settings
    await this.setValue(page, this.nameInput, carrierData.name);
    await this.setValue(page, this.transitTimeInput, carrierData.transitName);
    await this.setValue(page, this.speedGradeInput, carrierData.speedGrade);
    await this.uploadFile(page, this.logoInput, `${carrierData.name}.jpg`);
    await this.setValue(page, this.trackingURLInput, carrierData.trackingURL);
    await page.locator(this.nextButton).click();

    // Wait for step 2 to become interactive before touching any of its controls.
    await this.waitForVisibleSelector(page, this.freeShippingToggle('on'));

    // Set shipping locations and costs — only click if not already in the desired state.
    // These radio buttons are intercepted by sibling elements when already selected,
    // causing a 30-second timeout per unnecessary click.
    if (carrierData.freeShipping) {
      if (!await page.locator(this.freeShippingToggle('on')).isChecked()) {
        await page.locator(this.freeShippingToggle('on')).click();
      }
    } else if (!await page.locator(this.freeShippingToggle('off')).isChecked()) {
      await page.locator(this.freeShippingToggle('off')).click();
    }
    if (carrierData.handlingCosts) {
      if (!await page.locator(this.addHandlingCostsToggle('on')).isChecked()) {
        await page.locator(this.addHandlingCostsToggle('on')).click();
      }
    } else if (!await page.locator(this.addHandlingCostsToggle('off')).isChecked()) {
      await page.locator(this.addHandlingCostsToggle('off')).click();
    }

    if (carrierData.billing === 'According to total price') {
      await page.locator(this.billingPriceRadioButton).click();
    } else {
      await page.locator(this.billingWeightButton).click();
    }
    await this.selectByVisibleText(page, this.taxRuleSelect, carrierData.taxRule);
    await this.selectByVisibleText(page, this.rangeBehaviorSelect, carrierData.outOfRangeBehavior);

    // Reset data before adding
    if (!carrierData.freeShipping) {
      await this.dialogListener(page);
      // Remove all colums
      const numDeleteRangeButtons = await page.locator(this.deleteRangeButton).count();

      for (let i: number = 0; i < numDeleteRangeButtons; i++) {
        await page.locator(this.deleteRangeButton).nth(0).click();
      }

      // Remove all ranges
      const locatorRangeZoneCheckboxes = await page.locator(this.rangeZoneCheckbox).all();

      // eslint-disable-next-line no-restricted-syntax
      for (const locatorRangeZoneCheckbox of locatorRangeZoneCheckboxes) {
        await locatorRangeZoneCheckbox.setChecked(false);
      }
    }
    // Set range sup only if free shipping is disabled
    for (let idxRange: number = 0; idxRange < carrierData.ranges.length; idxRange++) {
      const carrierRange: CarrierRange = carrierData.ranges[idxRange];

      if (!carrierData.freeShipping) {
        // Use !== undefined so that weightMin = 0 is filled (0 is falsy but valid).
        if (carrierRange.weightMin !== undefined) {
          await this.setValue(page, this.rangeInfInput(idxRange), carrierRange.weightMin);
        }
        if (carrierRange.weightMax !== undefined) {
          await this.setValue(page, this.rangeSupInput(idxRange), carrierRange.weightMax);
        }
      }

      // Phase 1: mark zone checkboxes so PS wizard can enable their price inputs.
      for (let idxZone: number = 0; idxZone < carrierRange.zones.length; idxZone++) {
        const carrierRangeZone = carrierRange.zones[idxZone].zone;
        if (typeof carrierRangeZone === 'string') {
          await page.locator(this.allZonesRadioButton).setChecked(true);
        } else {
          const zoneCheckbox = page.locator(this.rangeZoneIDCheckbox(carrierRangeZone.id!.toString()));
          if (!await zoneCheckbox.isChecked()) {
            await zoneCheckbox.setChecked(true);
          }
        }
      }

      // Phase 2: validate and enable this range column's price inputs via PS wizard JS.
      // validateRange() checks range_sup/inf validity; if valid, enableRange() marks
      // the column 'validated' (required by add_new_range) and calls enableZone() for
      // all currently-checked zones which enables their price inputs.
      // jQuery td:eq(idxRange + 2) corresponds to CSS td:nth-child(idxRange + 3).
      if (!carrierData.freeShipping) {
        const colIndex: number = idxRange + 2;
        await page.evaluate((idx: number) => {
          /* eslint-disable no-undef */
          // @ts-ignore: PS carrier wizard globals
          if (typeof validateRange === 'function' && validateRange(idx)) {
            // @ts-ignore
            enableRange(idx);
          }
          /* eslint-enable no-undef */
        }, colIndex);
      }

      // Phase 3: fill price inputs (now enabled after Phase 2).
      for (let idxZone: number = 0; idxZone < carrierRange.zones.length; idxZone++) {
        const carrierRangeZone = carrierRange.zones[idxZone].zone;
        const carrierRangePrice = carrierRange.zones[idxZone].price;

        if (typeof carrierRangePrice === 'undefined' || carrierData.freeShipping) {
          continue;
        }

        if (typeof carrierRangeZone === 'string') {
          await page.locator(this.allZonesValueInput(idxRange)).fill(carrierRangePrice.toString());
          // Dispatch 'change' then race against a short timeout so we never hang
          // if PS makes no XHR for this operation.
          const priceXhr = page.waitForResponse(
            (r) => r.url() === page.url() && r.request().method() === 'POST',
            {timeout: 3000},
          ).catch(() => null);
          await page.locator(this.allZonesValueInput(idxRange)).dispatchEvent('change');
          await priceXhr;
        } else {
          await page.locator(
            this.rangePriceInput(idxRange, carrierRangeZone.id!.toString()),
          ).fill(carrierRangePrice.toString());
        }
      }

      // Click on the "Add new range" button
      if (idxRange < (carrierData.ranges.length - 1)) {
        // Only if there is no next range (useful for edition)
        if ((await page.locator(this.rangeInfInput(idxRange + 1)).count() === 0)) {
          await page.locator(this.addNewRangeButton).click();
        }
      }
    }
    await page.locator(this.nextButton).click();

    // Wait for step 3 (size/weight) to become interactive.
    await this.waitForVisibleSelector(page, this.maxWidthInput);

    // Set size, weight and group access
    await this.setValue(page, this.maxWidthInput, carrierData.maxWidth);
    await this.setValue(page, this.maxHeightInput, carrierData.maxHeight);
    await this.setValue(page, this.maxDepthInput, carrierData.maxDepth);
    await this.setValue(page, this.maxWeightInput, carrierData.maxWeight);

    const locatorGroupAccessInputs = await page.locator(this.groupAccessInput).all();

    if (carrierData.groupAccesses.length) {
      // eslint-disable-next-line no-restricted-syntax
      for (const locatorGroupAccessInput of locatorGroupAccessInputs) {
        await locatorGroupAccessInput.setChecked(false);
      }
      for (let idxGroupAccess: number = 0; idxGroupAccess < carrierData.groupAccesses.length; idxGroupAccess++) {
        const groupAccess: FakerGroup = carrierData.groupAccesses[idxGroupAccess];
        await page.locator(this.groupAccessIdInput(groupAccess.id)).setChecked(true);
      }
    }

    await page.locator(this.nextButton).click();

    // Wait for step 4 (summary) to become interactive.
    await this.waitForVisibleSelector(page, this.finishButton);

    // Summary
    await page.locator(this.enableToggle(carrierData.enable ? 'on' : 'off')).setChecked(true);
    await page.locator(this.finishButton).click();

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
    await page.locator(this.nextButton).click();
    await this.setChecked(page, this.addHandlingCostsToggle(toEnable ? 'on' : 'off'));

    await page.locator(this.finishButton).click();

    // Return successful message
    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

const boCarriersCreatePage = new BOCarriersCreatePage();
export {boCarriersCreatePage, BOCarriersCreatePage};
