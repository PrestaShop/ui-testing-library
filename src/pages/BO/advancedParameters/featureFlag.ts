import {type BOFeatureFlagInterface} from '@interfaces/BO/advancedParameters/featureFlag';
import semver from 'semver';
import testContext from '@utils/test';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOFeatureFlagInterface {
  if (semver.lte(psVersion, '8.3.0')) {
    return require('@versions/8.2.0/pages/BO/advancedParameters/featureFlag').featureFlagPage;
  }
  return require('@versions/develop/pages/BO/advancedParameters/featureFlag').featureFlagPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
