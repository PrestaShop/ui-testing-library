import FakerModule from '@data/faker/module';
import test, {Page, expect} from '@playwright/test';
import boDashboardPage from '@pages/BO/dashboard';
import boLoginPage from '@pages/BO/login';
import boModuleManagerPage from '@pages/BO/modules/moduleManager';
import utilsFile from '@utils/file';
import utilsTest from '@utils/test';

export default {
  /**
   * Function to reset module
   * @param page {Page}
   * @param module {FakerModule} Module
   * @param baseContext {string} String to identify the test
   */
  async resetModule(page: Page, module: FakerModule, baseContext: string = 'commonTests-resetModule'): Promise<void> {
    test.setTimeout(60000);

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

    await test.step('Reset module: should logout', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'logout', baseContext);

      await boModuleManagerPage.logoutBO(page);

      const pageTitle = await boLoginPage.getPageTitle(page);
      expect(pageTitle).toContain(boLoginPage.pageTitle);
    });
  },

  /**
   * Function to install  module
   * @param page {Page}
   * @param module {FakerModule}
   * @param useVersion {boolean|string}
   *  If string, use as source of the module ;
   *  If boolean,
   *    If true, use the current version
   *    If false, use the last version
   * @param baseContext {string}
   */
  async installModule(
    page: Page,
    module: FakerModule,
    useVersion: boolean|string = true,
    baseContext: string = 'commonTests-installModule',
  ): Promise<void> {
    test.setTimeout(60000);

    await test.step('Install module: should login in BO', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'loginBO', baseContext);

      await boLoginPage.goTo(page, global.BO.URL);
      await boLoginPage.successLogin(page, global.BO.EMAIL, global.BO.PASSWD);

      const pageTitle = await boDashboardPage.getPageTitle(page);
      expect(pageTitle).toContain(boDashboardPage.pageTitle);
    });

    await test.step('Install module: should download the zip of the module', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'downloadModule', baseContext);

      let urlModule: string = '';

      if (typeof (useVersion) === 'string') {
        urlModule = useVersion;
      } else {
        urlModule = module.releaseZip(useVersion ? module.versionCurrent : module.versionOld);
      }

      await utilsFile.downloadFile(urlModule, 'module.zip');

      const found = await utilsFile.doesFileExist('module.zip');
      expect(found).toBeTruthy();
    });

    await test.step('Install module: should go to \'Modules > Module Manager\' page', async () => {
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

    await test.step(`Install module: should upload the module '${module.name}'`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'uploadModule', baseContext);

      const successMessage = await boModuleManagerPage.uploadModule(page, 'module.zip');
      expect(successMessage).toEqual(boModuleManagerPage.uploadModuleSuccessMessage);
    });

    await test.step('Install module: should close upload module modal', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'closeModal', baseContext);

      const isModalVisible = await boModuleManagerPage.closeUploadModuleModal(page);
      expect(isModalVisible).toBeTruthy();
    });

    await test.step(`Install module: should search the module '${module.name}'`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'searchModule', baseContext);

      const isModuleVisible = await boModuleManagerPage.searchModule(page, module);
      expect(isModuleVisible).toBeTruthy();
    });

    await test.step('Install module: should logout', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'logout', baseContext);

      await boModuleManagerPage.logoutBO(page);

      const pageTitle = await boLoginPage.getPageTitle(page);
      expect(pageTitle).toContain(boLoginPage.pageTitle);
    });
  },

  /**
   * Function to uninstall module
   * @param page {Page}
   * @param module {FakerModule}
   * @param baseContext {string}
   */
  async uninstallModule(page: Page, module: FakerModule, baseContext: string = 'commonTests-uninstallModule'): Promise<void> {
    test.setTimeout(60000);

    await test.step('Uninstall module: should login in BO', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'loginBO', baseContext);

      await boLoginPage.goTo(page, global.BO.URL);
      await boLoginPage.successLogin(page, global.BO.EMAIL, global.BO.PASSWD);

      const pageTitle = await boDashboardPage.getPageTitle(page);
      expect(pageTitle).toContain(boDashboardPage.pageTitle);
    });

    await test.step('Uninstall module: should go to \'Modules > Module Manager\' page', async () => {
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

    await test.step(`Uninstall module: should search the module '${module.name}'`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'searchModule', baseContext);

      const isModuleVisible = await boModuleManagerPage.searchModule(page, module);
      expect(isModuleVisible).toBeTruthy();
    });

    await test.step(`Uninstall module: should uninstall the module '${module.name}'`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'uninstallModule', baseContext);

      const successMessage = await boModuleManagerPage.setActionInModule(page, module, 'uninstall', false, true);
      expect(successMessage).toEqual(boModuleManagerPage.uninstallModuleSuccessMessage(module.tag));
    });

    await test.step('Uninstall module: should logout', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'logout', baseContext);

      await boModuleManagerPage.reloadPage(page);
      await boModuleManagerPage.logoutBO(page);

      const pageTitle = await boLoginPage.getPageTitle(page);
      expect(pageTitle).toContain(boLoginPage.pageTitle);
    });
  },
};
