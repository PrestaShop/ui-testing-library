import test, {Page, expect} from '@playwright/test';
import FakerProduct from '@data/faker/product';
import boProductsPage from '@pages/BO/catalog/products';
import boProductsCreatePage from '@pages/BO/catalog/products/create';
import boDashboardPage from '@pages/BO/dashboard';
import boLoginPage from '@pages/BO/login';
import utilsTest from '@utils/test';

export default {
  /**
   * Function to create standard product
   * @param page {Page}
   * @param productData {FakerProduct} Data to set to create product
   * @param baseContext {string} String to identify the test
   */
  async createProduct(page: Page, productData: FakerProduct, baseContext: string = 'commonTests-createProduct'): Promise<void> {
    await test.step('Create Product: should login in BO', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'loginBO', baseContext);

      await boLoginPage.goTo(page, global.BO.URL);
      await boLoginPage.successLogin(page, global.BO.EMAIL, global.BO.PASSWD);

      const pageTitle = await boDashboardPage.getPageTitle(page);
      expect(pageTitle).toContain(boDashboardPage.pageTitle);
    });

    await test.step('Create Product: should go to \'Catalog > Products\' page', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'goToProductsPage', baseContext);

      await boDashboardPage.goToSubMenu(page, boDashboardPage.catalogParentLink, boDashboardPage.productsLink);
      await boProductsPage.closeSfToolBar(page);

      const pageTitle = await boProductsPage.getPageTitle(page);
      expect(pageTitle).toContain(boProductsPage.pageTitle);
    });

    await test.step('Create Product: should click on \'New product\' button and check new product modal', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'clickOnNewProductButton', baseContext);

      const isModalVisible = await boProductsPage.clickOnNewProductButton(page);
      expect(isModalVisible).toBeTruthy();
    });

    await test.step(`Create Product: should choose '${productData.type} product' and go to new product page`, async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'chooseTypeOfProduct', baseContext);

      await boProductsPage.selectProductType(page, productData.type);
      await boProductsPage.clickOnAddNewProduct(page);
      await boProductsCreatePage.closeSfToolBar(page);

      const pageTitle = await boProductsCreatePage.getPageTitle(page);
      expect(pageTitle).toContain(boProductsCreatePage.pageTitle);
    });

    await test.step('Create Product: should create product', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'createStandardProduct', baseContext);

      const createProductMessage = await boProductsCreatePage.setProduct(page, productData);
      expect(createProductMessage).toEqual(boProductsCreatePage.successfulUpdateMessage);
    });

    await test.step('Create Product: should logout', async () => {
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
  async deleteProduct(page: Page, productData: FakerProduct, baseContext: string = 'commonTests-deleteProduct'): Promise<void> {
    await test.step('Delete Product: should login in BO', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'loginBO', baseContext);

      await boLoginPage.goTo(page, global.BO.URL);
      await boLoginPage.successLogin(page, global.BO.EMAIL, global.BO.PASSWD);

      const pageTitle = await boDashboardPage.getPageTitle(page);
      expect(pageTitle).toContain(boDashboardPage.pageTitle);
    });

    await test.step('Delete Product: should go to \'Catalog > Products\' page', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'goToProductsPageToDelete', baseContext);

      await boDashboardPage.goToSubMenu(page, boDashboardPage.catalogParentLink, boDashboardPage.productsLink);

      const pageTitle = await boProductsPage.getPageTitle(page);
      expect(pageTitle).toContain(boProductsPage.pageTitle);
    });

    await test.step('Delete Product: should reset all filters', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'resetFilters', baseContext);

      await boProductsPage.resetFilter(page);

      const numberOfProducts = await boProductsPage.resetAndGetNumberOfLines(page);
      expect(numberOfProducts).toBeGreaterThan(0);
    });

    await test.step('Delete Product: should click on delete product button', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'clickOnDeleteProduct', baseContext);

      const isModalVisible: boolean = await boProductsPage.clickOnDeleteProductButton(page);
      expect(isModalVisible).toBeTruthy();
    });

    await test.step('Delete Product: should delete product', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'deleteProduct', baseContext);

      const textMessage: string = await boProductsPage.clickOnConfirmDialogButton(page);
      expect(textMessage).toEqual(boProductsPage.successfulDeleteMessage);
    });

    await test.step('Delete Product: should reset filter', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'resetFilter', baseContext);

      const numberOfProductsAfterReset: number = await boProductsPage.resetAndGetNumberOfLines(page);
      expect(numberOfProductsAfterReset).toBeGreaterThan(0);
    });
  },

  /**
 * Function to bulk delete product
 * @param productName {string} Value to set on product name input
 * @param baseContext {string} String to identify the test
 */
  /*
function bulkDeleteProductsTest(productName: string, baseContext: string = 'commonTests-bulkDeleteProductsTest'): void {
  describe('POST-TEST: Bulk delete created products', async () => {
    let numberOfProductsAfterFilter: number;

    // before and after functions
    before(async () => {
      browserContext = await helper.createBrowserContext(this.browser);
      page = await helper.newTab(browserContext);
    });

    after(async () => {
      await helper.closeBrowserContext(browserContext);
    });

    await test.step('should login in BO', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'loginBO', baseContext);

      await boLoginPage.goTo(page, global.BO.URL);
      await boLoginPage.successLogin(page, global.BO.EMAIL, global.BO.PASSWD);

      const pageTitle = await boDashboardPage.getPageTitle(page);
      expect(pageTitle).toContain(boDashboardPage.pageTitle);
    });

    await test.step('should go to \'Catalog > Products\' page', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'goToProductsPageToBulkDelete', baseContext);

      await dashboardPage.goToSubMenu(page, dashboardPage.catalogParentLink, dashboardPage.productsLink);

      const pageTitle = await productsPage.getPageTitle(page);
      expect(pageTitle).to.contains(productsPage.pageTitle);
    });

    await test.step('should reset filter and get number of products', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'getNumberOfProduct', baseContext);

      numberOfProducts = await productsPage.resetAndGetNumberOfLines(page);
      expect(numberOfProducts).to.be.above(0);
    });

    await test.step('should filter list by \'Name\' and check result', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'filterListByReference', baseContext);

      await productsPage.filterProducts(page, 'product_name', productName, 'input');

      numberOfProductsAfterFilter = await productsPage.getNumberOfProductsFromList(page);

      const textColumn = await productsPage.getTextColumn(page, 'product_name', 1);
      expect(textColumn).to.contains(productName);
    });

    await test.step('should select the products', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'selectProducts', baseContext);

      const isBulkDeleteButtonEnabled = await productsPage.bulkSelectProducts(page);
      expect(isBulkDeleteButtonEnabled).to.be.eq(true);
    });

    await test.step('should click on bulk actions button', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'clickOnBulkActionsButton', baseContext);

      const textMessage = await productsPage.clickOnBulkActionsProducts(page, 'delete');
      expect(textMessage).to.equal(`Deleting ${numberOfProductsAfterFilter} products`);
    });

    await test.step('should bulk delete products', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'bulkDeleteProducts', baseContext);

      const textMessage = await productsPage.bulkActionsProduct(page, 'delete');
      expect(textMessage).to.equal(`Deleting ${numberOfProductsAfterFilter} / ${numberOfProductsAfterFilter} products`);
    });

    await test.step('should close progress modal', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'closeDeleteProgressModal', baseContext);

      const isModalVisible = await productsPage.closeBulkActionsProgressModal(page, 'delete');
      expect(isModalVisible).to.be.eq(true);
    });

    await test.step('should reset filter and get number of products', async () => {
      await utilsTest.addContextItem(test.info(), 'testIdentifier', 'checkNumberOfProduct', baseContext);

      const numberOfProductAfterBulkActions = await productsPage.resetAndGetNumberOfLines(page);
      expect(numberOfProductAfterBulkActions).to.be.equal(numberOfProducts - numberOfProductsAfterFilter);
    });
  });
}*/

};
