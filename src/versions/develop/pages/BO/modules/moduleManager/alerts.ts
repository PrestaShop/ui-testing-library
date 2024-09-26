import {type ModuleManagerAlertsPageInterface} from '@interfaces/BO/modules/moduleManager/alerts';
import {ModuleManagerPage} from '@versions/develop/pages/BO/modules/moduleManager';

/**
 * Module manager page, contains selectors and functions for the page
 * @class
 * @extends ModuleManagerPage
 */
class ModuleAlertsPage extends ModuleManagerPage implements ModuleManagerAlertsPageInterface {
  public readonly pageTitle: string;

  constructor() {
    super();

    this.pageTitle = `Module alerts • ${global.INSTALL.SHOP_NAME}`;
  }
}

module.exports = new ModuleAlertsPage();
