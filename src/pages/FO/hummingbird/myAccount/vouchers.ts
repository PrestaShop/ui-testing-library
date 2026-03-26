import type {FoMyVouchersPageInterface} from '@interfaces/FO/myAccount/vouchers';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoMyVouchersPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/myAccount/vouchers');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
