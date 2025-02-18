import type {FoMyVouchersPageInterface} from '@interfaces/FO/myAccount/vouchers';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoMyVouchersPageInterface {
  return require('@versions/develop/pages/FO/classic/myAccount/vouchers').foMyVouchersPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
