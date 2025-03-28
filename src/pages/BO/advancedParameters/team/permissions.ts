import {type BOPermissionsPageInterface} from '@interfaces/BO/advancedParameters/team/permissions';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOPermissionsPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/team/permissions');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
