import type {BOApiClientsCreatePageInterface} from '@interfaces/BO/advancedParameters/apiclients/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOApiClientsCreatePageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/apiclients/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
