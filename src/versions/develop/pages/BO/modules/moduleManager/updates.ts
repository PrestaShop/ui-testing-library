import {type BOModuleManagerUpdatesPageInterface} from '@interfaces/BO/modules/moduleManager/updates';
import {ModuleManagerPage} from '@versions/develop/pages/BO/modules/moduleManager';

/**
 * Module manager page, contains selectors and functions for the page
 * @class
 * @extends ModuleManagerPage
 */
class BOModuleUpdatesPage extends ModuleManagerPage implements BOModuleManagerUpdatesPageInterface {
  public readonly pageTitle: string;

  constructor() {
    super();

    this.pageTitle = `Module updates • ${global.INSTALL.SHOP_NAME}`;
  }
}

module.exports = new BOModuleUpdatesPage();
