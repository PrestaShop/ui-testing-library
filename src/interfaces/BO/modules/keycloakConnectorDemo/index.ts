import {type ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {type Page} from '@playwright/test';

export interface ModuleKeycloakConnectorDemoPageInterface extends ModuleConfigurationPageInterface {
    readonly pageTitle: string;

    setKeycloakEndpoint(page: Page, keycloakRealmUrl: string, allowedIssuers: string[]): Promise<string>;
}
