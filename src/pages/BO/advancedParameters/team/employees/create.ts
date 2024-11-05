import {type BOEmployeesCreatePageInterface} from '@interfaces/BO/advancedParameters/team/employees/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOEmployeesCreatePageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/team/employees/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
