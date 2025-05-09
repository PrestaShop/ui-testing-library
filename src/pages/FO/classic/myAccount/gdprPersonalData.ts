import {type FOMyGDPRPersonalDataPageInterface} from '@interfaces/FO/myAccount/gdprPersonalData';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FOMyGDPRPersonalDataPageInterface {
  return require('@versions/develop/pages/FO/classic/myAccount/gdprPersonalData').foMyGDPRPersonalDataPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
