import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import type {Page} from '@playwright/test';

export interface ModuleAutoupgradeMainPageInterface extends ModuleConfigurationPageInterface {
  readonly pageTitle: string;

  goToMaintenancePage(page:Page): Promise<Page>;
  isRequirementsAlertDangerVisible(page:Page): Promise<boolean>;
}
