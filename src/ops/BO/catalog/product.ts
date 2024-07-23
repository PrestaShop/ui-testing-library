import test, {Page, expect} from '@playwright/test';
import FakerProduct from '@data/faker/product';
import boProductsPage from '@pages/BO/catalog/products';
import boProductsCreatePage from '@pages/BO/catalog/products/create';
import boDashboardPage from '@pages/BO/dashboard';
import boLoginPage from '@pages/BO/login';
import utilsTest from '@utils/test';
import semver from 'semver';

export default {
  /**
   * Function to create standard product
   * @param page {Page}
   * @param productData {FakerProduct} Data to set to create product
   * @param baseContext {string} String to identify the test
   */
  async createProduct(
    page: Page,
    productData: FakerProduct,
    baseContext: string = 'commonTests-createProduct',
    nth: number = 0,
  ): Promise<void> {
    await test.step(`Create Product${nth > 0 ? ` #${nth}` : ''}: should login in BO`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'loginBO', baseContext);

      await boLoginPage.goTo(page, global.BO.URL);
      await boLoginPage.successLogin(page, global.BO.EMAIL, global.BO.PASSWD);

      const pageTitle = await boDashboardPage.getPageTitle(page);
      expect(pageTitle).toContain(boDashboardPage.pageTitle);
    });

    await test.step(`Create Product${nth > 0 ? ` #${nth}` : ''}: should go to 'Catalog > Products' page`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'goToProductsPage', baseContext);

      await boDashboardPage.goToSubMenu(page, boDashboardPage.catalogParentLink, boDashboardPage.productsLink);
      await boProductsPage.closeSfToolBar(page);

      const pageTitle = await boProductsPage.getPageTitle(page);
      expect(pageTitle).toContain(boProductsPage.pageTitle);
    });

    await test.step(
      `Create Product${nth > 0 ? ` #${nth}` : ''}: should click on 'New product' button and check new product modal`,
      async () => {
        await utilsTest.addContextItem(test.info(), 'testIdentifier', 'clickOnNewProductButton', baseContext);

        const isModalVisible = await boProductsPage.clickOnNewProductButton(page);
        expect(isModalVisible).toBeTruthy();
      },
    );

    if (semver.gte(utilsTest.getPSVersion(), '8.1.0')) {
      await test.step(
        `Create Product${nth > 0 ? ` #${nth}` : ''}: should choose '${productData.type} product'`,
        async () => {
          await utilsTest.addContextItem(test.info(), 'testIdentifier', 'chooseTypeOfProduct', baseContext);

          await boProductsPage.selectProductType(page, productData.type);

          const pageTitle = await boProductsCreatePage.getPageTitle(page);
          expect(pageTitle).toContain(boProductsCreatePage.pageTitle);
        },
      );

      await test.step(
        `Create Product${nth > 0 ? ` #${nth}` : ''}: should go to new product page`,
        async () => {
          await utilsTest.addContextItem(test.info(), 'testIdentifier', 'goToNewProductPage', baseContext);

          await boProductsPage.clickOnAddNewProduct(page);
          await boProductsCreatePage.closeSfToolBar(page);

          const pageTitle = await boProductsCreatePage.getPageTitle(page);
          expect(pageTitle).toContain(boProductsCreatePage.pageTitle);
        },
      );
    }

    await test.step(`Create Product${nth > 0 ? ` #${nth}` : ''}: should create product`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'createStandardProduct', baseContext);

      const createProductMessage = await boProductsCreatePage.setProduct(page, productData);
      expect(createProductMessage).toEqual(boProductsCreatePage.successfulUpdateMessage);
    });

    await test.step(`Create Product${nth > 0 ? ` #${nth}` : ''}: should logout`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'logout', baseContext);

      await boProductsCreatePage.logoutBO(page);

      const pageTitle = await boLoginPage.getPageTitle(page);
      expect(pageTitle).toContain(boLoginPage.pageTitle);
    });
  },

  /**
   * Function to delete product
   * @param page {Page}
   * @param productData {FakerProduct} Data to set to delete product
   * @param baseContext {string} String to identify the test
   */
  async deleteProduct(
    page: Page,
    productData: FakerProduct,
    baseContext: string = 'commonTests-deleteProduct',
    nth: number = 0,
  ): Promise<void> {
    await test.step(`Delete Product${nth > 0 ? ` #${nth}` : ''}: should login in BO`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'loginBO', baseContext);

      await boLoginPage.goTo(page, global.BO.URL);
      await boLoginPage.successLogin(page, global.BO.EMAIL, global.BO.PASSWD);

      const pageTitle = await boDashboardPage.getPageTitle(page);
      expect(pageTitle).toContain(boDashboardPage.pageTitle);
    });

    await test.step(`Delete Product${nth > 0 ? ` #${nth}` : ''}: should go to 'Catalog > Products' page`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'goToProductsPageToDelete', baseContext);

      await boDashboardPage.goToSubMenu(page, boDashboardPage.catalogParentLink, boDashboardPage.productsLink);

      const pageTitle = await boProductsPage.getPageTitle(page);
      expect(pageTitle).toContain(boProductsPage.pageTitle);
    });

    await test.step(`Delete Product${nth > 0 ? ` #${nth}` : ''}: should reset all filters`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'resetFilters', baseContext);

      await boProductsPage.resetFilter(page);

      const numberOfProducts = await boProductsPage.resetAndGetNumberOfLines(page);
      expect(numberOfProducts).toBeGreaterThan(0);
    });

    await test.step(`Delete Product${nth > 0 ? ` #${nth}` : ''}: should filter by name`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'filterByName', baseContext);

      await boProductsPage.filterProducts(page, 'product_name', productData.name);

      const numProducts = await boProductsPage.getNumberOfProductsFromList(page);
      expect(numProducts).toEqual(1);
    });

    await test.step(`Delete Product${nth > 0 ? ` #${nth}` : ''}: should click on delete product button`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'clickOnDeleteProduct', baseContext);

      const isModalVisible: boolean = await boProductsPage.clickOnDeleteProductButton(page);
      expect(isModalVisible).toBeTruthy();
    });

    await test.step(`Delete Product${nth > 0 ? ` #${nth}` : ''}: should delete product`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'deleteProduct', baseContext);

      const textMessage: string = await boProductsPage.clickOnConfirmDialogButton(page);
      expect(textMessage).toEqual(boProductsPage.successfulDeleteMessage);
    });

    await test.step(`Delete Product${nth > 0 ? ` #${nth}` : ''}: should reset filter`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'resetFilter', baseContext);

      const numberOfProductsAfterReset: number = await boProductsPage.resetAndGetNumberOfLines(page);
      expect(numberOfProductsAfterReset).toBeGreaterThan(0);
    });

    await test.step(`Delete Product${nth > 0 ? ` #${nth}` : ''}: should reset all filters`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'resetFiltersAfterDelete', baseContext);

      await boProductsPage.resetFilter(page);

      const numberOfProducts = await boProductsPage.resetAndGetNumberOfLines(page);
      expect(numberOfProducts).toBeGreaterThan(0);
    });

    await test.step(`Delete Product${nth > 0 ? ` #${nth}` : ''}: should logout`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'boLogout', baseContext);

      await boProductsPage.logoutBO(page);

      const pageTitle = await boLoginPage.getPageTitle(page);
      expect(pageTitle).toContain(boLoginPage.pageTitle);
    });
  },
};
