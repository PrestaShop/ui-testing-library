import {type BORoleCreatePageInterface} from '@interfaces/BO/advancedParameters/team/roles/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';
import FakerEmployeeRole from '@data/faker/employeeRole';

/**
 * Add role page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BORoleCreatePage extends BOBasePage implements BORoleCreatePageInterface {
  public readonly pageTitleCreate: string;

  public readonly pageTitleEdit: (name: string) => string;

  private readonly nameInput: string;

  private readonly saveButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on add role page
   */
  constructor() {
    super();

    this.pageTitleCreate = `New role • ${global.INSTALL.SHOP_NAME}`;
    this.pageTitleEdit = (name: string) => `Editing ${name} role • `
      + `${global.INSTALL.SHOP_NAME}`;

    // Selectors
    this.nameInput = '#profile_name_1';
    this.saveButton = '#save-button';
  }

  /*
  Methods
   */

  /**
   * Fill form for add/edit page role
   * @param page {Page} Browser tab
   * @param roleData {FakerEmployeeRole} Data to set on add/edit role form
   * @return {Promise<string>}
   */
  async createEditRole(page: Page, roleData: FakerEmployeeRole): Promise<string> {
    await this.setValue(page, this.nameInput, roleData.name);
    await this.clickAndWaitForURL(page, this.saveButton);
    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

module.exports = new BORoleCreatePage();
