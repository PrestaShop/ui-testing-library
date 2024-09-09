import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {Page} from '@playwright/test';

export interface ModulePsFacetedsearchMainPageInterface extends ModuleConfigurationPageInterface {
    readonly msgSuccessfulCreation: (name: string) => string;
    readonly msgSuccessfulDelete: string;
    readonly pageSubTitle: string;
    readonly settingsErrorMessage: string;
    readonly settingsSavedMessage: string;

    deleteFilterTemplate(page: Page, row: number): Promise<string>;
    editFilterTemplate(page: Page, row: number): Promise<void>;
    getCategoryFilterDepthValue(page: Page): Promise<number>;
    goToAddNewTemplate(page: Page): Promise<void>;
    isShowProductsFromSubcategoriesChecked(page: Page): Promise<boolean>;
    isShowProductsFromSubcategoriesDisabled(page: Page): Promise<boolean>;
    isShowProductsOnlyFromDefaultCategoryChecked(page: Page): Promise<boolean>;
    setCategoryFilterDepthValue(page: Page, value: string): Promise<string>;
    setShowProductsOnlyFromDefaultCategoryValue(page: Page, value: boolean): Promise<string>;
}
