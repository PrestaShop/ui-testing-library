import {type BOFeaturesCreatePageInterface} from '@interfaces/BO/catalog/features/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOFeaturesCreatePageInterface {
  return require('@versions/develop/pages/BO/catalog/features/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
