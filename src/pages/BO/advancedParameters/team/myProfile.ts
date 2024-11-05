import type {BOMyProfilePageInterface} from '@interfaces/BO/advancedParameters/team/myProfile';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOMyProfilePageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/team/myProfile');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
