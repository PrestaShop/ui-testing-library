import type {FoCategoryPageInterface} from '@interfaces/FO/category';
import testContext from '@utils/test';

const psThemeFO = testContext.getPSThemeFO();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoCategoryPageInterface {
  if (psThemeFO === 'classic') {
    return require('@pages/FO/classic/category').default;
  }
  return require('@pages/FO/hummingbird/category').default;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
