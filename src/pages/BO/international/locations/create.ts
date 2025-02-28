import {type BOZonesCreatePageInterface} from '@interfaces/BO/international/locations/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOZonesCreatePageInterface {
  return require('@versions/develop/pages/BO/international/locations/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
