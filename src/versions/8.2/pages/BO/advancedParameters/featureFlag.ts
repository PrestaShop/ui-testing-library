import {type BOFeatureFlagInterface} from '@interfaces/BO/advancedParameters/featureFlag';
import {BOFeatureFlagPage} from '@versions/develop/pages/BO/advancedParameters/featureFlag';

/**
 * Feature flag page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOFeatureFlagVersion extends BOFeatureFlagPage implements BOFeatureFlagInterface {
  constructor() {
    super();

    this.pageTitle = `New & Experimental Features • ${global.INSTALL.SHOP_NAME}`;
  }
}

const featureFlagPage = new BOFeatureFlagVersion();
export {featureFlagPage, BOFeatureFlagVersion as FeatureFlagPage};
