import type {ModulePsCheckPaymentMainPageInterface} from '@interfaces/BO/modules/ps_checkpayment';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModulePsCheckPaymentMainPageInterface {
  return require('@versions/develop/pages/BO/modules/ps_checkpayment');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
