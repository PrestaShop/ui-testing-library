import type {FoModalQuickViewPageInterface} from '@interfaces/FO/modal/quickView';
import testContext from '@utils/test';

const psThemeFO = testContext.getPSThemeFO();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoModalQuickViewPageInterface {
  if (psThemeFO === 'classic') {
    return require('@pages/FO/classic/modal/quickView').default;
  }
  return require('@pages/FO/hummingbird/modal/quickView').default;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
