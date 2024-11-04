import type {ModulePsEmailSubscriptionMainPageInterface} from '@interfaces/BO/modules/ps_emailsubscription/index';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModulePsEmailSubscriptionMainPageInterface {
  return require('@versions/develop/pages/BO/modules/ps_emailsubscription/index');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
