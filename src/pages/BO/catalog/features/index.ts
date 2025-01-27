import {type BOFeaturesPageInterface} from '@interfaces/BO/catalog/features';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOFeaturesPageInterface {
  return require('@versions/develop/pages/BO/catalog/features');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
