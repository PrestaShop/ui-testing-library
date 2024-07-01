import type {FoLoginPageInterface} from '@interfaces/FO/login';

/* eslint-disable global-require */
function requirePage(): FoLoginPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/login');
}
/* eslint-enable global-require */

export default requirePage();
