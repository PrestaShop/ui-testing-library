import {type FOMyGDPRPersonalDataPageInterface} from '@interfaces/FO/myAccount/gdprPersonalData';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FOMyGDPRPersonalDataPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/myAccount/gdprPersonalData');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
