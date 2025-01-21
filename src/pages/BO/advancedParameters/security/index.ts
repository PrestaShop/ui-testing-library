import {type BOSecurityPageInterface} from '@interfaces/BO/advancedParameters/security';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOSecurityPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/security');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
