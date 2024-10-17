import {type BOEmployeesPageInterface} from '@interfaces/BO/advancedParameters/team/employees';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOEmployeesPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/team/employees');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();