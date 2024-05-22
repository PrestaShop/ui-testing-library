import type {ModuleManagerSelectionPageInterface} from '@interfaces/BO/modules/moduleManager/selection';
import testContext from '@utils/testContext';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): ModuleManagerSelectionPageInterface {
  if (semver.gte(psVersion, '7.5.0')) {
    return require('@versions/mock/pages/BO/modules/moduleManager/selection');
  }
  if (semver.gte(psVersion, '7.4.0')) {
    return require('@versions/1.7.4/pages/BO/modules/moduleManager/selection').selectionPage;
  }
  return require('@versions/1.7.3/pages/BO/modules/moduleManager/selection');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
