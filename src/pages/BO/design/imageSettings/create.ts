import {BOImageSettingsCreatePageInterface} from '@interfaces/BO/design/imageSettings/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOImageSettingsCreatePageInterface {
  return require('@versions/develop/pages/BO/design/imageSettings/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
