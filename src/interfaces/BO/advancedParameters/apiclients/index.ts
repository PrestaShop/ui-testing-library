import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';
import type {Serializable} from 'playwright-core/types/structs';

export interface BOApiClientsPageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;

    deleteAPIClient(page: Page, row: number): Promise<string>;
    getJSONDocumentation(page: Page): Promise<Serializable|null>;
    getNumberOfElementInGrid(page: Page): Promise<number>;
    getStatus(page: Page, row: number): Promise<boolean>;
    getTextColumn(page: Page, columnName: string, row?: number): Promise<string>;
    getTextForEmptyTable(page: Page): Promise<string>;
    goToEditAPIClientPage(page: Page, row: number): Promise<void>;
    goToNewAPIClientPage(page: Page): Promise<void>;
}
