import {ModuleAutoupgradeMainPageInterface} from '@interfaces/BO/modules/autoupgrade';
import {Autoupgrade} from '@versions/1.7.3/pages/BO/modules/autoupgrade';

/**
 * Module configuration page for module : Autoupgrade, contains selectors and functions for the page
 * @class
 * @extends ModuleConfiguration
 */
class AutoupgradeVersion extends Autoupgrade implements ModuleAutoupgradeMainPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on module configuration page
   */
  constructor() {
    super();

    this.pageTitle = 'AdminSelfUpgrade > AdminSelfUpgrade • PrestaShop';
  }
}

const autoupgrade = new AutoupgradeVersion();
export {autoupgrade, AutoupgradeVersion as Autoupgrade};
