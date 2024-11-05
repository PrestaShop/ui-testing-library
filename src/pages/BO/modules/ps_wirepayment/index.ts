import {type ModulePsWirepaymentMainPageInterface} from '@interfaces/BO/modules/ps_wirepayment';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModulePsWirepaymentMainPageInterface {
  return require('@versions/develop/pages/BO/modules/ps_wirepayment');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
