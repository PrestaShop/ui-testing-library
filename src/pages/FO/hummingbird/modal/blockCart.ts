import type {FoModalBlockCartPageInterface} from '@interfaces/FO/modal/blockCart';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoModalBlockCartPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/modal/blockCart');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
