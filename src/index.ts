// Export data
export type {CartProductDetails} from '@data/types/cart';
export type {
  GlobalInstall,
  GlobalFO,
  GlobalBO,
  GlobalBrowser,
  GlobalBrowserConfig,
  GlobalPSConfig,
  GlobalBrowserErrors,
  GlobalScreenshot,
  GlobalMaildevConfig,
  GlobalKeycloakConfig,
} from '@data/types/globals';
export type {
  PageWaitForSelectorOptionsState,
  WaitForNavigationWaitUntil,
} from '@data/types/playwright';

export {default as dataCustomers} from '@data/demo/customers';
export {default as dataGroups} from '@data/demo/groups';
export {default as dataModules} from '@data/demo/modules';
export {default as dataSocialTitles} from '@data/demo/socialTitles';
export {default as dataTitles} from '@data/demo/titles';

// Export Pages
export * as CommonPage from '@pages/commonPage';
// Export Pages BO
export * as BOBasePage from '@pages/BO/BOBasePage';
export {default as boLoginPage} from '@pages/BO/login';
export {default as boDashboardPage} from '@pages/BO/dashboard';
export {default as boModuleManagerPage} from '@pages/BO/modules/moduleManager';
// Export Pages FO
export * as FOBasePage from '@pages/FO/FOBasePage';
export {default as foCategoryPage} from '@pages/FO/category';
export {default as foHomePage} from '@pages/FO/home';
export {default as foLoginPage} from '@pages/FO/login';

// Export Modules
export {default as modBlockwishlistBoMain} from '@pages/BO/modules/blockwishlist';
export {default as modBlockwishlistBoStatistics} from '@pages/BO/modules/blockwishlist/statistics';

// Export utils
export {default as testContext} from '@utils/testContext';
