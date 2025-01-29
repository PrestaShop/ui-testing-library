import {type BOFeaturesViewPageInterface} from '@interfaces/BO/catalog/features/view';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOFeaturesViewPageInterface {
  return require('@versions/develop/pages/BO/catalog/features/view');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
