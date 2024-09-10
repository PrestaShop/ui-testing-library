import {type ModulePsWirepaymentMainPageInterface} from '@interfaces/BO/modules/ps_wirepayment';

/* eslint-disable global-require */
function requirePage(): ModulePsWirepaymentMainPageInterface {
  return require('@versions/develop/pages/BO/modules/ps_wirepayment');
}
/* eslint-enable global-require */

export default requirePage();
