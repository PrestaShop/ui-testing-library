import type {CommonPageInterface} from '@interfaces/index';
import type {Page} from '@playwright/test';

export interface BOBasePagePageInterface extends CommonPageInterface {
    readonly ordersParentLink: string;

    readonly ordersLink: string;

    readonly invoicesLink: string;

    readonly creditSlipsLink: string;

    readonly deliverySlipslink: string;

    readonly shoppingCartsLink: string;

    readonly catalogParentLink: string;

    readonly productsLink: string;

    readonly categoriesLink: string;

    readonly monitoringLink: string;

    readonly attributesAndFeaturesLink: string;

    readonly brandsAndSuppliersLink: string;

    readonly filesLink: string;

    readonly discountsLink: string;

    readonly stocksLink: string;

    readonly customersParentLink: string;

    readonly customersLink: string;

    readonly addressesLink: string;

    readonly outstandingLink: string;

    readonly customerServiceParentLink: string;

    readonly customerServiceLink: string;

    readonly orderMessagesLink: string;

    readonly merchandiseReturnsLink: string;

    readonly modulesParentLink: string;

    readonly moduleCatalogueLink: string;

    readonly moduleManagerLink: string;

    readonly designParentLink: string;

    readonly themeAndLogoParentLink: string;

    readonly emailThemeLink: string;

    readonly pagesLink: string;

    readonly positionsLink: string;

    readonly imageSettingsLink: string;

    readonly linkWidgetLink: string;

    readonly shippingLink: string;

    readonly carriersLink: string;

    readonly shippingPreferencesLink: string;

    readonly paymentParentLink: string;

    readonly paymentMethodsLink: string;

    readonly preferencesLink: string;

    readonly internationalParentLink: string;

    readonly taxesLink: string;

    readonly localizationLink: string;

    readonly locationsLink: string;

    readonly translationsLink: string;

    readonly shopParametersParentLink: string;

    readonly shopParametersGeneralLink: string;

    readonly orderSettingsLink: string;

    readonly productSettingsLink: string;

    readonly customerSettingsLink: string;

    readonly contactLink: string;

    readonly trafficAndSeoLink: string;

    readonly searchLink: string;

    readonly advancedParametersLink: string;

    readonly informationLink: string;

    readonly performanceLink: string;

    readonly administrationLink: string;

    readonly emailLink: string;

    readonly importLink: string;

    readonly teamLink: string;

    readonly databaseLink: string;

    readonly webserviceLink: string;

    readonly logsLink: string;

    readonly authorizationServerLink: string;

    readonly featureFlagLink: string;

    readonly securityLink: string;

    readonly multistoreLink: string;

    goToSubMenu(page: Page, parentSelector: string, linkSelector: string): Promise<void>;
    logoutBO(page: Page): Promise<void>;
}
