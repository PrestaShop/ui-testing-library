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

    // Modules list selectors
    this.modulesListBlock = '#modules-list-container-native';
    this.allModulesBlock = `${this.modulesListBlock} .module-item-list`;
    this.moduleBlock = (moduleTag: string) => `${this.allModulesBlock}[data-tech-name=${moduleTag}]`;

    // Module actions in dropdown selectors
    this.actionModuleButtonInDropdownList = (action: string) => 'div.form-action-button-container.show'
      + ` button.module_action_menu_${action}`;
  }
}

module.exports = new ModuleManagerVersion();
