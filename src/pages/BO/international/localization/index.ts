import {type BOLocalizationPageInterface} from '@interfaces/BO/international/localization';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOLocalizationPageInterface {
  if (semver.lt(psVersion, '7.7.0')) {
    return require('@versions/1.7.6/pages/BO/international/localization').boLocalizationPage;
  }
  return require('@versions/develop/pages/BO/international/localization').boLocalizationPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
