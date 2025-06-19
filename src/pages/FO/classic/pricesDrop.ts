import type {FOPricesDropPageInterface} from '@interfaces/FO/pricesDrop';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FOPricesDropPageInterface {
  return require('@versions/develop/pages/FO/classic/pricesDrop').foPricesDropPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
