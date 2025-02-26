import type {FoCmsPageInterface} from '@interfaces/FO/cms';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoCmsPageInterface {
  return require('@versions/develop/pages/FO/classic/cms').foCmsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
