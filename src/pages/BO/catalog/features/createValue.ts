import {type BOFeaturesValueCreatePageInterface} from '@interfaces/BO/catalog/features/createValue';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOFeaturesValueCreatePageInterface {
  return require('@versions/develop/pages/BO/catalog/features/createValue');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
