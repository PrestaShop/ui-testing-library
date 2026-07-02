import {type BOCountriesPageInterface} from '@interfaces/BO/international/locations/countries';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCountriesPageInterface {
  if (semver.lt(psVersion, '9.2.0')) {
    return require('@versions/9.1/pages/BO/international/locations/countries').boCountriesPage;
  }
  return require('@versions/develop/pages/BO/international/locations/countries').boCountriesPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
