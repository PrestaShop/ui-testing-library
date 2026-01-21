import {type ModulePsGdprBoTabDataConsentPageInterface} from '@interfaces/BO/modules/psgdpr/tabDataConsent';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModulePsGdprBoTabDataConsentPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/BO/modules/psgdpr/tabDataConsent').modulePsGdprBoTabDataConsentPage;
  }
  return require('@versions/develop/pages/BO/modules/psgdpr/tabDataConsent').modulePsGdprBoTabDataConsentPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
