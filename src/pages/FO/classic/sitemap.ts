import type {FoSitemapPageInterface} from '@interfaces/FO/sitemap';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoSitemapPageInterface {
  return require('@versions/develop/pages/FO/classic/sitemap').foSitemapPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
