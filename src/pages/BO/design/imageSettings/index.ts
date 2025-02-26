import {BOImageSettingsPageInterface} from '@interfaces/BO/design/imageSettings';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOImageSettingsPageInterface {
  return require('@versions/develop/pages/BO/design/imageSettings');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
