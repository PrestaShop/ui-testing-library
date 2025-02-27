import type {FoStoresPageInterface} from '@interfaces/FO/stores';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoStoresPageInterface {
  return require('@versions/develop/pages/FO/classic/stores').foStoresPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
