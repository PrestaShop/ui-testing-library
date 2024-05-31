import type {FoModalQuickViewPageInterface} from '@interfaces/FO/modal/quickView';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoModalQuickViewPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/FO/classic/modal/quickView').quickViewModal;
  }
  return require('@versions/develop/pages/FO/classic/modal/quickView').quickViewModal;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
