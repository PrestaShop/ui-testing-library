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

export {default as dataCountries} from '@data/demo/countries';
export {default as dataCurrencies} from '@data/demo/currencies';
export {default as dataCustomers} from '@data/demo/customers';
export {default as dataGroups} from '@data/demo/groups';
export {default as dataModules} from '@data/demo/modules';
export {default as dataOrderStatuses} from '@data/demo/orderStatuses';
export {default as dataPaymentMethods} from '@data/demo/paymentMethods';
export {default as dataSocialTitles} from '@data/demo/socialTitles';
export {default as dataStates} from '@data/demo/states';
export {default as dataTaxes} from '@data/demo/tax';
export {default as dataTaxRules} from '@data/demo/taxRule';
export {default as dataTaxRuleBehaviours} from '@data/demo/taxRuleBehaviour';
export {default as dataTitles} from '@data/demo/titles';
export {default as dataZones} from '@data/demo/zones';

export {default as fakerAddress} from '@data/faker/address';
export {default as fakerCarrier} from '@data/faker/carrier';
export {default as fakerCountry} from '@data/faker/country';
export {default as fakerCurrency} from '@data/faker/currency';
export {default as fakerCustomer} from '@data/faker/customer';
export {default as fakerGroup} from '@data/faker/group';
export {default as fakerModule} from '@data/faker/module';
export {default as fakerOrderStatus} from '@data/faker/orderStatus';
export {default as fakerPaymentMethod} from '@data/faker/paymentMethod';
export {default as fakerState} from '@data/faker/state';
export {default as fakerTax} from '@data/faker/tax';
export {default as fakerTaxRule} from '@data/faker/taxRule';
export {default as fakerTitle} from '@data/faker/title';
export {default as fakerZone} from '@data/faker/zone';

// Export Pages
export * as CommonPage from '@pages/commonPage';
// Export Pages BO
export * as BOBasePage from '@pages/BO/BOBasePage';
export {default as boLoginPage} from '@pages/BO/login';
export {default as boDashboardPage} from '@pages/BO/dashboard';
export {default as boOrdersPage} from '@pages/BO/orders';
export {default as boModuleManagerPage} from '@pages/BO/modules/moduleManager';
// Export Pages FO
export * as FOBasePage from '@pages/FO/FOBasePage';
// Export Pages FO/Classic
export {default as foClassicCartPage} from '@pages/FO/classic/cart';
export {default as foClassicCategoryPage} from '@pages/FO/classic/category';
export {default as foClassicCheckoutPage} from '@pages/FO/classic/checkout';
export {default as foClassicCheckoutOrderConfirmationPage} from '@pages/FO/classic/checkout/orderConfirmation';
export {default as foClassicHomePage} from '@pages/FO/classic/home';
export {default as foClassicLoginPage} from '@pages/FO/classic/login';

// Export Modules
export {default as modBlockwishlistBoMain} from '@pages/BO/modules/blockwishlist';
export {default as modBlockwishlistBoStatistics} from '@pages/BO/modules/blockwishlist/statistics';

// Export utils
export {default as testContext} from '@utils/testContext';
