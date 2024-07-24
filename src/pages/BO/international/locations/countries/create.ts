import {type BOCountriesCreatePageInterface} from '@interfaces/BO/international/locations/countries/create';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOCountriesCreatePageInterface {
  return require('@versions/develop/pages/BO/international/locations/countries/create');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
