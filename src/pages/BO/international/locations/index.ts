import {type BOZonesPageInterface} from '@interfaces/BO/international/locations';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOZonesPageInterface {
  return require('@versions/develop/pages/BO/international/locations');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
