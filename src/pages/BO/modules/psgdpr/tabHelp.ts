import {type ModulePsGdprBoTabHelpPageInterface} from '@interfaces/BO/modules/psgdpr/tabHelp';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModulePsGdprBoTabHelpPageInterface {
  return require('@versions/develop/pages/BO/modules/psgdpr/tabHelp');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
