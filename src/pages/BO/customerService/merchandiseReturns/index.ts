import {type BOMerchandiseReturnsPageInterface} from '@interfaces/BO/customerService/merchandiseReturns';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOMerchandiseReturnsPageInterface {
  return require('@versions/develop/pages/BO/customerService/merchandiseReturns');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
