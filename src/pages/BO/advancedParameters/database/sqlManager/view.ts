import type {BOSQLManagerViewPageInterface} from '@interfaces/BO/advancedParameters/database/sqlManager/view';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOSQLManagerViewPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/database/sqlManager/view');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
