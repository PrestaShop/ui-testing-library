import {type BOCountriesPageInterface} from '@interfaces/BO/international/locations/countries';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOCountriesPageInterface {
  return require('@versions/develop/pages/BO/international/locations/countries');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
