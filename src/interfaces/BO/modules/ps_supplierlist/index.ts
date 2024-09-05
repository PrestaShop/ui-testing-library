import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {type Page} from '@playwright/test';

export interface ModulePsSupplierListMainPageInterface extends ModuleConfigurationPageInterface {
    readonly pageSubTitle: string;
    readonly typeOfDisplayDropdown: string;
    readonly typeOfDisplayPlaintext: string;
    readonly updateSettingsSuccessMessage: string;

    setTypeOfDisplay(page: Page, value: string): Promise<string>;
}
