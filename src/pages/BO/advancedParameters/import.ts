import {type BOImportPageInterface} from '@interfaces/BO/advancedParameters/import';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOImportPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/import');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
