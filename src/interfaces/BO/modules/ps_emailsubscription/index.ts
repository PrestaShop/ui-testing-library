import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {Page} from '@playwright/test';

export interface ModulePsEmailSubscriptionMainPageInterface extends ModuleConfigurationPageInterface {
    readonly pageTitle: string;
    readonly updateSettingsSuccessMessage: string;

    getListOfNewsletterRegistrationEmails(page: Page): Promise<string[]>;
    getNumberOfNewsletterRegistration(page: Page): Promise<number>;
    setSendConfirmationEmail(page: Page, toEnable: boolean): Promise<string>;
    setSendVerificationEmail(page: Page, toEnable: boolean): Promise<string>;
    setWelcomeVoucher(page: Page, voucher: string): Promise<string>;
}
