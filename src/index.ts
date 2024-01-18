// Export data
export type {PageWaitForSelectorOptionsState, WaitForNavigationWaitUntil} from '@data/types/playwright';

// Export interfaces
export type {DashboardPageInterface} from '@interfaces/BO/dashboard';
export type {LoginPageInterface} from '@interfaces/BO/login';

// Export Pages
export * as CommonPage from '@pages/commonPage';
// Export Pages BO
export * as BOBasePage from '@pages/BO/BOBasePage';
export {default as boLoginPage} from '@pages/BO/login';
export {default as boDashboardPage} from '@pages/BO/dashboard';

// Export utils
export {default as testContext} from '@utils/testContext';
