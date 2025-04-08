import {type FOMyCreditSlipsPageInterface} from '@interfaces/FO/myAccount/creditSlips';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FOMyCreditSlipsPageInterface {
  return require('@versions/develop/pages/FO/classic/myAccount/creditSlips').foMyCreditSlipsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
