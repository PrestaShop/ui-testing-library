import type {FoModalQuickViewPageInterface} from '@interfaces/FO/modal/quickView';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoModalQuickViewPageInterface {
  return require('@versions/develop/pages/FO/classic/modal/quickView').quickViewModal;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
