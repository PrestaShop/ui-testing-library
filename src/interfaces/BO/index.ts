import type { CommonPageInterface } from "@interfaces/index";
import type { Page } from "@playwright/test";

export interface BOBasePagePageInterface extends CommonPageInterface {
    logoutBO(page: Page): Promise<void>;
}