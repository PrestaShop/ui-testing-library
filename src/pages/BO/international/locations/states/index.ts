import {type BOStatesPageInterface} from '@interfaces/BO/international/locations/states';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOStatesPageInterface {
  return require('@versions/develop/pages/BO/international/locations/states');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
