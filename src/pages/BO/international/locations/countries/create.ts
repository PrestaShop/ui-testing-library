import {type BOCountriesCreatePageInterface} from '@interfaces/BO/international/locations/countries/create';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCountriesCreatePageInterface {
  if (semver.lt(psVersion, '9.2.0')) {
    return require('@versions/9.1/pages/BO/international/locations/countries/create').boCountriesCreatePage;
  }
  return require('@versions/develop/pages/BO/international/locations/countries/create').boCountriesCreatePage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
