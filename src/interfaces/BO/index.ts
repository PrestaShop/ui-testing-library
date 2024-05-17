import type {CommonPageInterface} from '@interfaces/index';
import type {Frame, Page} from '@playwright/test';

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

    readonly themeAndLogoLink: string

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

    readonly adminAPILink: string;

    readonly featureFlagLink: string;

    readonly securityLink: string;

    readonly multistoreLink: string;
    readonly menuTree: { parent: string; children: string[] }[];

    clickOnNotification(page: Page, tabName: string, row?: number): Promise<void>;
    clickOnNotificationsLink(page: Page): Promise<boolean>;
    clickOnNotificationsTab(page: Page, tabName: string): Promise<void>;
    clickSubMenu(page: Page, parentSelector: string): Promise<void>;
    closeSfToolBar(page: Frame | Page): Promise<void>;
    getAllNotificationsNumber(page: Page): Promise<number>;
    getNotificationsNumberInTab(page: Page, tabName: string): Promise<number>;
    goToMyProfile(page: Page): Promise<void>;
    goToSubMenu(page: Page, parentSelector: string, linkSelector: string): Promise<void>;
    isMobileMenuVisible(page: Page): Promise<boolean>;
    isNavbarVisible(page: Page): Promise<boolean>;
    isSidebarCollapsed(page: Page): Promise<boolean>;
    isSubMenuActive(page: Page, linkSelector: string): Promise<boolean>;
    isSubmenuVisible(page: Page, parentSelector: string, linkSelector: string): Promise<boolean>;
    logoutBO(page: Page): Promise<void>;
    navigateToPageWithInvalidToken(page: Page, url: string, continueToPage?: boolean): Promise<void>;
    quickAccessToPage(page: Page, linkName: string): Promise<void>;
    quickAccessToPageNewWindow(page: Page, linkName: string): Promise<Page>;
    quickAccessToPageWithFrame(page: Page, linkName: string): Promise<void>;
    resize(page: Page, mobileSize: boolean): Promise<void>;
    search(page: Page, query: string): Promise<void>;
    setSidebarCollapsed(page: Page, isCollapsed: boolean): Promise<void>;
    viewMyShop(page: Page): Promise<Page>;
}
