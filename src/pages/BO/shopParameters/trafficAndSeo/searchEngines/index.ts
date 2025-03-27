import {type BOSearchEnginesPageInterface} from '@interfaces/BO/shopParameters/trafficAndSeo/searchEngines';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOSearchEnginesPageInterface {
  return require('@versions/develop/pages/BO/shopParameters/trafficAndSeo/searchEngines');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
