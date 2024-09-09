import {type ModulePsGdprBoMainPageInterface} from '@interfaces/BO/modules/psgdpr/index';

/* eslint-disable global-require */
function requirePage(): ModulePsGdprBoMainPageInterface {
  return require('@versions/develop/pages/BO/modules/psgdpr/index');
}
/* eslint-enable global-require */

export default requirePage();
