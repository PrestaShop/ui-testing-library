import {type BOStatesCreatePageInterface} from '@interfaces/BO/international/locations/states/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOStatesCreatePageInterface {
  return require('@versions/develop/pages/BO/international/locations/states/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
