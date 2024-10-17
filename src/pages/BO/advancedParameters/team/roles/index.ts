import {type BORolesPageInterface} from '@interfaces/BO/advancedParameters/team/roles';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BORolesPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/team/roles');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
