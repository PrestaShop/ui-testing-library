// Import pages
import type {ModuleManagerPageInterface} from '@interfaces/BO/modules/moduleManager';
import {ModuleManagerPage} from '@versions/develop/pages/BO/modules/moduleManager';

/**
 * @class
 * @extends ModuleManagerPage
 */
class ModuleManagerVersion extends ModuleManagerPage implements ModuleManagerPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super();

    this.pageTitle = 'Manage installed modules •';
  }
}

module.exports = new ModuleManagerVersion();
