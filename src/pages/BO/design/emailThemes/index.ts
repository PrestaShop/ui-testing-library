import {BODesignEmailThemesPageInterface} from '@interfaces/BO/design/emailThemes';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BODesignEmailThemesPageInterface {
  return require('@versions/develop/pages/BO/design/emailThemes');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
