import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {type Page} from '@playwright/test';

export interface ModulePsWirepaymentMainPageInterface extends ModuleConfigurationPageInterface {
    readonly pageTitle: string;

    saveFormContactDetails(page: Page): Promise<string>;
    setAccountDetails(page: Page, accountDetails: string): Promise<void>;
    setAccountOwner(page: Page, accountOwner: string): Promise<void>;
    setBankAddress(page: Page, bankAddress: string): Promise<void>;
}
