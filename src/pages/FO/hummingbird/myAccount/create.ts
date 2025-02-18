import type {FoCreateAccountPageInterface} from '@interfaces/FO/myAccount/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoCreateAccountPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
