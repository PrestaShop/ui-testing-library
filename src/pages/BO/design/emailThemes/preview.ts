import {BODesignEmailThemesPreviewPageInterface} from '@interfaces/BO/design/emailThemes/preview';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BODesignEmailThemesPreviewPageInterface {
  return require('@versions/develop/pages/BO/design/emailThemes/preview');
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
