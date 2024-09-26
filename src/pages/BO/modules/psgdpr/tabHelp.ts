import {type ModulePsGdprBoTabHelpPageInterface} from '@interfaces/BO/modules/psgdpr/tabHelp';

/* eslint-disable global-require */
function requirePage(): ModulePsGdprBoTabHelpPageInterface {
  return require('@versions/develop/pages/BO/modules/psgdpr/tabHelp');
}
/* eslint-enable global-require */

export default requirePage();
