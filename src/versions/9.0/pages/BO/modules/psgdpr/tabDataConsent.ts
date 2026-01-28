import {type ModulePsGdprBoTabDataConsentPageInterface} from '@interfaces/BO/modules/psgdpr/tabDataConsent';
import {
  ModulePsGdprBoTabDataConsentPage as ModulePsGdprBoTabDataConsentPageVersion,
} from '@versions/develop/pages/BO/modules/psgdpr/tabDataConsent';

/**
 * Module configuration page for module : psgdpr, contains selectors and functions for the page
 * @class
 * @extends ModuleConfiguration
 */
class ModulePsGdprBoTabDataConsentPage extends ModulePsGdprBoTabDataConsentPageVersion
  implements ModulePsGdprBoTabDataConsentPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super();

    this.nthModuleContactForm = 2;
    this.nthModuleMailAlerts = 3;
    this.nthModuleNewsletterSubscription = 0;
    this.nthModuleProductComments = 1;
  }
}

const modulePsGdprBoTabDataConsentPage = new ModulePsGdprBoTabDataConsentPage();
export {modulePsGdprBoTabDataConsentPage, ModulePsGdprBoTabDataConsentPage};
