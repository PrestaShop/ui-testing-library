import type {BOApiClientsPageInterface} from '@interfaces/BO/advancedParameters/apiclients';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOApiClientsPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/apiclients');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
