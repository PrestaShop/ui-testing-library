import {BORouterPageInterface} from '@interfaces/BO/router';
import BOBasePage from '@pages/BO/BOBasePage';
import boDashboardPage from '@pages/BO/dashboard/index';
import boModuleManagerPage from '@pages/BO/modules/moduleManager/index';
import boModuleManagerSelectionPage from '@pages/BO/modules/moduleManager/selection';
import testContext from '@utils/testContext';
import type {Page} from 'playwright-core';
import semver from 'semver';

class BORouterPage extends BOBasePage implements BORouterPageInterface {
    async goToModuleManagerPage(page: Page): Promise<void> {
        const psVersion = testContext.getPSVersion();
        const pageTitle = await this.getPageTitle(page);
        const boModuleManagerLinkPageTitle = semver.lt(psVersion, '7.4.0')
            ? boModuleManagerSelectionPage.pageTitle
            : boModuleManagerPage.pageTitle;

        // Check if we are not already on the page
        if (!pageTitle.includes(boModuleManagerLinkPageTitle)) {
            await boDashboardPage.goToSubMenu(
                page,
                boDashboardPage.modulesParentLink,
                boDashboardPage.moduleManagerLink,
            );
            await boDashboardPage.closeSfToolBar(page);
        }

        if (semver.lt(psVersion, '7.4.0')) {
            console.log('goToTabInstalledModules');
            await boModuleManagerSelectionPage.goToTabInstalledModules(page);
        }
    }
}

export default new BORouterPage();
