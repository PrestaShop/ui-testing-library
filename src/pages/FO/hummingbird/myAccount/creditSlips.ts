import {type FOMyCreditSlipsPageInterface} from '@interfaces/FO/myAccount/creditSlips';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FOMyCreditSlipsPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/myAccount/creditSlips');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
