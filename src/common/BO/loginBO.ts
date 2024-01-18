//import testContext from '@utils/testContext';

import Login from '@pages/BO/login';
import Dashboard from '@pages/BO/dashboard';

import {expect} from '@playwright/test';
import type {Page, TestInfo} from '@playwright/test';

const loginPage = new Login();
const dashboardPage = new Dashboard();

export default {
  async loginBO(
    testInfo: TestInfo,
    page: Page,
    email: string = global.BO.EMAIL,
    password: string = global.BO.PASSWD,
  ): Promise<void> {
    //await testContext.addContextItem(testInfo, 'testIdentifier', 'loginBO');

    //await loginPage.goTo(page, global.BO.URL);
    await loginPage.successLogin(page, email, password);

    const pageTitle = await dashboardPage.getPageTitle(page);
    expect(pageTitle).toContain(dashboardPage.pageTitle);
  },

  async logoutBO(testInfo: TestInfo, page: Page): Promise<void> {
    //await testContext.addContextItem(testInfo, 'testIdentifier', 'logoutBO');

    await dashboardPage.logoutBO(page);

    //const pageTitle = await loginPage.getPageTitle(page);
    //expect(pageTitle).toContain(loginPage.pageTitle);
  },
};
