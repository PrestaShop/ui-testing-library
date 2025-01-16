import type {BOAttributesCreatePageInterface} from '@interfaces/BO/catalog/attributes/createAttribute';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOAttributesCreatePageInterface {
  return require('@versions/develop/pages/BO/catalog/attributes/createAttribute');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
