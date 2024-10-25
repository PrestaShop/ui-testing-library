import FakerModule from '@data/faker/module';

export default {
  blockwishlist: new FakerModule({
    tag: 'blockwishlist',
    name: 'Wishlist',
    versionCurrent: 'v3.0.2',
    releaseZip: 'https://github.com/PrestaShop/blockwishlist/releases/download/%version%/blockwishlist.zip',
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
    versionCurrent: 'v3.0.0',
    releaseZip: 'https://github.com/PrestaShop/ps_emailalerts/releases/download/%version%/ps_emailalerts.zip',
  }),
  psEmailSubscription: new FakerModule({
    tag: 'ps_emailsubscription',
    name: 'Newsletter subscription',
  }),
  psFacetedSearch: new FakerModule({
    tag: 'ps_facetedsearch',
    name: 'Faceted search',
    versionCurrent: 'v3.16.1',
    releaseZip: 'https://github.com/PrestaShop/ps_facetedsearch/releases/download/%version%/ps_facetedsearch.zip',
  }),
  psGdpr: new FakerModule({
    tag: 'psgdpr',
    name: 'Official GDPR compliance',
  }),
  psNewProducts: new FakerModule({
    tag: 'ps_newproducts',
    name: 'New products block',
    versionCurrent: 'v1.0.4',
    versionOld: 'v1.0.3',
    releaseZip: 'https://github.com/PrestaShop/ps_newproducts/releases/download/%version%/ps_newproducts.zip',
  }),
  psSupplierList: new FakerModule({
    tag: 'ps_supplierlist',
    name: 'Supplier List',
  }),
  psThemeCusto: new FakerModule({
    tag: 'ps_themecusto',
    name: 'Theme Customization',
    versionCurrent: 'v1.2.4',
    releaseZip: 'https://github.com/PrestaShop/ps_themecusto/releases/download/%version%/ps_themecusto.zip',
  }),
  psWirePayment: new FakerModule({
    tag: 'ps_wirepayment',
    name: 'Wire payment',
  }),
  contactForm: new FakerModule({
    tag: 'contactform',
    name: 'Contact form',
  }),
  themeCustomization: new FakerModule({
    tag: 'ps_themecusto',
    name: 'Theme Customization',
  }),
  availableQuantities: new FakerModule({
    tag: 'statsstock',
    name: 'Available quantities',
  }),
  mainMenu: new FakerModule({
    tag: 'ps_mainmenu',
    name: 'Main menu',
  }),
  keycloak: new FakerModule({
    tag: 'keycloak_connector_demo',
    name: 'Keycloak OAuth2 connector demo',
    versionCurrent: 'v1.1.0',
    releaseZip: 'https://github.com/PrestaShop/keycloak_connector_demo/releases/download/%version%/keycloak_connector_demo.zip',
  }),
};
