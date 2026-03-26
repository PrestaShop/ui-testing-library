import type {FOMyReturnDetailsPageInterface} from '@interfaces/FO/myAccount/returnDetails';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FOMyReturnDetailsPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/myAccount/returnDetails');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
