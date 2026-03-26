import type {FoMyAccountPageInterface} from '@interfaces/FO/myAccount';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoMyAccountPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/myAccount');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
