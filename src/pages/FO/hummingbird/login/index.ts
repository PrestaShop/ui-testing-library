import type {FoLoginPageInterface} from '@interfaces/FO/login';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoLoginPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/login');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
