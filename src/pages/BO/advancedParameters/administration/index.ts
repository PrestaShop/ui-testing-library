import type {BOAdministrationPageInterface} from '@interfaces/BO/advancedParameters/administration';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOAdministrationPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/administration');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
