import {type BOFeatureFlagInterface} from '@interfaces/BO/advancedParameters/featureFlag';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOFeatureFlagInterface {
  return require('@versions/develop/pages/BO/advancedParameters/featureFlag');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
