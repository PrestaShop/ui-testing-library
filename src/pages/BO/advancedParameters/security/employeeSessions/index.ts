import type {BOEmployeeSessionsPageInterface} from '@interfaces/BO/advancedParameters/security/employeeSessions/index';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOEmployeeSessionsPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/security/employeeSessions/index');
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
