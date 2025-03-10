import type FakerZone from '@data/faker/zone';
import {type BOZonesCreatePageInterface} from '@interfaces/BO/international/locations/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add zone page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOZonesCreatePage extends BOBasePage implements BOZonesCreatePageInterface {
  public readonly pageTitleCreate: string;

  public readonly pageTitleEdit: string;

  private readonly nameInput: string;

  private readonly statusToggle: (toggle: number) => string;

  private readonly saveZoneButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on add zone page
   */
  constructor() {
    super();

    this.pageTitleCreate = `New zone • ${global.INSTALL.SHOP_NAME}`;
    this.pageTitleEdit = 'Editing zone';

    // Selectors
    this.nameInput = '#zone_name';
    this.statusToggle = (toggle: number) => `#zone_enabled_${toggle}`;
    this.saveZoneButton = '#save-button';
  }

  /*
  Methods
   */
  /**
   * Fill form for add/edit zone
   * @param page {Page} Browser tab
   * @param zoneData {FakerZone} Data to set on new/edit zone page
   * @returns {Promise<string>}
   */
  async createEditZone(page: Page, zoneData: FakerZone): Promise<string> {
    await this.setValue(page, this.nameInput, zoneData.name);
    await this.setChecked(page, this.statusToggle(zoneData.status ? 1 : 0));

    // Save zone
    await this.clickAndWaitForURL(page, this.saveZoneButton);

    // Return successful message
    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

module.exports = new BOZonesCreatePage();
