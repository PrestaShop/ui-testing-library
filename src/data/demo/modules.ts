import FakerModule from '@data/faker/module';

export default {
  blockwishlist: new FakerModule({
    tag: 'blockwishlist',
    name: 'Wishlist',
    versionCurrent: 'v3.0.2',
    releaseZip: 'https://github.com/PrestaShop/blockwishlist/releases/download/%version%/blockwishlist.zip',
  }),
  contactForm: new FakerModule({
    tag: 'contactform',
    name: 'Contact form',
  }),
  keycloak: new FakerModule({
    tag: 'keycloak_connector_demo',
    name: 'Keycloak OAuth2 connector demo',
    versionCurrent: 'v1.2.0',
    versionOld: 'v1.1.0',
    releaseZip: 'https://github.com/PrestaShop/keycloak_connector_demo/releases/download/%version%/keycloak_connector_demo.zip',
  }),
  pagesnotfound: new FakerModule({
    tag: 'pagesnotfound',
    name: 'Pages not found',
  }),
  psApiResources: new FakerModule({
    tag: 'ps_apiresources',
    name: 'PrestaShop API Resources',
  }),
  psBanner: new FakerModule({
    tag: 'ps_banner',
    name: 'Banner',
  }),
  psCashOnDelivery: new FakerModule({
    tag: 'ps_cashondelivery',
    name: 'Cash on delivery (COD)',
    versionCurrent: 'v2.0.1',
    versionOld: 'v2.0.0',
    releaseZip: 'https://github.com/PrestaShop/ps_cashondelivery/releases/download/%version%/ps_cashondelivery.zip',
  }),
  psCategoryProducts: new FakerModule({
    tag: 'ps_categoryproducts',
    name: 'Products in the same category',
  }),
  psCheckPayment: new FakerModule({
    tag: 'ps_checkpayment',
    name: 'Payments by check',
  }),
  psEmailAlerts: new FakerModule({
    tag: 'ps_emailalerts',
    name: 'Mail alerts',
    versionCurrent: 'v3.0.1',
    releaseZip: 'https://github.com/PrestaShop/ps_emailalerts/releases/download/%version%/ps_emailalerts.zip',
  }),
  psEmailSubscription: new FakerModule({
    tag: 'ps_emailsubscription',
    name: 'Newsletter subscription',
  }),
  psFacetedSearch: new FakerModule({
    tag: 'ps_facetedsearch',
    name: 'Faceted search',
    versionCurrent: 'v4.0.3',
    releaseZip: 'https://github.com/PrestaShop/ps_facetedsearch/releases/download/%version%/ps_facetedsearch.zip',
  }),
  psGdpr: new FakerModule({
    tag: 'psgdpr',
    name: 'Official GDPR compliance',
  }),
  psMainMenu: new FakerModule({
    tag: 'ps_mainmenu',
    name: 'Main menu',
  }),
  psNewProducts: new FakerModule({
    tag: 'ps_newproducts',
    name: 'New products block',
    versionCurrent: 'v1.0.5',
    versionOld: 'v1.0.4',
    releaseZip: 'https://github.com/PrestaShop/ps_newproducts/releases/download/%version%/ps_newproducts.zip',
  }),
  psSupplierList: new FakerModule({
    tag: 'ps_supplierlist',
    name: 'Supplier List',
  }),
  psThemeCusto: new FakerModule({
    tag: 'ps_themecusto',
    name: 'Theme Customization',
    versionCurrent: 'v1.2.5',
    releaseZip: 'https://github.com/PrestaShop/ps_themecusto/releases/download/%version%/ps_themecusto.zip',
  }),
  psWirePayment: new FakerModule({
    tag: 'ps_wirepayment',
    name: 'Wire payment',
  }),
  statsbestcategories: new FakerModule({
    tag: 'statsbestcategories',
    name: 'Best categories',
  }),
  statsbestcustomers: new FakerModule({
    tag: 'statsbestcustomers',
    name: 'Best customers',
  }),
  statsbestmanufacturers: new FakerModule({
    tag: 'statsbestmanufacturers',
    name: 'Best manufacturers',
  }),
  statsbestproducts: new FakerModule({
    tag: 'statsbestproducts',
    name: 'Best-selling products',
  }),
  statsbestsuppliers: new FakerModule({
    tag: 'statsbestsuppliers',
    name: 'Best suppliers',
  }),
  statsbestvouchers: new FakerModule({
    tag: 'statsbestvouchers',
    name: 'Best vouchers',
  }),
  statscarrier: new FakerModule({
    tag: 'statscarrier',
    name: 'Carrier distribution',
  }),
  statscatalog: new FakerModule({
    tag: 'statscatalog',
    name: 'Catalog statistics',
  }),
  statscheckup: new FakerModule({
    tag: 'statscheckup',
    name: 'Catalog evaluation',
  }),
  statsforecast: new FakerModule({
    tag: 'statsforecast',
    name: 'Stats Dashboard',
  }),
  statsnewsletter: new FakerModule({
    tag: 'statsnewsletter',
    name: 'Newsletter',
  }),
  statspersonalinfos: new FakerModule({
    tag: 'statspersonalinfos',
    name: 'Registered customer information',
  }),
  statsproduct: new FakerModule({
    tag: 'statsproduct',
    name: 'Product details',
  }),
  statsregistrations: new FakerModule({
    tag: 'statsregistrations',
    name: 'Customer accounts',
  }),
  statssales: new FakerModule({
    tag: 'statssales',
    name: 'Sales and orders',
  }),
  statssearch: new FakerModule({
    tag: 'statssearch',
    name: 'Shop search',
  }),
  statsstock: new FakerModule({
    tag: 'statsstock',
    name: 'Available quantities',
  }),
  autoupgrade: new FakerModule({
    tag: 'autoupgrade',
    name: '1-Click Upgrade',
  }),
  welcome: new FakerModule({
    tag: 'welcome',
    name: 'Welcome',
  }),
};
