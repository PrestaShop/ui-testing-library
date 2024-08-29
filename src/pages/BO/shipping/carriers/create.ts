import type {BOCarriersCreatePageInterface} from '@interfaces/BO/shipping/carriers/create';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOCarriersCreatePageInterface {
  return require('@versions/develop/pages/BO/shipping/carriers/create');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
