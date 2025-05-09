import type FakerWebservice from '@data/faker/webservice';
import {type WebservicePermission, type WebserviceMethod} from '@data/types/webservice';
import {type BOWebservicesCreatePageInterface} from '@interfaces/BO/advancedParameters/webservices/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add webservice page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOWebservicesCreatePage extends BOBasePage implements BOWebservicesCreatePageInterface {
  public readonly pageTitleCreate: string;

  public readonly pageTitleEdit: string;

  private readonly webserviceKeyInput: string;

  private readonly generateButton: string;

  private readonly keyDescriptionTextarea: string;

  private readonly statusToggleInput: (toggle: number) => string;

  private readonly keyPermissionCheckbox: (resource: string, method: WebserviceMethod) => string;

  private readonly saveButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on add webservice page
   */
  constructor() {
    super();

    this.pageTitleCreate = `New webservice key • ${global.INSTALL.SHOP_NAME}`;
    this.pageTitleEdit = 'Editing webservice key';

    // Selectors
    this.webserviceKeyInput = '#webservice_key_key';
    this.generateButton = 'button.js-generator-btn';
    this.keyDescriptionTextarea = '#webservice_key_description';
    this.statusToggleInput = (toggle: number) => `#webservice_key_status_${toggle}`;
    this.keyPermissionCheckbox = (resource: string, method: WebserviceMethod) => 'input[type="checkbox"]'
      + `[value="${resource}"][name="webservice_key[permissions][${method}][]"]`;
    this.saveButton = '#save-button';
  }

  /*
  Methods
   */

  /**
   * Fill form for add/edit webservice key
   * @param page {Page} Browser tab
   * @param webserviceData {FakerWebservice} Data to set on add/edit webservice form
   * @param toGenerate
   * @returns {Promise<string>}
   */
  async createEditWebservice(page: Page, webserviceData: FakerWebservice, toGenerate: boolean = true): Promise<string> {
    // Key
    if (toGenerate) {
      await page.locator(this.generateButton).click();
    } else {
      await this.setValue(page, this.webserviceKeyInput, webserviceData.key);
    }
    // Description
    await this.setValue(page, this.keyDescriptionTextarea, webserviceData.keyDescription);
    // Status : id = 1 if active = YES / 0 if active = NO
    await this.setChecked(page, this.statusToggleInput(webserviceData.status ? 1 : 0));
    // Permissions
    for (let p = 0; p < webserviceData.permissions.length; p++) {
      const permission: WebservicePermission = webserviceData.permissions[p];

      for (let m = 0; m < permission.methods.length; m++) {
        const permissionMethod: WebserviceMethod = permission.methods[m];

        await this.setCheckedWithIcon(page, this.keyPermissionCheckbox(permission.resource, permissionMethod), true);
      }
    }

    await this.clickAndWaitForURL(page, this.saveButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

module.exports = new BOWebservicesCreatePage();
