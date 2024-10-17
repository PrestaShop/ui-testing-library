import {type BOEmployeeCreatePageInterface} from '@interfaces/BO/advancedParameters/team/employees/create';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOEmployeeCreatePageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/team/employees/create');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();