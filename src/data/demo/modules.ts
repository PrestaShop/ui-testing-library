import FakerModule from '@data/faker/module';

export default {
  blockwishlist: new FakerModule({
    tag: 'blockwishlist',
    name: 'Wishlist',
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
  }),
  psCheckPayment: new FakerModule({
    tag: 'ps_checkpayment',
    name: 'Payments by check',
  }),
  psEmailAlerts: new FakerModule({
    tag: 'ps_emailalerts',
    name: 'Mail alerts',
    releaseZip: 'https://github.com/PrestaShop/ps_emailalerts/releases/download/v2.4.2/ps_emailalerts.zip',
  }),
  psEmailSubscription: new FakerModule({
    tag: 'ps_emailsubscription',
    name: 'Newsletter subscription',
  }),
  psFacetedSearch: new FakerModule({
    tag: 'ps_facetedsearch',
    name: 'Faceted search',
    releaseZip: 'https://github.com/PrestaShop/ps_facetedsearch/releases/download/v3.14.1/ps_facetedsearch.zip',
  }),
  psThemeCusto: new FakerModule({
    tag: 'ps_themecusto',
    name: 'Theme Customization',
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
    releaseZip: 'https://github.com/PrestaShop/keycloak_connector_demo/releases/download/v1.0.4/keycloak_connector_demo.zip',
  }),
};
