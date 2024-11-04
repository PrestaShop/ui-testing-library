import type {BOSQLManagerCreatePageInterface} from '@interfaces/BO/advancedParameters/database/sqlManager/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOSQLManagerCreatePageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/database/sqlManager/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
