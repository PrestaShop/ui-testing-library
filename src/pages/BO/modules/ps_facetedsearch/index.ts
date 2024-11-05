import type {ModulePsFacetedsearchMainPageInterface} from '@interfaces/BO/modules/ps_facetedsearch/index';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModulePsFacetedsearchMainPageInterface {
  return require('@versions/develop/pages/BO/modules/ps_facetedsearch/index');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
