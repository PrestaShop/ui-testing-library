import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {Page} from '@playwright/test';

export interface ModulePsFacetedsearchFilterTemplatePageInterface extends ModuleConfigurationPageInterface {
    readonly submitFilter: string;
    readonly title: string;

    getPanelTitle(page: Page): Promise<string>;
    isTemplateFilterEnabled(page: Page, filterName: string): Promise<boolean>;
    saveTemplate(page: Page): Promise<string>;
    setTemplateFilterForm(
        page: Page,
        filterName: string,
        status: boolean,
        filterType?: string,
        filterLimit?: string,
    ): Promise<void>;
    setTemplateName(page: Page, name: string): Promise<void>;
    setTemplatePages(page: Page, controllers: string[]): Promise<void>;
}
