import {type FOMyInformationsPageInterface} from '@interfaces/FO/myAccount/informations';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FOMyInformationsPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/myAccount/informations');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
