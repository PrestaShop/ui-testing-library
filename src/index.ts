// Export data
export type {
  CarrierCreator,
  CarrierRange,
  CarrierRangeZone,
} from '@data/types/carrier';
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
export type {OrderCreator} from '@data/types/order';
export type {
  PageWaitForSelectorOptionsState,
  WaitForNavigationWaitUntil,
} from '@data/types/playwright';

export {default as dataCategories} from '@data/demo/categories';
export {default as dataCountries} from '@data/demo/countries';
export {default as dataCurrencies} from '@data/demo/currencies';
export {default as dataCustomers} from '@data/demo/customers';
export {default as dataGroups} from '@data/demo/groups';
export {default as dataModules} from '@data/demo/modules';
export {default as dataOrderStatuses} from '@data/demo/orderStatuses';
export {default as dataOrders} from '@data/demo/orders';
export {default as dataPaymentMethods} from '@data/demo/paymentMethods';
export {default as dataProducts} from '@data/demo/products';
export {default as dataSocialTitles} from '@data/demo/socialTitles';
export {default as dataStates} from '@data/demo/states';
export {default as dataTaxes} from '@data/demo/tax';
export {default as dataTaxRules} from '@data/demo/taxRule';
export {default as dataTaxRuleBehaviours} from '@data/demo/taxRuleBehaviour';
export {default as dataTitles} from '@data/demo/titles';
export {default as dataZones} from '@data/demo/zones';

export {default as FakerAddress} from '@data/faker/address';
export {default as FakerCarrier} from '@data/faker/carrier';
export {default as FakerCategory} from '@data/faker/category';
export {default as FakerCountry} from '@data/faker/country';
export {default as FakerCurrency} from '@data/faker/currency';
export {default as FakerCustomer} from '@data/faker/customer';
export {default as FakerGroup} from '@data/faker/group';
export {default as FakerModule} from '@data/faker/module';
export {default as FakerOrderStatus} from '@data/faker/orderStatus';
export {default as FakerOrder} from '@data/faker/order';
export {default as FakerPaymentMethod} from '@data/faker/paymentMethod';
export {default as FakerProduct} from '@data/faker/product';
export {default as FakerProductReview} from '@data/faker/productReview';
export {default as FakerState} from '@data/faker/state';
export {default as FakerTaxRule} from '@data/faker/taxRule';
export {default as FakerTax} from '@data/faker/tax';
export {default as FakerTitle} from '@data/faker/title';
export {default as FakerZone} from '@data/faker/zone';

// Export Pages
export * as CommonPage from '@pages/commonPage';
// Export Pages BO
export * as BOBasePage from '@pages/BO/BOBasePage';
export {default as boLoginPage} from '@pages/BO/login';
export {default as boDashboardPage} from '@pages/BO/dashboard';
export {default as boOrdersPage} from '@pages/BO/orders';
export {default as boOrdersViewBasePage} from '@pages/BO/orders/view/viewOrderBasePage';
export {default as boOrdersViewProductsBlockPage} from '@pages/BO/orders/view/productsBlock';
export {default as boProductsPage} from '@pages/BO/catalog/products';
export {default as boProductsCreatePage} from '@pages/BO/catalog/products/create';
export {default as boProductsCreateTabCombinationsPage} from '@pages/BO/catalog/products/create/combinationsTab';
export {default as boProductsCreateTabDescriptionPage} from '@pages/BO/catalog/products/create/descriptionTab';
export {default as boProductsCreateTabDetailsPage} from '@pages/BO/catalog/products/create/detailsTab';
export {default as boProductsCreateTabOptionsPage} from '@pages/BO/catalog/products/create/optionsTab';
export {default as boProductsCreateTabPackPage} from '@pages/BO/catalog/products/create/packTab';
export {default as boProductsCreateTabPricingPage} from '@pages/BO/catalog/products/create/pricingTab';
export {default as boProductsCreateTabSEOPage} from '@pages/BO/catalog/products/create/seoTab';
export {default as boProductsCreateTabShippingPage} from '@pages/BO/catalog/products/create/shippingTab';
export {default as boProductsCreateTabStocksPage} from '@pages/BO/catalog/products/create/stocksTab';
export {default as boProductsCreateTabVirtualProductPage} from '@pages/BO/catalog/products/create/virtualProductTab';
// Export Pages FO
export * as FOBasePage from '@pages/FO/FOBasePage';
// Export Pages FO/Classic
export {default as foClassicCartPage} from '@pages/FO/classic/cart';
export {default as foClassicCategoryPage} from '@pages/FO/classic/category';
export {default as foClassicCheckoutPage} from '@pages/FO/classic/checkout';
export {default as foClassicCheckoutOrderConfirmationPage} from '@pages/FO/classic/checkout/orderConfirmation';
export {default as foClassicHomePage} from '@pages/FO/classic/home';
export {default as foClassicLoginPage} from '@pages/FO/classic/login';
export {default as foClassicProductPage} from '@pages/FO/classic/product';

// Export Modules
export {default as modBlockwishlistBoMain} from '@pages/BO/modules/blockwishlist';
export {default as modBlockwishlistBoStatistics} from '@pages/BO/modules/blockwishlist/statistics';

// Export utils
export {default as testContext} from '@utils/test';
export {default as basicHelper} from '@utils/basicHelper';
