import {type BOSeoUrlsPageInterface} from '@interfaces/BO/shopParameters/trafficAndSeo/seoAndUrls';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOSeoUrlsPageInterface {
  return require('@versions/develop/pages/BO/shopParameters/trafficAndSeo/seoAndUrls');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
