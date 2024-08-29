import type {BOCarriersPageInterface} from '@interfaces/BO/shipping/carriers';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOCarriersPageInterface {
  return require('@versions/develop/pages/BO/shipping/carriers');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
