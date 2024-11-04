import type {BOSQLManagerPageInterface} from '@interfaces/BO/advancedParameters/database/sqlManager';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOSQLManagerPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/database/sqlManager');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
