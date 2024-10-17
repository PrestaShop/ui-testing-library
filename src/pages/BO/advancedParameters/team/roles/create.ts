import {type BORoleCreatePageInterface} from '@interfaces/BO/advancedParameters/team/roles/create';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BORoleCreatePageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/team/roles/create');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();