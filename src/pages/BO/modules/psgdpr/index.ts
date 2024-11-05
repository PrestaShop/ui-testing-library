import {type ModulePsGdprBoMainPageInterface} from '@interfaces/BO/modules/psgdpr/index';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModulePsGdprBoMainPageInterface {
  return require('@versions/develop/pages/BO/modules/psgdpr/index');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
