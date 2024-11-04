import type {FoModalQuickViewPageInterface} from '@interfaces/FO/modal/quickView';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoModalQuickViewPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/modal/quickView');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
