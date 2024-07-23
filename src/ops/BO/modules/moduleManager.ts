import FakerModule from '@data/faker/module';
import test, {Page, expect} from '@playwright/test';
import boDashboardPage from '@pages/BO/dashboard';
import boLoginPage from '@pages/BO/login';
import boModuleManagerPage from '@pages/BO/modules/moduleManager';
import utilsTest from '@utils/test';

export default {
  /**
   * Function to reset module
   * @param page {Page}
   * @param module {FakerModule} Module
   * @param baseContext {string} String to identify the test
   */
  async resetModule(page: Page, module: FakerModule, baseContext: string = 'commonTests-resetModule'): Promise<void> {
    await test.step('Reset module: should login in BO', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'loginBO', baseContext);

      await boLoginPage.goTo(page, global.BO.URL);
      await boLoginPage.successLogin(page, global.BO.EMAIL, global.BO.PASSWD);

      const pageTitle = await boDashboardPage.getPageTitle(page);
      expect(pageTitle).toContain(boDashboardPage.pageTitle);
    });

    await test.step('Reset module: should go to \'Modules > Module Manager\' page', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'goToModuleManagerPage', baseContext);

      await boDashboardPage.goToSubMenu(
        page,
        boDashboardPage.modulesParentLink,
        boDashboardPage.moduleManagerLink,
      );
      await boModuleManagerPage.closeSfToolBar(page);

      const pageTitle = await boModuleManagerPage.getPageTitle(page);
      expect(pageTitle).toContain(boModuleManagerPage.pageTitle);
    });

    await test.step(`Reset module: should search the module '${module.name}'`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'searchModule', baseContext);

      const isModuleVisible = await boModuleManagerPage.searchModule(page, module);
      expect(isModuleVisible, 'Module is not visible!').toEqual(true);
    });

    await test.step(`Reset module: should reset the module '${module.name}'`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'resetModule', baseContext);

      const successMessage = await boModuleManagerPage.setActionInModule(page, module, 'reset');
      expect(successMessage).toEqual(boModuleManagerPage.resetModuleSuccessMessage(module.tag));
    });
  },
};
